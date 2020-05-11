import {SearchModel} from './ts/domain/search/model'
import {TagsModel} from './ts/domain/tags/model'
import {MessageType, PluginMessage} from './ts/message/messages'
import { UserSettings } from './ts/settings/settings'
import { Tag } from './ts/domain/tags/tags'

figma.showUI(__html__)

const searchModel = new SearchModel()
const tagsModel = new TagsModel()

figma.on("selectionchange", () => {
  tagsModel.updateTagsView()
})

figma.ui.onmessage = async function(msg) {
  console.log("message got by domain", msg)

  try {
    switch (msg.type) {
      case MessageType.UIInited:
        tagsModel.updateTagsView()

      case MessageType.SearchRequest:
        try {
          await searchModel.onSearchRequest(msg.text, msg.tags, msg.indexOnSearch)
          break
        } catch (e) {
          if (e instanceof PluginMessage) {
            figma.ui.postMessage(e)
          } else {
            throw e
          }
        }
  
      case MessageType.NavigateToNode:
        await searchModel.onNavToNodeRequest(msg.id)
        break
  
      case MessageType.ReindexStart:
        await searchModel.onReindex()
        break
  
      case MessageType.IndexLoadStart:
        await searchModel.onIndexLoad()
        break
  
      case MessageType.UserSettingsUpdateStart:
        const userSettings = JSON.parse(msg.userSettingsStr) as UserSettings
        await searchModel.onUserSettingsUpdate(userSettings)
        break
  
      case MessageType.UserSettingsLoadStart:
        await searchModel.onUserSettingsLoad()
        break
  
      case MessageType.AddTagToSelection:
        tagsModel.onSetNodeTags([msg.tag])
        break
  
      case MessageType.RemoveTagFromSelection:
        tagsModel.onRemoveNodeTags([msg.tag])
        break

      case MessageType.CreateTag:
        tagsModel.onCreateTag(msg.tag)
        break

      case MessageType.RemoveTag:
        tagsModel.onRemoveTag(msg.tag)
        break
    }
  } catch (e) {
    console.log(e)
    throw e
  }
}