export function PageHeader({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <header className="bg-white">
      <div className="container py-10 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-600">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}

