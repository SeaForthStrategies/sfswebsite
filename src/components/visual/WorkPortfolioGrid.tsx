'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import { publicAssetPath } from '@/lib/site';

export type PortfolioWorkItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  tags?: string[];
  link?: string;
};

function labelFolder(folder: string) {
  if (folder === 'client logos') {
    return 'Client logos';
  }
  return folder.charAt(0).toUpperCase() + folder.slice(1);
}

export function WorkPortfolioGrid({
  items,
  folders,
}: {
  items: readonly PortfolioWorkItem[];
  folders: readonly string[];
}) {
  const [active, setActive] = useState<string>('All');
  const [lightbox, setLightbox] = useState<PortfolioWorkItem | null>(null);

  const categories = useMemo(() => ['All', ...folders] as const, [folders]);

  const visible = useMemo(
    () => (active === 'All' ? [...items] : items.filter((i) => i.category === active)),
    [active, items]
  );

  useEffect(() => {
    if (!lightbox) {
      return;
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setLightbox(null);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => {
          const isOn = active === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isOn}
              onClick={() => setActive(cat)}
              className={[
                'hairline rounded-full border px-4 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors',
                isOn
                  ? 'border-[color:var(--brand-teal)] bg-[color:var(--brand-teal)]/10 text-[color:var(--brand-teal)]'
                  : 'text-ink/75 hover:text-ink border-[color:var(--hairline)] bg-[color:var(--bg)]/60',
              ].join(' ')}
            >
              {cat === 'All' ? 'All' : labelFolder(cat)}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-muted mt-10 text-center text-sm">No items in this category.</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visible.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              className={[
                'fade-in-up text-left',
                `stagger-${Math.min(idx + 1, 6)}`,
                'hairline shadow-soft group overflow-hidden rounded-[var(--radius-lg)] border bg-[color:var(--bg)]/80 transition-transform hover:-translate-y-0.5',
              ].join(' ')}
              aria-label={`Open preview: ${item.title}`}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--surface)]">
                <Image
                  src={publicAssetPath(item.src)}
                  alt=""
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-95"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
                />
              </div>
              <div className="p-3">
                <p className="text-ink line-clamp-2 text-sm leading-snug font-medium">
                  {item.title}
                </p>
                {item.tags && item.tags.length > 0 ? (
                  <p className="text-muted mt-1 line-clamp-2 text-xs">{item.tags.join(' · ')}</p>
                ) : null}
              </div>
            </button>
          ))}
        </div>
      )}

      {lightbox ? (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-lightbox-title"
          onClick={() => setLightbox(null)}
        >
          <div
            className="hairline bg-surface relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[var(--radius-lg)] border p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="text-muted hover:text-ink absolute top-3 right-3 rounded-full border border-[color:var(--hairline)] bg-[color:var(--bg)]/80 px-3 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              Close
            </button>
            <div className="relative mt-8 h-[min(75vh,880px)] w-full">
              <Image
                src={publicAssetPath(lightbox.src)}
                alt={lightbox.title}
                fill
                className="rounded-[var(--radius)] object-contain"
                sizes="(min-width: 896px) 896px, 92vw"
                priority
              />
            </div>
            <h2
              id="portfolio-lightbox-title"
              className="font-display text-ink mt-6 text-center text-lg md:text-xl"
            >
              {lightbox.title}
            </h2>
            {lightbox.link ? (
              <p className="mt-3 text-center">
                <a
                  href={lightbox.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm font-semibold text-[color:var(--brand-teal)] hover:text-[color:var(--brand-teal-dark)]"
                >
                  View live site
                </a>
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
