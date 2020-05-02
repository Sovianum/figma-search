import { IndexableTypes } from "../domain/search/storage";

export function getDefaultUserSettings(): UserSettings {
    return {
        searchSettings: {
            searchableNodes: {}
        }
    }
}

export interface UserSettings {
    searchSettings?: SearchSettings
}

export interface SearchSettings {
    searchableNodes: object
}