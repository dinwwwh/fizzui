import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { createFileRoute } from '@tanstack/react-router'
import { Slider, SliderRange, SliderThumb, SliderTrack } from '@radix-ui/react-slider'
import { slider } from '@fizzui/styles'

export const Route = createFileRoute('/demos/slider')({
  component: SliderDemoPage,
})

function SliderDemoPage() {
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
