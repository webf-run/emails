export type CodeBlockProps = {
  children: string;
  language: string;
};

export const CodeBlock = ({ children, language }: CodeBlockProps) => (
  <pre className={`language-${language}`}>
    <code>{children}</code>
  </pre>
);
