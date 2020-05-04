import { textFromNode } from "../util";

const FlexSearch = require('flexsearch');
const LZUTF8 = require('lzutf8');

export enum IndexableTypes {
    TEXT = "TEXT",
    COMPONENT = "COMPONENT",
    GROUP = "GROUP",
    FRAME = "FRAME"
}

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

        const storedIndex = await figma.clientStorage.getAsync(this.getIndexID(documentID)) as IndexValue
        if (!storedIndex) {
            return null
        }

        const uncompressed = LZUTF8.decompress(storedIndex.indexDump)
        const newIndex = this.makeIndex()

        // i can not use import method directly coz it crashes figma
        newIndex['import'](uncompressed)
        this.index = new SearchIndexImpl(newIndex, storedIndex.updateTime)

        return this.index
    }

    async reindex(documentID: string, root: DocumentNode|PageNode) {
        const index = this.buildIndex(root)
        const indexDump = index.export()
        
        const updated = Date.now()
        let compressedIndexDump = LZUTF8.compress(indexDump)
        await figma.clientStorage.setAsync(this.getIndexID(documentID), new IndexValue(compressedIndexDump, updated))
        this.index = new SearchIndexImpl(index, updated)
    }

    private buildIndex(root: DocumentNode|PageNode): any {
        const index = this.makeIndex();
        
        const indexableTypes = new Set()
        indexableTypes.add(IndexableTypes.TEXT)
        indexableTypes.add(IndexableTypes.COMPONENT)
        indexableTypes.add(IndexableTypes.GROUP)
        indexableTypes.add(IndexableTypes.FRAME)

        const textNodes = root.findAll(node => indexableTypes.has(node.type));
        const searchDocuments = textNodes.map(node => this.makeSearchDocument(node))
        
        index.add(searchDocuments)
    
        return index
    }

    private makeSearchDocument(node: PageNode | SceneNode): SearchDocument {
        return {
            id: node.id,
            text: textFromNode(node).toLowerCase(),
            type: node.type
        }
    } 

    private makeIndex() {
        const docDescriptor = {
            id: "id",
            field: [
                "text",
                "type"
            ]
        }

        return new FlexSearch({
            encode: false,
            split: /\s+/,
            tokenize: "forward",
            doc: docDescriptor
        })
    }

    private getIndexID(documentID: string): string {
        return "index_" + documentID
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

export interface SearchDocument {
    id: string
    text: string
    type: string
}


export interface SearchIndex {
    search(text: string, selector: any): Array<SearchDocument>
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

    search(text: string, selector: any): Array<SearchDocument> {
        return this.flexSearchIndex.search(text, selector)
    }

    remove(id: any) {
        this.flexSearchIndex.remove(id)
    }
}