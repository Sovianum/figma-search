import * as React from 'react'
import { Column, Row } from 'simple-flexbox';
import { splitInChunks, getUniqueID, hashFnv32a } from '../util';
import { Input } from '../common/input';

interface TagsPanelProps {
    existingTags: Array<TagInfo>
    onExistingTagClick(tagName: string)

    availableTags: Array<TagInfo>
    onAvailableTagClick(tagName: string)
    onAddTagSubmit(input: string)
}
export class TagsPanel extends React.Component<TagsPanelProps> {
    render() {
        return <Column>
            <p className="type type--pos-medium-normal">Current tags</p>
            <Row>
                <TagsCloud 
                    tags={this.props.existingTags}
                    onTagClick={this.props.onExistingTagClick}
                    onTagMenuItemClick={(tagName, action) => console.log(tagName, action)}
                />
            </Row>
            <p className="type type--pos-medium-normal">All tags</p>
            <Row>
                <AddTagInput 
                    onSubmit={this.props.onAddTagSubmit}
                />
            </Row>
            <Row>
                <TagsCloud 
                    tags={this.props.availableTags}
                    onTagClick={this.props.onAvailableTagClick}
                    onTagMenuItemClick={(tagName, action) => console.log(tagName, action)}
                />
            </Row>
        </Column>
    }
}

interface TagsCloudProps {
    tags: Array<TagInfo>

    onTagClick(tagName: string)
    onTagMenuItemClick(tagName: string, action: TagMenuOptionAction)
}
class TagsCloud extends React.Component<TagsCloudProps> {
    render() {
        const lines = splitInChunks(this.props.tags, 5).map(tagLine => <TagsLine 
            tags={tagLine}
            onTagClick={this.props.onTagClick}
            onTagMenuItemClick={this.props.onTagMenuItemClick}
            
            key={getUniqueID()}
        />)
        
        return <Column>
            {lines}
        </Column>
    }
}

class AddTagInput extends Input {
    getPlaceholder(): string {
        return "Add tag"
    }
}

export interface TagInfo {
    name: string
}
interface TagsLineProps {
    tags: Array<TagInfo>

    onTagClick(tagName: string)
    onTagMenuItemClick(tagName: string, action: TagMenuOptionAction)
}
class TagsLine extends React.Component<TagsLineProps> {
    render() {
        const allTagClassNames = [
            "tag-green",
            "tag-blue",
            "tag-purple",
            "tag-orange"
        ]

        const columns = this.props.tags.map(tag => {
            return <Column key={"column_" + tag.name}>
                <Tag 
                    text={tag.name}
                    tagClass={allTagClassNames[hashFnv32a(tag.name) % allTagClassNames.length]}
                    menuOptions={[{
                        name: "Remove",
                        action: TagMenuOptionAction.Remove
                    }]}

                    onTagClick={() => this.props.onTagClick(tag.name)}
                    onMenuItemClick={action => this.props.onTagMenuItemClick(tag.name, action)}

                    key={tag.name}
                />
            </Column>
        })

        return <Row horizontal="center" wrap={true}>
            {columns}
        </Row>
    }
}

interface TagMenuOption {
    name: string
    action: TagMenuOptionAction
}

export enum TagMenuOptionAction {
    Remove = "remove"
}

interface TagProps {
    text: string
    tagClass: string
    menuOptions: Array<TagMenuOption>

    onTagClick(): void
    onMenuItemClick(action: TagMenuOptionAction): void
}
class Tag extends React.Component<TagProps> {
    render() {
        const tagLHS = React.createElement("button", { 
            className: "tag-content-left", 
            onClick: this.props.onTagClick 
        }, this.props.text)

        return <div className={this.props.tagClass}>
            {tagLHS}
            <div className="dropdown">
                <button className="tag-content-right">▾</button>
                <div className="dropdown-content">
                    {
                        this.props.menuOptions.map(option => React.createElement("a", { 
                            className: "item", 
                            onClick: () => this.props.onMenuItemClick(option.action),
                            key: option.name 
                        }, option.name))
                    }
                </div>
            </div>
        </div>
    }
}