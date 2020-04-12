import * as React from 'react'

export interface SearchResultProps {
    itemProps: Array<SearchResultItemProps>
    nothingFound: boolean
}
export class SearchResult extends React.Component<SearchResultProps> {
    render() {
        if (this.props.nothingFound) {
            return this.renderNone()
        }
        return this.renderSome()
    }

    renderNone() {
        return <div>
            <p style={{ color: 'red' }} className='type type--pos-large-normal'>
                Nothing found!
            </p>
        </div>
    }

    renderSome() {
        const items = this.props.itemProps.map(itemProp => {
            return <div key={itemProp.id}>
                <SearchResultItem 
                    id={itemProp.id}
                    text={itemProp.text}
                    onClick={itemProp.onClick}
                />
                <div className='divider' />
            </div>
        })
        return <div>{items}</div>
    }
}

interface SearchResultItemProps {
    id: string
    text: string
    onClick(id: string)
}
class SearchResultItem extends React.Component<SearchResultItemProps> {
    render() {
        const text = this.props.text.length <= 50 ? this.props.text : this.props.text.substr(0, 50) + '...'

        return React.createElement("p", {
            className: "type type--pos-small-normal",
            onClick: this.props.onClick 
        }, text)
    }
}