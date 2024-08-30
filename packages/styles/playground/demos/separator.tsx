import { separator } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function SeparatorDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <div className={`${separator({ color: 'base-100' })}`} />
      </DemoFlexRow>
      <DemoFlexRow>
        <div className={`${separator}`} />
      </DemoFlexRow>
      <DemoFlexRow>
        <div className={`${separator({ color: 'base-300' })}`} />
      </DemoFlexRow>

      <DemoFlexRow>
        <div style={{ height: '100px' }}>
          <div className={`${separator({ orientation: 'vertical' })}`} />
        </div>
        <div style={{ height: '100px' }}>
          <div data-orientation="vertical" className={`${separator}`} />
        </div>

        <div style={{ height: '100px', width: '100px' }}>
          <div data-orientation="horizontal" className={`${separator}`} />
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}
