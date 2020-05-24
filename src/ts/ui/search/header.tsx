import * as React from 'react'
import { getUniqueID } from '../util'
import { Column, Row } from 'simple-flexbox';
import { IndexableTypes } from '../../domain/search/index';
import { UserSettings } from '../../settings/settings';
import { Input } from '../common/input';
import { TagsCloud, TagInfo } from '../tags/panel'

interface SearchHeaderProps {
    reindexing: boolean
    userSettings: UserSettings
    onReindexClick()
    onToggleSwitch(checked: boolean)
    onSearchSubmit(text: string)
    onSearchInputChange(text: string)
    onNodeCheckboxClick(type: IndexableTypes, checked: boolean)
    onSearchButtonClick()

    availableTags: Array<TagInfo>
    onTagClick(tagName: string)
}
export class SearchHeader extends React.Component<SearchHeaderProps> {
    render() {
        const mainHeader = <div>
            <SearchInput onSubmit={this.props.onSearchSubmit} onChange={this.props.onSearchInputChange} />
            <SearchIndexBar onReindexClick={this.props.onReindexClick} onToggleSwitch={this.props.onToggleSwitch} onSearchButtonClick={this.props.onSearchButtonClick} />
            <NodeTypesCheckboxes
                currFlags={this.props.userSettings.searchSettings.searchableNodes}
                onCheckboxUpdate={this.props.onNodeCheckboxClick}
            />
            <TagsCloud 
                tags={this.props.availableTags}
                withMenu={false}

                onTagClick={this.props.onTagClick}
            />
        </div>

        if (!this.props.reindexing) {
            return mainHeader
        }

        return <div>
            {mainHeader}
            <span style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="visual-bell__spinner"></span>
        </div>
    }
}

interface NodeTypesCheckboxesProps {
    currFlags: object
    onCheckboxUpdate(type: IndexableTypes, state: boolean)
}

class NodeTypesCheckboxes extends React.Component<NodeTypesCheckboxesProps> {
    constructor(props) {
        super(props)
        this.makeCheckboxCallback = this.makeCheckboxCallback.bind(this)
    }

    render() {
        return <Row>
            <Column flexGrow={1} horizontal='start'>
                <Checkbox 
                    label='Text' 
                    checked={this.props.currFlags[IndexableTypes.TEXT]}
                    onClick={this.makeCheckboxCallback(IndexableTypes.TEXT)}
                />
            </Column>
                <Checkbox 
                    label='Component' 
                    checked={this.props.currFlags[IndexableTypes.COMPONENT]}
                    onClick={this.makeCheckboxCallback(IndexableTypes.COMPONENT)}
                />
            <Column flexGrow={1} horizontal='start'>
                <Checkbox 
                    label='Group' 
                    checked={this.props.currFlags[IndexableTypes.GROUP]}
                    onClick={this.makeCheckboxCallback(IndexableTypes.GROUP)}
                />
            </Column>
            <Column flexGrow={1} horizontal='start'>
                <Checkbox 
                    label='Frame' 
                    checked={this.props.currFlags[IndexableTypes.FRAME]}
                    onClick={this.makeCheckboxCallback(IndexableTypes.FRAME)}
                />
            </Column>
        </Row>
    }

    makeCheckboxCallback(type: IndexableTypes): () => void {
        return () => {
            const currState = this.props.currFlags[type] as boolean

            this.props.onCheckboxUpdate(type, !currState)
        }
    }
}

interface CheckboxProps { 
    onClick()
    label: string
    checked: boolean
}
class Checkbox extends React.Component<CheckboxProps> {
    render() {
        const id = getUniqueID()

        const checkbox = React.createElement("input", {
            id: id,
            type: "checkbox",
            className: "checkbox__box",
            onClick: this.props.onClick,
            defaultChecked: this.props.checked
        })

        return <div className="checkbox">
            {checkbox}
            <label className="checkbox__label" htmlFor={id}>{this.props.label}</label>
        </div>
    }
}

interface SearchIndexBarProps {
    onReindexClick()
    onToggleSwitch(checked: boolean)
    onSearchButtonClick()
}
class SearchIndexBar extends React.Component<SearchIndexBarProps> {
    render() {
        return <Row>
            <Column flexGrow={1} horizontal='start'>
                <Toggle onChecked={this.props.onToggleSwitch} />
                <a className="reindex-button" onClickCapture={this.props.onReindexClick}>Reindex</a>
            </Column>
            <Column flexGrow={1} horizontal='end' vertical='center'>
                <Button 
                    onClick={this.props.onSearchButtonClick}
                    text="Search"
                />
            </Column>
        </Row>
    }
}

interface ToggleProps { onChecked(checked: boolean) }
interface ToggleState { checked: boolean }
class Toggle extends React.Component<ToggleProps, ToggleState> {
    constructor(props) {
        super(props)
        this.state = { checked: false }

        this.onChange = this.onChange.bind(this)
    }

    onChange() {
        const newState = {
            checked: !this.state.checked
        }
        this.setState(newState)
        this.props.onChecked(newState.checked)
    }

    render() {
        const id = getUniqueID()

        const checkbox = React.createElement("input", {
            id: id,
            type: "checkbox",
            className: "switch__toggle",
            onClick: this.onChange,
            defaultChecked: this.state.checked
        })

        return <div className="switch">
            {checkbox}
            <label className="switch__label" htmlFor={id}>Index on search</label>
        </div>
    }
}

interface ButtonProps {
    onClick(): void
    text: string
}
class Button extends React.Component<ButtonProps> {
    render() {
        return React.createElement("button", { 
            className: 'button button--primary', 
            onClick: this.props.onClick 
        }, this.props.text)
    }
}

class SearchInput extends Input {
    getPlaceholder(): string {
        return "Search"
    }
}