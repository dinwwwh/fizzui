import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, enabledSelector, focusVisibleSelector, hoverSelector, pressedSelector, rem } from '@styles/utils'

export const buttonRoot = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    transitionProperty: 'filter, background-color, color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',

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
        height: rem(28),
        padding: `0 ${rem(10)}`,
        borderWidth: rem(0.5),
        borderRadius: vars.radius.md,
        fontSize: rem(12),
        fontWeight: 500,
        columnGap: rem(4),
      },
      md: {
        height: rem(36),
        padding: `0 ${rem(16)}`,
        borderRadius: vars.radius.lg,
        borderWidth: rem(0.5),
        fontSize: rem(14),
        fontWeight: 500,
        columnGap: rem(6),
      },
    },
    variant: {
      solid: {},
      outline: {},
      ghost: {},
    },
    color: {
      base: {
        selectors: {
          [focusVisibleSelector]: {
            outline: `${rem(2)} solid ${vars.fg.base[800]}`,
            outlineOffset: rem(2),
          },
        },
      },
    },
    square: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'solid', color: 'base' },
      style: {
        backgroundColor: vars.bg.base[950],
        backgroundImage: `linear-gradient(to bottom, ${vars.bg.base[800]}, ${vars.bg.base[950]})`,
        color: vars.fg.base[50],
        borderColor: vars.bg.base[950],

        selectors: {
          [enabledSelector]: {
            boxShadow: `rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset, ${vars.border.base[200]} 0px 0px 0px 1px`,
          },
          [hoverSelector]: {
            filter: 'brightness(1.1)',
          },
          [pressedSelector]: {
            filter: 'brightness(0.8)',
          },
          [disabledSelector]: {
            opacity: 0.35,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'base' },
      style: {
        backgroundColor: 'transparent',
        borderWidth: rem(1),
        boxShadow: 'none',
        color: vars.fg.base[800],

        selectors: {
          [hoverSelector]: {
            backgroundColor: vars.bg.base[100],
            color: vars.fg.base[700],
          },
          [pressedSelector]: {
            filter: 'brightness(0.95)',
          },
          [disabledSelector]: {
            opacity: 0.35,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'base' },
      style: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        boxShadow: 'none',
        color: vars.fg.base[800],

        selectors: {
          [hoverSelector]: {
            backgroundColor: vars.bg.base[100],
            color: vars.fg.base[700],
          },
          [pressedSelector]: {
            filter: 'brightness(0.95)',
          },
          [disabledSelector]: {
            opacity: 0.35,
          },
        },
      },
    },
    {
      variants: { square: true, size: 'md' },
      style: {
        padding: 0,
        width: rem(36),
      },
    },
    {
      variants: { square: true, size: 'sm' },
      style: {
        padding: 0,
        width: rem(28),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'base',
  },
})

export const buttonIcon = recipe({
  variants: {
    size: {
      sm: {
        width: rem(14),
        height: rem(14),
      },
      md: {
        width: rem(16),
        height: rem(16),
      },
    },
    align: {
      start: {},
      center: {},
      end: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'sm', align: 'start' },
      style: {
        marginLeft: rem(-2),
      },
    },
    {
      variants: { size: 'sm', align: 'end' },
      style: {
        marginRight: rem(-2),
      },
    },
    {
      variants: { size: 'md', align: 'start' },
      style: {
        marginLeft: rem(-3),
      },
    },
    {
      variants: { size: 'md', align: 'end' },
      style: {
        marginRight: rem(-3),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    align: 'start',
  },
})
