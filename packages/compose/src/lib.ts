import { recipe as baseRecipe } from '@vanilla-extract/recipes'
import { reset } from './reset.css'

export const recipe: typeof baseRecipe = (options, ...args) => {
  const base = Array.isArray(options.base) ? options.base : options.base ? [options.base] : []

  return baseRecipe({
    ...options,
    base: [reset, ...base],
  }, ...args)
}
