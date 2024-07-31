import { ButtonDemo } from './demos/button'
import classes from './app.module.css'

export function App() {
  return (
    <div className={classes.container}>
      <div className={classes.demo}>
        <ButtonDemo />
      </div>
    </div>
  )
}
