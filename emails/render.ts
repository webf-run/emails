import decamelizeKeys from 'decamelize-keys';
import type { MJMLJsonObject } from 'mjml-core';

import type { JSX, ComponentType } from './jsx.js';

export function render(elm: JSX.Element) {
  const mjmlTree = buildMJMLTree(elm);

  return mjmlTree;
}

function buildMJMLTree(elm: JSX.Element): MJMLJsonObject {
  const { type, props } = elm;

  if (isIntrinsic(type)) {
    const { children, ...rest } = props;

    const childrenObjects = toArray(children)
      .filter((child) => child != null && child !== undefined)
      .flatMap((child) => Array.isArray(child) ? child : [child])
      .map((child) => buildMJMLTree(child));

    const attributes = decamelizeKeys(rest, { separator: '-' });

    const mjmlNode: MJMLJsonObject = {
      tagName: mapToTagName(type),
      attributes,
      children: childrenObjects,
    };

    return mjmlNode;
  } else {
    const vNode = type(props);

    return buildMJMLTree(vNode);
  }
}

function isIntrinsic(type: ComponentType<any>): type is string {
  return typeof type === 'string';
}

function mapToTagName(type: string): string {
  if (type === 'mjml') {
    return 'mjml';
  } else {
    return `mj-${type}`;
  }
}

function toArray(children: any): ChildNode[] {
  if (Array.isArray(children)) {
    return children;
  } else {
    return [children];
  }
}
