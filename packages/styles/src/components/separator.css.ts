import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import type { StyleRule } from '@vanilla-extract/css'

const horizontal: StyleRule = {
  height: '1px',
  width: '100%',
}

const vertical: StyleRule = {
  width: '1px',
  height: '100%',
}

export const separatorRoot = recipe({
  base: {
    flexShrink: 0,
  },

  variants: {
    orientation: {
      horizontal,
      vertical,
    },

    autoOrientation: {
      true: {
        selectors: {
          '&[data-orientation="horizontal"]': horizontal,
          '&[data-orientation="vertical"]': vertical,
        },
      },
    },

    color: {
      'base-100': {
        backgroundColor: vars.border.base[100],
      },
      'base-200': {
        backgroundColor: vars.border.base[200],
      },
      'base-300': {
        backgroundColor: vars.border.base[300],
      },
    },

    insideFlex: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { insideFlex: true, autoOrientation: true },
      style: {
        selectors: {
          '&[data-orientation="vertical"]': {
            height: 'auto',
            alignItems: 'stretch',
          },
        },
      },
    },
    {
      variants: { insideFlex: true, orientation: 'vertical' },
      style: {
        height: 'auto',
        alignItems: 'stretch',
      },
    },
  ],

  defaultVariants: {
    orientation: 'horizontal',
    autoOrientation: false,
    color: 'base-200',
    insideFlex: false,
  },
})
