import type { RuntimeFn } from '@vanilla-extract/recipes'
import type { BaseVariants, SlotTree } from './types'

export const shouldUninheritVariantsSymbol = Symbol('isUninheritedVariants')

export function getShouldUninheritVariants(tree: RuntimeFn<any> | { __tree: SlotTree } | SlotTree): boolean {
  return Boolean((tree as any)[shouldUninheritVariantsSymbol])
}

export function uninheritVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(tree: T): T {
  return new Proxy(tree, {
    get(target, prop) {
      if (prop === shouldUninheritVariantsSymbol) {
        return true
      }

      return Reflect.get(target, prop)
    },
  })
}

export function inheritVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(tree: T): T {
  return new Proxy(tree, {
    get(target, prop) {
      if (prop === shouldUninheritVariantsSymbol) {
        return false
      }

      return Reflect.get(target, prop)
    },
  })
}

export const inheritedVariantsMapperSymbol = Symbol('mapInheritedVariants')

type InheritedVariantsMapper = (variants: BaseVariants) => BaseVariants

export const identityInheritedVariantsMapper: InheritedVariantsMapper = variants => variants

export function getInheritedVariantsMapper(tree: RuntimeFn<any> | { __tree: SlotTree } | SlotTree): InheritedVariantsMapper {
  const mapFn = (tree as any)[inheritedVariantsMapperSymbol] as InheritedVariantsMapper | undefined
  return typeof mapFn === 'function' ? mapFn : identityInheritedVariantsMapper
}

export function mapInheritedVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(tree: T, mapper: (variants: BaseVariants) => BaseVariants): T {
  return new Proxy(tree, {
    get(target, prop) {
      if (prop === inheritedVariantsMapperSymbol) {
        const nestedMapper = Reflect.get(target, prop) as any

        return typeof nestedMapper === 'function'
          ? (variants: BaseVariants) => nestedMapper(mapper(variants))
          : mapper
      }

      return Reflect.get(target, prop)
    },
  })
}

/**
 * Note: this function only works inside compose fn, not outside
 */
export function mergeDefaultVariants<T extends RuntimeFn<any> | { __tree: SlotTree } | SlotTree>(
  tree: T,
  defaultVariants: T extends RuntimeFn<any> ? Parameters<T>[0] :
    T extends { __tree: SlotTree } ? Parameters<T['__tree']['root']>[0] :
      T extends SlotTree ? Parameters<T['root']>[0] :
        never
  ,
): T {
  if (typeof tree === 'object' || ('__tree' in tree && typeof tree.__tree === 'object')) {
    return mapInheritedVariants(tree, inheritVariants => ({
      ...defaultVariants,
      ...inheritVariants,
    }))
  }

  else if (typeof tree === 'function') {
    return new Proxy(tree, {
      apply(target, thisArg, args) {
        const [variants, ...rest] = args

        return Reflect.apply(target, thisArg, [
          {
            ...defaultVariants,
            ...(variants ?? {}),
          },
          ...rest,
        ])
      },
    })
  }

  throw new Error('Invalid tree')
}
