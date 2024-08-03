import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const codeRoot = recipe({
  base: {
    whiteSpace: 'pre-wrap',
  },

  variants: {
    size: {
      md: {
        fontSize: rem(13.6),
        padding: `${rem(2.72)} ${rem(5.44)}`,
        borderRadius: vars.radius.sm,
        borderWidth: rem(1),
      },
    },

    color: {
      base: {
        color: vars.bg.base[800],
        backgroundColor: vars.bg.base[50],
        borderColor: vars.border.base[100],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})
