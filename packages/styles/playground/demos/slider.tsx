import { Slider, SliderRange, SliderThumb, SliderTrack } from '@radix-ui/react-slider'
import { slider } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function SliderDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Slider className={`${slider}`}>
          <SliderTrack className={`${slider.track}`}>
            <SliderRange className={`${slider.range}`} />
          </SliderTrack>
          <SliderThumb className={`${slider.thumb}`} />
        </Slider>
      </DemoFlexRow>

      <DemoFlexRow>
        <Slider className={`${slider}`} value={[40, 60]} disabled>
          <SliderTrack className={`${slider.track}`}>
            <SliderRange className={`${slider.range}`} />
          </SliderTrack>
          <SliderThumb className={`${slider.thumb}`} />
          <SliderThumb className={`${slider.thumb}`} />
        </Slider>
      </DemoFlexRow>
    </DemoContainer>
  )
}
