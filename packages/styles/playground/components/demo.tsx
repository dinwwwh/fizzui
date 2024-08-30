import classes from './demo.module.css'

export function DemoContainer(props: { children?: React.ReactNode }) {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}

export function DemoFlexRow(props: { children?: React.ReactNode }) {
  return <div className={classes.row}>{props.children}</div>
}
