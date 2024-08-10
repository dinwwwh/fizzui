import { compose, mergeDefaultVariants, mergeRootRF } from '@fizzui/compose'
import { buttonGroupItem, buttonGroupRoot } from './button-group.css'
import { button } from './button'

export const buttonGroup = compose({
  root: buttonGroupRoot,
  item: mergeDefaultVariants(mergeRootRF(button, buttonGroupItem), { variant: 'outline' }),
})
