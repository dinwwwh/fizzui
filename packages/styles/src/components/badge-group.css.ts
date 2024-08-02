import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const badgeGroupRoot = recipe({
  base: {
    display: 'inline-flex',
    borderWidth: rem(1),
  },

  variants: {
    size: {
      sm: {
        borderRadius: vars.border.radius.full,
        padding: rem(4),
        columnGap: rem(2),
      },
      md: {
        borderRadius: vars.border.radius.full,
        padding: rem(4),
        columnGap: rem(4),
      },
    },

    color: {
      default: {
        backgroundColor: vars.bg.gray[100],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const badgeGroupContent = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
  },

  variants: {
    size: {
      sm: {
        gap: rem(4),
        fontSize: rem(12),
        fontWeight: 500,
        padding: `0 ${rem(6)}`,
      },
      md: {
        gap: rem(4),
        fontSize: rem(14),
        fontWeight: 500,
        padding: `0 ${rem(6)}`,
      },
    },
    color: {
      default: {
        color: vars.fg.gray[700],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const badgeGroupContentIcon = recipe({
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
      variants: { size: 'md', align: 'start' },
      style: {
        marginLeft: rem(-3),
      },
    },
    {
      variants: { size: 'sm', align: 'end' },
      style: {
        marginRight: rem(-2),
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
  },
})
