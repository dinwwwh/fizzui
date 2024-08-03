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
      base: {},
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const sliderTrack = recipe({
  base: {
    position: 'relative',
  },

  variants: {
    size: {
      md: {
        borderRadius: vars.radius.full,
        height: rem(6),
        width: rem(320),
      },
    },
    color: {
      base: {
        backgroundColor: vars.bg.base[200],

        [disabledSelector]: {
          opacity: 0.35,
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})

export const sliderRange = recipe({
  base: {
    position: 'absolute',
  },

  variants: {
    size: {
      md: {
        borderRadius: vars.radius.full,
        height: '100%',
      },
    },
    color: {
      base: {
        backgroundColor: vars.bg.base[800],
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
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
        borderRadius: vars.radius.full,
        width: rem(16),
        height: rem(16),

        borderWidth: rem(1.5),
      },
    },
    color: {
      base: {
        backgroundColor: vars.fg.base[0],
        borderColor: vars.fg.base[800],

        selectors: {
          [focusVisibleSelector]: {
            outline: `${rem(1)} solid ${vars.fg.base[800]}`,
            outlineOffset: rem(1),
          },
          [disabledSelector]: {
            backgroundColor: vars.fg.base[200],
            borderColor: vars.fg.base[500],
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'base',
  },
})
