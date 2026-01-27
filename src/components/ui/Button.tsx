import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-md";

const variants: Record<Variant, string> = {
  primary: "bg-brand-teal text-white hover:opacity-90 focus-visible:ring-brand-yellow",
  secondary:
    "bg-white text-neutral-950 border border-neutral-200 hover:bg-neutral-100 focus-visible:ring-brand-teal",
  ghost: "text-neutral-950 hover:bg-neutral-100",
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  href: string;
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

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

