export enum MessageType {
    SearchRequest = "search_request",
    SearchResponse = "search_response",
    ReindexStart = "reindexStart",
    ReindexFinish = "reindexFinish",
    IndexLoadStart = "indexLoadStart",
    IndexLoadFinish = "indexLoadFinish",
    NavigateToNode = "navigate_to_node",
    UpdateModelSettings = "update_model_settings",
    NoSearchIndex = "noSearchIndex",
    NodeNotFound = "nodeNotFound"
}

export function newSearchResponseMessage(responses: Array<SearchResponse>): PluginMessage {
    return new PluginMessage(MessageType.SearchResponse, responses)
}

export function newNodeNotFound(id: string): PluginMessage {
    return new PluginMessage(MessageType.NodeNotFound, id)
}

export function newTypePluginMessage(typ: MessageType): PluginMessage {
    return new PluginMessage(typ, null)
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
