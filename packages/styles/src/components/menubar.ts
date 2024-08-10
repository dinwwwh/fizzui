import { compose, mapInheritedVariants } from '@fizzui/compose'
import { menubarRoot } from './menubar.css'
import { menu } from './menu'
import { button } from './button'

export const menubar = compose({
  root: menubarRoot,
  trigger: mapInheritedVariants(button, variants => ({
    variant: 'ghost',
    ...variants,
  })),

  menu,
})
