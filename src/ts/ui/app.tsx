import * as React from 'react'
import {SearchResultProps} from './search/search_results'
import { MessageType, SearchResponse, SelectionTagsState as TagsState} from '../message/messages'
import { UserSettings } from '../settings/settings'
import { IndexableTypes } from '../domain/search/index'
import { SearchPanel } from './search/panel'
import { TagsPanel, TagType, TagMenuAction } from './tags/panel'
import { Column, Row } from 'simple-flexbox'
import { Tag } from '../domain/tags/tags'
import { TabBar } from './tab_bar'
import { TagInfo } from './tags/panel'

export interface AppState {
    activeTab: string

    selectionTags: Array<Tag>
    availableTags: Array<Tag>

    searchTags: Map<string, boolean>
    searchQuery: string

    searchResults: SearchResultProps
    userSettings: UserSettings
    reindexOnSearch: boolean
    loading: boolean
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: "search",
            selectionTags: [],
            availableTags: [],

            searchTags: new Map<string, boolean>(),
            searchQuery: "",

            searchResults: {
                itemProps: [],
                searchAlert: ""
            },
            reindexOnSearch: false,
            loading: false,
            userSettings: {
                searchSettings: {
                    searchableNodes: new Map<IndexableTypes, boolean>()
                }
            }
        }

        this.startReindexing = this.startReindexing.bind(this)
        this.switchReindexOnSearch = this.switchReindexOnSearch.bind(this)
        this.sendSearchRequest = this.sendSearchRequest.bind(this)
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
        this.navigateToNodeCallback = this.navigateToNodeCallback.bind(this)
        this.onNodeCheckboxClick = this.onNodeCheckboxClick.bind(this)
        this.onTabSelect = this.onTabSelect.bind(this)
        this.removeTagFromSelection = this.removeTagFromSelection.bind(this)
        this.addTagToSelection = this.addTagToSelection.bind(this)
        this.createTag = this.createTag.bind(this)
        this.onSearchTagClick = this.onSearchTagClick.bind(this)
    }

    render() {
        const content = this.state.activeTab === "search" ? this.getSearchPanel() : this.getTagsPanel()

        return <Column>
            <Row>
                <TabBar 
                    labels={["search", "tags"]} 
                    activeTab={this.state.activeTab}
                    onClick={this.onTabSelect}
                />
            </Row>
            <Row>
                <div className='divider' />
            </Row>
            <Row>
                {content}
            </Row>
        </Column>
    }

    getTagsPanel() {
        const state = this.state

        return <TagsPanel 
            existingTags={state.selectionTags}
            availableTags={state.availableTags}

            onTagClick={(tagName, tagType) => {
                switch (tagType) {
                    case TagType.Existing:
                        return this.removeTagFromSelection(tagName)
                    case TagType.Available:
                        return this.addTagToSelection(tagName)
                }
            }}

            onTagMenyItemClick={(tagName, action, tagType) => {
                switch (action) {
                    case TagMenuAction.Remove:
                        switch (tagType) {
                            case TagType.Existing:
                                return this.removeTagFromSelection(tagName)
                            case TagType.Available:
                                return this.removeTag(tagName)
                        }
                    
                }
            }}

            onAddTagSubmit={this.createTag}
        />
    }

    getSearchPanel() {
        const state = this.state

        return <SearchPanel 
            searchResults={state.searchResults}
            userSettings={state.userSettings}
            loading={state.loading}

            onButtonClick={this.startReindexing}
            onToggleSwitch={this.switchReindexOnSearch}
            onSearchSubmit={this.sendSearchRequest}
            onSearchInputChange={this.onSearchInputChange}
            onNodeCheckboxClick={this.onNodeCheckboxClick}

            availableTags={this.getAllSearchTags()}
            onTagClick={this.onSearchTagClick}
        />
    }

    getAllSearchTags(): Array<TagInfo> {
        const state = this.state

        return this.state.availableTags.map(tag => {
            return {
                name: tag.name,
                inactive: !state.searchTags.get(tag.name)
            }
        })
    }

    onSearchInputChange(text: string) {
        this.setState({
            searchQuery: text
        })
    }

    onNodeNotFound(id: string) {
        this.resetSearchState()

        this.setState({
            searchResults: {
                itemProps: [],
                searchAlert: "Node not found. Reindex your document, please"
            }
        })
    }

    onIndexNotFound() {
        this.resetSearchState()

        this.setState({
            searchResults: {
                itemProps: [],
                searchAlert: "Index your document, please"
            }
        })
    }

    onAbsoleteIndex() {
        this.resetSearchState()

        this.setState({
            searchResults: {
                itemProps: [],
                searchAlert: "Update index, please"
            }
        })
    }

    onSearchResultsUpdated(results: Array<SearchResponse>) {
        this.resetSearchState()

        if (results.length !== 0) {
            this.setState({
                searchResults: {
                    itemProps: results.map(r => {
                        return {
                            id: r.id,
                            text: r.text,
                            onClick: this.navigateToNodeCallback(r.id)
                        }
                    }),
                    searchAlert: ""
                }
            })
        } else {
            this.setState({
                searchResults: {
                    itemProps: [],
                    searchAlert: "Nothing found!"
                }
            })
        }
    }

    onNodeCheckboxClick(type: IndexableTypes, checked: boolean) {
        const currSearchableNodes = this.state.userSettings.searchSettings.searchableNodes
        currSearchableNodes[type] = checked

        this.setState({
            userSettings: {
                searchSettings: {
                    searchableNodes: currSearchableNodes
                }
            }
        })

        this.updateUserSettingsInModel()
    }

    onSettingsUpdateFinished(userSettings: UserSettings) {
        this.setState({
            userSettings: userSettings
        })
    }

    updateUserSettingsInModel() {
        parent.postMessage({ pluginMessage: {
            type: MessageType.UserSettingsUpdateStart,
            userSettingsStr: JSON.stringify(this.state.userSettings)
        }}, '*')
    }

    navigateToNodeCallback(id: string) {
        return () => parent.postMessage({ pluginMessage: { type: MessageType.NavigateToNode, id } }, '*')
    }

    switchReindexOnSearch(reindex: boolean) {
        this.setState({
            reindexOnSearch: reindex
        })
    }

    startReindexing() {
        console.log('reindexing started')
        this.resetSearchState()
        this.setState({
            loading: true,
        })
        parent.postMessage({ pluginMessage: { 
            type: MessageType.ReindexStart
        } }, '*')
    }

    loadIndex() {
        this.resetSearchState()
        this.setState({
            loading: true
        })
        parent.postMessage({pluginMessage: {
            type: MessageType.IndexLoadStart
        }}, "*")
    }

    loadSettings() {
        parent.postMessage({pluginMessage: {
            type: MessageType.UserSettingsLoadStart
        }}, "*")
    }

    finishReindexing() {
        this.setState({
            loading: false,
            searchTags: new Map<string, boolean>(),
            searchQuery: "",
        })
    }

    finishLoadingIndex() {
        this.setState({
            loading: false,
        })
    }

    resetSearchState() {
        this.setState({
            searchResults: {
                itemProps: [],
                searchAlert: "",
            }
        })
    }

    onTagsUpdated(tagsState: TagsState) {
        this.setState({
            selectionTags: tagsState.selectionTags,
            availableTags: tagsState.availableTags
        })
    }

    removeTagFromSelection(tagName: string) {
        parent.postMessage({pluginMessage: {
            type: MessageType.RemoveTagFromSelection,
            tag: new Tag(tagName)
        }}, "*")
    }

    addTagToSelection(tagName: string) {
        console.log("adding tag to selection")
        parent.postMessage({pluginMessage: {
            type: MessageType.AddTagToSelection,
            tag: new Tag(tagName)
        }}, "*")
    }

    createTag(tagName: string) {
        parent.postMessage({pluginMessage: {
            type: MessageType.CreateTag,
            tag: new Tag(tagName)
        }}, "*")
    }

    removeTag(tagName: string) {
        parent.postMessage({pluginMessage: {
            type: MessageType.RemoveTag,
            tag: new Tag(tagName)
        }}, "*")
    }

    onSearchTagClick(tagName: string) {
        this.updateSearchTagState(tagName)

        this.sendSearchRequest()
    }

    onSearchSubmit(query: string) {
        this.setState({
            searchQuery: query
        })

        this.sendSearchRequest
    }

    sendSearchRequest() {
        const query = this.state.searchQuery

        const searchTags = this.getAllSearchTags()
            .filter(tagInfo => this.state.searchTags.get(tagInfo.name))
            .map(tagInfo => new Tag(tagInfo.name))

        parent.postMessage({ pluginMessage: { 
                type: MessageType.SearchRequest, 
                text: query,
                tags: searchTags,
                indexOnSearch: this.state.reindexOnSearch
            }
        }, '*')
    }

    updateSearchTagState(tagName: string) {
        const searchTags = this.state.searchTags
        if (!searchTags.has(tagName)) {
            searchTags.set(tagName, true)
        } else {
            searchTags.set(tagName, !searchTags.get(tagName))
        }

        this.setState({
            searchTags
        })
    }

    onTabSelect(tabName: string) {
        this.setState({
            activeTab: tabName
        })
    }
}