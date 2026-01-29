import Image from 'next/image';

export function PortfolioGallery({
  items,
  className = '',
  label = 'Portfolio gallery',
  framed = true,
}: {
  items: readonly { src: string; alt: string; width?: number; height?: number }[];
  className?: string;
  label?: string;
  framed?: boolean;
}) {
  return (
    <div className={className} aria-label={label}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          // Make sure paths with spaces still work.
          const src = encodeURI(item.src);

          return (
            <div
              key={`${item.src}-${idx}`}
              className={[
                'blur-in',
                `stagger-${Math.min(idx + 1, 6)}`,
                'hover-lift',
                framed
                  ? 'tech-panel hairline bg-surface shadow-premium overflow-hidden rounded-[var(--radius-lg)] border'
                  : 'overflow-hidden rounded-[var(--radius-lg)]',
              ].join(' ')}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
