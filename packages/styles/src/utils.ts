export const disabledSelector = '&:disabled, &[aria-disabled=\'\'], &[aria-disabled=\'true\'], &[data-disabled=\'\'], &[data-disabled=\'true\']'
export const focusSelector = '&:focus'
export const focusWithinSelector = '&:focus-within'
export const focusVisibleSelector = '&:focus-visible'
export const hoverSelector = '&:hover:not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\']), &[data-hover=\'true\']:not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'
export const pressedSelector = '&:active:not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\']), &[data-pressed=\'true\']:not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'
export const enabledSelector = '&:not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'

export function rem(px: number) {
  return `${px / 16}rem`
}
