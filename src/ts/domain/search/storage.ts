import { textFromNode } from "../util";
import { SearchIndex, makeIndex, NewSearchIndex, IndexableTypes, NewSearchDocument, DocumentDescription, makeDocDescription, SearchDocument, FlexsearchIndex } from ".";
import { NewTagsStorage, TagsStorage } from "../tags/storage";

const LZUTF8 = require('lzutf8');

export class IndexValue {
    constructor(dump: any, docDescription: string, updated: number) {
        this.indexDump = dump
        this.updateTime = updated
        this.documentDescriptionDump = docDescription
    }

    indexDump: any
    documentDescriptionDump: string
    updateTime: number
}

export class IndexStorage {
    index: SearchIndex|undefined
    tagsStorage: TagsStorage

    constructor() {
        this.index = null
        this.tagsStorage = NewTagsStorage(figma.root)
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

        this.index = this.loadIndex(storedIndex)
        return this.index
    }

    loadIndex(storedIndex: IndexValue): SearchIndex {
        if (!storedIndex) {
            return null
        }

        const index = LZUTF8.decompress(storedIndex.indexDump)

        let docDescription: DocumentDescription = null
        if (storedIndex.documentDescriptionDump) {
            docDescription = JSON.parse(storedIndex.documentDescriptionDump) as DocumentDescription
        }

        const flexsearchIndex = makeIndex(docDescription)
        // i can not use import method directly coz it crashes figma
        flexsearchIndex['import'](index)

        return NewSearchIndex(flexsearchIndex, docDescription)
    }

    async reindex(documentID: string, root: DocumentNode|PageNode) {
        const docDescription = makeDocDescription(this.tagsStorage.getAllTags().tags.map(tag => tag.name))
        console.log("doc description is", docDescription)

        const index = this.buildIndex(root, docDescription)
        const indexDump = index.export()
        
        const updated = Date.now()
        let compressedIndexDump = LZUTF8.compress(indexDump)
        await figma.clientStorage.setAsync(this.getIndexID(documentID), new IndexValue(
            compressedIndexDump, 
            JSON.stringify(docDescription),
            updated,
        ))
        
        this.index = NewSearchIndex(index, docDescription, updated)
    }

    private buildIndex(root: DocumentNode|PageNode, docDescription: DocumentDescription): FlexsearchIndex {
        const index = makeIndex(docDescription);
        
        const indexableTypes = new Set()
        indexableTypes.add(IndexableTypes.TEXT)
        indexableTypes.add(IndexableTypes.COMPONENT)
        indexableTypes.add(IndexableTypes.GROUP)
        indexableTypes.add(IndexableTypes.FRAME)

        const textNodes = root.findAll(node => indexableTypes.has(node.type));
        const searchDocuments = textNodes.map(node => this.searchDocFromNode(node))
        
        index.add(searchDocuments)
    
        return index
    }

    private searchDocFromNode(node: PageNode | SceneNode): SearchDocument {
        const result = NewSearchDocument(
            node.id,
            textFromNode(node).toLowerCase(),
            node.type
        )
            
            
        this.tagsStorage.getTags([node]).tags.forEach(tag => {
            result.setTag(tag.name)
        });

        return result
    }

    private getIndexID(documentID: string): string {
        return "index_" + documentID
    }

}