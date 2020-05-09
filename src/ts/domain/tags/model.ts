import {Tags, Tag} from './tags'
import { newUpdateTagState } from '../../message/messages'
import { TagsStorage, NewTagsStorage } from './storage'

export class TagsModel {
    storage: TagsStorage

    constructor() {
        this.storage = NewTagsStorage(figma.root)
    }

    onSetNodeTags(tags: Array<Tag>) {
        this.storage.setTags(figma.currentPage.selection, new Tags(tags))
        this.updateTagsView()
    }

    onRemoveNodeTags(tags: Array<Tag>) {
        this.storage.removeTags(figma.currentPage.selection, new Tags(tags))
        this.updateTagsView()
    }

    onCreateTag(tag: Tag) {
        this.storage.addTag(tag)
        this.updateTagsView()
    }

    onRemoveTag(tag: Tag) {
        console.log(tag)
        this.storage.removeTag(tag)
        // todo: add recursive remove
        this.updateTagsView()
    }
    
    updateTagsView() {
        const selectionTags = this.storage.getTags(figma.currentPage.selection)
        const availableTags = this.storage.getTags([figma.root])

        figma.ui.postMessage(newUpdateTagState(selectionTags.tags, availableTags.tags))
    }
}