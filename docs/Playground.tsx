'use server';

import { useMemo } from 'react';

import { type Component } from '../emails/jsx.js';
import { render } from '../emails/render.js';
import { jsx } from '../emails/runtime.js';

export type PlaygroundProps = {
  component: Component<{}>;
};

export function Playground(props: PlaygroundProps) {
  const { component } = props;

  // This needs to be executed server-side due to
  // `render` being a server-side function.
  const template = useMemo(() => {
    return render(jsx(component, {}));
  }, [component]);

  return (
    <section className='Playground'>
      <div></div>
      <iframe srcDoc={template} width={320} height={480} />
    </section>
  );
}
