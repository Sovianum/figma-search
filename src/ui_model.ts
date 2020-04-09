import {MessageType} from './messages'

export class SearchResultItem {
    id: string
    view: Element

    constructor(id: string, text: string) {
        this.id = id
        this.view = this.createSearchResultItemView(text, () => this.onClick())
    }

    onClick() {
        if (!this.id) {
            return
        }
        
        parent.postMessage({ pluginMessage: { type: MessageType.NavigateToNode, id: this.id } }, '*')
    }

    createSearchResultItemView(text: string, callback): Element {
        const p = document.createElement('p')
        p.className = 'type type--pos-small-normal'
      
        const nodeText = text.length <= 50 ? text : text.substr(0, 50) + '...'
        const node = document.createTextNode(nodeText)
        p.appendChild(node)
        
        const divider = document.createElement('div')
        divider.className = 'divider'

        p.appendChild(divider)

        p.onclick = callback
      
        return p
    }
}

class SearchResults {
    static some(items: Array<SearchResultItem>): SearchResults {
        const result = new SearchResults() 
        result.items = items

        result.view = SearchResults.createView()
        result.items.forEach(item => {
            result.view.appendChild(item.view)
        })

        return result
    }

    static none(): SearchResults {
        const result = new SearchResults()
        result.view = SearchResults.createView()

        const p = document.createElement('p')
        p.style.color = 'ff0000'
        p.className = 'type type--pos-large-normal'
        const node = document.createTextNode("Nothing found!")
        p.appendChild(node)
        result.view.appendChild(p)

        return result
    }

    view: Element
    items: Array<SearchResultItem>

    static createView(): Element {
        return document.createElement('div')
    }

    destroy() {
        this.view.parentNode.removeChild(this.view)
    }
}

export class UIModel {
    rebuildIndexOnTheFly: boolean
    searchResult: SearchResults
    headerView: Node & ParentNode
    inputView: HTMLInputElement
    indexOnSearchView: HTMLInputElement
    reindexView: HTMLInputElement
    responseNode: Node & ParentNode

    constructor(
        headerView: Node & ParentNode,
        inputView: HTMLInputElement, 
        indexOnSearchView: HTMLInputElement,
        reindexView: HTMLInputElement,
        responseNode: Node & ParentNode
    ) {
        this.headerView = headerView
        this.inputView = inputView
        this.indexOnSearchView = indexOnSearchView
        this.reindexView = reindexView
        this.responseNode = responseNode

        this.inputView.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
              event.preventDefault()

              parent.postMessage({ pluginMessage: { 
                type: MessageType.SearchRequest, 
                text: inputView.value,
                indexOnSearch: indexOnSearchView.checked
               } }, '*')
            }
        })

        const model = this

        this.reindexView.onclick = function(_) {
            model.startLoading()

            parent.postMessage({ pluginMessage: { 
                type: MessageType.ReindexStart
            } }, '*')
        }
    }

    startLoading() {
        this.headerView.appendChild(this.createLoaderView())
    }

    stopLoading() {
        const loader = document.getElementById('loader')
        loader.parentElement.removeChild(loader)
    }

    createLoaderView(): Node {
        const bellDiv = document.createElement('span')
        bellDiv.className = "visual-bell__spinner"
        bellDiv.style.float = 'right'
        bellDiv.id = "loader"
        return bellDiv
    }

    updateSearchResult(results: Array<SearchResultItem>) {
        if (this.searchResult) {
            this.searchResult.destroy()
            this.searchResult = null
        }

        if (results.length > 0) {
            this.searchResult = SearchResults.some(results)
        } else {
            this.searchResult = SearchResults.none()
        }

        this.responseNode.appendChild(this.searchResult.view)
    }
}