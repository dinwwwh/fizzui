import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { checkbox } from '@fizzui/styles'
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/checkbox')({
  component: CheckboxDemoPage,
})

function CheckboxDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Checkbox className={`${checkbox}`}>
          <CheckboxIndicator className={`${checkbox.indicator}`} asChild>
            <IconCheck />
          </CheckboxIndicator>
        </Checkbox>

        <Checkbox className={`${checkbox}`} disabled>
          <CheckboxIndicator className={`${checkbox.indicator}`} asChild>
            <IconCheck />
          </CheckboxIndicator>
        </Checkbox>

        <Checkbox className={`${checkbox}`} checked disabled>
          <CheckboxIndicator className={`${checkbox.indicator}`} asChild>
            <IconCheck />
          </CheckboxIndicator>
        </Checkbox>
      </DemoFlexRow>
    </DemoContainer>
  )
}
