import Image from 'next/image';

import { studioPortfolio } from '@/data/studio';

type StudioWorkGridProps = {
  limit?: number;
};

export function StudioWorkGrid({ limit }: StudioWorkGridProps) {
  const items = typeof limit === 'number' ? studioPortfolio.slice(0, limit) : studioPortfolio;

  return (
    <div className="studio-work-grid">
      {items.map((item) => {
        const CardInner = (
          <>
            <div className="studio-work-image">
              <Image src={item.image} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" />
            </div>
            <div className="studio-work-copy">
              <div>
                <p className="studio-work-meta">
                  {item.type} / {item.category}
                </p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="studio-work-action">
                {item.href ? 'View project' : 'View work'}
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </>
        );

        if (item.href) {
          return (
            <a
              className="studio-work-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              {CardInner}
            </a>
          );
        }

        return (
          <article className="studio-work-card" key={item.title}>
            {CardInner}
          </article>
        );
      })}
    </div>
  );
}
