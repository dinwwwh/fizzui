import '@fontsource-variable/inter'
import './globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '@radix-ui/react-scroll-area'
import { scrollArea } from '@fizzui/styles'
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollArea className={`${scrollArea}`} style={{ height: '100vh' }}>
      <ScrollAreaViewport>
        <App />

        <div style={{ height: '100vh' }} />
      </ScrollAreaViewport>

      <ScrollAreaScrollbar className={`${scrollArea.bar}`} orientation="vertical">
        <ScrollAreaThumb className={`${scrollArea.thumb}`} />
      </ScrollAreaScrollbar>
    </ScrollArea>
  </React.StrictMode>,
)
