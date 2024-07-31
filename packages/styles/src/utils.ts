export const disabledSelector = '&:disabled, &[aria-disabled=\'true\'], &[data-disabled=\'true\']'
export const focusSelector = '&:focus:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\']), &[data-focus=\'true\']:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\'])'
export const hoverSelector = '&:hover:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\']), &[data-hover=\'true\']:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\'])'
export const pressedSelector = '&:active:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\']), &[data-pressed=\'true\']:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\'])'
export const enabledSelector = '&:not(:disabled, [aria-disabled=\'true\'], [data-disabled=\'true\'])'

export function rem(px: number) {
  return `${px / 16}rem`
}
