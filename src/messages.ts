export enum MessageType {
    SearchRequest = "search_request",
    SearchResponse = "search_response",
    ReindexStart = "reindexStart",
    ReindexFinish = "reindexFinish",
    NavigateToNode = "navigate_to_node",
    UpdateModelSettings = "update_model_settings",
    Cancel = "cancel"
}

export function newSearchResponseMessage(responses: Array<SearchResponse>): PluginMessage {
    return new PluginMessage(MessageType.SearchResponse, responses)
}

export function newSearchReindexFinishMessage(): PluginMessage {
    return new PluginMessage(MessageType.ReindexFinish, null)
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
