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
        const a = document.createElement('a')
        a.style.textAlign = 'left'
      
        const nodeText = text.length <= 50 ? text : text.substr(0, 50) + '...'
        const node = document.createTextNode(nodeText)
      
        a.appendChild(node)
        a.appendChild(document.createElement('br'))
        a.appendChild(document.createElement('hr'))
        a.onclick = callback
      
        return a
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
        p.style.textAlign = 'left'
        const node = document.createTextNode("Ничего не найдено!")
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
    inputView: HTMLInputElement
    indexOnSearchView: HTMLInputElement
    responseNode: Node & ParentNode

    constructor(inputView: HTMLInputElement, indexOnSearchView: HTMLInputElement, responseNode: Node & ParentNode) {
        this.inputView = inputView
        this.indexOnSearchView = indexOnSearchView
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