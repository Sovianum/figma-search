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

export interface TypedLeafBaseNode extends BaseNodeMixin {
    readonly type: string
}

export interface TypedNonLeafBaseNode extends TypedLeafBaseNode {
    readonly children: ReadonlyArray<TypedBaseNode>
}

export type TypedBaseNode = TypedNonLeafBaseNode | TypedLeafBaseNode

export function getNodesWithChildren(rootes: ReadonlyArray<TypedBaseNode>): Array<TypedBaseNode> {
    const result = {}
    let front = Array.from(rootes)

    while (front.length > 0) {
        const node = front.shift()
        result[node.id] = node

        front.push(...getNodeChildren(node))
    }

    return getObjectValues(result)
}

function getObjectValues<T>(obj: object): Array<T> {
    const result = new Array<T>()
    
    for (let key in obj) { 
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key] as T)
        } 
    } 

    return result
}

function getNodeChildren(node: TypedBaseNode): ReadonlyArray<TypedBaseNode> {
    if ("children" in node) {
        return (node as TypedNonLeafBaseNode).children
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
    if (map == null) {
        return new Array<V>()
    }

    const result = Array.from(map.values())
    result.sort(comparator)
    return result
}