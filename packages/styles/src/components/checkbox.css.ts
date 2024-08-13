import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, rem } from '@styles/utils'

export const checkboxRoot = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,

    cursor: 'pointer',

    selectors: {
      [disabledSelector]: {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      md: {
        height: rem(16),
        width: rem(16),
        borderWidth: rem(1),
        borderRadius: vars.radius.sm,
      },
    },
    color: {
      base: {
        color: vars.fg.base[0],
        borderColor: vars.border.base[300],

        willChange: 'background-color, border-color',
        transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',

        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.bg.base[900],
            borderColor: vars.bg.base[900],
          },

          [focusVisibleSelector]: {
            outline: `${rem(2)} solid ${vars.fg.base[800]}`,
            outlineOffset: rem(2),
          },

          [disabledSelector]: {
            opacity: 0.5,
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const checkboxIndicator = recipe({
  variants: {
    size: {
      md: {
        height: rem(12),
        width: rem(12),
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
