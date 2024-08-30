import { code } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function CodeDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <code className={`${code}`}>
          variant
        </code>

        <code className={`${code}`}>
          variant
        </code>
      </DemoFlexRow>
    </DemoContainer>
  )
}
