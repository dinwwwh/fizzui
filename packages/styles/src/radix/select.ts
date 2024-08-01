import { compose } from '@fizzui/compose'
import { selectItem, selectItemIndicator, selectLabel, selectRoot, selectScrollButton, selectScrollButtonIcon, selectSeparator, selectViewport } from './select.css'

export const select = compose({
  root: selectRoot,
  viewport: selectViewport,
  item: {
    root: selectItem,
    indicator: selectItemIndicator,
  },

  scrollButton: {
    root: selectScrollButton,
    icon: selectScrollButtonIcon,
  },
  label: selectLabel,
  separator: selectSeparator,
})
