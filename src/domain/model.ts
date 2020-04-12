import {getNodePage, textFromNode} from './util'
import {IndexStorage} from './search'
import {SearchResponse, newSearchResponseMessage, newSearchReindexFinishMessage, newNoIndexMessage, newNodeNotFound} from '../message/messages'


export class Model {
    storage: IndexStorage

    constructor() {
        this.storage = new IndexStorage()
    }

    async onNavToNodeRequest(id: string) {
        console.log(id)
        const node = figma.getNodeById(id) as TextNode
        console.log(node)
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
            await this.storage.reindex(documentID, figma.root)
        }

        const index = await this.storage.getIndex(documentID)
        if (!index) {
            console.log("here")
            figma.ui.postMessage(newNoIndexMessage())
            return
        }

        const nodeIDs = index.search(text.toLowerCase(), 100)
        const nodes = nodeIDs.map(id => figma.getNodeById(id)) as Array<TextNode>
      
        const searchResults = nodes.map(node => new SearchResponse(node.id, textFromNode(node)))
        figma.ui.postMessage(newSearchResponseMessage(searchResults))
    }

    async onReindex() {
        const documentID = this.getCurrentDocumentID()
        await this.storage.reindex(documentID, figma.root)

        figma.ui.postMessage(newSearchReindexFinishMessage())
    }

    getCurrentDocumentID(): string {
        return figma.currentPage.parent.id
    }
}