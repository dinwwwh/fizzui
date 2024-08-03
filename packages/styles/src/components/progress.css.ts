import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const progressRoot = recipe({
  base: {
    overflow: 'hidden',
  },

  variants: {
    size: {
      md: {
        borderRadius: vars.border.radius.full,
        height: rem(6),
        width: rem(320),
      },
    },
    color: {
      default: {
        backgroundColor: vars.bg.gray[200],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const progressIndicator = recipe({
  base: {
    willChange: 'transform',
    transition: 'transform 660ms cubic-bezier(0.65,0,0.35,1)',
  },

  variants: {
    size: {
      md: {
        borderRadius: 'inherit',
        height: '100%',
      },
    },
    color: {
      default: {
        backgroundColor: vars.fg.gray[800],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})
