import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, hoverSelector, rem } from '@styles/utils'

export const tableRoot = recipe({
  base: {},
  variants: {
    size: {
      md: {},
    },

    boundary: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'md', boundary: true },
      style: {
        borderTopWidth: rem(1),
        borderLeftWidth: rem(1),
        borderRightWidth: rem(1),
        borderRadius: vars.radius.md,
        overflow: 'hidden',
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    boundary: true,
  },
})

export const tableHeader = recipe({
  base: {
    verticalAlign: 'middle',
    textAlign: 'left',
  },

  variants: {
    size: {
      md: {
        height: rem(36),
        padding: `${rem(12)} ${rem(24)}`,
        fontSize: rem(12),
        lineHeight: rem(18),
        fontWeight: 500,

        borderBottomWidth: rem(1),
      },
    },
    color: {
      base: {
        color: vars.fg.base[600],
        backgroundColor: vars.bg.base[50],
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',

        selectors: {
          [disabledSelector]: {
            cursor: 'not-allowed',
          },
        },
      },
    },

    variant: {
      'base': {},
      'leading-text': {},
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'base', color: 'base' },
      style: {
        color: vars.fg.base[600],
      },
    },
    {
      variants: { variant: 'leading-text', color: 'base' },
      style: {
        color: vars.fg.base[900],
        fontWeight: 500,
      },
    },
    {
      variants: { clickable: true, color: 'base' },
      style: {

        transition: 'color .2s ease-in-out, background-color .2s ease-in-out',

        selectors: {
          [hoverSelector]: {
            color: vars.fg.base[700],
            backgroundColor: vars.bg.base[100],
          },

          [disabledSelector]: {
            color: vars.fg.base[400],
          },
        },
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'base',
    variant: 'base',
    clickable: false,
  },
})

export const tableData = recipe({
  base: {
    verticalAlign: 'middle',
  },

  variants: {
    size: {
      md: {
        padding: `${rem(12)} ${rem(24)}`,
        fontSize: rem(14),
        lineHeight: rem(20),

        borderBottomWidth: rem(1),
      },
    },

    color: {
      base: {},
    },

    variant: {
      'base': {},
      'leading-text': {},
    },
  },

  compoundVariants: [
    {
      variants: { variant: 'base', color: 'base' },
      style: {
        color: vars.fg.base[600],
      },
    },
    {
      variants: { variant: 'leading-text', color: 'base' },
      style: {
        color: vars.fg.base[900],
        fontWeight: 500,
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'base',
    variant: 'base',
  },
})

export const tableAligner = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {},
})

export const tableCheckbox = recipe({
  variants: {
    size: {
      md: {},
    },
    standalone: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { standalone: false, size: 'md' },
      style: {
        marginRight: rem(8),
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    standalone: false,
  },
})

export const tableHeaderIcon = recipe({
  variants: {
    size: {
      md: {
        marginLeft: rem(4),
        height: rem(16),
        width: rem(16),
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const tableRow = recipe({
  variants: {
    color: {
      base: {
        transition: 'background-color .2s ease-in-out',

        selectors: {
          [`${hoverSelector}:has(td)`]: {
            backgroundColor: vars.bg.base[50],
          },
        },
      },
    },
  },

  defaultVariants: {
    color: 'base',
  },
})
