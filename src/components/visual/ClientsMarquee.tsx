import Image from 'next/image';

const DEFAULT_LOGOS = [
  '1031 Capital Solutions.png',
  'Amanda Rose Consulting.png',
  'Fischer Family Foundation.png',
  'My Ruca.png',
  'PeopleMVR.png',
  'Premier Recruits.png',
  'The Social Afair.png',
  'Toothpicks Catering.png',
  'Vine & Tap.png',
  'Wellness With Lauren.png',
] as const;

export function ClientsMarquee({
  label = 'Client logos',
  logos = DEFAULT_LOGOS,
  className = '',
}: {
  label?: string;
  logos?: readonly string[];
  className?: string;
}) {
  // Duplicate the list so the track can loop seamlessly.
  const items = [...logos, ...logos];

  return (
    <div className={`w-full ${className}`} aria-label={label}>
      {/* Mobile: Simple 2-column grid */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {logos.map((file, idx) => (
          <div
            key={`mobile-${file}-${idx}`}
            className="hairline bg-surface shadow-soft flex h-24 items-center justify-center rounded-[var(--radius)] border p-4"
          >
            <div className="relative h-full w-full opacity-80 mix-blend-multiply grayscale transition-opacity hover:opacity-100">
              <Image
                src={encodeURI(`/clients/${file}`)}
                alt=""
                fill
                sizes="(min-width: 640px) 240px, 160px"
                className="object-contain object-center"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Marquee */}
      <div className="hidden md:block w-full overflow-hidden">
        <div className="marquee hairline bg-surface shadow-soft rounded-[var(--radius-lg)] border px-5 py-5 [--marquee-gap:1.25rem] sm:px-7 sm:py-7 sm:[--marquee-gap:2.25rem] max-w-full overflow-hidden">
          <div className="marquee-track">
            {items.map((file, idx) => {
              const src = encodeURI(`/clients/${file}`);
              return (
                <div
                  key={`${file}-${idx}`}
                  className="flex h-[clamp(44px,6vw,80px)] w-[clamp(140px,38vw,300px)] shrink-0 items-center justify-center opacity-85 transition-opacity hover:opacity-100"
                >
                  <div className="h-full w-full p-2 sm:p-3">
                    <div className="relative h-full w-full">
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 240px, 160px"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
