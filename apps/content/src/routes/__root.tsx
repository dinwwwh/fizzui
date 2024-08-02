import { scrollArea } from '@fizzui/styles'
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '@radix-ui/react-scroll-area'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <ScrollArea className={`${scrollArea}`} style={{ height: '100vh' }}>
      <ScrollAreaViewport className={`${scrollArea.viewport}`}>
        <Outlet />
      </ScrollAreaViewport>

      <ScrollAreaScrollbar className={`${scrollArea.bar}`} orientation="vertical">
        <ScrollAreaThumb className={`${scrollArea.thumb}`} />
      </ScrollAreaScrollbar>
    </ScrollArea>
  )
}
