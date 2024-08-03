import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, disabledWithinSelector, focusVisibleWithinSelector, rem } from '@styles/utils'

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
        borderRadius: vars.border.radius.lg,
        padding: `0 ${rem(12)}`,
        columnGap: rem(8),
      },
    },
    color: {
      default: {
        color: vars.fg.gray[900],
        backgroundColor: vars.bg.gray[0],
        borderColor: vars.border.gray[300],
        boxShadow: vars.shadow.xs,

        selectors: {
          [disabledWithinSelector]: {
            color: vars.fg.gray[500],
            backgroundColor: vars.bg.gray[50],
            cursor: 'not-allowed',
          },

          [focusVisibleWithinSelector]: {
            outline: `${rem(1)} solid ${vars.fg.gray[700]}`,
            borderColor: vars.fg.gray[700],
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
      default: {
        '::placeholder': {
          color: vars.fg.gray[500],
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
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
      default: {
        color: vars.fg.gray[500],
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
    color: 'default',
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
      default: {
        backgroundColor: vars.bg.gray[300],
      },
    },
  },

  defaultVariants: {
    color: 'default',
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
