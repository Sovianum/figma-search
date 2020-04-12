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
                nothingFound: false
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
            nothingFound={state.searchResults.nothingFound}
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

    onSearchResultsUpdated(results: Array<SearchResponse>) {
        this.setState({
            searchResults: {
                itemProps: results.map(r => {
                    return {
                        id: r.id,
                        text: r.text,
                        onClick: this.navigateToNodeCallback(r.id)
                    }
                }),
                nothingFound: results.length === 0
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
        this.setState({
            searchResults: {
                itemProps: [],
                nothingFound: false
            },
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
}