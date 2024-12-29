import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs/pages',
  outDir: 'build',
  builderConfig: {
    resolve: {
      alias: {
        mjml: 'mjml-browser',
      },
    },
    source: {
      tsconfigPath: 'docs/tsconfig.json',
    },
  },
});
