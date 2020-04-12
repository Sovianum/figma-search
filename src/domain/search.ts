const FlexSearch = require('flexsearch');

export class IndexStorage {
    index: SearchIndex|undefined

    constructor() {
        this.index = null
    }

    async getIndex(documentID: string): Promise<SearchIndex> {
        if (this.index) {
            return this.index
        }

        const indexValue = await figma.clientStorage.getAsync(documentID)
        if (!indexValue) {
            return null
        }

        const castedIndexValue = indexValue as IndexValue

        const newIndex = this.makeIndex()

        // i can not use import method directly coz it crashes webpack
        newIndex['import'](castedIndexValue.indexDump)
        this.index = new SearchIndexImpl(newIndex, castedIndexValue.updateTime)

        return this.index
    }

    async reindex(documentID: string, root: DocumentNode|PageNode) {
        const index = this.buildIndex(root)
        const indexDump = index.export()
        
        const updated = Date.now()
        await figma.clientStorage.setAsync(documentID, new IndexValue(indexDump, updated))
        this.index = new SearchIndexImpl(index, updated)
    }

    private buildIndex(root: DocumentNode|PageNode): any {
        const index = this.makeIndex();
    
        const textNodes = root.findAll(node => node.type == 'TEXT');
        textNodes.forEach(node => {
            const textNode = node as TextNode
            index.add(textNode.id, (textNode as TextNode).characters)
        })
    
        return index
    }

    private makeIndex() {
        // return new FlexSearch()
        return new FlexSearch({
            encode: false,
            split: /\s+/,
            tokenize: "forward"
        })
    }

}

export class IndexValue {
    constructor(dump: string, updated: number) {
        this.indexDump = dump
        this.updateTime = updated
    }

    indexDump: string
    updateTime: number
}

export interface SearchIndex {
    add(id: any, text: string)
    search(text: string, limit: number): Array<any>
    remove(id: any)
    updated: number
}

export class SearchIndexImpl {
    flexSearchIndex: any
    updated: number

    constructor(flexSearchIndex: any, updated: number) {
        this.flexSearchIndex = flexSearchIndex
        this.updated = updated
    }

    add(id: any, text: string) {
        this.flexSearchIndex.update(id, text)
    }

    search(text: string, limit: number): Array<any> {
        return this.flexSearchIndex.search(text, limit)
    }

    remove(id: any) {
        this.flexSearchIndex.remove(id)
    }
}