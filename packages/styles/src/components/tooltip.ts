import { compose } from '@fizzui/compose'
import { tooltipArrow, tooltipRoot, tooltipSub } from './tooltip.css'

export const tooltip = compose({
  root: tooltipRoot,
  arrow: tooltipArrow,
  sub: tooltipSub,
})
