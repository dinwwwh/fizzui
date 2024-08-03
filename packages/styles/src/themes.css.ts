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
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
}

export const vars = createGlobalThemeContract({
  bg: {
    gray: mapValues(colors.zinc, (_, key) => `bg-gray-${key}`),
    danger: mapValues(colors.red, (_, key) => `bg-danger-${key}`),
  },
  fg: {
    gray: mapValues(colors.zinc, (_, key) => `fg-gray-${key}`),
    danger: mapValues(colors.red, (_, key) => `fg-danger-${key}`),
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
  shadow: {
    'xs': 'shadow-xs',
    'sm': 'shadow-sm',
    'md': 'shadow-md',
    'lg': 'shadow-lg',
    'xl': 'shadow-xl',
    '2xl': 'shadow-2xl',
    'inner': 'shadow-inner',
  },
}, value => `fizzui-${value}`)

createGlobalTheme(':root', vars, {
  bg: {
    gray: colors.zinc,
    danger: colors.red,
  },
  fg: {
    gray: colors.zinc,
    danger: colors.red,
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

  shadow: {
    'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
})
