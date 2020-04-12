import './static/ds.min.css'
import './static/ds.min.js'
import {MessageType, SearchResponse, PluginMessage} from './message/messages'

import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { App } from './ui/app'

let app: App = null
ReactDOM.render(<App ref={ref => app = ref}/>, document.getElementById('react-page'))

onmessage = event => {
  if (!app) {
    console.log('initialising')
    return
  }

  console.log(event)

  const msg = event.data.pluginMessage as PluginMessage
  switch (msg.type) {
    case MessageType.SearchResponse:
      app.onSearchResultsUpdated(msg.data as Array<SearchResponse>)
      break

    case MessageType.ReindexFinish:
      app.finishReindexing()
      break

    case MessageType.NodeNotFound:
      app.onNodeNotFound(msg.data as string)
      break

    case MessageType.NoSearchIndex:
      app.onIndexNotFound()
      break
  }
}