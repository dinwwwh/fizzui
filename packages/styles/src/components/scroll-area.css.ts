import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { hoverSelector, rem } from '@styles/utils'

export const scrollAreaRoot = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
  },
  variants: {},
})

export const scrollAreaBar = recipe({
  base: {
    display: 'flex',
    touchAction: 'none',
    userSelect: 'none',
    borderRadius: vars.border.radius.full,

    transitionProperty: 'width, height',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',

    padding: rem(2),

    selectors: {
      [hoverSelector]: {
        backgroundColor: vars.bg.gray[100],
      },
      '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        height: rem(8),
      },
      '&[data-orientation="horizontal"]:hover': {
        height: rem(12),
      },
      '&[data-orientation="vertical"]': {
        width: rem(8),
      },
      '&[data-orientation="vertical"]:hover': {
        width: rem(12),
      },
    },
  },

  variants: {},
})

export const scrollAreaThumb = recipe({
  base: {
    'position': 'relative',
    'flex': '1 1 0%',
    'borderRadius': vars.border.radius.full,
    'backgroundColor': vars.bg.gray[300],

    '::before': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      height: '100%',
      minHeight: rem(12 * 4),
      width: '100%',
      minWidth: rem(12 * 4),
      transform: 'translate(-50%, -50%)',
    },
  },

  variants: {},
})
