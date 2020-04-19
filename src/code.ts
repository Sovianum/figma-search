import {Model} from './domain/model'
import {MessageType} from './message/messages'
import { UserSettings } from './settings/settings'

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

    case MessageType.UserSettingsUpdateStart:
      const userSettings = JSON.parse(msg.userSettingsStr) as UserSettings
      await model.onUserSettingsUpdate(userSettings)
      break

    case MessageType.UserSettingsLoadStart:
      await model.onUserSettingsLoad()
      break
  }
}