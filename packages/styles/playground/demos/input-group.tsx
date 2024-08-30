import { IconCopy, IconCreditCard, IconEdit, IconHelp, IconLink, IconMail } from '@tabler/icons-react'
import { inputGroup } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function InputGroupDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <div className={`${inputGroup}`}>
          <IconCreditCard className={`${inputGroup.icon}`} />
          <input className={`${inputGroup.input}`} placeholder="Card number" />
        </div>

        <div className={`${inputGroup}`}>
          <IconCreditCard className={`${inputGroup.icon}`} />
          <input className={`${inputGroup.input}`} placeholder="Card number" defaultValue="1234 5678 9012 3456" disabled />
          <IconHelp className={`${inputGroup.icon({ sub: true })}`} />
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${inputGroup}`}>
          <IconMail className={`${inputGroup.icon}`} />
          <div className={`${inputGroup.separator}`} />
          <input className={`${inputGroup.input}`} placeholder="Your email" />
        </div>
        <div className={`${inputGroup}`}>
          <IconMail className={`${inputGroup.icon}`} />
          <input className={`${inputGroup.input}`} placeholder="Your email" defaultValue="john@doe.com" />
          <IconHelp className={`${inputGroup.icon({ sub: true })}`} />

          <div className={`${inputGroup.separator}`} />
          <button className={`${inputGroup.button({ variant: 'ghost' })}`}>
            <IconCopy className={`${inputGroup.button.icon}`} />
            Copy
          </button>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <form className={`${inputGroup}`} onSubmit={e => e.preventDefault()}>
          <IconLink className={`${inputGroup.icon}`} />
          <input className={`${inputGroup.input}`} placeholder="Enter link" name="link" required />

          <button className={`${inputGroup.button}`}>
            <IconEdit className={`${inputGroup.button.icon}`} />
            Edit
          </button>
        </form>
      </DemoFlexRow>
    </DemoContainer>
  )
}
