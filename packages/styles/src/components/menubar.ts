import { compose, mergeDefaultVariants } from '@fizzui/compose'
import { menubarRoot } from './menubar.css'
import { menu } from './menu'
import { button } from './button'

export const menubar = compose({
  root: menubarRoot,
  trigger: mergeDefaultVariants(button, { variant: 'ghost' }),

  menu,
})
