import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { Switch, SwitchThumb } from '@radix-ui/react-switch'
import { createFileRoute } from '@tanstack/react-router'
import { toggleSwitch } from '@fizzui/styles'

export const Route = createFileRoute('/demos/toggle-switch')({
  component: SwitchDemoPage,
})

function SwitchDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Switch className={`${toggleSwitch}`}>
          <SwitchThumb className={`${toggleSwitch.thumb}`} />
        </Switch>
        <Switch className={`${toggleSwitch}`} disabled>
          <SwitchThumb className={`${toggleSwitch.thumb}`} />
        </Switch>
        <Switch className={`${toggleSwitch}`} checked disabled>
          <SwitchThumb className={`${toggleSwitch.thumb}`} />
        </Switch>
      </DemoFlexRow>
    </DemoContainer>
  )
}
