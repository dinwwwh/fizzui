import { recipe as baseRecipe } from '@vanilla-extract/recipes'
import { style as baseStyle } from '@vanilla-extract/css'
import { reset } from './lib.css'

export const recipe: typeof baseRecipe = (options, ...args) => {
  const base = Array.isArray(options.base) ? options.base : options.base ? [options.base] : []

  return baseRecipe({
    ...options,
    base: [reset, ...base],
  }, ...args)
}

export const style: typeof baseStyle = (_, ...args) => {
  const options = Array.isArray(_) ? _ : _ ? [_] : []

  return baseStyle([reset, ...options], ...args)
}
