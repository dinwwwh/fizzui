import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const displayRoot = recipe({
  base: {
    color: vars.fg.gray[950],
    fontWeight: 700,
  },

  variants: {
    size: {
      '4xl': {
        fontSize: rem(32),
        lineHeight: rem(36),
      },
      '5xl': {
        fontSize: rem(36),
        lineHeight: rem(40),
      },
      '6xl': {
        fontSize: rem(40),
        lineHeight: rem(44),
      },
      '7xl': {
        fontSize: rem(44),
        lineHeight: rem(48),
      },
      '8xl': {
        fontSize: rem(48),
        lineHeight: rem(52),
      },
      '9xl': {
        fontSize: rem(52),
        lineHeight: rem(56),
      },
    },
  },

  defaultVariants: {
    size: '6xl',
  },
})
