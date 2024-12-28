import decamelizeKeys from 'decamelize-keys';
import type { MJMLJsonObject, MJMLJsonWithContent } from 'mjml-core';
import mjml2html from 'mjml';

import type { JSX, ComponentType, EmailNode } from './jsx.js';

export function render(elm: JSX.Element): string {
  const mjmlTree = buildTree(elm);

  if (!mjmlTree) {
    throw new Error('MJML template is empty');
  }

  if (mjmlTree instanceof Array) {
    throw new Error('Root template cannot be an array');
  }

  const result = mjml2html(mjmlTree, {
    validationLevel: 'strict',
  });

  if (result.errors.length > 0) {
    const err = new AggregateError(result.errors);

    throw err;
  }

  return result.html;
}

function buildTree(elm: JSX.Element): MJMLJsonObject | MJMLJsonObject[] | null {
  const { type, props } = elm;

  console.log('type:', type, props);

  if (isIntrinsic(type)) {
    const { children, ...rest } = props;

    // Convert camelCase to kebab-case for attributes.
    const attributes = decamelizeKeys(rest, { separator: '-' });

    if (isSelfClosingTag(type)) {
      // Self-closing tag
      return {
        tagName: mapToTagName(type),
        attributes,
      };
    }

    if (isEndingTag(type)) {
      // Ending tag - process children differently.
      return {
        tagName: mapToTagName(type),
        attributes,
        content: buildEndingTagContent(elm),
      };
    }

    // Process children.
    const processed = toArray(children)
      .filter((child) => child != null && child !== undefined)
      .flatMap((child) => {
        if (typeof child === 'string') {
          if (isEndingTag(type)) {
            return [{
              tagName: mapToTagName(type),
              attributes: {},
              content: child,
            }];
          }

          throw new Error(`string node cannot be provided in ${type}`);
        } else if (child instanceof Array) {
          return child.map(buildTree);
        } else {
          return [buildTree(child)];
        }
      })
      .filter((child) => child != null && child !== undefined)
      .flatMap((child) => child instanceof Array ? child : [child]);


    const mjmlNode: MJMLJsonObject = {
      tagName: mapToTagName(type),
      attributes,
      children: processed,
    };

    return mjmlNode;
  } else {
    const node = type(props);

    if (typeof node === 'string') {
      throw new Error(`string node cannot be provided in ${type}`);
    } else if (node instanceof Array) {
      return node.map(buildTree);
    } else if (!node) {
      return null;
    } else {
      return buildTree(node);
    }
  }
}

function buildEndingTagContent(elm: JSX.Element): string {
  const { type, props } = elm;

  if (isIntrinsic(type)) {
    const { children, ...rest } = props;

    const mapped = toArray(children)
      .filter((child) => child != null && child !== undefined)
      .flatMap((child) => child instanceof Array ? child : [child])
      .map((child) => {
        if (typeof child === 'string') {
          return child;
        } else {
          return buildEndingTagContent(child);
        }
      })
      .join('');

    return mapped;
;
  } else {
    const node = type(props);

    if (typeof node === 'string') {
      return node;
    } else if (node instanceof Array) {
      return node.map(buildEndingTagContent).join('');
    } else if (node != null && node !== undefined) {
      return buildEndingTagContent(node);
    }

    return '';
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

function toArray(children: any): EmailNode[] {
  if (Array.isArray(children)) {
    return children;
  } else {
    return [children];
  }
}

function isEndingTag(tagName: string): boolean {
  return [
    'text',
    'button',
  ].includes(tagName);
}

function isSelfClosingTag(tagName: string): boolean {
  return [
    'divider',
    'image',
    'spacer',
  ].includes(tagName);
}
