import {MessageType, SearchResponse, newSearchResponseMessage} from './messages'
import {buildIndex} from './search_index'
import {getNodePage} from './util'

figma.showUI(__html__)

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case MessageType.SearchRequest:
      onSearchRequest(msg.text)
      break

    case MessageType.NavigateToNode:
      onNavToNodeRequest(msg.id)
      break
  }
}

function onNavToNodeRequest(id: string) {
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

function onSearchRequest(text: string) {
  const searchIndex = buildIndex(figma.root)
    const nodeIDs = searchIndex.search(text, 10)
    const nodes = nodeIDs.map(id => figma.getNodeById(id)) as Array<TextNode>

    const searchResults = nodes.map(node => new SearchResponse(node.id, node.characters))
    figma.ui.postMessage(newSearchResponseMessage(searchResults))
}