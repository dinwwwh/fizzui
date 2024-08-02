import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { button, popover } from '@fizzui/styles'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/popover')({
  component: PopoverDemoPage,
})

function PopoverDemoPage() {
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
