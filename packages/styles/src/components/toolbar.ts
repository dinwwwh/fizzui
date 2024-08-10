import { compose, mapInheritedVariants } from '@fizzui/compose'
import { toolbarLink, toolbarRoot } from './toolbar.css'
import { button } from './button'
import { separator } from './separator'
import { toggleGroup } from './toggle-group'

export const toolbar = compose({
  root: toolbarRoot,
  separator: mapInheritedVariants(separator, variants => ({
    orientation: 'vertical',
    insideFlex: true,
    color: 'base-100',
    ...variants,
  })),
  link: toolbarLink,

  button,
  toggleGroup,
})
