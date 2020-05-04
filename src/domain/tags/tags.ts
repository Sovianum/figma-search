import {getSortedValues} from '../util'

export class Tags {
    tags: Array<Tag>

    constructor(tags: Array<Tag>) {
        this.tags = tags
    }

    getTagMap(): Map<string, Tag> {
        return Tags.getTagMap(this.tags)
    }

    addTags(newTags: Array<Tag>) {
        this.tags = getSortedValues(Tags.getTagMap(this.tags.concat(newTags)), Tag.compare)
    }

    removeTags(tags: Array<Tag>) {
        const tagMap = Tags.getTagMap(tags)
        this.tags = this.tags.filter(tag => !tagMap.has(tag.name))
    }

    private static getTagMap(tags: Array<Tag>): Map<string, Tag> {
        const tagMap = new Map<string, Tag>()
        tags.forEach(tag => tagMap.set(tag.name, tag))
        return tagMap
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