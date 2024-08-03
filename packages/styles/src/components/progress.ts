import { compose } from '@fizzui/compose'
import { progressIndicator, progressRoot } from './progress.css'

export const progress = compose({
  root: progressRoot,
  indicator: progressIndicator,
})
