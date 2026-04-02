import Image from 'next/image';
import Link from 'next/link';

import { TECH_ICON_COLOR, TECH_STACK_GROUPS } from '@/data/tech-stack';

function iconSrc(slug: string): string {
  return `https://cdn.simpleicons.org/${slug}/${TECH_ICON_COLOR}`;
}

export function TechStackLogos({
  variant = 'default',
  className = '',
  showSkillsLink = true,
}: {
  variant?: 'default' | 'compact';
  className?: string;
  /** When false, omit the link to the full skills page (e.g. if the parent already links there). */
  showSkillsLink?: boolean;
}) {
  const gap = variant === 'compact' ? 'gap-5' : 'gap-8';
  const iconClass =
    variant === 'compact'
      ? 'h-7 w-7 object-contain sm:h-8 sm:w-8'
      : 'h-8 w-8 object-contain sm:h-9 sm:w-9';

  return (
    <div className={className}>
      <div className={`flex flex-col ${gap}`} aria-label="Expertise and tools">
        {TECH_STACK_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="text-ink/55 text-[12px] font-semibold tracking-[0.16em] uppercase">
              {group.label}
            </p>
            <ul className="mt-3 flex flex-wrap gap-3 sm:gap-4">
              {group.items.map((item) => (
                <li key={`${group.label}-${item.slug}`}>
                  <Image
                    src={iconSrc(item.slug)}
                    alt={item.name}
                    width={36}
                    height={36}
                    unoptimized
                    className={`${iconClass} opacity-90 transition-opacity hover:opacity-100`}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {showSkillsLink ? (
        <p className={`text-muted text-sm ${variant === 'compact' ? 'mt-5' : 'mt-8'}`}>
          <Link href="/services" className="link-underline text-ink/80 hover:text-ink">
            Full expertise & services detail
          </Link>
        </p>
      ) : null}
    </div>
  );
}
