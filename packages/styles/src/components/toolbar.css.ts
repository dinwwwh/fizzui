import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const toolbarRoot = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    size: {
      sm: {
        padding: rem(2),
        borderWidth: rem(1),
        borderRadius: vars.radius.md,
        gap: rem(6),
        boxShadow: vars.shadow.xs,
      },
      md: {
        padding: rem(4),
        borderWidth: rem(1),
        borderRadius: vars.radius.lg,
        gap: rem(8),
        boxShadow: vars.shadow.sm,
      },
    },

    color: {
      base: {},
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

// TODO: using global link instead of this
export const toolbarLink = recipe({
  base: {
    textDecoration: 'none',
  },

  variants: {
    size: {
      sm: {
        fontSize: rem(12),
        lineHeight: rem(28),
        marginLeft: rem(4),
        marginRight: rem(4),
      },
      md: {
        fontSize: rem(14),
        lineHeight: rem(36),
        marginLeft: rem(6),
        marginRight: rem(6),
      },
    },

    color: {
      base: {
        color: vars.fg.base[700],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})
