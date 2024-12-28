import decamelizeKeys from 'decamelize-keys';
import mjml2html from 'mjml';
import type { MJMLJsonObject, MJMLJsonWithContent } from 'mjml-core';

import type { ComponentType, EmailNode, JSX } from './jsx.js';

export function render(elm: JSX.Element): string {
  const mjmlTree = buildTree(elm);

  const root = mjmlTree.at(0);

  if (mjmlTree.length === 1 && root) {
    const result = mjml2html(root, {
      validationLevel: 'strict',
    });

    if (result.errors.length > 0) {
      const err = new AggregateError(result.errors);

      throw err;
    }

    return result.html;
  } else {
    throw new Error('Root template must have only one child');
  }
}

export function buildTree(elm: EmailNode): Array<MJMLJsonObject | null> {
  // If the element is null or undefined, return an empty array.
  if (!elm) {
    return [];
  }

  if (typeof elm === 'string') {
    throw new Error('string node cannot be provided.');
  }

  if (elm instanceof Array) {
    return elm.flatMap(buildTree);
  }

  const { type, props } = elm;

  if (isIntrinsic(type)) {
    const { children, ...rest } = props;

    // Convert camelCase to kebab-case for attributes.
    const attributes = decamelizeKeys(rest, { separator: '-' });

    // Ending tag - all children are content
    if (isEndingTag(type)) {
      return [
        {
          tagName: mapToMJMLTagName(type),
          attributes,
          content: toArray(children).map(buildEndingTagContent).join(''),
        },
      ];
    }

    // Self-closing tag (no children).
    if (isSelfClosingTag(type)) {
      return [
        {
          tagName: mapToMJMLTagName(type),
          attributes,
        },
      ];
    }

    // Process children.
    const processed = toArray(children)
      .flatMap(buildTree)
      .filter((child) => child != null && child !== undefined);

    const mjmlNode: MJMLJsonObject[] = [
      {
        tagName: mapToMJMLTagName(type),
        attributes,
        children: processed,
      },
    ];

    return mjmlNode;
  } else {
    return buildTree(type(props));
  }
}

export function buildEndingTagContent(elm: EmailNode): string {
  // If the element is null or undefined, return an empty array.
  if (!elm) {
    return '';
  }

  if (typeof elm === 'string') {
    return elm;
  }

  if (elm instanceof Array) {
    return elm.map(buildEndingTagContent).join('');
  }

  const { type, props } = elm;

  if (isIntrinsic(type)) {
    const { children, ...rest } = props;

    // Process children.
    const processed = toArray(children).flatMap(buildEndingTagContent).join('');

    return generateRawTag(type, rest, processed.trim() || undefined);
  } else {
    return buildEndingTagContent(type(props));
  }
}

function isIntrinsic(type: ComponentType<any>): type is string {
  return typeof type === 'string';
}

function mapToMJMLTagName(type: string): string {
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
  return ['text', 'button', 'raw'].includes(tagName);
}

function isSelfClosingTag(tagName: string): boolean {
  return ['divider', 'image', 'spacer'].includes(tagName);
}

function generateRawTag(
  type: string,
  attributes: Record<string, string>,
  children?: string
): string {
  const attrs = decamelizeKeys(attributes, { separator: '-' });

  const stringified = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
    .trim();

  const startTag = stringified.length ? `<${type} ${stringified}` : `<${type}`;

  return children ? `${startTag}>${children}</${type}>` : `${startTag} />`;
}
