import { recipe } from '@compose/lib'

export const extendedButtonRoot = recipe({
  base: ['extended-button-root-base'],
  variants: {
    size: {
      small: ['extended-button-root-small'],
    },
  },
})
