import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { focusVisibleSelector, rem } from '@styles/utils'

export const buttonGroupRoot = recipe({
  base: {
    display: 'inline-flex',
  },

  variants: {
    size: {
      sm: {
        borderRadius: vars.border.radius.md,
      },
      md: {
        borderRadius: vars.border.radius.lg,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const buttonGroupItem = recipe({
  base: {
    borderRadius: 0,

    selectors: {
      '&:not(:first-child)': {
        marginLeft: rem(-1),
      },

      '&:first-child': {
        borderTopLeftRadius: 'inherit',
        borderBottomLeftRadius: 'inherit',
      },
      '&:last-child': {
        borderTopRightRadius: 'inherit',
        borderBottomRightRadius: 'inherit',
      },

      [focusVisibleSelector]: {
        zIndex: 1,
        outline: 'none',
        borderColor: vars.fg.gray[800],
      },
    },
  },

  variants: {
    variant: {
      outline: {},
    },
  },

  defaultVariants: {
    variant: 'outline',
  },
})
