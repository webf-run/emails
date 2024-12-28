import { describe, expect, test } from 'vitest';

import { render } from './render.js';

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

    // console.log(result);
  });
});
