'use server';

import { useMemo, useState } from 'react';

import { type Component } from '../emails/jsx.js';
import { render } from '../emails/render.js';
import { jsx } from '../emails/runtime.js';

export type PlaygroundProps = {
  component: Component<{}>;
};

export function Playground(props: PlaygroundProps) {
  const { component } = props;

  const [dimension, setDimension] = useState({
    height: '480',
    width: '320',
  });

  // This needs to be executed server-side due to
  // `render` being a server-side function.
  const template = useMemo(() => {
    return render(jsx(component, {}));
  }, [component]);

  return (
    <section
      className='Playground'
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#35352bed',
        borderRadius: '10px',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <button
          onClick={() => setDimension({ height: '480', width: '320' })}
          style={{
            backgroundColor: '#7E7CB0',
            color: '#1A1A1A',
            fontSize: '14px',
            padding: '10px 20px',
            borderRadius: '4px',
          }}
        >
          Small Screen
        </button>
        <button
          onClick={() => setDimension({ height: '480', width: '520' })}
          style={{
            backgroundColor: '#7E7CB0',
            color: '#1A1A1A',
            fontSize: '14px',
            padding: '10px 20px',
            borderRadius: '4px',
          }}
        >
          Medium Screen
        </button>
        <button
          onClick={() => setDimension({ height: '480', width: '720' })}
          style={{
            backgroundColor: '#7E7CB0',
            color: '#1A1A1A',
            fontSize: '14px',
            padding: '10px 20px',
            borderRadius: '4px',
          }}
        >
          Large Screen
        </button>
      </div>
      <iframe
        style={{
          alignSelf: 'center',
        }}
        srcDoc={template}
        width={dimension.width}
        height={dimension.height}
      />
    </section>
  );
}
