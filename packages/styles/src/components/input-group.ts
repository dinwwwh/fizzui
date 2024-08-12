import { compose, mergeDefaultVariants, mergeRootRF } from '@fizzui/compose'
import { inputGroupButton, inputGroupIcon, inputGroupInput, inputGroupRoot, inputGroupSeparator } from './input-group.css'
import { button } from './button'
import { separator } from './separator'

export const inputGroup = compose({
  root: inputGroupRoot,
  input: inputGroupInput,
  icon: inputGroupIcon,
  separator: inputGroupSeparator, // Cannot use global separator because it's need custom height

  button: mergeDefaultVariants(mergeRootRF(button, inputGroupButton), { size: 'sm' }),
})
