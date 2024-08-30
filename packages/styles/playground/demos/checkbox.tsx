import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import { checkbox } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function CheckboxDemo() {
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
