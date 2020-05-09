import * as React from 'react'
import { Column, Row } from 'simple-flexbox';
import { splitInChunks, getUniqueID, hashFnv32a } from '../util';
import { Input } from '../common/input';

export enum TagType {
    Existing = "existing",
    Available = "available"
}

export enum TagMenuAction {
    Remove = "remove"
}

interface TagsPanelProps {
    existingTags: Array<TagInfo>
    availableTags: Array<TagInfo>

    onTagClick(tagName: string, tagType: TagType)
    onTagMenyItemClick(tagName: string, action: TagMenuAction, tagType: TagType)

    onAddTagSubmit(input: string)
}
export class TagsPanel extends React.Component<TagsPanelProps> {
    render() {
        return <Column>
            <p className="type type--pos-medium-normal">Current tags</p>
            <Row>
                <TagsCloud 
                    tags={this.props.existingTags}
                    onTagClick={tagName => this.props.onTagClick(tagName, TagType.Existing)}
                    onTagMenuItemClick={(tagName, action) => this.props.onTagMenyItemClick(tagName, action, TagType.Existing)}
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
                    onTagClick={tagName => this.props.onTagClick(tagName, TagType.Available)}
                    onTagMenuItemClick={(tagName, action) => this.props.onTagMenyItemClick(tagName, action, TagType.Available)}
                />
            </Row>
        </Column>
    }
}

interface TagsCloudProps {
    tags: Array<TagInfo>

    onTagClick(tagName: string)
    onTagMenuItemClick(tagName: string, action: TagMenuAction)
}
class TagsCloud extends React.Component<TagsCloudProps> {
    render() {
        return <Column>
            <TagsLine 
                tags={this.props.tags}
                onTagClick={this.props.onTagClick}
                onTagMenuItemClick={this.props.onTagMenuItemClick}
                
                key={getUniqueID()}
            />
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
    onTagMenuItemClick(tagName: string, action: TagMenuAction)
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
                        action: TagMenuAction.Remove
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
    action: TagMenuAction
}

interface TagProps {
    text: string
    tagClass: string
    menuOptions: Array<TagMenuOption>

    onTagClick(): void
    onMenuItemClick(action: TagMenuAction): void
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
                            className: "item type type--pos-medium-normal", 
                            onClick: () => this.props.onMenuItemClick(option.action),
                            key: option.name 
                        }, option.name))
                    }
                </div>
            </div>
        </div>
    }
}