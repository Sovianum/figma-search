import * as React from 'react'

export interface InputProps {
    onSubmit(text: string)
    onChange(text: string)
}
interface InputState {value: string}
export abstract class Input extends React.Component<InputProps, InputState> {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    onChange(event) {
        this.setState({value: event.target.value})
        this.props.onChange(event.target.value)
    }

    onKeyDown(event) {
        if(event.key !== 'Enter'){
            return
        }
        this.props.onSubmit(this.state.value)
    }

    render() {
        if (this.state.value == '') {
            return <input className="input" placeholder={this.getPlaceholder()} onChange={this.onChange} onKeyDown={this.onKeyDown} />
        }

        return <input className="input" value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} />
    }

    abstract getPlaceholder(): string
}