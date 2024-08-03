import { compose } from '@fizzui/compose'
import { sliderRange, sliderRoot, sliderThumb, sliderTrack } from './slider.css'

export const slider = compose({
  root: sliderRoot,
  track: sliderTrack,
  range: sliderRange,
  thumb: sliderThumb,
})
