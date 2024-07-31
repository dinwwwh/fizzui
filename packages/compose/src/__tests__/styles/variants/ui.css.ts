import { recipe } from '@vanilla-extract/recipes'

export const buttonRoot = recipe({
  base: [],
  variants: {
    size: {
      small: [],
      medium: [],
      large: [],
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export const iconRoot = recipe({
  base: [],
  variants: {
    size: {
      small: [],
      medium: [],
      large: [],
    },
    position: {
      left: [],
      right: [],
      middle: [],
    },
  },
  defaultVariants: {
    size: 'small',
    position: 'left',
  },
})
