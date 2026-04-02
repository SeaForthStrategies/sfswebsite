import Image from 'next/image';

import { publicAssetPath } from '@/lib/site';

export function PageHeader({
  title,
  subtitle,
  backgroundImageSrc,
  backgroundImageAlt = '',
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
}) {
  return (
    <header className="hairline relative overflow-hidden border-b">
      {backgroundImageSrc ? (
        <div className="absolute inset-0">
          <Image
            src={publicAssetPath(backgroundImageSrc)}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-black/55" />
      <div className="page-header-tech pointer-events-none" aria-hidden />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-10 pb-12 sm:pt-12 sm:pb-14 md:max-w-4xl md:pt-16 md:pb-20">
          <h1 className="fade-in-up font-display text-3xl leading-[1.02] tracking-[-0.03em] text-white sm:text-4xl sm:leading-[1] md:text-5xl lg:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="fade-in-up stagger-2 mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg md:mt-7">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
