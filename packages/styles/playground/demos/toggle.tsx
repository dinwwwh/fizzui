import { Toggle } from '@radix-ui/react-toggle'
import { IconBold, IconItalic } from '@tabler/icons-react'
import { button, toggle } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function ToggleDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Toggle className={`${toggle}`}>
          <IconItalic className={`${toggle.icon}`} />
        </Toggle>

        <Toggle className={`${toggle}`} pressed>
          <IconBold className={`${toggle.icon}`} />
        </Toggle>

        <Toggle className={`${toggle}`} disabled>
          <IconItalic className={`${toggle.icon}`} />
        </Toggle>

        <Toggle className={`${toggle}`} pressed disabled>
          <IconBold className={`${toggle.icon}`} />
        </Toggle>
      </DemoFlexRow>

      <DemoFlexRow>
        <Toggle className={`${toggle({ size: 'sm' })}`}>
          <IconItalic className={`${toggle({ size: 'sm' }).icon}`} />
        </Toggle>

        <Toggle className={`${toggle({ size: 'sm' })}`} pressed>
          <IconBold className={`${toggle({ size: 'sm' }).icon}`} />
        </Toggle>

        <Toggle className={`${toggle({ size: 'sm' })}`} disabled>
          <IconItalic className={`${toggle({ size: 'sm' }).icon}`} />
        </Toggle>

        <Toggle className={`${toggle({ size: 'sm' })}`} pressed disabled>
          <IconBold className={`${toggle({ size: 'sm' }).icon}`} />
        </Toggle>
      </DemoFlexRow>

      <DemoFlexRow>
        <Toggle className={`${toggle({ square: false })}`}>
          <IconBold className={`${toggle({ square: false }).icon({ align: 'start' })}`} />
          Italic
        </Toggle>
        <Toggle className={`${toggle({ size: 'sm', square: false })}`}>
          Italic
          <IconBold className={`${toggle({ size: 'sm', square: false }).icon({ align: 'end' })}`} />
        </Toggle>

        <button className={`${button({ variant: 'ghost', size: 'sm' })}`}>
          <IconBold className={`${button({ variant: 'ghost', size: 'sm' }).icon({ align: 'end' })}`} />
          Compare to button
        </button>
      </DemoFlexRow>
    </DemoContainer>
  )
}
