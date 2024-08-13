import { dialogContentShow, dialogOverlayShow } from '@styles/animation.css'
import { recipe } from '@styles/lib'

export const dialogRoot = recipe({
  base: {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: `${dialogContentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  variants: {},
})

export const dialogOverlay = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    animation: `${dialogOverlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  variants: {},
})
