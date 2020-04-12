export function getNodePage(node: BaseNode): PageNode {
    let parent = node;
    while (parent) {
        if (parent.type === 'PAGE') {
            return parent
        }
        parent = parent.parent
    }

    return null
}

export function textFromNode(node: BaseNode): string {
    switch (node.type) {
        case "TEXT":
            return (node as TextNode).characters
        case "COMPONENT":
            return (node as ComponentNode).description
        case "GROUP":
            return (node as GroupNode).name
        case "FRAME":
            return (node as FrameNode).name 
    }
}