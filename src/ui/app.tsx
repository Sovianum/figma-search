import * as React from 'react'
import {SearchHeader} from './header'
import {SearchResultProps, SearchResult} from './search_results'
import { MessageType, SearchResponse } from '../message/messages'

export interface AppState {
    searchResults: SearchResultProps
    reindexOnSearch: boolean
    reindexing: boolean
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
            reindexing: false
        }

        this.startReindexing = this.startReindexing.bind(this)
        this.switchReindexOnSearch = this.switchReindexOnSearch.bind(this)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.navigateToNodeCallback = this.navigateToNodeCallback.bind(this)
    }

    render() {
        const header = <div>
            <SearchHeader 
                onButtonClick={this.startReindexing} 
                onToggleSwitch={this.switchReindexOnSearch} 
                onSearchSubmit={this.onSearchSubmit}
                reindexing={this.state.reindexing}
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
            reindexing: true,
        })
        parent.postMessage({ pluginMessage: { 
            type: MessageType.ReindexStart
        } }, '*')
    }

    finishReindexing() {
        this.setState({
            reindexing: false,
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