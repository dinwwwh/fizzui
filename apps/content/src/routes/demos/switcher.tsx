import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { Switch, SwitchThumb } from '@radix-ui/react-switch'
import { createFileRoute } from '@tanstack/react-router'
import { switcher } from '@fizzui/styles'

export const Route = createFileRoute('/demos/switcher')({
  component: SwitcherDemoPage,
})

function SwitcherDemoPage() {
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
