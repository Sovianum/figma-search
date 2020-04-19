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
        
        const nodeDocuments = index.search(text.toLowerCase(), {
            field: [
                "text"
            ],
            limit: 100
        })

        const nodes = nodeDocuments.map(doc => figma.getNodeById(doc.id)).filter(node => node) as Array<TextNode>
        const searchResults = nodes.map(node => new SearchResponse(node.id, textFromNode(node)))
        figma.ui.postMessage(newSearchResponseMessage(searchResults))
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