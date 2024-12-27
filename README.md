# The `@webf/emails`

The JSX-based component library and design system for MJML email templates.


## Installation

```bash
npm install --save @webf/emails
```

For TypeScript support, the library supports the automatic JSX runtime. To configure it, use following JSX options in your tsconfig file:

``` jsonc
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@webf/emails"
  },
}
```
