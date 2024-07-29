import { interceptRF } from '@compose/utils'
import { expect, it } from 'vitest'
import { buttonRoot } from './styles/button/ui.css'

it('should work', () => {
  const interceptedButtonRoot = interceptRF(buttonRoot, ([variants], rf) => {
    expect(variants).toEqual(undefined)
    expect(rf).toEqual(buttonRoot)

    return 'overrided-class-name'
  })

  expect(interceptedButtonRoot.classNames.base).toBe(buttonRoot.classNames.base)

  expect(interceptedButtonRoot()).toBe('overrided-class-name')

  const interceptedButtonRoot2 = interceptRF(buttonRoot, ([variants]) => {
    // DO NOTHING
    expect(variants).toEqual({ size: 'medium', rounded: true })
  })

  expect(interceptedButtonRoot2({ size: 'medium', rounded: true })).toBe(buttonRoot({ size: 'medium', rounded: true }))
})
