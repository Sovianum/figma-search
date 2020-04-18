import {Model} from './domain/model'
import {MessageType} from './message/messages'

figma.showUI(__html__)

const model = new Model()

figma.ui.onmessage = async function(msg) {
  switch (msg.type) {
    case MessageType.SearchRequest:
      await model.onSearchRequest(msg.text, msg.indexOnSearch)
      break

    case MessageType.NavigateToNode:
      await model.onNavToNodeRequest(msg.id)
      break

    case MessageType.ReindexStart:
      await model.onReindex()
      break

    case MessageType.IndexLoadStart:
      await model.onIndexLoad()
      break
  }
}