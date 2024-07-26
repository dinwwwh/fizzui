import type { RuntimeFn } from '@vanilla-extract/recipes'
import { unique } from 'radash'
import type { MergeRFs } from './types'

export function interceptRF<T extends RuntimeFn<any>>(
  runtimeFn: T,
  interceptor: (
    args: Parameters<T>,
    runtimeFn: T
  ) => string | undefined | void,
): T {
  return Object.assign((...args: Parameters<T>): ReturnType<T> => {
    const className = interceptor(args, runtimeFn)

    if (className === undefined) {
      return runtimeFn(...args) as ReturnType<T>
    }

    return className as ReturnType<T>
  }, runtimeFn)
}

export function filterValidRFVariants<T extends RuntimeFn<any>>(
  rf: T,
  variants: Parameters<T>[0],
): Parameters<T>[0] {
  const validVariants: typeof variants = {}

  for (const key in variants) {
    if (!(key in rf.classNames.variants)) {
      continue
    }

    if (variants[key] && !(variants[key] in rf.classNames.variants[key]!)) {
      continue
    }

    validVariants[key] = variants[key]
  }

  return validVariants
}

export function mergeRFs<
  A extends RuntimeFn<any>,
  B extends RuntimeFn<any>,
>(a: A, b: B): MergeRFs<A, B> {
  const call = (
    ...[variants]: Parameters<A> & Parameters<B>
  ): ReturnType<A> & ReturnType<B> => {
    const c1 = a(filterValidRFVariants(a, variants))
    const c2 = b(filterValidRFVariants(b, variants))

    return (c1 + (c1 ? ' ' : '') + c2) as ReturnType<A> & ReturnType<B>
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
