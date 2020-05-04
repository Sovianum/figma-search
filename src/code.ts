import {SearchModel} from './ts/domain/search/model'
import {TagsModel} from './ts/domain/tags/model'
import {MessageType} from './ts/message/messages'
import { UserSettings } from './ts/settings/settings'
import { Tag } from './ts/domain/tags/tags'

figma.showUI(__html__)

const searchModel = new SearchModel()
const tagsModel = new TagsModel()

// TODO send tagsModel.onSelectionChange() on init
figma.on("selectionchange", () => {
  tagsModel.updateTagsView()
})

figma.ui.onmessage = async function(msg) {
  console.log(msg)

  switch (msg.type) {
    case MessageType.SearchRequest:
      await searchModel.onSearchRequest(msg.text, msg.indexOnSearch)
      break

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
  }
}