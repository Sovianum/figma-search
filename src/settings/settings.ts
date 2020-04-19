import { IndexableTypes } from "../domain/search";

export interface UserSettings {
    searchSettings?: SearchSettings
}

export interface SearchSettings {
    searchableNodes: Map<IndexableTypes, boolean>
}