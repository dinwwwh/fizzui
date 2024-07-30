import { recipe } from '@compose/lib'

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
