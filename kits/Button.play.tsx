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
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                fontSize: '14px',
                padding: '10px 20px',
                borderRadius: '4px',
              }}
            >
              Small Screen Button
            </Button>
            <Button
              href='/hello'
              style={{
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                fontSize: '16px',
                padding: '12px 24px',
                borderRadius: '4px',
              }}
            >
              Medium Screen Button
            </Button>
            <Button
              href='/hello'
              style={{
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                fontSize: '18px',
                padding: '14px 28px',
                borderRadius: '4px',
              }}
            >
              Large Screen Button
            </Button>
          </column>
        </section>
      </body>
    </mjml>
  );
}

export default { ButtonPlay1 };
