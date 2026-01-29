type BgKey = 'default' | 'panel' | 'tint';

const bgMap: Record<BgKey, string> = {
  // Theme-safe backgrounds (work in light + dark mode)
  default: 'bg-[color:var(--bg)]',
  panel: 'bg-surface',
  tint: 'bg-pop',
};

export function Section({
  bg = 'default',
  className = '',
  children,
}: {
  bg?: BgKey;
  className?: string;
  children: React.ReactNode;
}) {
  const chosenBg: BgKey = bg in bgMap ? bg : 'default';

  return (
    <section className={`${bgMap[chosenBg]} ${className}`}>
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
