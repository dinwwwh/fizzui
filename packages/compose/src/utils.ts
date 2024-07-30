import type { RuntimeFn } from '@vanilla-extract/recipes'
import { unique } from 'radash'
import type { BaseVariants, MergeRF, SlotTree } from './types'

export function filterValidRFVariants<T extends RuntimeFn<any>>(
  rf: T,
  variants: BaseVariants,
): Parameters<T>[0] {
  const validVariants: Parameters<T>[0] = {}

  for (const key in variants) {
    if (!(key in rf.classNames.variants)) {
      continue
    }

    if (variants[key] && !(String(variants[key]) in rf.classNames.variants[key]!)) {
      continue
    }

    validVariants[key] = variants[key] as any
  }

  return validVariants
}

export function mergeRF<
  A extends RuntimeFn<any>,
  B extends RuntimeFn<any>,
>(a: A, b: B): MergeRF<A, B> {
  const call = (
    ...[variants]: Parameters<A> & Parameters<B>
  ): ReturnType<A> & ReturnType<B> => {
    return [
      a(filterValidRFVariants(a, variants)),
      b(filterValidRFVariants(b, variants)),
    ]
      .filter(Boolean)
      .join(' ') as ReturnType<A> & ReturnType<B>
  }

  const variants = (): ReturnType<A['variants']> &
    ReturnType<B['variants']> => {
    const v1 = a.variants()
    const v2 = b.variants()

    return unique([...v1, ...v2]) as ReturnType<A['variants']> &
      ReturnType<B['variants']>
  }

  const mergedVariants: RuntimeFn<any>['classNames']['variants'] = {}

  for (const k of unique([
    ...Object.keys(a.classNames.variants),
    ...Object.keys(b.classNames.variants),
  ])) {
    if (!(k in a.classNames.variants)) {
      mergedVariants[k] = b.classNames.variants[k]!
      continue
    }

    if (!(k in b.classNames.variants)) {
      mergedVariants[k] = a.classNames.variants[k]!
      continue
    }

    mergedVariants[k] = {}

    for (const k2 of unique([
      ...Object.keys(a.classNames.variants[k]!),
      ...Object.keys(b.classNames.variants[k]!),
    ])) {
      if (!(k2 in a.classNames.variants[k]!)) {
        continue
      }

      if (!(k2 in b.classNames.variants[k]!)) {
        continue
      }

      mergedVariants[k][k2] = a.classNames.variants[k]![k2]!
    }
  }

  return Object.assign(call, {
    variants,
    classNames: {
      base: a.classNames.base,
      variants: mergedVariants as any,
    },
  })
}

export function mergeRootRF<
  T extends SlotTree | { __tree: SlotTree },
  B extends RuntimeFn<any>,
>(tree: T, rootToMerge: B): T extends { __tree: SlotTree } ? Omit<T, '__tree'> & {
  __tree: {
    [K in keyof T['__tree']]: K extends 'root' ? MergeRF<T['__tree'][K], B> : T['__tree'][K]
  }
} : {
  [K in keyof T]: K extends 'root' ? T[K] extends RuntimeFn<any> ? MergeRF<T[K], B> : T[K] : T[K]
} {
  return new Proxy(tree, {
    get(target, prop) {
      if (prop === '__tree') {
        const tree = Reflect.get(target, prop)

        if (typeof tree !== 'object') {
          return tree
        }

        return mergeRootRF(tree, rootToMerge)
      }

      if (prop === 'root') {
        const root = Reflect.get(target, prop)

        if (typeof root !== 'function') {
          return root
        }

        return mergeRF(root as any, rootToMerge)
      }

      return Reflect.get(target, prop)
    },
  }) as any
}
