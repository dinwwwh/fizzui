import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '@styles/animation.css'
import { recipe } from '@styles/lib'

export const popoverRoot = recipe({
  base: {
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
