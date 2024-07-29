import { type BaseVariants, type ChainableSlotTree, type SlotTree, exclusiveSlotsKeys } from './types'
import { filterValidRFVariants } from './utils'
import { detailVariantsSymbol, getDetailVariants } from './variants'

export function compose<C extends SlotTree>(tree: C, inheritedVariants: Exclude<BaseVariants, undefined> = {}, rootVariants: BaseVariants = undefined): ChainableSlotTree<C> {
  const detailVariants = getDetailVariants(inheritedVariants)

  const composed = Object.assign((variants: Parameters<C['root']>[0]): ChainableSlotTree<C> => {
    return compose(tree, {
      ...filterValidRFVariants(tree.root, inheritedVariants),
      ...filterValidRFVariants(tree.root, variants),

      [detailVariantsSymbol]: [...detailVariants],
    }, {
      ...rootVariants,
      ...variants,
    })
  }, {
    root(variants: Parameters<C['root']>[0]): string {
      return tree.root({
        ...filterValidRFVariants(tree.root, inheritedVariants),
        ...filterValidRFVariants(tree.root, {
          ...rootVariants,
          ...variants,
        }),

        [detailVariantsSymbol]: [...detailVariants, {
          ...rootVariants,
          ...variants,
        }],
      })
    },
    toString(): string {
      return tree.root({
        ...filterValidRFVariants(tree.root, inheritedVariants),

        [detailVariantsSymbol]: [...detailVariants, rootVariants],
      })
    },
    __tree: tree,
  }) as any

  for (const key in tree) {
    if (!tree[key] || exclusiveSlotsKeys.some(k => k === key)) {
      continue
    }

    if ('__tree' in tree[key] && typeof tree[key].__tree === 'object') {
      composed[key] = compose(tree[key].__tree as SlotTree, {
        ...inheritedVariants,

        [detailVariantsSymbol]: [...detailVariants, rootVariants],
      })
    }

    else if (typeof tree[key] === 'function') {
      composed[key] = compose({
        root: tree[key],
      }, {
        ...inheritedVariants,

        [detailVariantsSymbol]: [...detailVariants, rootVariants],
      })
    }

    else if (typeof tree[key] === 'object') {
      composed[key] = compose(tree[key] as SlotTree, {
        ...inheritedVariants,

        [detailVariantsSymbol]: [...detailVariants, rootVariants],
      })
    }
  }

  return composed
}
