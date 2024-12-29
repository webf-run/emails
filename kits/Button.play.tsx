import { Button } from './Button.js';

export function ButtonPlay1() {
  return (
    <mjml>
      <body width={'600px'}>
        <section>
          <column>
            <Button
              href='/hello'
              style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
            >
              Click Me
            </Button>
          </column>
        </section>
      </body>
    </mjml>
  );
}
