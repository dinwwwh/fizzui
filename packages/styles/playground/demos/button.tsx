import { IconDownload, IconMenu2, IconUpload } from '@tabler/icons-react'
import { button, title } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function ButtonDemo() {
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

        <button className={button({ square: true }).toString()} disabled>
          <IconMenu2 className={button({ square: true }).icon({ align: 'center' }).toString()} />
        </button>

        <button className={button({ size: 'sm' }).toString()}>
          Download
          <IconDownload className={button({ size: 'sm' }).icon({ align: 'end' }).toString()} />
        </button>

        <a href="#" className={button({ square: true, size: 'sm' }).toString()}>
          <IconMenu2 className={button({ square: true, size: 'sm' }).icon({ align: 'center' }).toString()} />
        </a>
      </DemoFlexRow>

      <h2 className={`${title({ size: 'lg' })}`}>Outline</h2>
      <DemoFlexRow>
        <button className={button({ variant: 'outline' }).toString()}>
          <IconUpload className={button({ variant: 'outline' }).icon.toString()} />
          Upload
        </button>

        <a href="#" className={button({ square: true, variant: 'outline' }).toString()}>
          <IconMenu2 className={button({ square: true, variant: 'outline' }).icon({ align: 'center' }).toString()} />
        </a>

        <a href="#" className={button({ square: true, variant: 'outline' }).toString()} data-disabled>
          <IconMenu2 className={button({ square: true, variant: 'outline' }).icon({ align: 'center' }).toString()} />
        </a>

        <button className={button({ size: 'sm', variant: 'outline' }).toString()}>
          Download
          <IconDownload className={button({ size: 'sm', variant: 'outline' }).icon({ align: 'end' }).toString()} />
        </button>

        <a href="#" className={button({ square: true, size: 'sm', variant: 'outline' }).toString()}>
          <IconMenu2 className={button({ square: true, size: 'sm', variant: 'outline' }).icon({ align: 'center' }).toString()} />
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
