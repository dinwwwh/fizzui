import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '@styles/animation.css'
import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { rem } from '@styles/utils'

export const popoverRoot = recipe({
  base: {
    color: vars.fg.base[950],
    backgroundColor: vars.bg.base[0],
    maxWidth: rem(320),
    padding: rem(4),

    borderWidth: rem(1),
    borderRadius: vars.radius.md,
    boxShadow: vars.shadow.md,

    zIndex: 50,

    willChange: 'transform, opacity',
    animationDuration: '0.4s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

    selectors: {
      '&[data-state="open"][data-side="top"]': {
        animationName: slideDownAndFade,
      },
      '&[data-state="open"][data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
      '&[data-state="open"][data-side="left"]': {
        animationName: slideRightAndFade,
      },
      '&[data-state="open"][data-side="right"]': {
        animationName: slideLeftAndFade,
      },
    },
  },
  variants: {},
  defaultVariants: {},
})
