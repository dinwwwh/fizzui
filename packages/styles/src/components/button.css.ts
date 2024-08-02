import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, enabledSelector, hoverSelector, pressedSelector, rem } from '@styles/utils'

export const buttonRoot = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    transitionProperty: 'filter, background-color, color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },

  variants: {
    size: {
      sm: {
        height: rem(28),
        padding: `0 ${rem(10)}`,
        borderWidth: rem(0.5),
        borderRadius: vars.border.radius.md,
        fontSize: rem(12),
        fontWeight: 500,
      },
      md: {
        height: rem(36),
        padding: `0 ${rem(16)}`,
        borderRadius: vars.border.radius.lg,
        borderWidth: rem(0.5),
        fontSize: rem(14),
        fontWeight: 500,
      },
    },
    variant: {
      solid: {},
      outline: {},
      ghost: {},
    },
    color: {
      default: {},
    },
    square: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'solid', color: 'default' },
      style: {
        backgroundColor: vars.bg.gray[950],
        backgroundImage: `linear-gradient(to bottom, ${vars.bg.gray[800]}, ${vars.bg.gray[950]})`,
        color: vars.fg.gray[50],
        borderColor: vars.bg.gray[950],

        selectors: {
          [enabledSelector]: {
            boxShadow: `rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset, ${vars.border.gray[200]} 0px 0px 0px 1px`,
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
      variants: { variant: 'outline', color: 'default' },
      style: {
        backgroundColor: 'transparent',
        borderWidth: rem(1),
        boxShadow: 'none',
        color: vars.fg.gray[800],

        selectors: {
          [hoverSelector]: {
            backgroundColor: vars.bg.gray[100],
            color: vars.fg.gray[700],
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
      variants: { variant: 'ghost', color: 'default' },
      style: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        boxShadow: 'none',
        color: vars.fg.gray[800],

        selectors: {
          [hoverSelector]: {
            backgroundColor: vars.bg.gray[100],
            color: vars.fg.gray[700],
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
    color: 'default',
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
        marginRight: rem(4),
      },
    },
    {
      variants: { size: 'sm', align: 'center' },
      style: {
        marginLeft: rem(4),
        marginRight: rem(4),
      },
    },
    {
      variants: { size: 'sm', align: 'end' },
      style: {
        marginLeft: rem(4),
        marginRight: rem(-2),
      },
    },
    {
      variants: { size: 'md', align: 'start' },
      style: {
        marginLeft: rem(-3),
        marginRight: rem(6),
      },
    },
    {
      variants: { size: 'md', align: 'center' },
      style: {
        marginLeft: rem(6),
        marginRight: rem(6),
      },
    },
    {
      variants: { size: 'md', align: 'end' },
      style: {
        marginLeft: rem(6),
        marginRight: rem(-3),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    align: 'start',
  },
})
