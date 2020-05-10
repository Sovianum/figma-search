import { Tag, Tags } from "./tags";
import { intersection, getSortedValues, getNodesWithChildren, TypedBaseNode } from "../util";

const TAGS_KEY = "tags" 

export interface TagsStorage {
    getAllTags(): Tags
    addTag(tag: Tag, withRecursive: boolean)
    removeTag(tag: Tag, withRecursive: boolean)

    setTags(nodes: ReadonlyArray<TypedBaseNode>, tags: Tags)
    removeTags(nodes: ReadonlyArray<TypedBaseNode>, tags: Tags)
    getTags(nodes: ReadonlyArray<SceneNode>|ReadonlyArray<BaseNodeMixin>): Tags
}

export function NewTagsStorage(root: TypedBaseNode): TagsStorage {
    return new TagsStorageImpl(root)
}

class TagsStorageImpl {
    root: TypedBaseNode

    constructor(root: TypedBaseNode) {
        this.root = root
    }

    getAllTags(): Tags {
        return TagsStorageImpl.getNodeTags(this.root)
    }

    addTag(tag: Tag, withRecursive: boolean) {
        TagsStorageImpl.addNodeTags(this.root, [tag], withRecursive)
    }

    removeTag(tag: Tag, withRecursive: boolean) {
        TagsStorageImpl.removeNodeTags(this.root, [tag], withRecursive)
    }

    removeTags(nodes: ReadonlyArray<TypedBaseNode>, tags: Tags) {
        for (let node of nodes) {
            TagsStorageImpl.removeNodeTags(node, tags.tags, false)
        }
    }

    setTags(nodes: ReadonlyArray<SceneNode>, tags: Tags) {
        TagsStorageImpl.setNodesTags(nodes, tags)
    }

    getTags(nodes: ReadonlyArray<SceneNode>): Tags {
        return TagsStorageImpl.getNodesTags(nodes)
    }

    private static getNodesTags(nodes: ReadonlyArray<SceneNode>): Tags {
        const commonTags = nodes
            .map(node => TagsStorageImpl.getNodeTags(node).getTagMap())
            .reduce((curr: Map<string, Tag>, next: Map<string, Tag>): Map<string, Tag> => {
                if (curr == null) {
                    return next
                }

                return intersection(curr, next)
            }, null)

            const tags = getSortedValues(commonTags, Tag.compare)
    
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

    private static setNodesTags(nodes: ReadonlyArray<TypedBaseNode>, tags: Tags) {
        const allNodes = getNodesWithChildren(nodes)
    
        for (let node of allNodes) {
            TagsStorageImpl.addNodeTags(node, tags.tags, false)
        }
    }

    private static removeNodeTags(node: TypedBaseNode, tags: Array<Tag>, withRecursive: boolean) {
        const currTags = TagsStorageImpl.getNodeTags(node)
        currTags.removeTags(tags)
        TagsStorageImpl.setNodeTags(node, currTags, withRecursive)
    }

    private static addNodeTags(node: TypedBaseNode, tags: Array<Tag>, withRecursive: boolean) {
        const currTags = TagsStorageImpl.getNodeTags(node)
        currTags.addTags(tags)
        TagsStorageImpl.setNodeTags(node, currTags, withRecursive)
    }

    private static setNodeTags(node: TypedBaseNode, tags: Tags, withRecursive: boolean) {
        const tagsStr = JSON.stringify(tags)
        
        const doSet = (node: TypedBaseNode) => {
            node.setPluginData(TAGS_KEY, tagsStr)
        }
        
        if (!withRecursive) {
            doSet(node)
        } else {
            for (let iterNode of getNodesWithChildren([node])) {
                doSet(iterNode)
            }
        }

    }
}