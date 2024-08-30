import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '@radix-ui/react-scroll-area'
import { scrollArea } from 'src'

const demos = import.meta.glob('./demos/*.tsx', { eager: true })

const router = createBrowserRouter([
  {
    path: 'demos',
    children: Object.entries(demos).map(([path, module]) => {
      const Comp = (module as any).default

      return ({
        path: path.replace('./demos/', '').replace('.tsx', ''),
        element: <Comp />,
      })
    }),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollArea className={`${scrollArea}`} style={{ height: '100vh' }}>
      <ScrollAreaViewport className={`${scrollArea.viewport}`}>
        <RouterProvider router={router} />
      </ScrollAreaViewport>

      <ScrollAreaScrollbar className={`${scrollArea.bar}`} orientation="vertical">
        <ScrollAreaThumb className={`${scrollArea.thumb}`} />
      </ScrollAreaScrollbar>
    </ScrollArea>
  </React.StrictMode>,
)
