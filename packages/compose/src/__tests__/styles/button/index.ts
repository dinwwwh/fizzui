import { compose } from '@compose/compose'
import { buttonIcon, buttonRoot } from './ui.css'

export const button = compose({
  root: buttonRoot,
  icon: buttonIcon,

  iconRoot: {
    root: buttonIcon,
  },

  childButton: compose({
    root: buttonRoot,
    icon: buttonIcon,
  }),

  childButtonIcon: compose({
    root: buttonRoot,
    icon: buttonIcon,
  }).icon,
})
