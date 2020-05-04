import {Tags, Tag} from './tags'
import { newTypePluginMessage, MessageType } from '../../message/messages'
import { TagsStorage, NewTagsStorage } from './storage'

export class TagsModel {
    storage: TagsStorage

    constructor() {
        this.storage = NewTagsStorage(figma.root)
    }

    onSetNodeTags(tags: Array<Tag>) {
        this.storage.setTags(figma.currentPage.selection, new Tags(tags))

        figma.ui.postMessage(newTypePluginMessage(MessageType.SetNodesTagsFinish))
    }    
}