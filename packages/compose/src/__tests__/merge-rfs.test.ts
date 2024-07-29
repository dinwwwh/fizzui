import { expect, expectTypeOf, it } from 'vitest'
import { unique } from 'radash'
import { mergedButtonRoot } from './styles/merged-button'
import { extendedButtonRoot } from './styles/merged-button/ui.css'
import { buttonRoot } from './styles/button/ui.css'

it('works', () => {
  expectTypeOf<Parameters<typeof mergedButtonRoot>[0]>()
    .toEqualTypeOf<Parameters<typeof buttonRoot>[0] & Parameters<typeof extendedButtonRoot>[0]>()

  expect(mergedButtonRoot.variants()).toEqual(unique([...buttonRoot.variants(), ...extendedButtonRoot.variants()]))

  expect(mergedButtonRoot.classNames.base).toEqual(buttonRoot.classNames.base)

  expect(mergedButtonRoot.classNames.variants.rounded.true).toEqual(buttonRoot.classNames.variants.rounded.true)
  expect(mergedButtonRoot.classNames.variants.size.small).toEqual(buttonRoot.classNames.variants.size.small)

  expect(mergedButtonRoot()).toBe(`${buttonRoot()} ${extendedButtonRoot()}`)
  expect(mergedButtonRoot({ rounded: true }))
    .toBe(`${buttonRoot({ rounded: true })} ${extendedButtonRoot()}`)
  expect(mergedButtonRoot({ rounded: true, size: 'small' }))
    .toBe(`${buttonRoot({ rounded: true, size: 'small' })} ${extendedButtonRoot({ size: 'small' })}`)

  // @ts-expect-error it even works with invalid variants
  expect(mergedButtonRoot({ rounded: true, size: 'medium' }))
    .toBe(`${buttonRoot({ rounded: true, size: 'medium' })} ${extendedButtonRoot()}`)
})
