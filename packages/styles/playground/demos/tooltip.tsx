import { Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { button, tooltip } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function TooltipDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className={`${button}`}>
              Hover me
            </TooltipTrigger>

            <TooltipPortal>
              <TooltipContent className={`${tooltip}`} sideOffset={3}>
                Tooltip
                <p className={`${tooltip.sub}`}>
                  Tooltip are used to display additional information about an element when the user hovers over it.
                </p>
                <TooltipArrow className={`${tooltip.arrow}`} />
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className={`${button}`}>
              Hover me
            </TooltipTrigger>

            <TooltipPortal>
              <TooltipContent className={`${tooltip}`} sideOffset={3}>
                This is a tooltip
                <TooltipArrow className={`${tooltip.arrow}`} />
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </TooltipProvider>
      </DemoFlexRow>
    </DemoContainer>
  )
}
