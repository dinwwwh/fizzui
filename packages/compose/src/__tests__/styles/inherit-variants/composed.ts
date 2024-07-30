import { compose } from '@compose/compose'
import { inheritVariants, uninheritVariants } from '@compose/variants'
import { buttonRoot, iconRoot } from './ui.css'

export const button = compose({
  root: buttonRoot,
  icon: iconRoot,
  uninheritIcon: uninheritVariants(iconRoot),

  withUninheritedRoot: {
    root: uninheritVariants(buttonRoot),
    uninheritIcon: uninheritVariants(iconRoot),
  },

  insideComposed: compose({
    root: buttonRoot,
    icon: iconRoot,
    uninheritIcon: uninheritVariants(iconRoot),
  }),

  uninheritComposed: uninheritVariants(compose({
    root: buttonRoot,
    icon: iconRoot,
    uninheritIcon: uninheritVariants(iconRoot),

    level2: uninheritVariants({
      root: buttonRoot,
      icon: iconRoot,
      uninheritIcon: uninheritVariants(iconRoot),
    }),
  })),

  inheritComposed: inheritVariants(uninheritVariants(compose({
    root: buttonRoot,
    icon: iconRoot,
    uninheritIcon: uninheritVariants(iconRoot),

    level2: uninheritVariants({
      root: buttonRoot,
      icon: iconRoot,
      uninheritIcon: uninheritVariants(iconRoot),
    }),
  }))),
})
