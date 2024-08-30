import { Switch, SwitchThumb } from '@radix-ui/react-switch'
import { switcher } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function SwitcherDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Switch className={`${switcher}`}>
          <SwitchThumb className={`${switcher.thumb}`} />
        </Switch>
        <Switch className={`${switcher}`} disabled>
          <SwitchThumb className={`${switcher.thumb}`} />
        </Switch>
        <Switch className={`${switcher}`} checked disabled>
          <SwitchThumb className={`${switcher.thumb}`} />
        </Switch>
      </DemoFlexRow>
    </DemoContainer>
  )
}
