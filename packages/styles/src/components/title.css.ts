import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const titleRoot = recipe({
  base: {
    color: vars.fg.gray[950],
    fontWeight: 600,
  },

  variants: {
    size: {
      'base': {
        fontSize: rem(16),
        lineHeight: rem(20),
      },
      'lg': {
        fontSize: rem(20),
        lineHeight: rem(24),
      },
      'xl': {
        fontSize: rem(24),
        lineHeight: rem(28),
      },
      '2xl': {
        fontSize: rem(28),
        lineHeight: rem(32),
      },
      '3xl': {
        fontSize: rem(32),
        lineHeight: rem(36),
      },
    },
  },

  defaultVariants: {
    size: 'xl',
  },
})
