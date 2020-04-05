import './ui.css'
import {MessageType, SearchResponse, PluginMessage} from './messages'
import {UIModel, SearchResultItem} from './ui_model'

const model = new UIModel(
  document.getElementById('search_input') as HTMLInputElement,
  document.getElementById('search_div')
)
model.inputView.focus()

onmessage = event => {
  const msg = event.data.pluginMessage as PluginMessage
  switch (msg.type) {
    case MessageType.SearchResponse:
      const items = (msg.data as Array<SearchResponse>).map(resp => new SearchResultItem(resp.id, resp.text))
      model.updateSearchResult(items)
  }
}