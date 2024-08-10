import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const menubarRoot = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },

  variants: {
    size: {
      sm: {
        gap: rem(4),
        padding: rem(3),
        borderWidth: rem(1),
        borderRadius: vars.radius.md,
      },
      md: {
        gap: rem(6),
        padding: rem(4),
        borderWidth: rem(1),
        borderRadius: vars.radius.lg,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
