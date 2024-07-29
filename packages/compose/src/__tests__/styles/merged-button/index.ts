import { compose } from '@compose/compose'
import { mergeRFs } from '@compose/utils'
import { buttonRoot } from '../button/ui.css'
import { extendedButtonRoot } from './ui.css'

export const mergedButtonRoot = mergeRFs(buttonRoot, extendedButtonRoot)

export const mergedButton = compose({
  root: mergedButtonRoot,
})
