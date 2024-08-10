import { compose } from '@fizzui/compose'
import { toggleGroupRoot } from './toggle-group.css'
import { toggle } from './toggle'

export const toggleGroup = compose({
  root: toggleGroupRoot,
  item: toggle,
})
