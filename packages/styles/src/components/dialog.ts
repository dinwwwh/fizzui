import { compose } from '@fizzui/compose'
import { dialogOverlay, dialogRoot } from './dialog.css'

export const dialog = compose({
  root: dialogRoot,
  overlay: dialogOverlay,
})
