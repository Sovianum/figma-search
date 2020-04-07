import {Model} from './domain_model'
import {MessageType} from './messages'

figma.showUI(__html__)

const model = new Model()

figma.ui.onmessage = async function(msg) {
  switch (msg.type) {
    case MessageType.SearchRequest:
      await model.onSearchRequest(msg.text)
      break

    case MessageType.NavigateToNode:
      await model.onNavToNodeRequest(msg.id)
      break
  }
}