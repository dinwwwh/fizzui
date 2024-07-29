import { expect, it } from 'vitest'
import { button } from './styles/button'
import { buttonIcon, buttonRoot } from './styles/button/ui.css'

it('should concat className and class', () => {
  const className = `btn-${Math.random()}`

  expect(button({ className }).toString()).toBe(`${buttonRoot()} ${className}`)
  expect(button({ class: className }).root()).toBe(buttonRoot())
  expect(button().root({ className })).toBe(`${buttonRoot()} ${className}`)

  expect(button.icon({ class: className }).toString()).toBe(`${buttonIcon()} ${className}`)
  expect(button.icon({ className, size: 'large' }).toString()).toBe(`${buttonIcon({ size: 'large' })} ${className}`)
})

it('should even work when both className and class are provided', () => {
  const className = `btn-${Math.random()}`

  expect(button({ className, class: className }).toString()).toBe(`${buttonRoot()} ${className} ${className}`)
  expect(button.icon({ className, class: className, size: 'large' }).toString()).toBe(`${buttonIcon({ size: 'large' })} ${className} ${className}`)
})
