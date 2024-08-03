import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const badgeRoot = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: rem(1),
  },

  variants: {
    size: {
      sm: {
        height: rem(22),
        padding: `0 ${rem(8)}`,
        fontSize: rem(12),
        fontWeight: 500,
        borderRadius: vars.border.radius.full,
        columnGap: rem(4),
      },
      md: {
        height: rem(24),
        padding: `0 ${rem(10)}`,
        fontSize: rem(14),
        fontWeight: 500,
        borderRadius: vars.border.radius.full,
        columnGap: rem(5),
      },
    },

    color: {
      default: {
        color: vars.fg.gray[700],
        backgroundColor: vars.bg.gray[50],
      },
    },

    square: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { size: 'sm', square: true },
      style: {
        width: rem(22),
        padding: 0,
      },
    },
    {
      variants: { size: 'md', square: true },
      style: {
        width: rem(24),
        padding: 0,
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const badgeIcon = recipe({
  variants: {
    size: {
      sm: {
        height: rem(12),
        width: rem(12),
      },
      md: {
        height: rem(14),
        width: rem(14),
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
      variants: { align: 'start', size: 'sm' },
      style: {
        marginLeft: rem(-2),
      },
    },
    {
      variants: { align: 'start', size: 'md' },
      style: {
        marginLeft: rem(-3),
      },
    },
    {
      variants: { align: 'end', size: 'sm' },
      style: {
        marginRight: rem(-2),
      },
    },
    {
      variants: { align: 'end', size: 'md' },
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
