import * as React from 'react'
import {SearchHeader} from './header'
import {SearchResultProps, SearchResult} from './search_results'
import { UserSettings } from '../../settings/settings'
import { IndexableTypes } from '../../domain/search/storage'

export interface PanelProps {
    searchResults: SearchResultProps
    userSettings: UserSettings
    loading: boolean

    onButtonClick()
    onToggleSwitch(checked: boolean)
    onSearchSubmit(text: string)
    onNodeCheckboxClick(type: IndexableTypes, checked: boolean)
}

export class SearchPanel extends React.Component<PanelProps> {
    render() {
        const header = <div>
            <SearchHeader 
                reindexing={this.props.loading}
                userSettings={this.props.userSettings}
                onButtonClick={this.props.onButtonClick} 
                onToggleSwitch={this.props.onToggleSwitch} 
                onSearchSubmit={this.props.onSearchSubmit}
                onNodeCheckboxClick={this.props.onNodeCheckboxClick}
            />
            <div className='divider' />
        </div>

        const searchResults = <SearchResult 
            itemProps={this.props.searchResults.itemProps} 
            searchAlert={this.props.searchResults.searchAlert}
        />

        return <div>
            {header}
            {searchResults}
        </div>
    }
}