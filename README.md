# The `@webf/emails`

The JSX-based component library and design system for MJML email templates.

## Installation

```bash
npm install --save @webf/emails
```

For TypeScript support, the library supports the automatic JSX runtime. To configure it, use following JSX options in your tsconfig file:

```jsonc
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@webf/emails",
  },
}
```

## Contriubtion - Local setup

Use the following script to run local development setup:

```bash
# Install dependencies
npm install

# Run the library in dev mode with documenation siste
npm run dev

# Build library for publishing
npm run build:lib

# Build documentation website
npm run build:site

# Automated tests
npm run test
```
