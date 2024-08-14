// eslint-disable-next-line no-restricted-imports
import { style } from '@vanilla-extract/css'
import { vars } from './themes.css'

export const reset = style({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: `0 solid ${vars.border.base[200]}`,
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  background: 'transparent',
  borderSpacing: 0,
})
