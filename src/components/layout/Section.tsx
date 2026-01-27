type BgKey = "default" | "panel" | "tint";

const bgMap: Record<BgKey, string> = {
  default: "bg-white",
  panel: "bg-[var(--panel)]",
  tint: "bg-[color-mix(in_srgb,var(--brand-teal)_6%,white)]",
};

export function Section({
  bg = "default",
  className = "",
  children,
}: {
  bg?: BgKey;
  className?: string;
  children: React.ReactNode;
}) {
  const chosenBg: BgKey = bg in bgMap ? bg : "default";

  return (
    <section className={`${bgMap[chosenBg]} ${className}`}>
      <div className="container py-10 sm:py-14 lg:py-20">{children}</div>
    </section>
  );
}

