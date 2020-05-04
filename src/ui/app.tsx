import * as React from 'react'
import {SearchResultProps} from './search/search_results'
import { MessageType, SearchResponse} from '../message/messages'
import { UserSettings } from '../settings/settings'
import { IndexableTypes } from '../domain/search/storage'
import { SearchPanel } from './search/panel'
import { TagsPanel } from './tags/panel'
import { Column, Row } from 'simple-flexbox'
import { Tag } from '../domain/tags/tags'
import { TabBar } from './tab_bar'

export interface AppState {
    activeTab: string
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
        this.onTagClick = this.onTagClick.bind(this)
        this.onTabSelect = this.onTabSelect.bind(this)
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
        const existingTags = Array.from([
            Array.from([
                {name: "tag1"}, {name: "tag2"}, {name: "tag3"} 
            ]),
            Array.from([
                {name: "tag4"}, {name: "tag5"} 
            ])
        ])

        return <TagsPanel 
            existingTags={existingTags}
            onExistingTagClick={(tagName: string) => {
                console.log(tagName)
                this.onTagClick(tagName)
            }}
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

    onTagClick(tagName: string) {
        const tag = new Tag(tagName)
        parent.postMessage({ pluginMessage: { 
                    type: MessageType.SetNodesTagsStart, 
                    tags: [tag]
                } 
            }, '*')
    }

    onTabSelect(tabName: string) {
        this.setState({
            activeTab: tabName
        })
    }
}