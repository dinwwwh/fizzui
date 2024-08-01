import { IconDownload, IconMenu2, IconUpload } from '@tabler/icons-react'
import { button } from '@fizzui/styles'
import classes from './styles.module.css'

export function ButtonDemo() {
  return (
    <div className={classes.container}>
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

      <a href="#" className={button({ variant: 'ghost', square: true, size: 'sm' }).toString()}>
        <IconMenu2 className={button({ variant: 'ghost', square: true, size: 'sm' }).icon({ align: 'center' }).toString()} />
      </a>

      <a href="#" className={button({ variant: 'ghost', square: true, size: 'sm' }).toString()} data-disabled>
        <IconMenu2 className={button({ variant: 'ghost', square: true, size: 'sm' }).icon({ align: 'center' }).toString()} />
      </a>
    </div>
  )
}
