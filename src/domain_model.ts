import {getNodePage} from './util'
import {IndexStorage} from './search'
import {SearchResponse, newSearchResponseMessage, newSearchReindexFinishMessage} from './messages'


export class Model {
    storage: IndexStorage

    constructor() {
        this.storage = new IndexStorage()
    }

    async onNavToNodeRequest(id: string) {
        const node = figma.getNodeById(id) as TextNode
        if (!node) {
            this.logAndThrow(new Error("node not found; update undex"))
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
            this.logAndThrow(new Error("send here message to reindex document"))
        }
        
        const week = 1000 * 3600 * 24 * 7
        if (Date.now() - index.updated > week) {
            this.logAndThrow(new Error("send here message about expired index"))
        }

        const nodeIDs = index.search(text, 10)
        const nodes = nodeIDs.map(id => figma.getNodeById(id)) as Array<TextNode>
      
        const searchResults = nodes.map(node => new SearchResponse(node.id, node.characters))
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

    logAndThrow(err) {
        console.log(err)
        throw err
    }
}