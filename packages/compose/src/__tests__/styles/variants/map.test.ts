import { expect, it } from 'vitest'
import { button } from './composed'
import { buttonRoot, iconRoot } from './ui.css'

it('should map variants', () => {
  expect(button.mappedIcon.toString()).toBe(iconRoot({ size: 'large' }))
  expect(button({ size: 'medium' }).mappedIcon.toString()).toBe(iconRoot({ size: 'medium' }))

  expect(button.mappedComposed.toString()).toBe(buttonRoot({ size: 'large' }))
  expect(button.mappedComposed.root()).toBe(buttonRoot({ size: 'large' }))
  expect(button.mappedComposed.root({ size: 'medium' })).toBe(buttonRoot({ size: 'medium' }))
  expect(button.mappedComposed({ size: 'medium' }).root()).toBe(buttonRoot({ size: 'medium' }))
})
