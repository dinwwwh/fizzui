import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, disabledWithinSelector, focusVisibleUserInvalidWithinSelector, focusVisibleWithinSelector, rem, userInvalidWithinSelector } from '@styles/utils'

export const inputGroupRoot = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
  },

  variants: {
    size: {
      md: {
        height: rem(36),
        borderWidth: rem(1),
        fontSize: rem(14),
        borderRadius: vars.radius.lg,
        padding: `0 ${rem(12)}`,
        columnGap: rem(8),
      },
    },
    color: {
      base: {
        color: vars.fg.base[900],
        backgroundColor: vars.bg.base[0],
        borderColor: vars.border.base[300],
        boxShadow: vars.shadow.xs,

        selectors: {
          [disabledWithinSelector]: {
            color: vars.fg.base[500],
            backgroundColor: vars.bg.base[50],
            cursor: 'not-allowed',
          },

          [focusVisibleWithinSelector]: {
            outline: `${rem(1)} solid ${vars.fg.base[700]}`,
            borderColor: vars.fg.base[700],
          },

          [userInvalidWithinSelector]: {
            borderColor: vars.fg.danger[300],
          },

          [focusVisibleUserInvalidWithinSelector]: {
            outline: `${rem(1)} solid ${vars.fg.danger[500]}`,
            borderColor: vars.fg.danger[500],
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

export const inputGroupInput = recipe({
  base: {
    flexGrow: 1,
    outline: 'none',

    selectors: {
      [disabledSelector]: {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      md: {},
    },
    color: {
      base: {
        '::placeholder': {
          color: vars.fg.base[500],
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const inputGroupIcon = recipe({
  base: {
  },

  variants: {
    size: {
      md: {
      },
    },
    sub: {
      true: {},
      false: {},
    },
    color: {
      base: {
        color: vars.fg.base[500],
      },
    },
  },

  compoundVariants: [
    {
      variants: { sub: false, size: 'md' },
      style: {
        height: rem(20),
        width: rem(20),
      },
    },
    {
      variants: { sub: true, size: 'md' },
      style: {
        height: rem(14),
        width: rem(14),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'base',
    sub: false,
  },
})

export const inputGroupSeparator = recipe({
  base: {
    width: rem(1),
    height: '100%',
  },

  variants: {
    color: {
      base: {
        backgroundColor: vars.bg.base[300],
      },
    },
  },

  defaultVariants: {
    color: 'base',
  },
})

export const inputGroupButton = recipe({
  base: {},

  variants: {
    size: {
      sm: {},
    },

    align: {
      start: {},
      end: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'sm', align: 'start' },
      style: {
        marginRight: rem(-4),
        marginLeft: rem(-8),
      },
    },
    {
      variants: { size: 'sm', align: 'end' },
      style: {
        marginLeft: rem(-4),
        marginRight: rem(-8),
      },
    },
  ],

  defaultVariants: {
    align: 'end',
  },
})
