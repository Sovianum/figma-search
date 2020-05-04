import * as React from 'react'

export interface TabBarProps {
    labels: Array<string>
    activeTab: string
    onClick(label: string)
}
export class TabBar extends React.Component<TabBarProps> {
    constructor(props) {
        super(props)

        this.getOnClickCallback = this.getOnClickCallback.bind(this)
    }

    render() {
        const buttons = this.props.labels.map(label => {
            return React.createElement("button", {
                className: label === this.props.activeTab? 'tab-button tab-button-active': 'tab-button',
                onClick: this.getOnClickCallback(label)
            }, label)
        })

        return <div className="tab-buttons">
            {buttons}
        </div>
    }

    getOnClickCallback(tabLabel: string): () => void {
        return () => this.props.onClick(tabLabel)
    }
}
