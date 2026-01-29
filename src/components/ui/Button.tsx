import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'contrast';

const base =
  'inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-[color:var(--brand-teal)] text-[color:var(--contrast-ink)] hover:bg-[color:var(--brand-teal-dark)] focus-visible:ring-[color:var(--brand-gold)] shadow-soft',
  secondary:
    'bg-[color:var(--surface)] text-[color:var(--ink)] border hairline hover:bg-[color:var(--bg)] focus-visible:ring-[color:var(--brand-teal)] shadow-soft',
  ghost: 'text-[color:var(--ink)] hover:bg-[color:var(--bg)]',
  accent:
    'bg-[color:var(--brand-gold)] text-[color:var(--on-accent)] hover:bg-[color:var(--contrast-ink)] focus-visible:ring-[color:var(--brand-teal)] shadow-soft',
  contrast:
    'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--brand-teal)] focus-visible:ring-[color:var(--brand-gold)] shadow-soft',
};

function isInternalHref(href: string) {
  return href.startsWith('/');
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'a'> & {
  variant?: Variant;
  href: string;
}) {
  const tech = variant === 'ghost' ? '' : 'btn-tech';
  const classes = `${base} ${tech} ${variants[variant] ?? variants.primary} ${className}`;

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
