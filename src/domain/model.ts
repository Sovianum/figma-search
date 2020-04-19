import {getNodePage, textFromNode} from './util'
import {IndexStorage} from './search'
import {SearchResponse, newSearchResponseMessage, newNodeNotFound, newTypePluginMessage, MessageType, newUserSettingsUpdateFinish} from '../message/messages'
import { SettingsStorage } from './user_settings'
import { UserSettings } from '../settings/settings'


export class Model {
    indexStorage: IndexStorage
    settingsStorage: SettingsStorage

    constructor() {
        this.indexStorage = new IndexStorage()
        this.settingsStorage = new SettingsStorage()
    }

    async onNavToNodeRequest(id: string) {
        const node = figma.getNodeById(id) as TextNode
        if (!node) {
            figma.ui.postMessage(newNodeNotFound(id))
            return
        }
        
        const page = getNodePage(node)
        
        if (page !== figma.currentPage) {
            figma.currentPage = page
        }
        
        figma.currentPage.selection = [node]
        figma.viewport.scrollAndZoomIntoView([node])
    }

    async onSearchRequest(text: string, indexOnSearch: boolean) {
        const documentID = this.getCurrentDocumentID()

        if (indexOnSearch) {
            await this.indexStorage.reindex(documentID, figma.root)
        }

        const index = await this.indexStorage.getIndex(documentID)
        if (!index) {
            figma.ui.postMessage(newTypePluginMessage(MessageType.NoSearchIndex))
            return
        }
        
        const nodeDocuments = await this.findNodeDocuments(index, text.toLowerCase())

        const nodes = nodeDocuments.map(doc => figma.getNodeById(doc.id)).filter(node => node) as Array<TextNode>
        const searchResults = nodes.map(node => new SearchResponse(node.id, textFromNode(node)))
        figma.ui.postMessage(newSearchResponseMessage(searchResults))
    }

    async findNodeDocuments(index, text: string) {
        const selector = {
            field: [
                "text"
            ]
        }

        const allDocs = index.search(text.toLowerCase(), selector)

        const settings = await this.settingsStorage.getSettings(this.getCurrentDocumentID())
        if (!settings) {
            return allDocs
        }

        const searchableNodes = settings.searchSettings.searchableNodes
        const searchableTypes = new Set<string>()
        for (let key in searchableNodes) {
            if (searchableNodes[key]) {
                searchableTypes.add(key)
            }
        }

        if (searchableTypes.size === 0) {
            return allDocs
        }

        return allDocs.filter(doc => searchableTypes.has(doc.type))
    }

    async onReindex() {
        const documentID = this.getCurrentDocumentID()
        await this.indexStorage.reindex(documentID, figma.root)
        figma.ui.postMessage(newTypePluginMessage(MessageType.ReindexFinish))
    }

    async onIndexLoad() {
        await this.indexStorage.getIndex(this.getCurrentDocumentID())
        figma.ui.postMessage(newTypePluginMessage(MessageType.IndexLoadFinish))
    }

    async onUserSettingsUpdate(userSettings: UserSettings) {
        await this.settingsStorage.setSettings(this.getCurrentDocumentID(), userSettings)
        figma.ui.postMessage(newUserSettingsUpdateFinish(userSettings))
    }

    getCurrentDocumentID(): string {
        return figma.currentPage.parent.id
    }
}