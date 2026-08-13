import Image from 'next/image';
import Link from 'next/link';

import type { Venture } from '@/data/ventures';
import { VentureVisual } from '@/components/ventures/VentureVisual';

type VentureCardProps = {
  venture: Venture;
  variant?: 'visual' | 'editorial';
};

export function VentureCard({ venture, variant = 'visual' }: VentureCardProps) {
  const cover = venture.images[0];
  const textOnly = venture.slug === 'hey-beautiful';
  const editorial = variant === 'editorial';

  return (
    <article className={editorial ? 'venture-card venture-card--editorial' : 'venture-card'}>
      <div className="venture-card-copy">
        <div>
          <div className="venture-meta">
            <span>{venture.category}</span>
            <span>{venture.stage}</span>
            {venture.launchYear ? <span>{venture.launchYear}</span> : null}
          </div>
          <h2>{venture.name}</h2>
          <p>{venture.tagline}</p>
        </div>
        <Link className="arrow-link" href={`/ventures/${venture.slug}`}>
          View venture <span aria-hidden="true">→</span>
        </Link>
      </div>
      {editorial ? null : (
        <div className="venture-card-media">
          {textOnly ? (
            <div className="venture-text-panel">
              <p className="eyebrow">No product imagery yet</p>
              <h3>{venture.name}</h3>
              <p>{venture.tagline}</p>
            </div>
          ) : cover ? (
            <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 640px) 100vw, 60vw" />
          ) : (
            <VentureVisual venture={venture} />
          )}
        </div>
      )}
    </article>
  );
}
