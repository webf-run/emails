export function Simple() {
  return (
    <mjml>
      <text>Good job</text>
      {[].map((item) => (
        <text>{item}</text>
      ))}
    </mjml>
  );
}

export function Sample() {
  const a = (
    <mjml>
      <body width='600px'>
        <section background-color="#f0f0f0">
          <column>
            <text
              align="center"
              fontStyle="italic"
              fontSize="20px"
              color="#626262"
            >
              My Company
            </text>
          </column>
        </section>
        <section background-color="#f0f0f0">
          <column>
            <text
              align="center"
              fontStyle="italic"
              fontSize="20px"
              color="#626262"
            >
              My Company
            </text>
          </column>
        </section>
      </body>
    </mjml>
  );
}
