import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';
import { useEffect, useRef } from 'react';

import { extractFunction } from './Utils/extract.js';

export const CodeBlock: React.FC<{ language: string; children: string }> = ({
  language,
  children,
}) => (
  <pre className={`language-${language}`}>
    <code>{children}</code>
  </pre>
);

export function DisplayRawFile({
  rawFile,
  functionName,
}: {
  rawFile: string;
  functionName: string;
}) {
  const codeRef = useRef<HTMLElement>(null);

  const code = extractFunction(rawFile, functionName);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeRef}>{code}</code>
    </pre>
  );

  // return <CodeBlock language='javascript'>{code}</CodeBlock>;
}
