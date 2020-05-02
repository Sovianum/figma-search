import * as React from 'react'
import { getUniqueID } from '../util'
import { Column, Row } from 'simple-flexbox';
import { IndexableTypes } from '../../domain/search/storage';
import { UserSettings } from '../../settings/settings';

interface SearchHeaderProps {
    reindexing: boolean
    userSettings: UserSettings
    onButtonClick()
    onToggleSwitch(checked: boolean)
    onSearchSubmit(text: string)
    onNodeCheckboxClick(type: IndexableTypes, checked: boolean)
}
export class SearchHeader extends React.Component<SearchHeaderProps> {
    render() {
        const mainHeader = <div>
            <SearchInput onSubmit={this.props.onSearchSubmit} />
            <ReindexBar onButtonClick={this.props.onButtonClick} onToggleSwitch={this.props.onToggleSwitch} />
            <NodeTypesCheckboxes
                currFlags={this.props.userSettings.searchSettings.searchableNodes}
                onCheckboxUpdate={this.props.onNodeCheckboxClick}
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

interface ReindexBarProps {
    onButtonClick()
    onToggleSwitch(checked: boolean)
}
class ReindexBar extends React.Component<ReindexBarProps> {
    render() {
        return <Row>
            <Column flexGrow={1} horizontal='start'>
                <Toggle onChecked={this.props.onToggleSwitch} />
            </Column>
            <Column flexGrow={1} horizontal='end'>
                <Button onClick={this.props.onButtonClick} />
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
}
class Button extends React.Component<ButtonProps> {
    render() {
        return React.createElement("button", { 
            className: 'button button--primary', 
            onClick: this.props.onClick 
        }, "Reindex")
    }
}

interface SearchInputState {value: string} 
interface SearchInputProps {
    onSubmit(text: string)
}
class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    onChange(event) {
        this.setState({value: event.target.value})
    }

    onKeyDown(event) {
        if(event.key !== 'Enter'){
            return
        }
        this.props.onSubmit(this.state.value)
    }

    render() {
        if (this.state.value == '') {
            return <input className="input" placeholder="Search" onChange={this.onChange} onKeyDown={this.onKeyDown} />
        }

        return <input className="input" value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} />
    }
}