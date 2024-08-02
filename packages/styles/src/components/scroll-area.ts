import { compose } from '@fizzui/compose'
import { scrollAreaBar, scrollAreaRoot, scrollAreaThumb, scrollAreaViewport } from './scroll-area.css'

export const scrollArea = compose({
  root: scrollAreaRoot,
  viewport: scrollAreaViewport,
  bar: scrollAreaBar,
  thumb: scrollAreaThumb,
})
