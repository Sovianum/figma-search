import * as React from 'react'
import {SearchHeader} from './header'
import {SearchResultProps, SearchResult} from './search_results'
import { UserSettings } from '../../settings/settings'
import { IndexableTypes } from '../../domain/search/index'
import { TagInfo } from '../tags/panel'

export interface PanelProps {
    searchResults: SearchResultProps
    userSettings: UserSettings
    loading: boolean

    onButtonClick()
    onToggleSwitch(checked: boolean)
    onSearchSubmit(text: string)
    onSearchInputChange(text: string)
    onNodeCheckboxClick(type: IndexableTypes, checked: boolean)

    availableTags: Array<TagInfo>
    onTagClick(tagName: string)
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
                onSearchInputChange={this.props.onSearchInputChange}
                onNodeCheckboxClick={this.props.onNodeCheckboxClick}

                availableTags={this.props.availableTags}
                onTagClick={this.props.onTagClick}
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