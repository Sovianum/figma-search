import { Tag, Tags } from "./tags";
import { intersection, getSortedValues, getNodesWithChildren } from "../util";

const TAGS_KEY = "tags" 

export interface TagsStorage {
    getAllTags(): Tags
    addTag(tag: Tag)
    removeTag(tag: Tag)

    setTags(nodes: ReadonlyArray<SceneNode>, tags: Tags)
    getTags(nodes: ReadonlyArray<SceneNode>): Tags
}

export function NewTagsStorage(root: BaseNodeMixin): TagsStorage {
    return new TagsStorageImpl(root)
}

class TagsStorageImpl {
    root: BaseNodeMixin

    constructor(root: BaseNodeMixin) {
        this.root = root
    }

    getAllTags(): Tags {
        return TagsStorageImpl.getNodeTags(this.root)
    }

    addTag(tag: Tag) {
        TagsStorageImpl.addNodeTags(this.root, [tag])
    }

    removeTag(tag: Tag) {
        TagsStorageImpl.removeNodeTags(this.root, [tag])
        // todo add recursive remove
    }

    setTags(nodes: ReadonlyArray<SceneNode>, tags: Tags) {
        TagsStorageImpl.setNodesTags(nodes, tags)
    }

    getTags(nodes: ReadonlyArray<SceneNode>): Tags {
        return TagsStorageImpl.getNodesTags(nodes)
    }

    private static getNodesTags(nodes: ReadonlyArray<SceneNode>): Tags {
        let tagsByName: Map<string, Tag> = null
        
        for (let node of nodes) {
            const nodeTags = TagsStorageImpl.getNodeTags(node)
            const nodeTagsByName = nodeTags.getTagMap()
    
            if (tagsByName == null) {
                tagsByName = nodeTagsByName
                continue
            }
    
            nodeTagsByName.forEach((val: Tag, key: string) => {
                tagsByName.set(key, val)
            })
    
            tagsByName = intersection(tagsByName, nodeTagsByName)
    
            if (tagsByName.size === 0) {
                break
            }
        }
    
        const tags = getSortedValues(tagsByName, Tag.compare)
    
        return new Tags(tags)
    }

    private static getNodeTags(node: BaseNodeMixin): Tags {
        const tagsStr = node.getPluginData(TAGS_KEY)
        if (tagsStr.length === 0) {
            return new Tags([])
        }
    
        const repr = JSON.parse(tagsStr) as Tags
        return new Tags(repr.tags)
    }

    private static setNodesTags(nodes: ReadonlyArray<SceneNode>, tags: Tags) {
        const allNodes = getNodesWithChildren(nodes)
    
        for (let node of allNodes) {
            TagsStorageImpl.addNodeTags(node, tags.tags)
        }
    }

    private static removeNodeTags(node: BaseNodeMixin, tags: Array<Tag>) {
        const currTags = TagsStorageImpl.getNodeTags(node)
        currTags.removeTags(tags)
        TagsStorageImpl.setNodeTags(node, currTags)
    }

    private static addNodeTags(node: BaseNodeMixin, tags: Array<Tag>) {
        const currTags = TagsStorageImpl.getNodeTags(node)
        currTags.addTags(tags)
        TagsStorageImpl.setNodeTags(node, currTags)
    }

    private static setNodeTags(node: BaseNodeMixin, tags: Tags) {
        const tagsStr = JSON.stringify(tags)
        node.setPluginData(TAGS_KEY, tagsStr)
    }
}