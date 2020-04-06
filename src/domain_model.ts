import {getNodePage} from './util'
import {buildIndex, SearchIndex} from './search_index'
import {MessageType, SearchResponse, newSearchResponseMessage} from './messages'


export class Model {
    index: SearchIndex
    rebuildIndexOnSearch: boolean

    constructor() {
        this.rebuildIndexOnSearch = true
    }

    onNavToNodeRequest(id: string) {
        const node = figma.getNodeById(id) as TextNode
        if (!node) {
            console.log("node not found; update undex")
            // TODO add another message
            return
        }
        
        const page = getNodePage(node)
        
        if (page !== figma.currentPage) {
            figma.currentPage = page
        }
        
        figma.currentPage.selection = [node]
        figma.viewport.scrollAndZoomIntoView([node])
    }

    onSearchRequest(text: string) {
        if (this.rebuildIndexOnSearch) {
            this.index = buildIndex(figma.root)
        }

        const nodeIDs = this.index.search(text, 10)
        const nodes = nodeIDs.map(id => figma.getNodeById(id)) as Array<TextNode>
      
        const searchResults = nodes.map(node => new SearchResponse(node.id, node.characters))
        figma.ui.postMessage(newSearchResponseMessage(searchResults))
      }
}