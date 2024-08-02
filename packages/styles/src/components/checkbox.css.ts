import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, rem } from '@styles/utils'

export const checkboxRoot = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

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
        borderRadius: vars.border.radius.sm,
      },
    },
    color: {
      default: {
        color: vars.fg.gray[0],
        borderColor: vars.border.gray[300],

        willChange: 'background-color, border-color',
        transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',

        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.bg.gray[900],
            borderColor: vars.bg.gray[900],
          },

          [focusVisibleSelector]: {
            outline: `${rem(2)} solid ${vars.fg.gray[800]}`,
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
    color: 'default',
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
