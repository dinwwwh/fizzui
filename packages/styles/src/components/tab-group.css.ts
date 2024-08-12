import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, hoverSelector, rem } from '@styles/utils'

export const tabGroupRoot = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    size: {
      sm: {
        gap: rem(2),
        padding: rem(2),
        borderRadius: vars.radius.md,
      },
      md: {
        gap: rem(4),
        padding: rem(4),
        borderRadius: vars.radius.lg,
      },
    },

    color: {
      base: {
        backgroundColor: vars.bg.base[100],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const tabGroupItem = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexGrow: 1,

    willChange: 'background-color, color',
    transition: 'background-color 100ms ease-in-out, color 100ms ease-in-out',

    cursor: 'pointer',

    selectors: {
      [disabledSelector]: {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      sm: {
        fontSize: rem(14),
        fontWeight: 500,
        height: rem(28),
        paddingLeft: rem(12),
        paddingRight: rem(12),
        borderRadius: vars.radius.md,
      },
      md: {
        fontSize: rem(16),
        fontWeight: 500,
        height: rem(36),
        paddingLeft: rem(16),
        paddingRight: rem(16),
        borderRadius: vars.radius.lg,
      },
    },

    color: {
      base: {
        color: vars.fg.base[700],

        selectors: {
          '&[data-state="active"]': {
            color: vars.fg.base[900],
            backgroundColor: vars.bg.base[0],
            boxShadow: vars.shadow.xs,
          },

          [hoverSelector]: {
            color: vars.fg.base[900],
          },

          [disabledSelector]: {
            opacity: 0.4,
          },

          [focusVisibleSelector]: {
            outline: `${rem(2)} solid ${vars.fg.base[800]}`,
            outlineOffset: rem(2),
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
