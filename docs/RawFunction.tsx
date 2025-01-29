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

export type DisplayRawFileProps = {
  rawFile: string;
  functionName: string;
  className?: string;
};

export function DisplayRawFile(props: DisplayRawFileProps) {
  const { rawFile, functionName, className } = props;
  const codeRef = useRef<HTMLElement>(null);

  const code = extractFunction(rawFile, functionName);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code
        ref={codeRef}
        style={{
          borderRadius: '5px',
        }}
      >
        {code}
      </code>
    </pre>
  );
}
