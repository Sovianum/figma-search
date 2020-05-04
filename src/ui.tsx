import './static/ds.min.css'
import './static/ds.min.js'
import './styles/tabs.scss'
import './styles/tags.scss'
import {MessageType, SearchResponse, PluginMessage, SelectionTagsState} from './ts/message/messages'

import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { App } from './ts/ui/app'
import { UserSettings } from './ts/settings/settings'
import { Tag } from './ts/domain/tags/tags'

let app: App = null
ReactDOM.render(<App ref={ref => {
  app = ref
  app.loadSettings()
  app.loadIndex()
}}/>, document.getElementById('react-page'))

onmessage = event => {
  if (!app) {
    console.log('initialising')
    return
  }

  console.log(event)

  const msg = event.data.pluginMessage as PluginMessage
  if (!msg) {
    return
  }
  switch (msg.type) {
    case MessageType.SearchResponse:
      app.onSearchResultsUpdated(msg.data as Array<SearchResponse>)
      break

    case MessageType.ReindexFinish:
      app.finishReindexing()
      break

    case MessageType.IndexLoadFinish:
      app.finishLoadingIndex()
      break

    case MessageType.NodeNotFound:
      app.onNodeNotFound(msg.data as string)
      break

    case MessageType.NoSearchIndex:
      app.onIndexNotFound()
      break

    case MessageType.UserSettingsUpdateFinish:
      const settings = JSON.parse(msg.data) as UserSettings
      app.onSettingsUpdateFinished(settings)
      break

    case MessageType.UpdateTags:
      app.onTagsUpdated(msg.data as SelectionTagsState)
  }
}