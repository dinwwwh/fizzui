import { button, popover } from '@fizzui/styles'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import classes from './styles.module.css'

export function PopoverDemo() {
  return (
    <div className={classes.container}>
      <Popover>
        <PopoverTrigger className={`${button}`}>
          Open Popover
        </PopoverTrigger>

        <PopoverContent className={`${popover}`} sideOffset={4}>
          this is popover content
        </PopoverContent>
      </Popover>
    </div>
  )
}
