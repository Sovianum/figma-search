import { UserSettings } from "../settings/settings"

export enum MessageType {
    SearchRequest = "search_request",
    SearchResponse = "search_response",
    ReindexStart = "reindexStart",
    ReindexFinish = "reindexFinish",
    IndexLoadStart = "indexLoadStart",
    IndexLoadFinish = "indexLoadFinish",
    NavigateToNode = "navigate_to_node",
    NoSearchIndex = "noSearchIndex",
    NodeNotFound = "nodeNotFound",
    UserSettingsUpdateStart = "userSettingsUpdateStart",
    UserSettingsUpdateFinish = "userSettingsUpdateFinish"
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
