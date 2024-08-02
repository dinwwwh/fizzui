import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const captionRoot = recipe({
  base: {
    color: vars.fg.gray[700],
  },

  variants: {
    size: {
      xs: {
        fontSize: rem(12),
        lineHeight: rem(16),
      },
      sm: {
        fontSize: rem(14),
        lineHeight: rem(18),
      },
      base: {
        fontSize: rem(16),
        lineHeight: rem(20),
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
