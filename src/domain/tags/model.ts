import {intersection, getSortedValues, getNodesWithChildren} from '../util'
import {Tag, Tags} from './tags'
import { newTypePluginMessage, MessageType } from '../../message/messages'

const TAGS_KEY = "tags" 

export class TagsModel {
    onSetNodeTags(tags: Array<Tag>) {
        setNodesTags(figma.currentPage.selection, tags)

        figma.ui.postMessage(newTypePluginMessage(MessageType.SetNodesTagsFinish))
    }    
}

function setNodesTags(nodes: ReadonlyArray<SceneNode>, tags: Array<Tag>) {
    const allNodes = getNodesWithChildren(nodes)

    for (let node of allNodes) {
        const currTags = getNodeTags(node)
        currTags.addTags(tags)
        setNodeTags(node, currTags)
    }
}

function getNodesTags(nodes: Array<SceneNode>): Tags {
    let tagsByName: Map<string, Tag> = null
    
    for (let node of nodes) {
        const nodeTags = getNodeTags(node)
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

function getNodeTags(node: SceneNode): Tags {
    const tagsStr = node.getPluginData(TAGS_KEY)
    if (tagsStr.length === 0) {
        return new Tags([])
    }

    const repr = JSON.parse(tagsStr) as Tags
    return new Tags(repr.tags)
}

function setNodeTags(node: SceneNode, tags: Tags) {
    const tagsStr = JSON.stringify(tags)
    node.setPluginData(TAGS_KEY, tagsStr)
}