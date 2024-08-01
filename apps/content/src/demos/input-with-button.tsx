import { button, input } from '@fizzui/styles'
import classes from './styles.module.css'

export function InputWithButtonDemo() {
  return (
    <div className={classes.container}>
      <div style={{ position: 'relative' }}>
        <input className={`${input}`} placeholder="Enter your name" />
        <button className={`${button({ size: 'sm' })}`} style={{ position: 'absolute', right: 4, top: 4 }}>
          Save
        </button>
      </div>
    </div>
  )
}
