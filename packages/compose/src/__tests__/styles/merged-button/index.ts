import { compose } from '@compose/compose'
import { mergeRF } from '@compose/utils'
import { buttonRoot } from '../button/ui.css'
import { extendedButtonRoot } from './ui.css'

export const mergedButtonRoot = mergeRF(buttonRoot, extendedButtonRoot)

export const mergedButton = compose({
  root: mergedButtonRoot,
})
