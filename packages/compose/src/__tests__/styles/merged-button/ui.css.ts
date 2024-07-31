import { recipe } from '@vanilla-extract/recipes'

export const extendedButtonRoot = recipe({
  base: ['extended-button-root-base'],
  variants: {
    size: {
      small: ['extended-button-root-small'],
    },
  },
})
