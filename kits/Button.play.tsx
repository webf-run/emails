import { Button } from './Button.js';

export function ButtonPlay1() {
  return (
    <mjml>
      <body width={'600px'}>
        <section>
          <column>
            <Button
              href='/hello'
              style={{
                width: '100%',
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                fontSize: '14px',
                padding: '10px 20px',
                borderRadius: '4px',
              }}
            >
              Get Started
            </Button>
          </column>
        </section>
      </body>
    </mjml>
  );
}

export default { ButtonPlay1 };
