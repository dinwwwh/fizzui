import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '@styles/animation.css'
import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const tooltipRoot = recipe({
  base: {
    zIndex: 50,
    overflow: 'hidden',

    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    animationDuration: '200ms',

    selectors: {
      '&[data-state="delayed-open"][data-side="top"]': {
        animationName: slideDownAndFade,
      },
      '&[data-state="delayed-open"][data-side="right"]': {
        animationName: slideLeftAndFade,
      },
      '&[data-state="delayed-open"][data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
      '&[data-state="delayed-open"][data-side="left"]': {
        animationName: slideRightAndFade,
      },
    },
  },

  variants: {
    size: {
      md: {
        fontSize: rem(12),
        lineHeight: rem(18),
        padding: rem(12),
        maxWidth: rem(320),
        fontWeight: 500,
        boxShadow: vars.shadow.lg,
        borderRadius: vars.border.radius.lg,
      },
    },
    color: {
      default: {
        backgroundColor: vars.bg.gray[900],
        color: vars.fg.gray[0],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const tooltipArrow = recipe({
  base: {},

  variants: {
    size: {
      md: {},
    },
    color: {
      default: {
        fill: vars.bg.gray[900],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const tooltipSub = recipe({
  base: {},

  variants: {
    size: {
      md: {
        marginTop: rem(4),
      },
    },
    color: {
      default: {
        color: vars.fg.gray[300],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})
