import type { VNode, JSX, ComponentType } from './jsx.js';

export function jsx<P>(type: ComponentType<P>, props: P): VNode<P> {
  return {
    type,
    props,
  };
}

export const jsxs = jsx;
export const jsxDEV = jsx;

export type { JSX, VNode };
