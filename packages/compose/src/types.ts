import type { RuntimeFn } from '@vanilla-extract/recipes'

export const exclusiveSlotsKeys = [
  'apply',
  'arguments',
  'bind',
  'call',
  'caller',
  'length',
  'name',
  'prototype',
  'root',
  'toString',
  '__tree',
] as const

export type ChainableSlots<
  Root extends RuntimeFn<any> = RuntimeFn<any>,
  Children extends Record<string, ChainableSlots> = Record<string, any>,
> = {
  (variants?: Parameters<Root>[0]): ChainableSlots<Root, Children>
  toString: () => string
  root: {
    (variants?: Parameters<Root>[0]): string
    toString: () => string
  }
} & Omit<Children, (typeof exclusiveSlotsKeys)[number]>

export interface SlotTree<Root extends RuntimeFn<any> = RuntimeFn<any>> {
  root: Root
  [key: string]: RuntimeFn<any> | SlotTree | { __tree: SlotTree }
}

export type ChainableSlotTree<S extends SlotTree> = {
  __tree: S
} & ChainableSlots<S['root'], {
  [K in keyof S]: K extends 'root' ? never
    : S[K] extends { __tree: SlotTree }
      ? ChainableSlotTree<S[K]['__tree']>
      : S[K] extends RuntimeFn<any>
        ? ChainableSlotTree<{ root: S[K] }>
        : S[K] extends SlotTree
          ? ChainableSlotTree<S[K]>
          : never;
}>

export interface MergeRFs<
  A extends RuntimeFn<any>,
  B extends RuntimeFn<any>,
> {
  (...args: Parameters<A> & Parameters<B>): ReturnType<A> & ReturnType<B>
  variants: () => ReturnType<A['variants']> & ReturnType<B['variants']>
  classNames: {
    base: A['classNames']['base'] & B['classNames']['base']
    variants: {
      [K in
      | keyof A['classNames']['variants']
      | keyof B['classNames']['variants']]: K extends keyof A['classNames']['variants']
        ? K extends keyof B['classNames']['variants']
          ? {
              [K2 in
              | keyof A['classNames']['variants'][K] &
              keyof B['classNames']['variants'][K]]: A['classNames']['variants'][K][K2] &
              B['classNames']['variants'][K][K2];
            }
          : A['classNames']['variants'][K]
        : B['classNames']['variants'][K];
    }
  }
}
