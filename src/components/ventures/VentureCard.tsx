import Image from 'next/image';
import Link from 'next/link';

import type { Venture } from '@/data/ventures';

export function VentureCard({ venture }: { venture: Venture }) {
  const cover = venture.images[0];

  return (
    <article className="venture-card">
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
      <div className="venture-card-media">
        {cover ? (
          <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 640px) 100vw, 60vw" />
        ) : null}
      </div>
    </article>
  );
}
