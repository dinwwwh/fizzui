import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { button, title } from '@fizzui/styles'
import { IconDownload, IconMenu2, IconUpload } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/button')({
  component: ButtonDemoPage,
})

function ButtonDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <button className={button({}).toString()}>
          <IconUpload className={button({}).icon.toString()} />
          Upload
        </button>

        <a href="#" className={button({ square: true }).toString()}>
          <IconMenu2 className={button({ square: true }).icon({ align: 'center' }).toString()} />
        </a>

        <a href="#" className={button({ square: true }).toString()} data-disabled>
          <IconMenu2 className={button({ square: true }).icon({ align: 'center' }).toString()} />
        </a>

        <button className={button({ size: 'sm' }).toString()}>
          Download
          <IconDownload className={button({ size: 'sm' }).icon({ align: 'end' }).toString()} />
        </button>

        <a href="#" className={button({ square: true, size: 'sm' }).toString()}>
          <IconMenu2 className={button({ square: true, size: 'sm' }).icon({ align: 'center' }).toString()} />
        </a>
      </DemoFlexRow>

      <h2 className={`${title({ size: 'lg' })}`}>Ghost</h2>
      <DemoFlexRow>
        <a href="#" className={button({ variant: 'ghost', square: true, size: 'sm' }).toString()}>
          <IconMenu2 className={button({ variant: 'ghost', square: true, size: 'sm' }).icon({ align: 'center' }).toString()} />
        </a>

        <a href="#" className={button({ variant: 'ghost', square: true, size: 'sm' }).toString()} data-disabled>
          <IconMenu2 className={button({ variant: 'ghost', square: true, size: 'sm' }).icon({ align: 'center' }).toString()} />
        </a>
      </DemoFlexRow>
    </DemoContainer>
  )
}
