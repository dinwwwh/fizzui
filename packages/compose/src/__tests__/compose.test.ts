import { expect, it } from 'vitest'
import { button } from './styles/button'
import { buttonIcon, buttonRoot } from './styles/button/ui.css'

it('is chainable', () => {
  expect(button.toString()).toBe(buttonRoot())
  expect(button.root()).toBe(buttonRoot())
  expect(button().toString()).toBe(buttonRoot())

  expect(button.childButton.toString()).toBe(buttonRoot())
  expect(button.childButton.root()).toBe(buttonRoot())
  expect(button().childButton().toString()).toBe(buttonRoot())

  expect(button.icon.toString()).toBe(buttonIcon())
  expect(button.icon.root()).toBe(buttonIcon())
  expect(button.icon().toString()).toBe(buttonIcon())

  expect(button.iconRoot.toString()).toBe(buttonIcon())
  expect(button.iconRoot.root()).toBe(buttonIcon())
  expect(button.iconRoot().toString()).toBe(buttonIcon())

  expect(button.childButton.icon.toString()).toBe(buttonIcon())
  expect(button.childButton.icon.root()).toBe(buttonIcon())
  expect(button().childButton().icon().toString()).toBe(buttonIcon())

  expect(button.childButtonIcon.toString()).toBe(buttonIcon())
  expect(button.childButtonIcon.root()).toBe(buttonIcon())
  expect(button().childButtonIcon().toString()).toBe(buttonIcon())
})

it('inherits variants correctly', () => {
  expect(button({ size: 'small' }).toString()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'small' }).root()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'small' })().toString()).toBe(buttonRoot({ size: 'small' }))

  expect(button({ size: 'small' }).childButton.toString()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'small' }).childButton.root()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'small' })().childButton().toString()).toBe(buttonRoot({ size: 'small' }))

  expect(button({ size: 'small' }).icon.toString()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ size: 'small' }).icon.root()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ size: 'small' })().icon().toString()).toBe(buttonIcon({ size: 'small' }))

  expect(button({ size: 'small' }).iconRoot.toString()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ size: 'small' }).iconRoot.root()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ size: 'small' }).iconRoot().toString()).toBe(buttonIcon({ size: 'small' }))

  expect(button({ size: 'small' }).childButton.icon.toString()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ size: 'small' }).childButton.icon.root()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ size: 'small' })().childButton().icon().toString()).toBe(buttonIcon({ size: 'small' }))
})

it('bypass invalid inherited variants', () => {
  // @ts-expect-error invalid is not a valid variant
  expect(button({ size: 'small', invalid: true }).toString()).toBe(buttonRoot({ size: 'small' }))

  expect(button({ size: 'small', rounded: true }).toString()).toBe(buttonRoot({ size: 'small', rounded: true }))
  expect(button({ size: 'small', rounded: true }).icon.toString()).toBe(buttonIcon({ size: 'small' }))
  expect(button({ rounded: true }).icon.toString()).toBe(buttonIcon())
})
