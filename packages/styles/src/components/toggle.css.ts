import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, hoverSelector, rem } from '@styles/utils'

export const toggleRoot = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: 500,

    willChange: 'background-color, color',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)',

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
        borderRadius: vars.radius.md,
        height: rem(28),
        padding: `0 ${rem(10)}`,
        columnGap: rem(4),
        fontSize: rem(12),
      },
      md: {
        borderRadius: vars.radius.lg,
        height: rem(36),
        padding: `0 ${rem(16)}`,
        columnGap: rem(6),
        fontSize: rem(14),
      },
    },
    square: {
      true: {},
      false: {},
    },
    color: {
      base: {
        color: vars.fg.base[900],

        selectors: {
          [`${hoverSelector}:not([data-state="on"])`]: {
            color: vars.fg.base[500],
            backgroundColor: vars.fg.base[100],
          },

          '&[data-state="on"]': {
            backgroundColor: vars.fg.base[100],
          },

          [disabledSelector]: {
            opacity: 0.5,
          },

          [focusVisibleSelector]: {
            outline: `${rem(2)} solid ${vars.fg.base[800]}`,
            outlineOffset: rem(2),
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: { size: 'sm', square: true },
      style: {
        width: rem(28),
        padding: 0,
      },
    },
    {
      variants: { size: 'md', square: true },
      style: {
        width: rem(36),
        padding: 0,
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    square: true,
    color: 'base',
  },
})

export const toggleIcon = recipe({
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
    align: 'center',
  },
})
