import * as React from 'react'
import { Column, Row } from 'simple-flexbox';
import { splitInChunks, getUniqueID } from '../util';

interface TagsPanelProps {
    existingTags: Array<TagInfo>
    onExistingTagClick(tagName: string)

    availableTags: Array<TagInfo>
    onAvailableTagClick(tagName: string)
}
export class TagsPanel extends React.Component<TagsPanelProps> {
    render() {
        return <Column>
            <p className="type type--pos-medium-normal">Current tags</p>
            <Row>
                <TagsCloud 
                    tags={this.props.existingTags}
                    onTagClick={this.props.onExistingTagClick}
                />
            </Row>
            <p className="type type--pos-medium-normal">All tags</p>
            <Row>
                <TagsCloud 
                    tags={this.props.availableTags}
                    onTagClick={this.props.onAvailableTagClick}
                />
            </Row>
        </Column>
    }
}

interface TagsCloudProps {
    tags: Array<TagInfo>

    onTagClick(tagName: string)
}
class TagsCloud extends React.Component<TagsCloudProps> {
    render() {
        const lines = splitInChunks(this.props.tags, 5).map(tagLine => <TagsLine 
            tags={tagLine}
            key={getUniqueID()}
            onTagClick={this.props.onTagClick}
        />)
        
        return <Column>
            {lines}
        </Column>
    }
}

export interface TagInfo {
    name: string
}
interface TagsLineProps {
    tags: Array<TagInfo>

    onTagClick(tagName: string)
}
class TagsLine extends React.Component<TagsLineProps> {
    render() {
        const allTagClassNames = [
            "tag-green",
            "tag-blue",
            "tag-purple",
            "tag-red"
        ]

        const columns = this.props.tags.map((tag, i) => {
            return <Column key={"column_" + tag.name}>
                <Tag 
                    text={tag.name}
                    tagClass={allTagClassNames[i % allTagClassNames.length]}
                    key={tag.name}
                    onClick={() => this.props.onTagClick(tag.name)}
                />
            </Column>
        })

        return <Row horizontal="center">
            {columns}
        </Row>
    }
}

interface TagProps {
    text: string
    tagClass: string

    onClick(): void
}
class Tag extends React.Component<TagProps> {
    render() {
        return React.createElement("button", { 
            className: this.props.tagClass, 
            onClick: this.props.onClick 
        }, this.props.text)
    }
}