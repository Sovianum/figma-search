import * as React from 'react'
import { Column, Row } from 'simple-flexbox';

interface TagsPanelProps {
    existingTags: Array<Array<TagInfo>>
    onExistingTagClick(tagName: string)
}
export class TagsPanel extends React.Component<TagsPanelProps> {
    render() {
        return <Column>
            <TagsCloud 
                tagLines={this.props.existingTags}
                onTagClick={this.props.onExistingTagClick}
            />
        </Column>
    }
}

interface TagsCloudProps {
    tagLines: Array<Array<TagInfo>>

    onTagClick(tagName: string)
}
class TagsCloud extends React.Component<TagsCloudProps> {
    render() {
        const lines = this.props.tagLines.map(tagLine => <TagsLine 
            tags={tagLine}
            // key={tagLine.reduce((curr, next) => curr + next.name, "")}
            onTagClick={this.props.onTagClick}
        />)
        return <Column>
            {lines}
        </Column>
    }
}

interface TagInfo {
    name: string
}
interface TagsLineProps {
    tags: Array<TagInfo>

    onTagClick(tagName: string)
}
class TagsLine extends React.Component<TagsLineProps> {
    render() {
        const columns = this.props.tags.map(tag => {
            return <Column>
                <Tag 
                    text={tag.name}
                    // key={tag.name}
                    onClick={() => this.props.onTagClick(tag.name)}
                />
            </Column>
        })

        return <Row>
            {columns}
        </Row>
    }
}

interface TagProps {
    text: string

    onClick(): void
}
class Tag extends React.Component<TagProps> {
    render() {
        return React.createElement("button", { 
            className: 'button button--secondary', 
            onClick: this.props.onClick 
        }, this.props.text)
    }
}