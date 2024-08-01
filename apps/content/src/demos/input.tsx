import { input } from '@fizzui/styles'
import classes from './styles.module.css'

export function InputDemo() {
  return (
    <div className={classes.container}>
      <input className={`${input}`} placeholder="First name" />
      <input className={`${input({ size: 'sm' })}`} placeholder="Last name" />
      <input className={`${input({ size: 'sm' })}`} value="Disabled" disabled />
    </div>
  )
}
