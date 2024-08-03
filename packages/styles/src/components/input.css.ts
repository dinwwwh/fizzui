import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, rem } from '@styles/utils'

export const inputRoot = recipe({
  base: {
    'color': vars.fg.base[950],

    '::placeholder': {
      color: vars.fg.base[300],
    },

    'selectors': {
      [disabledSelector]: {
        color: vars.fg.base[500],
        backgroundColor: vars.bg.base[50],
        cursor: 'not-allowed',
      },

      [focusVisibleSelector]: {
        outline: `${rem(1)} solid ${vars.fg.base[800]}`,
        borderColor: vars.fg.base[800],
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
        borderRadius: vars.radius.md,
        padding: `0 ${rem(12)}`,
      },
      md: {
        height: rem(36),
        width: '100%',
        borderWidth: rem(1),
        fontSize: rem(14),
        borderRadius: vars.radius.lg,
        padding: `0 ${rem(12)}`,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
