import {getSortedValues} from '../util'

export class Tags {
    tags: Array<Tag>

    constructor(tags: Array<Tag>) {
        this.tags = tags
    }

    getTagMap(): Map<string, Tag> {
        const result = new Map<string, Tag>()
        for (let tag of this.tags) {
            result[tag.name] = tag
        }

        return result
    }

    addTags(newTags: Array<Tag>) {
        const tagMap = new Map<string, Tag>()
        this.tags.concat(newTags).forEach(tag => tagMap.set(tag.name, tag))
        this.tags = getSortedValues(tagMap, Tag.compare)
    } 
}

export class Tag {
    name: string

    static compare(left, right: Tag): number {
        if (left.name < right.name) {
            return -1
        }

        if (left.name > right.name) {
            return 1
        }

        return 0
    }

    constructor(name: string) {
        this.name = name
    }
}