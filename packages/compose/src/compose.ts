import { type BaseVariants, type ChainableSlotTree, type SlotTree, exclusiveSlotsKeys } from './types'
import { filterValidRFVariants } from './utils'
import { getIsUninheritedVariants } from './variants'

export function compose<C extends SlotTree>(tree: C, inheritedVariants?: BaseVariants, className?: string): ChainableSlotTree<C> {
  const composed = Object.assign((variants: Parameters<C['root']>[0] & { className?: string, class?: string }): ChainableSlotTree<C> => {
    return compose(tree, {
      ...inheritedVariants,
      ...variants,
    }, [variants?.className, variants?.class].filter(Boolean).join(' '))
  }, {
    root(variants: Parameters<C['root']>[0] & { className?: string, class?: string }): string {
      return tree.root({
        ...filterValidRFVariants(tree.root, inheritedVariants),
        ...filterValidRFVariants(tree.root, variants),
      })
      + (variants?.className ? ` ${variants.className}` : '')
      + (variants?.class ? ` ${variants.class}` : '')
    },
    toString(): string {
      return tree.root({
        ...filterValidRFVariants(tree.root, inheritedVariants),
      }) + (className ? ` ${className}` : '')
    },
    __tree: tree,
  }) as any

  for (const key in tree) {
    if (!tree[key] || exclusiveSlotsKeys.some(k => k === key)) {
      continue
    }

    const isUninherited = getIsUninheritedVariants(tree[key])

    if ('__tree' in tree[key] && typeof tree[key].__tree === 'object') {
      composed[key] = compose(
        tree[key].__tree as SlotTree,
        isUninherited ? undefined : inheritedVariants,
      )
    }

    else if (typeof tree[key] === 'function') {
      composed[key] = compose(
        { root: tree[key] },
        isUninherited ? undefined : inheritedVariants,
      )
    }

    else if (typeof tree[key] === 'object') {
      composed[key] = compose(
        tree[key] as SlotTree,
        isUninherited ? undefined : inheritedVariants,
      )
    }
  }

  return composed
}
