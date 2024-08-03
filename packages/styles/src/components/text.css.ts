import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const textRoot = recipe({
  base: {
    color: vars.fg.base[950],
  },

  variants: {
    size: {
      sm: {
        fontSize: rem(14),
        lineHeight: rem(18),
      },
      base: {
        fontSize: rem(16),
        lineHeight: rem(20),
      },
      lg: {
        fontSize: rem(20),
        lineHeight: rem(24),
      },
      xl: {
        fontSize: rem(24),
        lineHeight: rem(28),
      },
    },

    bold: {
      true: {
        fontWeight: 700,
      },
    },

    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
  },

  defaultVariants: {
    size: 'base',
    bold: false,
    italic: false,
  },
})
