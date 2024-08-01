import { ButtonDemo } from './demos/button'
import classes from './app.module.css'
import { InputDemo } from './demos/input'
import { InputWithButtonDemo } from './demos/input-with-button'
import { PopoverDemo } from './demos/popover'
import { SelectDemo } from './demos/select'

export function App() {
  return (
    <div className={classes.container}>
      <div className={classes.demo}>
        <ButtonDemo />
      </div>
      <div className={classes.demo}>
        <InputDemo />
      </div>
      <div className={classes.demo}>
        <InputWithButtonDemo />
      </div>
      <div className={classes.demo}>
        <PopoverDemo />
      </div>
      <div className={classes.demo}>
        <SelectDemo />
      </div>
    </div>
  )
}
