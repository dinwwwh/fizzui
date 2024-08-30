import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { button, popover } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function PopoverDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Popover>
          <PopoverTrigger className={`${button}`}>
            Open Popover
          </PopoverTrigger>

          <PopoverContent className={`${popover}`} sideOffset={4}>
            this is popover content
          </PopoverContent>
        </Popover>
      </DemoFlexRow>
    </DemoContainer>
  )
}
