import './static/ds.min.css'
import './static/ds.min.js'
import {MessageType, SearchResponse, PluginMessage} from './messages'
import {UIModel, SearchResultItem} from './ui_model'

const model = new UIModel(
  document.getElementById('header'),
  document.getElementById('search_input') as HTMLInputElement,
  document.getElementById('index_on_search') as HTMLInputElement,
  document.getElementById('reindex') as HTMLInputElement,
  document.getElementById('search_div')
)
model.inputView.focus()

onmessage = event => {
  const msg = event.data.pluginMessage as PluginMessage
  switch (msg.type) {
    case MessageType.SearchResponse:
      const items = (msg.data as Array<SearchResponse>).map(resp => new SearchResultItem(resp.id, resp.text))
      model.updateSearchResult(items)

    case MessageType.ReindexFinish:
      model.stopLoading()
  }
}