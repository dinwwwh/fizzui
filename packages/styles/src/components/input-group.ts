import { compose, mapInheritedVariants, mergeRootRF } from '@fizzui/compose'
import { inputGroupButton, inputGroupIcon, inputGroupInput, inputGroupRoot, inputGroupSeparator } from './input-group.css'
import { button } from './button'

export const inputGroup = compose({
  root: inputGroupRoot,
  input: inputGroupInput,
  icon: inputGroupIcon,
  separator: inputGroupSeparator,

  button: mapInheritedVariants(
    mergeRootRF(button, inputGroupButton),
    variants => ({ ...variants, size: 'sm' }),
  ),
})
