import type { RuntimeFn } from '@vanilla-extract/recipes'
import { mapValues } from 'radash'
import type { BaseVariants, SlotTree } from './types'
import { filterValidRFVariants, interceptRF } from './utils'

export const detailVariantsSymbol = Symbol('variantsDetail')

export function getDetailVariants(variants: Exclude<BaseVariants, undefined>): BaseVariants[] {
  return (variants as any)[detailVariantsSymbol] ?? []
}

export function uninheritVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(tree: T, from: number = -1): T extends { __tree: SlotTree } ? T['__tree'] : T {
  if ('__tree' in tree && typeof tree.__tree === 'object') {
    return mapValues(tree.__tree, (node, key) => uninheritVariants(node, key === 'root' ? from : from - 1)) as any
  }

  else if (typeof tree === 'function') {
    return interceptRF(tree, ([variants, ...args], rf) => {
      const detailVariants = variants ? getDetailVariants(variants) : []
      let uninheritedVariants: typeof variants = {}

      for (let i = from; i <= -1; i++) {
        uninheritedVariants = {
          ...uninheritedVariants,
          ...filterValidRFVariants(rf, detailVariants.at(i)),
        }
      }

      return rf(uninheritedVariants, ...args)
    }) as any
  }

  return mapValues(tree as SlotTree, (node, key) => uninheritVariants(node, key === 'root' ? from : from - 1)) as any
}
