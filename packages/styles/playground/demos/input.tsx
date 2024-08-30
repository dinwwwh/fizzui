import { button, input } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function InputDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <input className={`${input}`} placeholder="First name" />
        <input className={`${input({ size: 'sm' })}`} placeholder="Last name" />
        <input className={`${input({ size: 'sm' })}`} value="Disabled" disabled />
      </DemoFlexRow>

      <DemoFlexRow>
        <div style={{ position: 'relative' }}>
          <input className={`${input}`} placeholder="Enter your name" />
          <button className={`${button({ size: 'sm' })}`} style={{ position: 'absolute', right: 4, top: 4 }}>
            Save
          </button>
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}
