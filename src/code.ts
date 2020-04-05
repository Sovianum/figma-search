import {Model} from './domain_model'
import {MessageType} from './messages'

figma.showUI(__html__)

const model = new Model()

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case MessageType.SearchRequest:
      model.onSearchRequest(msg.text)
      break

    case MessageType.NavigateToNode:
      model.onNavToNodeRequest(msg.id)
      break
  }
}