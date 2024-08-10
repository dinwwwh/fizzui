import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, expandedSelector, focusVisibleSelector, hoverSelector, rem } from '@styles/utils'

export const menuRoot = recipe({
  base: {
  },

  variants: {
    size: {
      md: {
        padding: rem(4),
        borderRadius: vars.radius.lg,
        borderWidth: rem(1),
        boxShadow: vars.shadow.md,
      },
    },

    color: {
      base: {
        backgroundColor: vars.bg.base[0],
      },
    },

    inset: {
      true: {},
      false: {},
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
    inset: true,
  },
})

export const menuItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',

    outline: 'none',

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
        gap: rem(12),
        margin: `${rem(1)} 0`,
        paddingRight: rem(12),
        borderRadius: vars.radius.md,
        height: rem(36),
        fontSize: rem(14),
        fontWeight: 500,
        lineHeight: rem(20),
      },
    },

    color: {
      base: {
        color: vars.fg.base[700],

        selectors: {
          [`${hoverSelector}, ${focusVisibleSelector}, ${expandedSelector}`]: {
            backgroundColor: vars.bg.base[50],
          },
          [disabledSelector]: {
            opacity: 0.4,
          },
        },
      },
    },

    inset: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'md', inset: true },
      style: {
        paddingLeft: rem(34),
      },
    },
    {
      variants: { size: 'md', inset: false },
      style: {
        paddingLeft: rem(12),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'base',
    inset: true,
  },
})

export const menuSeparator = recipe({
  base: {
    display: 'block',
  },

  variants: {
    size: {
      md: {
        height: rem(1),
        margin: `${rem(4)} ${rem(-4)}`,
      },
    },

    color: {
      base: {
        backgroundColor: vars.fg.base[200],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const menuSubTrigger = recipe({
  variants: {},
})

export const menuKbd = recipe({
  base: {
  },

  variants: {
    size: {
      md: {
        lineHeight: rem(18),
        fontSize: rem(12),
        fontWeight: 400,
      },
    },

    color: {
      base: {
        color: vars.fg.base[500],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const menuIcon = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },

  variants: {
    size: {
      md: {
        height: rem(16),
        width: rem(16),
        left: rem(10),
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const menuIconMore = recipe({
  variants: {
    size: {
      md: {
        height: rem(16),
        width: rem(16),
      },
    },

    color: {
      base: {
        color: vars.fg.base[500],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const menuLabel = recipe({
  variants: {
    size: {
      md: {
        fontSize: rem(12),
        fontWeight: 500,
        lineHeight: rem(18),
        paddingTop: rem(4),
        paddingBottom: rem(4),
      },
    },

    color: {
      base: {
        color: vars.fg.base[500],
      },
    },

    inset: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'md', inset: true },
      style: {
        paddingLeft: rem(34),
      },
    },

    {
      variants: { size: 'md', inset: false },
      style: {
        paddingLeft: rem(12),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'base',
    inset: true,
  },
})

export const menuArrow = recipe({
  variants: {
    color: {
      base: {
        fill: vars.border.base[200],
      },
    },
  },

  defaultVariants: {
    color: 'base',
  },
})
