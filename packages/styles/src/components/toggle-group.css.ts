import { recipe } from '@styles/lib'
import { rem } from '@styles/utils'

export const toggleGroupRoot = recipe({
  base: {
    display: 'inline-flex',
  },

  variants: {
    size: {
      sm: {
        gap: rem(2),
      },
      md: {
        gap: rem(4),
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
