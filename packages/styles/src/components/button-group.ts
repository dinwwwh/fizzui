import { compose, mapInheritedVariants, mergeRootRF } from '@fizzui/compose'
import { buttonGroupItem, buttonGroupRoot } from './button-group.css'
import { button } from './button'

export const buttonGroup = compose({
  root: buttonGroupRoot,
  item: mapInheritedVariants(mergeRootRF(button, buttonGroupItem), variants => ({
    variant: 'outline',
    ...variants,
  })),
})
