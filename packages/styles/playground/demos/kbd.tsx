import { kbd } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function CodeDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <kbd className={`${kbd}`}>
          Ctrl + C
        </kbd>

        <kbd className={`${kbd}`}>
          &#8984; + C
        </kbd>

        <div>
          <kbd className={`${kbd}`}>
            &#8984;
          </kbd>
          &nbsp; + &nbsp;
          <kbd className={`${kbd}`}>
            C
          </kbd>
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}
