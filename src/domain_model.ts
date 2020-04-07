import {getNodePage} from './util'
import {IndexStorage} from './search'
import {SearchResponse, newSearchResponseMessage} from './messages'


export class Model {
    storage: IndexStorage
    rebuildIndexOnSearch: boolean

    constructor() {
        this.rebuildIndexOnSearch = true
        this.storage = new IndexStorage()
    }

    async onNavToNodeRequest(id: string) {
        const node = figma.getNodeById(id) as TextNode
        if (!node) {
            throw new Error("node not found; update undex")
        }
        
        const page = getNodePage(node)
        
        if (page !== figma.currentPage) {
            figma.currentPage = page
        }
        
        figma.currentPage.selection = [node]
        figma.viewport.scrollAndZoomIntoView([node])
    }

    async onSearchRequest(text: string) {
        const documentID = this.getCurrentDocumentID()

        if (this.rebuildIndexOnSearch) {
            await this.storage.reindex(documentID, figma.root)
        }

        const index = await this.storage.getIndex(documentID)
        if (!index) {
            throw new Error("send here message to reindex document")
        }
        
        const week = 1000 * 3600 * 24 * 7
        if (Date.now() - index.updated > week) {
            throw new Error("send here message about expired index")
        }

        const nodeIDs = index.search(text, 10)
        const nodes = nodeIDs.map(id => figma.getNodeById(id)) as Array<TextNode>
      
        const searchResults = nodes.map(node => new SearchResponse(node.id, node.characters))
        figma.ui.postMessage(newSearchResponseMessage(searchResults))
    }

    getCurrentDocumentID(): string {
        return figma.currentPage.parent.id
    }
}