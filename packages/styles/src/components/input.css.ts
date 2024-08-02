import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, rem } from '@styles/utils'

export const inputRoot = recipe({
  base: {
    color: vars.fg.gray[950],

    selectors: {
      '&:placeholder': {
        color: vars.fg.gray[300],
      },

      [disabledSelector]: {
        color: vars.fg.gray[500],
        backgroundColor: vars.bg.gray[50],
      },
    },
  },

  variants: {
    size: {
      sm: {
        height: rem(28),
        width: '100%',
        borderWidth: rem(1),
        fontSize: rem(12),
        borderRadius: vars.border.radius.md,
        padding: `0 ${rem(12)}`,
      },
      md: {
        height: rem(36),
        width: '100%',
        borderWidth: rem(1),
        fontSize: rem(14),
        borderRadius: vars.border.radius.lg,
        padding: `0 ${rem(12)}`,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
