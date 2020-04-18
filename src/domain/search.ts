import { textFromNode } from "./util";

const FlexSearch = require('flexsearch');
const LZUTF8 = require('lzutf8');

export class IndexStorage {
    index: SearchIndex|undefined

    constructor() {
        this.index = null
    }

    async getIndex(documentID: string): Promise<SearchIndex> {
        console.log("called get index")
        if (this.index) {
            console.log("returned local copy")
            return this.index
        }

        const storedIndex = await figma.clientStorage.getAsync(documentID) as IndexValue
        if (!storedIndex) {
            return null
        }
        
        console.log("loaded index value", storedIndex)

        const uncompressed = LZUTF8.decompress(storedIndex.indexDump)

        console.log("uncompressed index value")

        const newIndex = this.makeIndex()

        console.log("made index")

        // i can not use import method directly coz it crashes figma
        newIndex['import'](uncompressed)
        this.index = new SearchIndexImpl(newIndex, storedIndex.updateTime)

        console.log("index updated", this.index)

        return this.index
    }

    async reindex(documentID: string, root: DocumentNode|PageNode) {
        const index = this.buildIndex(root)
        const indexDump = index.export()
        
        const updated = Date.now()
        let compressedIndexDump = LZUTF8.compress(indexDump)
        await figma.clientStorage.setAsync(documentID, new IndexValue(compressedIndexDump, updated))
        this.index = new SearchIndexImpl(index, updated)
    }

    private buildIndex(root: DocumentNode|PageNode): any {
        console.log("index building started")
        const index = this.makeIndex();
        
        const indexableTypes = new Set()
        indexableTypes.add("TEXT")
        indexableTypes.add("COMPONENT")
        indexableTypes.add("GROUP")
        indexableTypes.add("FRAME")

        const textNodes = root.findAll(node => indexableTypes.has(node.type));
        const searchDocuments = textNodes.map(node => {
            return {
                "id": node.id,
                "text": textFromNode(node).toLowerCase()
            }
        })
        console.log("documents built")
        
        index.add(searchDocuments)

        console.log("documents added")
    
        return index
    }

    private makeIndex() {
        return new FlexSearch({
            encode: false,
            split: /\s+/,
            tokenize: "forward",
            doc: {
                id: "id",
                field: "text"
            }
        })
    }

}

export class IndexValue {
    constructor(dump: any, updated: number) {
        this.indexDump = dump
        this.updateTime = updated
    }

    indexDump: any
    updateTime: number
}

export interface NodeDocument {
    id: string
    text: string
}

export interface SearchIndex {
    search(text: string, selector: any): Array<NodeDocument>
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

    search(text: string, selector: any): Array<NodeDocument> {
        return this.flexSearchIndex.search(text, selector)
    }

    remove(id: any) {
        this.flexSearchIndex.remove(id)
    }
}