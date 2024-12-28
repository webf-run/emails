import { describe, expect, test } from 'vitest';

import { buildEndingTagContent, buildTree, render } from './render.js';

describe('emails/render', () => {
  test('should render email', () => {
    // Setup Data
    const template = (
      <mjml>
        <body width='600px'>
          <section>
            <column>
              <text>
                Good Job
                <span>Harshal</span>
              </text>
            </column>
          </section>
        </body>
      </mjml>
    );

    // SUT - System Under Test
    const result = render(template);

    // Verify - N/A
  });
});

describe('render/buildTree()', () => {
  test('should build tree', () => {
    // Setup Data
    const template = (
      <mjml>
        <body width='600px'></body>
      </mjml>
    );

    // SUT - System Under Test
    const result = buildTree(template);

    // Verify data
    expect(result).toEqual([
      {
        tagName: 'mjml',
        attributes: {},
        children: [
          {
            tagName: 'mj-body',
            attributes: {
              width: '600px',
            },
            children: [],
          },
        ],
      },
    ]);
  });

  test('should build tree with multiple children', () => {
    // Setup Data
    const template = (
      <mjml>
        <body width='600px'>
          <section>
            <column>
              <text>Text 1</text>
              <text fontSize={14}>Text 2</text>
            </column>
          </section>
        </body>
      </mjml>
    );

    // SUT - System Under Test
    const result = buildTree(template);

    expect(result).toEqual([
      {
        tagName: 'mjml',
        attributes: {},
        children: [
          {
            tagName: 'mj-body',
            attributes: {
              width: '600px',
            },
            children: [
              {
                tagName: 'mj-section',
                attributes: {},
                children: [
                  {
                    tagName: 'mj-column',
                    attributes: {},
                    children: [
                      {
                        tagName: 'mj-text',
                        attributes: {},
                        content: 'Text 1',
                      },
                      {
                        tagName: 'mj-text',
                        attributes: {
                          'font-size': 14,
                        },
                        content: 'Text 2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });
});

describe('render/buildEndingTagContent()', () => {
  describe('basic', () => {
    test('should generate basic ending tag content', () => {
      // Setup Data
      const template = (
        <text>
          <span>Span 1</span>
        </text>
      );

      // SUT - System Under Test
      const result = buildEndingTagContent(template);

      // Verify data
      expect(result).toBe('<text><span>Span 1</span></text>');
    });

    test('should generate ending tag content with multiple children', () => {
      // Setup Data
      const template = (
        <text>
          <span>Span 1</span>
          <span>Span 2</span>
          <span>Span 3</span>
        </text>
      );

      // SUT - System Under Test
      const result = buildEndingTagContent(template);

      // Verify data
      expect(result).toBe(
        '<text><span>Span 1</span><span>Span 2</span><span>Span 3</span></text>'
      );
    });

    test('should generate ending tag content with nested children', () => {
      // Setup Data
      const template = (
        <text>
          <span>
            <span>Span 1</span>
            <span>Span 2</span>
          </span>
        </text>
      );

      // SUT - System Under Test
      const result = buildEndingTagContent(template);

      // Verify data
      expect(result).toBe(
        '<text><span><span>Span 1</span><span>Span 2</span></span></text>'
      );
    });
  });

  describe('with attributes', () => {
    test('should generate ending tag content with attributes', () => {
      // Setup Data
      const template = (
        <text padding='10px'>
          <span data-test={'10'}>Span</span>
        </text>
      );

      // SUT - System Under Test
      const result = buildEndingTagContent(template);

      // Verify data
      expect(result).toBe(
        '<text padding="10px"><span data-test="10">Span</span></text>'
      );
    });

    test('deal with camelCase attributes', () => {
      // Setup Data
      const template = (
        <text
          paddingTop='10px'
          paddingBottom='20px'
          paddingLeft='30px'
          paddingRight='40px'
        >
          <span cssClass={'hello'}>My Text Content</span>
        </text>
      );

      // SUT - System Under Test
      const result = buildEndingTagContent(template);

      // Verify data
      expect(result).toBe(
        minifyHTML(`
          <text padding-top="10px" padding-bottom="20px" padding-left="30px" padding-right="40px">
            <span css-class="hello">
              My Text Content
            </span>
          </text>
      `)
      );
    });
  });

  describe('with self-closing tags', () => {
    test('should generate with self closing tags', () => {
      // Setup Data
      const template = (
        <text padding='10px'>
          <span>Good work</span>
          <hr />
        </text>
      );

      // SUT - System Under Test
      const result = buildEndingTagContent(template);

      // Verify data
      expect(result).toBe(
        '<text padding="10px"><span>Good work</span><hr /></text>'
      );
    });
  });
});

function minifyHTML(arr: string): string {
  return arr
    .split('\n')
    .map((item) => item.trim())
    .join('');
}
