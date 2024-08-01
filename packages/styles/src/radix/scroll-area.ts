import { compose } from '@fizzui/compose'
import { scrollAreaBar, scrollAreaRoot, scrollAreaThumb } from './scroll-area.css'

export const scrollArea = compose({
  root: scrollAreaRoot,
  bar: scrollAreaBar,
  thumb: scrollAreaThumb,
})
