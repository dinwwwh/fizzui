import { expect, it } from 'vitest'
import { button } from './composed'
import { buttonRoot, iconRoot } from './ui.css'

it('should inherit variants', () => {
  expect(button({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))
  expect(button({ size: 'medium' }).icon.root()).toBe(iconRoot({ size: 'medium' }))

  expect(button.level2({ size: 'medium' }).uninheritIcon2.toString()).toBe(iconRoot({ size: 'medium' }))
  expect(button.level2({ size: 'medium' }).uninheritIcon2.root()).toBe(iconRoot({ size: 'medium' }))
})

it('should uninherit variants', () => {
  expect(button({ size: 'medium' }).level2.toString()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'medium' }).uninheritIcon.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button({ size: 'medium' }).uninheritIcon2.toString()).toBe(iconRoot({ size: 'medium' }))
  expect(button({ size: 'medium' }).uninheritIcon2.root()).toBe(iconRoot({ size: 'medium' }))

  expect(button({ size: 'medium' }).level2.uninheritIcon1.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2({ size: 'medium' }).uninheritIcon1.toString()).toBe(iconRoot({ size: 'small' }))

  expect(button({ size: 'medium' }).level2.uninheritIcon2.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2({ size: 'medium' }).uninheritIcon2.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button({ size: 'medium' }).level2.level3.uninheritIcon1.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2({ size: 'medium' }).level3.uninheritIcon1.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2.level3({ size: 'medium' }).uninheritIcon1.toString()).toBe(iconRoot({ size: 'small' }))

  expect(button({ size: 'medium' }).level2.level3.uninheritIcon2.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2({ size: 'medium' }).level3.uninheritIcon2.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2.level3({ size: 'medium' }).uninheritIcon2.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button({ size: 'medium' }).level2.level3.uninheritIcon3.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button.level2({ size: 'medium' }).level3.uninheritIcon3.toString()).toBe(iconRoot({ size: 'medium' }))
  expect(button.level2.level3({ size: 'medium' }).uninheritIcon3.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button.level2({ size: 'medium' }).level3({ size: 'large' }).uninheritIcon3.toString())
    .toBe(iconRoot({ size: 'large' }))

  expect(button.level2.level3({ size: 'large' }).uninheritIcon3({ size: 'medium' }).toString())
    .toBe(iconRoot({ size: 'medium' }))
})

it('should work with nested compose', () => {
  expect(button({ size: 'medium' }).composed.toString()).toBe(buttonRoot({ size: 'medium' }))
  expect(button({ size: 'medium' }).uninheritComposed.toString()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'medium' }).uninheritComposed.root()).toBe(buttonRoot({ size: 'small' }))
  expect(button.uninheritComposed({ size: 'medium' }).toString()).toBe(buttonRoot({ size: 'medium' }))
  expect(button.uninheritComposed({ size: 'medium' }).root()).toBe(buttonRoot({ size: 'medium' }))
  expect(button.uninheritComposed({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button.uninheritComposed({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))
})
