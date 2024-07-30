import { expect, expectTypeOf, it } from 'vitest'
import { mergeRootRF } from '@compose/utils'
import { compose } from '../compose'
import { buttonIcon, buttonRoot } from './styles/button/ui.css'
import { extendedButtonRoot } from './styles/merged-button/ui.css'

it('merges root rf', () => {
  const composed1 = compose({
    root: buttonRoot,
    icon: buttonIcon,
  })

  const merged1 = mergeRootRF(composed1, extendedButtonRoot)

  expectTypeOf<Parameters<typeof merged1['__tree']['root']>[0]>()
    .toEqualTypeOf<(Parameters<typeof buttonRoot>[0] & Parameters<typeof extendedButtonRoot>[0])>()

  expect(merged1.__tree.root({})).toBe(`${composed1.__tree.root({})} ${extendedButtonRoot({})}`)
  expect(merged1.__tree.root({ size: 'small' })).toBe(`${composed1.__tree.root({ size: 'small' })} ${extendedButtonRoot({ size: 'small' })}`)
  expect(merged1.__tree.root({ size: 'small', rounded: true })).toBe(`${composed1.__tree.root({ size: 'small', rounded: true })} ${extendedButtonRoot({ size: 'small' })}`)

  expect(merged1.__tree.icon({})).toBe(buttonIcon({}))
})

it('merges root rf 2', () => {
  const composed1 = {
    root: buttonRoot,
    icon: buttonIcon,
  }

  const merged1 = mergeRootRF(composed1, extendedButtonRoot)

  expectTypeOf<Parameters<typeof merged1['root']>[0]>()
    .toEqualTypeOf<(Parameters<typeof buttonRoot>[0] & Parameters<typeof extendedButtonRoot>[0])>()

  expect(merged1.root({})).toBe(`${composed1.root({})} ${extendedButtonRoot({})}`)
  expect(merged1.root({ size: 'small' })).toBe(`${composed1.root({ size: 'small' })} ${extendedButtonRoot({ size: 'small' })}`)
  expect(merged1.root({ size: 'small', rounded: true })).toBe(`${composed1.root({ size: 'small', rounded: true })} ${extendedButtonRoot({ size: 'small' })}`)

  expect(merged1.icon({})).toBe(buttonIcon({}))
})
