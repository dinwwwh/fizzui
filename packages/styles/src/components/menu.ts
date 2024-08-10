import { compose } from '@fizzui/compose'
import { menuArrow, menuIcon, menuIconMore, menuItem, menuKbd, menuLabel, menuRoot, menuSeparator, menuSubTrigger } from './menu.css'

export const menu = compose({
  root: menuRoot,
  item: menuItem,
  separator: menuSeparator,
  subTrigger: menuSubTrigger,
  kbd: menuKbd,
  icon: menuIcon,
  iconMore: menuIconMore,
  label: menuLabel,
  arrow: menuArrow,
})
