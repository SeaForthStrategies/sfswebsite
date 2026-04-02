import Image from 'next/image';

import { publicAssetPath } from '@/lib/site';

const DEFAULT_LOGOS = [
  '1031 Capital Solutions.png',
  'Amanda Rose Consulting.png',
  'Fischer Family Foundation.png',
  'Mayor John Franklin.png',
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

  /**
   * Fixed height + object-contain + inner inset so marks are never cropped; transparent PNGs show
   * the section background through. (object-cover was clipping tall or wide lockups.)
   */
  const logoSlotClassName =
    'relative mx-auto h-[92px] w-full max-w-[200px] opacity-85 grayscale transition-[opacity,filter] hover:opacity-100 hover:grayscale-0 md:mx-0 md:h-[88px] md:w-[200px] md:max-w-none';

  return (
    <div className={`w-full ${className}`} aria-label={label}>
      {/* Mobile: Simple 2-column grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {logos.map((file, idx) => (
          <div
            key={`mobile-${file}-${idx}`}
            className="flex min-h-[104px] items-center justify-center p-2 sm:p-3"
          >
            <div className={logoSlotClassName}>
              <div className="absolute inset-2 sm:inset-2.5">
                <Image
                  src={publicAssetPath(`/clients/${file}`)}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 45vw, 200px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Marquee */}
      <div className="hidden w-full overflow-hidden md:block">
        <div className="marquee max-w-full overflow-hidden px-2 py-2 [--marquee-gap:1.25rem] sm:px-4 sm:py-3 sm:[--marquee-gap:2.25rem]">
          <div className="marquee-track">
            {items.map((file, idx) => {
              const src = publicAssetPath(`/clients/${file}`);
              return (
                <div
                  key={`${file}-${idx}`}
                  className="flex shrink-0 items-center justify-center px-1 sm:px-2"
                >
                  <div className={logoSlotClassName}>
                    <div className="absolute inset-2 sm:inset-2.5">
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="200px"
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
