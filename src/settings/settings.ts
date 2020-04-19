import { IndexableTypes } from "../domain/search";

export interface UserSettings {
    indexSettings: IndexSettings
    searchSettings: SearchSettings
}

export interface IndexSettings {
    reindexOnSearch: boolean
}

export interface SearchSettings {
    searchAll: boolean
    nodeTypes: Array<IndexableTypes>
}