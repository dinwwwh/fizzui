import { expect, it } from 'vitest'
import { filterValidRFVariants } from '../utils'
import { buttonRoot } from './styles/button/ui.css'
import { mergedButtonRoot } from './styles/merged-button'

it('should filter valid variants', () => {
  expect(filterValidRFVariants(buttonRoot, { size: 'small' })).toEqual({ size: 'small' })
  expect(filterValidRFVariants(buttonRoot, { size: 'zed' })).toEqual({ })
  expect(filterValidRFVariants(buttonRoot, { size: 'small', z2: true })).toEqual({ size: 'small' })
  expect(filterValidRFVariants(buttonRoot, { rounded: true })).toEqual({ rounded: true })
  expect(filterValidRFVariants(buttonRoot, { rounded: false })).toEqual({ rounded: false })
  expect(filterValidRFVariants(buttonRoot, { rounded: 'true' })).toEqual({ rounded: 'true' })

  expect(filterValidRFVariants(mergedButtonRoot, { size: 'small', rounded: true }))
    .toEqual({ size: 'small', rounded: true })

  expect(filterValidRFVariants(mergedButtonRoot, { size: 'medium', rounded: true }))
    .toEqual({ rounded: true })
})
