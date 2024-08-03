import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, focusVisibleSelector, pressedSelector, rem } from '@styles/utils'

export const sliderRoot = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',

    userSelect: 'none',
    touchAction: 'none',

    selectors: {
      [disabledSelector]: {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      md: {},
    },
    color: {
      default: {},
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const sliderTrack = recipe({
  base: {
    position: 'relative',
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

        [disabledSelector]: {
          opacity: 0.35,
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const sliderRange = recipe({
  base: {
    position: 'absolute',
  },

  variants: {
    size: {
      md: {
        borderRadius: vars.border.radius.full,
        height: '100%',
      },
    },
    color: {
      default: {
        backgroundColor: vars.bg.gray[800],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export const sliderThumb = recipe({
  base: {
    position: 'relative',
    display: 'block',

    willChange: 'transform',
    transition: 'transform 0.2s ease-in-out',

    cursor: 'pointer',

    selectors: {
      [pressedSelector]: {
        transform: 'scale(1.1)',
      },

      [disabledSelector]: {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      md: {
        borderRadius: vars.border.radius.full,
        width: rem(16),
        height: rem(16),

        borderWidth: rem(1.5),
      },
    },
    color: {
      default: {
        backgroundColor: vars.fg.gray[0],
        borderColor: vars.fg.gray[800],

        selectors: {
          [focusVisibleSelector]: {
            outline: `${rem(1)} solid ${vars.fg.gray[800]}`,
            outlineOffset: rem(1),
          },
          [disabledSelector]: {
            backgroundColor: vars.fg.gray[200],
            borderColor: vars.fg.gray[500],
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})
