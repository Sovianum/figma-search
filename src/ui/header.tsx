import * as React from 'react'

interface SearchHeaderProps {
    onButtonClick()
    onToggleSwitch(checked: boolean)
    onSearchSubmit(text: string)
    reindexing: boolean
}
export class SearchHeader extends React.Component<SearchHeaderProps> {
    render() {
        if (!this.props.reindexing) {
            return <div>
                <SearchInput onSubmit={this.props.onSearchSubmit} />
                <ReindexBar onButtonClick={this.props.onButtonClick} onToggleSwitch={this.props.onToggleSwitch} />
            </div>
        }

        return <div>
            <SearchInput onSubmit={this.props.onSearchSubmit} />
            <ReindexBar onButtonClick={this.props.onButtonClick} onToggleSwitch={this.props.onToggleSwitch} />
            <span style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="visual-bell__spinner"></span>
        </div>
    }
}

interface ReindexBarProps {
    onButtonClick()
    onToggleSwitch(checked: boolean)
}
class ReindexBar extends React.Component<ReindexBarProps> {
    render() {
        return <div className="switch">
            <Toggle onChecked={this.props.onToggleSwitch} />
            <label className="switch__label" htmlFor="indexOnSearchToggle">Index on search</label>
            <Button onClick={this.props.onButtonClick} />
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
        return React.createElement("input", {
            id: "indexOnSearchToggle",
            type: "checkbox",
            className: "switch__toggle",
            onClick: this.onChange,
            defaultChecked: this.state.checked
        })
    }
}