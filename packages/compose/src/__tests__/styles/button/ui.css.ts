import { recipe } from '@vanilla-extract/recipes'

export const buttonRoot = recipe({
  base: ['button-root-base'],
  variants: {
    size: {
      small: ['button-root-small'],
      medium: ['button-root-medium'],
      large: ['button-root-large'],
    },
    rounded: {
      true: ['button-root-rounded'],
    },
  },

  defaultVariants: {
    size: 'medium',
    rounded: false,
  },
})

export const buttonIcon = recipe({
  base: ['icon-icon-base'],

  variants: {
    size: {
      small: ['icon-root-small'],
      medium: ['icon-root-medium'],
      large: ['icon-root-large'],
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})
