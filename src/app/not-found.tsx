import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="shell final-cta" style={{ minHeight: '72vh' }}>
      <p className="eyebrow">404</p>
      <h1 className="page-title" style={{ marginInline: 'auto' }}>
        Nothing is being built here yet.
      </h1>
      <Link className="arrow-link" href="/">
        Return home <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
