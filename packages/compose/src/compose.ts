import type { ComposableSlots, SlotTree } from './types'

export function compose<C extends SlotTree>(tree: C): ComposableSlots<C> {
  // TODO: implement
  return tree as any
}
