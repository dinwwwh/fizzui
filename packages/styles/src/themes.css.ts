import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'
import { mapValues } from 'radash'
import { rem } from './utils'

const colors = {
  zinc: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
    1000: '#000000',
  },
}

export const vars = createGlobalThemeContract({
  bg: {
    gray: mapValues(colors.zinc, (_, key) => `bg-gray-${key}`),
  },
  fg: {
    gray: mapValues(colors.zinc, (_, key) => `fg-gray-${key}`),
  },
  border: {
    gray: {
      100: 'border-gray-100',
      200: 'border-gray-200',
      300: 'border-gray-300',
    },

    radius: {
      none: 'border-radius-none',
      sm: 'border-radius-sm',
      md: 'border-radius-md',
      lg: 'border-radius-lg',
      full: 'border-radius-full',
    },
  },
}, value => `fizzui-${value}`)

createGlobalTheme(':root', vars, {
  bg: {
    gray: colors.zinc,
  },
  fg: {
    gray: colors.zinc,
  },
  border: {
    gray: {
      100: colors.zinc[100],
      200: colors.zinc[200],
      300: colors.zinc[300],
    },

    radius: {
      none: '0px',
      sm: rem(4),
      md: rem(6),
      lg: rem(8),
      full: '9999px',
    },
  },

})
