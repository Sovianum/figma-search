import * as React from 'react'
import {SearchResultProps} from './search/search_results'
import { MessageType, SearchResponse, SelectionTagsState as TagsState} from '../message/messages'
import { UserSettings } from '../settings/settings'
import { IndexableTypes } from '../domain/search/storage'
import { SearchPanel } from './search/panel'
import { TagsPanel } from './tags/panel'
import { Column, Row } from 'simple-flexbox'
import { Tag } from '../domain/tags/tags'
import { TabBar } from './tab_bar'

export interface AppState {
    activeTab: string

    selectionTags: Array<Tag>
    availableTags: Array<Tag>

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
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.navigateToNodeCallback = this.navigateToNodeCallback.bind(this)
        this.onNodeCheckboxClick = this.onNodeCheckboxClick.bind(this)
        this.onTabSelect = this.onTabSelect.bind(this)
        this.onExistingTagClick = this.onExistingTagClick.bind(this)
        this.onAvailableTagClick = this.onAvailableTagClick.bind(this)
        this.onCreateTag = this.onCreateTag.bind(this)
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
            onExistingTagClick={(tagName: string) => {
                this.onExistingTagClick(tagName)
            }}

            availableTags={state.availableTags}
            onAvailableTagClick={(tagName: string) => {
                this.onAvailableTagClick(tagName)
            }}
            onAddTagSubmit={this.onCreateTag}
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
            onSearchSubmit={this.onSearchSubmit}
            onNodeCheckboxClick={this.onNodeCheckboxClick}
        />
    }

    onSearchSubmit(text: string) {
        parent.postMessage({ pluginMessage: { 
                    type: MessageType.SearchRequest, 
                    text: text,
                    indexOnSearch: this.state.reindexOnSearch
                } 
            }, 
        '*')
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
                searchAlert: ""
            } 
        })
    }

    onTagsUpdated(tagsState: TagsState) {
        this.setState({
            selectionTags: tagsState.selectionTags,
            availableTags: tagsState.availableTags
        })
    }

    onExistingTagClick(tagName: string) {
        parent.postMessage({pluginMessage: {
            type: MessageType.RemoveTagFromSelection,
            tag: new Tag(tagName)
        }}, "*")
    }

    onAvailableTagClick(tagName: string) {
        parent.postMessage({pluginMessage: {
            type: MessageType.AddTagToSelection,
            tag: new Tag(tagName)
        }}, "*")
    }

    onCreateTag(tagName: string) {
        parent.postMessage({pluginMessage: {
            type: MessageType.CreateTag,
            tag: new Tag(tagName)
        }}, "*")
    }

    onTabSelect(tabName: string) {
        this.setState({
            activeTab: tabName
        })
    }
}