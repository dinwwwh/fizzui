import { expect, it } from 'vitest'
import { button } from './composed'
import { buttonRoot, iconRoot } from './ui.css'

it('should inherit variants', () => {
  expect(button({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))
  expect(button({ size: 'medium' }).icon.root()).toBe(iconRoot({ size: 'medium' }))
})

it('should not uninherit variants on root', () => {
  expect(button({ size: 'large' }).withUninheritedRoot.toString()).toBe(buttonRoot({ size: 'large' }))
  expect(button({ size: 'large' }).withUninheritedRoot.root()).toBe(buttonRoot({ size: 'large' }))
})

it('should uninherit variants', () => {
  expect(button({ size: 'medium' }).uninheritIcon.toString()).toBe(iconRoot({ size: 'small' }))
  expect(button({ size: 'medium' }).uninheritIcon.root()).toBe(iconRoot({ size: 'small' }))
  expect(button({ size: 'medium' }).uninheritIcon({ size: 'large' }).root()).toBe(iconRoot({ size: 'large' }))
})

it('should work with nested compose', () => {
  expect(button({ size: 'medium' }).insideComposed.toString()).toBe(buttonRoot({ size: 'medium' }))
  expect(button({ size: 'medium' }).uninheritComposed.toString()).toBe(buttonRoot({ size: 'small' }))
  expect(button({ size: 'medium' }).uninheritComposed.root()).toBe(buttonRoot({ size: 'small' }))
  expect(button.uninheritComposed({ size: 'medium' }).toString()).toBe(buttonRoot({ size: 'medium' }))
  expect(button.uninheritComposed({ size: 'medium' }).root()).toBe(buttonRoot({ size: 'medium' }))
  expect(button.uninheritComposed({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button.uninheritComposed({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))
})

it('should work with inheritVariants', () => {
  expect(button({ size: 'medium' }).inheritComposed.toString()).toBe(buttonRoot({ size: 'medium' }))
  expect(button({ size: 'large' }).inheritComposed.root()).toBe(buttonRoot({ size: 'large' }))
  expect(button.inheritComposed({ size: 'medium' }).toString()).toBe(buttonRoot({ size: 'medium' }))
  expect(button.inheritComposed({ size: 'large' }).root()).toBe(buttonRoot({ size: 'large' }))
  expect(button.inheritComposed({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button.inheritComposed({ size: 'medium' }).icon.toString()).toBe(iconRoot({ size: 'medium' }))
})
