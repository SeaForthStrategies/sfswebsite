export function HomeFounderSection() {
  return (
    <section className="hairline bg-surface border-y" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="fade-in-up label-tech text-[color:var(--brand-gold)]">Founder</p>
            <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-3xl leading-[1.05] tracking-[-0.02em] md:text-4xl">
              Abigail Lehr
            </h2>
            <p className="fade-in-up stagger-2 text-muted mt-5 text-lg leading-relaxed md:text-xl">
              I run SeaForth as a founder-led studio—development (custom code, GitHub, Vercel) and
              design on Squarespace under one lead. My personal site shows the full career; SeaForth
              is where we ship client sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
