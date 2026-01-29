import Image from 'next/image';

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
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-black/55" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-3xl pb-14 pt-12 md:max-w-4xl md:pb-20 md:pt-16">
          <h1 className="fade-in-up font-display text-5xl leading-[0.98] tracking-[-0.03em] text-white md:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="fade-in-up stagger-2 mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
