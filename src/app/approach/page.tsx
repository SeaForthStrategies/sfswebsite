import type { Metadata } from 'next';
import Image from 'next/image';

import { buildSteps, capabilities } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Approach',
  description: 'How Seaforth Strategies builds the product and the market together.',
  alternates: { canonical: '/approach' },
};

const loop = ['Opportunity', 'Product', 'Brand', 'Launch', 'Growth', 'Learning', 'Product'];

export default function ApproachPage() {
  return (
    <>
      <header className="shell page-intro">
        <div>
          <p className="eyebrow">Approach</p>
          <h1 className="page-title">Build the product and the market together.</h1>
        </div>
        <p className="lead">
          Engineering, product, brand, and distribution are not handoffs. They are a continuous
          operating system.
        </p>
      </header>

      <div className="wide-image">
        <Image
          src="/images/site/pacific-horizon.jpg"
          alt="A calm Pacific horizon"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <section className="shell section" aria-labelledby="loop-title">
        <p className="eyebrow">The operating loop</p>
        <h2 id="loop-title" className="section-title">
          Every signal informs what comes next.
        </h2>
        <div className="approach-loop">
          <div className="loop-row">
            {loop.map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                {index < loop.length - 1 ? (
                  <span className="loop-arrow" aria-hidden="true">
                    {' '}
                    →{' '}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" aria-labelledby="approach-process">
        <div className="shell">
          <p className="eyebrow">From idea to growth</p>
          <h2 id="approach-process" className="section-title">
            One studio. One feedback loop.
          </h2>
          <div className="process-list">
            {buildSteps.map(([title, copy], index) => (
              <article className="process-row" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section" aria-labelledby="operating-title">
        <p className="eyebrow">Operating capabilities</p>
        <h2 id="operating-title" className="section-title">
          The disciplines inside the studio.
        </h2>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-item" key={capability.title}>
              <p className="eyebrow">0{index + 1}</p>
              <h3>{capability.title}</h3>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
