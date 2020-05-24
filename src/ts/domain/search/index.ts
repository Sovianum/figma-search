import { PluginMessage, newTypePluginMessage, MessageType } from "../../message/messages";

const FlexSearch = require('flexsearch');

export enum IndexableTypes {
    TEXT = "TEXT",
    COMPONENT = "COMPONENT",
    GROUP = "GROUP",
    FRAME = "FRAME"
}

export function NewSearchDocument(id: string, text: string, type: string) {
    return new SearchDocumentImpl(id, text, type)
}

export interface SearchDocument {
    id: string
    text: string
    type: string

    setTag(tag: string)
}

class SearchDocumentImpl {
    id: string
    text: string
    type: string

    constructor(id: string, text: string, type: string) {
        this.id = id
        this.text = text
        this.type = type
    }

    setTag(tag: string) {
        this[tag] = "has"
    }
}

export interface FlexsearchIndex {
    add(docs: Array<SearchDocument>)
    search(selector: Selector): Array<SearchDocument>
    search(selector: Array<Selector>): Array<SearchDocument>
    remove(id: string)
    export(): string
}

export function makeIndex(docDescription: DocumentDescription): FlexsearchIndex {
    return new FlexSearch({
        encode: false,
        split: /\s+/,
        tokenize: "forward",
        doc: docDescription
    })
}

export function makeDocDescription(tagFields = new Array<string>()): DocumentDescription {
    return {
        id: "id",
        field: [
            "text",
            "type"
        ].concat(tagFields)
    }
}

export function newTextSelector(text: string): Selector {
    return {
        field: [
            "text"
        ],
        query: text,
        bool: "and"
    }
}

export function newTagsSelectors(tags: Array<string>): Array<Selector> {
    return tags.map(tag => {
        return {
            field: [tag],
            query: "has",
            bool: "and",
        }
    })
    
}

export function newTagSelectorCondition(tags: Array<string>): object {
    const result = {}
    tags.forEach(tag => result[tag] = "has")
    return result
}

export interface Selector {
    field?: Array<string>
    query?: string
    where?: object
    bool?: string
}

export interface DocumentDescription {
    id: string
    field: Array<string>
}

export interface SearchIndex {
    searchOneSelector(selector: Selector): Array<SearchDocument>
    searchMultipleSelectors(selectors: Array<Selector>): Array<SearchDocument>
    remove(id: any)
    getDescription(): DocumentDescription  // TODO add to serialization
    updated: number
}

export function NewSearchIndex(flexSearchIndex: FlexsearchIndex, description: DocumentDescription, updated?: number): SearchIndex {
    return new SearchIndexImpl(flexSearchIndex, description, updated)
}

class SearchIndexImpl {
    flexSearchIndex: FlexsearchIndex
    description: DocumentDescription
    updated: number

    constructor(flexSearchIndex: FlexsearchIndex, description: DocumentDescription, updated: number) {
        this.flexSearchIndex = flexSearchIndex
        this.updated = updated
        this.description = description
    }

    getDescription(): DocumentDescription {
        return this.description
    }

    searchOneSelector(selector: Selector): Array<SearchDocument> {
        return this.searchMultipleSelectors([selector])
    }

    searchMultipleSelectors(selectors: Array<Selector>): Array<SearchDocument> {
        selectors.forEach(selector => this.checkIndex(selector))
        return this.flexSearchIndex.search(selectors)
    }

    remove(id: string) {
        this.flexSearchIndex.remove(id)
    }

    checkIndex(selector: Selector) {
        if (!this.description) {
            console.log("no description", this.description)
            throw newTypePluginMessage(MessageType.NoSearchIndex)
        }

        const existingFields = new Set(this.description.field)
        for (let field of selector.field) {
            if (!existingFields.has(field)) {
                console.log("no field", field, "in descriprion", this.description)
                throw newTypePluginMessage(MessageType.NoSearchIndex)
            }
        }
    }
}