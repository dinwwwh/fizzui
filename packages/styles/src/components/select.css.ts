import { recipe } from '@styles/lib'
import { vars } from '@styles/themes.css'
import { disabledSelector, rem } from '@styles/utils'

export const selectRoot = recipe({
  base: {
    color: vars.fg.gray[950],
    backgroundColor: vars.bg.gray[0],
    overflow: 'hidden',
    borderRadius: vars.border.radius.md,
    boxShadow: vars.shadow.md,
  },

  variants: {},
})

export const selectViewport = recipe({
  base: {
    padding: rem(6),
  },
  variants: {},
})

export const selectItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    fontSize: rem(14),

    height: rem(28),
    padding: `0 ${rem(24)}`,
    borderRadius: vars.border.radius.md,

    position: 'relative',
    userSelect: 'none',
    cursor: 'pointer',

    selectors: {
      '&[data-state="checked"]': {
        backgroundColor: vars.bg.gray[50],
      },

      '&[data-highlighted]': {
        outline: 'none',
        backgroundColor: vars.bg.gray[100],
      },

      [disabledSelector]: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },

  variants: {},
})

export const selectItemIndicator = recipe({
  base: {
    position: 'absolute',
    height: rem(12),
    width: rem(12),
    left: rem(6),
    top: '50%',
    transform: 'translateY(-50%)',
    color: vars.fg.gray[600],
  },

  variants: {},
})

export const selectScrollButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: rem(26),
    color: vars.fg.gray[500],
  },
  variants: {},
})

export const selectScrollButtonIcon = recipe({
  base: {
    height: rem(16),
    width: rem(16),
  },
  variants: {},
})

export const selectLabel = recipe({
  base: {
    padding: `0 ${rem(24)}`,
    fontSize: rem(14),
    lineHeight: rem(26),
    fontWeight: 600,
  },

  variants: {},
})

export const selectSeparator = recipe({
  base: {
    borderColor: vars.bg.gray[100],
    borderBottomWidth: rem(1),
    margin: `${rem(4)} ${rem(-6)}`,
  },
  variants: {},
})
