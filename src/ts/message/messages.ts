import { UserSettings } from "../settings/settings"
import {Tag} from '../domain/tags/tags'

export enum MessageType {
    UIInited = "uiInited",
    SearchRequest = "search_request",
    SearchResponse = "search_response",
    ReindexStart = "reindexStart",
    ReindexFinish = "reindexFinish",
    IndexLoadStart = "indexLoadStart",
    IndexLoadFinish = "indexLoadFinish",
    NavigateToNode = "navigateToNode",
    NoSearchIndex = "noSearchIndex",
    NodeNotFound = "nodeNotFound",
    UserSettingsUpdateStart = "userSettingsUpdateStart",
    UserSettingsUpdateFinish = "userSettingsUpdateFinish",
    UserSettingsLoadStart = "userSettingsLoadStart",
    UpdateTags = "updateSelectionTags",
    AddTagToSelection = "addTagToSelection",
    RemoveTagFromSelection = "removeTagFromSelection",
    CreateTag = "createTag",
    RemoveTag = "removeTag"
}

export interface SelectionTagsState {
    selectionTags: Array<Tag>
    availableTags: Array<Tag>
}
export function newUpdateTagState(selectionTags: Array<Tag>, availableTags: Array<Tag>): PluginMessage {
    return new PluginMessage(MessageType.UpdateTags, {
        selectionTags,
        availableTags
    })
}

export function newSearchResponseMessage(responses: Array<SearchResponse>): PluginMessage {
    return new PluginMessage(MessageType.SearchResponse, responses)
}

export function newNodeNotFound(id: string): PluginMessage {
    return new PluginMessage(MessageType.NodeNotFound, id)
}

export function newTypePluginMessage(type: MessageType): PluginMessage {
    return new PluginMessage(type, null)
}

export function newUserSettingsUpdateFinish(settings: UserSettings): PluginMessage {
    return new PluginMessage(MessageType.UserSettingsUpdateFinish, JSON.stringify(settings))
}

export class PluginMessage {
    constructor(type: MessageType, data: any) {
        this.type = type
        this.data = data
    }

    type: MessageType
    data: any
}

export class SearchResponse {
    constructor(id: string, text: string) {
        this.id = id
        this.text = text
    }

    id: string
    text: string
} 
