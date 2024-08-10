import { mergeDefaultVariants } from '@compose/variants'
import { expect, it } from 'vitest'
import { compose } from '@compose/compose'
import { buttonRoot } from './styles/button/ui.css'
import { button } from './styles/button'

it('should work with runtime fn', () => {
  const merged = mergeDefaultVariants(buttonRoot, { size: 'large' })

  expect(merged()).toEqual(buttonRoot({ size: 'large', rounded: false }))
  expect(merged({ rounded: true })).toEqual(buttonRoot({ size: 'large', rounded: true }))
  expect(merged({ size: 'small', rounded: true })).toEqual(buttonRoot({ size: 'small', rounded: true }))
})

it('should work with composed', () => {
  const merged = compose({
    root: buttonRoot,
    mergedButton: mergeDefaultVariants(button, { rounded: true }),
  })

  expect(merged.mergedButton.toString()).toEqual(button({ rounded: true, size: 'medium' }).toString())
  expect(merged.mergedButton({ size: 'large' }).toString()).toEqual(button({ rounded: true, size: 'large' }).toString())
  expect(merged.mergedButton({ rounded: false, size: 'large' }).toString()).toEqual(button({ rounded: false, size: 'large' }).toString())
})

it('should work with tree', () => {
  const merged = compose({
    root: buttonRoot,
    mergedButton: mergeDefaultVariants({
      root: buttonRoot,
    }, { rounded: true }),
  })

  expect(merged.mergedButton.toString()).toEqual(button({ rounded: true, size: 'medium' }).toString())
  expect(merged.mergedButton({ size: 'large' }).toString()).toEqual(button({ rounded: true, size: 'large' }).toString())
  expect(merged.mergedButton({ rounded: false, size: 'large' }).toString()).toEqual(button({ rounded: false, size: 'large' }).toString())
})
