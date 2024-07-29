import { compose } from '@compose/compose'
import { uninheritVariants } from '@compose/variants'
import { buttonRoot, iconRoot } from './ui.css'

export const button = compose({
  root: buttonRoot,
  icon: iconRoot,
  uninheritIcon: uninheritVariants(iconRoot),
  uninheritIcon2: uninheritVariants(iconRoot, -2),

  level2: {
    root: uninheritVariants(buttonRoot),
    uninheritIcon1: uninheritVariants(iconRoot, -1),
    uninheritIcon2: uninheritVariants(iconRoot, -2),

    level3: {
      root: uninheritVariants(buttonRoot),
      uninheritIcon1: uninheritVariants(iconRoot, -1),
      uninheritIcon2: uninheritVariants(iconRoot, -2),
      uninheritIcon3: uninheritVariants(iconRoot, -3),
    },
  },

  composed: compose({
    root: buttonRoot,
    icon: iconRoot,
    uninheritIcon: uninheritVariants(iconRoot),
    uninheritIcon2: uninheritVariants(iconRoot, -2),
  }),

  uninheritComposed: uninheritVariants(compose({
    root: buttonRoot,
    icon: iconRoot,
    uninheritIcon: uninheritVariants(iconRoot),
    uninheritIcon2: uninheritVariants(iconRoot, -2),

    level2: uninheritVariants({
      root: buttonRoot,
      icon: iconRoot,
      uninheritIcon: uninheritVariants(iconRoot),
      uninheritIcon2: uninheritVariants(iconRoot, -2),
    }),
  })),
})
