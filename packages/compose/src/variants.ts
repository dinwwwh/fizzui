import type { RuntimeFn } from '@vanilla-extract/recipes'
import type { SlotTree } from './types'

export const isUninheritedVariantsSymbol = Symbol('isUninheritedVariants')

export function getIsUninheritedVariants(tree: RuntimeFn<any> | { __tree: SlotTree } | SlotTree): boolean {
  return Boolean((tree as any)[isUninheritedVariantsSymbol])
}

export function uninheritVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(tree: T): T {
  return new Proxy(tree, {
    get(target, prop) {
      if (prop === isUninheritedVariantsSymbol) {
        return true
      }

      return Reflect.get(target, prop)
    },
  })
}

export function inheritVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(tree: T): T {
  return new Proxy(tree, {
    get(target, prop) {
      if (prop === isUninheritedVariantsSymbol) {
        return false
      }

      return Reflect.get(target, prop)
    },
  })
}
