'use server';

import { clsx } from 'clsx';
import { CodeXml, Smartphone, Tablet, TvMinimal } from 'lucide-react';
import { useMemo, useState } from 'react';

import { type Component } from '../emails/jsx.js';
import { render } from '../emails/render.js';
import { jsx } from '../emails/runtime.js';
import styles from './Playground.module.css';
import { DisplayRawFile } from './RawFunction.js';

export type PlaygroundProps = {
  component: Component<{}>;
  label: string;
  rawFunction: string;
};

export function Playground(props: PlaygroundProps) {
  const { component, label, rawFunction } = props;

  const [dimension, setDimension] = useState({
    height: '100%',
    width: '40%',
  });
  const [selectedTab, setSelectedTab] = useState<
    'phone' | 'tablet' | 'desktop' | 'code'
  >('phone');

  // This needs to be executed server-side due to
  // `render` being a server-side function.
  const template = useMemo(() => {
    return render(jsx(component, {}));
  }, [component]);

  return (
    <section className={clsx(styles.playground)}>
      <div className={clsx(styles.subheading)}>
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {label}
        </h2>
        <div
          className={clsx(styles.tabList)}
          role='tablist'
          tabIndex={0}
          style={{
            outline: 'none',
          }}
        >
          <button
            role='tab'
            onClick={() => {
              setDimension({ height: '100%', width: '30%' });
              setSelectedTab('phone');
            }}
            className={clsx(
              styles.tabButton,
              selectedTab === 'phone' && styles.selectedTabButton
            )}
          >
            <Smartphone />
          </button>
          <button
            role='tab'
            onClick={() => {
              setDimension({ height: '100%', width: '70%' });
              setSelectedTab('tablet');
            }}
            className={clsx(
              styles.tabButton,
              selectedTab === 'tablet' && styles.selectedTabButton
            )}
          >
            <Tablet />
          </button>
          <button
            role='tab'
            onClick={() => {
              setSelectedTab('desktop');
              setDimension({ height: '100%', width: '100%' });
            }}
            className={clsx(
              styles.tabButton,
              selectedTab === 'desktop' && styles.selectedTabButton
            )}
          >
            <TvMinimal />
          </button>
          <button
            role='tab'
            onClick={() => setSelectedTab('code')}
            className={clsx(
              styles.tabButton,
              selectedTab === 'code' && styles.selectedTabButton
            )}
          >
            <CodeXml />
          </button>
        </div>
      </div>
      {selectedTab === 'code' && (
        <DisplayRawFile rawFile={rawFunction} functionName='ButtonPlay1' />
      )}
      {selectedTab !== 'code' && (
        <iframe
          style={{
            alignSelf: 'center',
            padding: '15px',
            borderRadius: '2rem',
          }}
          srcDoc={template}
          width={dimension.width}
          height={dimension.height}
        />
      )}
    </section>
  );
}
