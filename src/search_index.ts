const FlexSearch = require('flexsearch');

export function buildIndex(root: DocumentNode|PageNode): SearchIndex {
    const index = FlexSearch.create() as SearchIndex;

    const textNodes = root.findAll(node => node.type == 'TEXT');
    textNodes.forEach(node => {
        const textNode = node as TextNode
        index.add(textNode.id, (textNode as TextNode).characters)
    })

    return index
}

interface SearchIndex {
    add(id: any, text: string)
    search(text: string, limit: number): Array<any>
}