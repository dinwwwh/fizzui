import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, rem } from '@styles/utils'

export const toggleSwitchRoot = recipe({
  base: {
    position: 'relative',
    display: 'inline-block',
    height: rem(20),
    width: rem(36),

    borderRadius: vars.border.radius.full,

    willChange: 'background-color',
    transition: 'background-color 0.2s ease-in-out',

    cursor: 'pointer',

    selectors: {
      [disabledSelector]: {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    color: {
      default: {
        backgroundColor: vars.bg.gray[200],

        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.fg.gray[900],
          },

          [disabledSelector]: {
            opacity: 0.5,
          },

          [focusVisibleSelector]: {
            outline: `${rem(2)} solid ${vars.fg.gray[800]}`,
            outlineOffset: rem(2),
          },
        },
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const toggleSwitchThumb = recipe({
  base: {
    position: 'absolute',
    left: rem(2),
    top: rem(2),
    height: rem(16),
    width: rem(16),

    borderRadius: vars.border.radius.full,
    boxShadow: vars.shadow.sm,

    willChange: 'transform',
    transition: 'transform 0.2s ease-in-out',

    selectors: {
      '&[data-state="checked"]': {
        transform: 'translateX(100%)',
      },
    },
  },

  variants: {
    color: {
      default: {
        backgroundColor: vars.fg.gray[0],
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})
