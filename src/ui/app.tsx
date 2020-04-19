import * as React from 'react'
import {SearchHeader} from './header'
import {SearchResultProps, SearchResult} from './search_results'
import { MessageType, SearchResponse } from '../message/messages'
import { UserSettings } from '../settings/settings'
import { IndexableTypes } from '../domain/search'

export interface AppState {
    searchResults: SearchResultProps
    userSettings: UserSettings
    reindexOnSearch: boolean
    loading: boolean
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props)

        this.state = {
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
    }

    render() {
        const header = <div>
            <SearchHeader 
                reindexing={this.state.loading}
                userSettings={this.state.userSettings}
                onButtonClick={this.startReindexing} 
                onToggleSwitch={this.switchReindexOnSearch} 
                onSearchSubmit={this.onSearchSubmit}
                onNodeCheckboxClick={this.onNodeCheckboxClick}
            />
            <div className='divider' />
        </div>

        const state = this.state
        const searchResults = <SearchResult 
            itemProps={state.searchResults.itemProps} 
            searchAlert={state.searchResults.searchAlert}
        />

        return <div>
            {header}
            {searchResults}
        </div>
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
        currSearchableNodes.set(type, checked)

        this.setState({
            userSettings: {
                searchSettings: {
                    searchableNodes: currSearchableNodes
                }
            }
        })
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
}