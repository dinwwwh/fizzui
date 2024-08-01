import { ButtonDemo } from './demos/button'
import classes from './app.module.css'
import { InputDemo } from './demos/input'
import { InputWithButtonDemo } from './demos/input-with-button'

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
    </div>
  )
}
