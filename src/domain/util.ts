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

export function getNodesWithChildren(rootes: ReadonlyArray<SceneNode>): Iterable<SceneNode> {
    const resultMap = new Map<string, SceneNode>()
    let front = Array.from(rootes)

    while (front.length > 0) {
        const node = front.shift()
        resultMap.set(node.id, node)

        front.push(...getNodeChildren(node))
    }

    return resultMap.values()
}

function getNodeChildren(node: SceneNode): Array<SceneNode> {
    switch (node.type) {
        case "FRAME":
        case "GROUP": 
        case "COMPONENT":
            return (node as FrameNode|GroupNode|ComponentNode).findChildren()
    }

    return [] 
}

export function intersection<K, V>(map1: Map<K, V>, map2: Map<K, V>): Map<K, V> {
    const result = new Map<K, V>()
    map1.forEach((v, k) => {
        if (map2.has(k)) {
            result.set(k, v)
        }
    })

    return result
}

export function getSortedValues<_, V>(map: Map<_, V>, comparator: (l: V, r: V) => number): Array<V> {
    const result = Array.from(map.values())
    result.sort(comparator)
    return result
}