export const disabledSelector = '&:is(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'
export const disabledWithinSelector = '&:has(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'
export const userInvalidSelector = '&:is(:user-invalid, [aria-invalid=\'\'], [aria-invalid=\'true\'], [data-invalid=\'\'], [data-invalid=\'true\'])'
export const userInvalidWithinSelector = '&:has(:user-invalid, [aria-invalid=\'\'], [aria-invalid=\'true\'], [data-invalid=\'\'], [data-invalid=\'true\'])'
export const focusSelector = '&:focus'
export const focusVisibleSelector = '&:focus-visible'
export const focusWithinSelector = '&:focus-within'
export const focusVisibleWithinSelector = '&:focus-within:has(:focus-visible)'
export const focusVisibleInvalidWithinSelector = '&:focus-within:has(:focus-visible):has(:invalid, [aria-invalid=\'\'], [aria-invalid=\'true\'], [data-invalid=\'\'], [data-invalid=\'true\'])'
export const focusVisibleUserInvalidWithinSelector = '&:focus-within:has(:focus-visible):has(:user-invalid, [aria-invalid=\'\'], [aria-invalid=\'true\'], [data-invalid=\'\'], [data-invalid=\'true\'])'
export const hoverSelector = '&:is(:hover, [data-hover=\'\'], [data-hover=\'true\'], [aria-expanded=\'true\'], [aria-expanded=\'\'], [data-expanded=\'\'], [data-expanded=\'true\'], [data-state=\'open\']):not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'
export const pressedSelector = '&:is(:active, [data-pressed=\'\'] ,[data-pressed=\'true\']):not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'
export const enabledSelector = '&:not(:disabled, [aria-disabled=\'\'], [aria-disabled=\'true\'], [data-disabled=\'\'], [data-disabled=\'true\'])'

export function rem(px: number) {
  return `${px / 16}rem`
}
