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