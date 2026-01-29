'use client';

import Link from 'next/link';

import { CountUp } from '@/components/motion/CountUp';
import { useInView } from '@/components/motion/useInView';
import { useReducedMotion } from '@/components/motion/useReducedMotion';
import { Sparkles } from '@/components/Sparkles';

type Metric = {
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
};

type Signal = {
  label: string;
  description: string;
  percent: number; // 0-100 (visual only)
};

function MetricIcon({ name }: { name: 'users' | 'launch' | 'chart' | 'shield' }) {
  const common = 'h-5 w-5 text-[color:var(--brand-gold)]';
  switch (name) {
    case 'users':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M4 20c.9-3.7 3.8-6 8-6s7.1 2.3 8 6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'launch':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14 3c2.9.3 5.7 3.1 6 6-1.7 5.2-6.9 10.3-12 12-2.9.3-5.7-2.5-6-5 1.7-5.1 6.8-10.3 12-13Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M14 7l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path
            d="M7 15l4-4 3 3 5-6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3l8 4v6c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V7l8-4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function MetricCard({
  metric,
  icon,
  className = '',
}: {
  metric: Metric;
  icon: 'users' | 'launch' | 'chart' | 'shield';
  className?: string;
}) {
  return (
    <div
      className={[
        'hairline bg-[color:var(--bg)]/60 shadow-soft group relative overflow-hidden rounded-[22px] border p-6',
        'hover-lift',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[600ms] group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(700px_220px_at_30%_0%,rgba(42,124,132,0.22),transparent_60%),radial-gradient(700px_220px_at_70%_100%,rgba(213,163,83,0.18),transparent_60%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="hairline grid h-10 w-10 place-items-center rounded-full border bg-white/50 dark:bg-white/5">
            <span className="animate-float-slow">{<MetricIcon name={icon} />}</span>
          </span>
          <p className="text-ink/55 text-[12px] font-semibold uppercase tracking-[0.16em]">
            {metric.label}
          </p>
        </div>
        <span className="h-2 w-2 rounded-full bg-[color:var(--brand-teal)] opacity-70 shadow-[0_0_0_6px_rgba(42,124,132,0.12)]" />
      </div>

      <div className="relative mt-4">
        <CountUp
          to={metric.value}
          prefix={metric.prefix ?? ''}
          suffix={metric.suffix ?? ''}
          durationMs={1050}
          className="font-display text-ink text-4xl tracking-[-0.02em] md:text-5xl"
        />
        <p className="text-muted mt-3 text-sm leading-relaxed">{metric.description}</p>
      </div>
    </div>
  );
}

function SignalBar({ signal, idx, active }: { signal: Signal; idx: number; active: boolean }) {
  const width = active ? `${Math.max(0, Math.min(100, signal.percent))}%` : '0%';
  return (
    <div className={['fade-in-up', `stagger-${Math.min(idx + 1, 6)}`].join(' ')}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-ink text-sm font-semibold">{signal.label}</p>
          <p className="text-muted mt-1 text-sm">{signal.description}</p>
        </div>
        <span className="text-ink/55 shrink-0 text-[12px] font-semibold uppercase tracking-[0.14em]">
          {signal.percent}%
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
        <div
          className={[
            'relative h-full rounded-full',
            'bg-[linear-gradient(90deg,var(--brand-teal),color-mix(in_srgb,var(--brand-teal)_65%,white),var(--brand-gold))]',
            'transition-[width] duration-[1200ms] [transition-timing-function:var(--ease-out)]',
          ].join(' ')}
          style={{ width }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="absolute inset-0 animate-[sweep_2.6s_var(--ease-out)_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MetricsSection() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.15 });
  const active = reduced ? true : inView;

  // Adjust these anytime—this section is designed to be “numbers-forward.”
  const metrics: Array<{ icon: 'users' | 'launch' | 'chart' | 'shield'; metric: Metric }> = [
    {
      icon: 'users',
      metric: {
        value: 180,
        suffix: '+',
        label: 'Pages designed + built',
        description:
          'Marketing sites, landing pages, and key flows—crafted for clarity and conversion.',
      },
    },
    {
      icon: 'launch',
      metric: {
        value: 250,
        suffix: '+',
        label: 'Analytics events tracked',
        description:
          'GA4 events, funnels, and conversions—instrumented to match real business goals.',
      },
    },
    {
      icon: 'chart',
      metric: {
        value: 60,
        suffix: '+',
        label: 'Dashboards delivered',
        description:
          'Reporting that gets used—clean views of performance, behavior, and next steps.',
      },
    },
    {
      icon: 'shield',
      metric: {
        value: 12,
        suffix: '+',
        label: 'Industries supported',
        description: 'A wide range of audiences—so your site still feels specific, not generic.',
      },
    },
  ];

  const signals: Signal[] = [
    {
      label: 'UX polish',
      description: 'Spacing, hierarchy, and interaction details that feel premium.',
      percent: 92,
    },
    {
      label: 'Conversion intent',
      description: 'Clear CTAs + page flow that reduces hesitation.',
      percent: 90,
    },
    {
      label: 'Tracking hygiene',
      description: 'Consistent naming, clean events, useful dashboards.',
      percent: 94,
    },
  ];

  return (
    <section className="hairline bg-pop border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24" ref={ref}>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="fade-in-up text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-gold)]">
                Proof in numbers
              </p>
              <h2 className="fade-in-up stagger-1 font-display text-ink mt-6 text-4xl leading-[1.02] md:text-5xl">
                Credibility you can feel.
              </h2>
              <p className="fade-in-up stagger-2 text-muted mt-6 leading-relaxed">
                Beautiful websites are table stakes. We pair premium craft with instrumentation—so
                you can see what’s working, improve what isn’t, and grow with confidence.
              </p>

              <div className="fade-in-up stagger-3 mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="hover-wiggle hairline bg-[color:var(--bg)]/60 text-ink/75 rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em]"
                >
                  See services
                </Link>
                <Link
                  href="/pricing"
                  className="hover-wiggle hairline bg-[color:var(--bg)]/60 text-ink/75 rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em]"
                >
                  View packages
                </Link>
                <span className="text-muted text-sm">— or just scroll the proof.</span>
              </div>

              <div className="fade-in-up stagger-4 hairline bg-surface shadow-soft mt-10 rounded-[var(--radius-lg)] border p-6">
                <p className="text-ink/55 text-[12px] font-semibold uppercase tracking-[0.16em]">
                  What this means for you
                </p>
                <ul className="text-muted mt-4 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-teal)]" />
                    <span>
                      A site that feels premium <span className="text-ink/80">and</span> performs
                      under pressure.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                    <span>
                      Analytics that translate into next steps—not spreadsheets you never open.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[color:var(--brand-teal)]" />
                    <span>Iterative improvement after launch, so results compound over time.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="tech-panel hairline bg-surface shadow-premium relative overflow-hidden rounded-[var(--radius-lg)] border p-6 md:p-8">
                <div className="hidden md:block">
                  <Sparkles />
                </div>

                <div className="relative z-10 grid gap-4 sm:grid-cols-2">
                  {metrics.map((m, idx) => (
                    <div
                      key={m.metric.label}
                      className={['fade-in-up', `stagger-${Math.min(idx + 1, 6)}`].join(' ')}
                    >
                      <MetricCard metric={m.metric} icon={m.icon} />
                    </div>
                  ))}
                </div>

                <div className="hairline bg-[color:var(--bg)]/50 relative z-10 mt-8 rounded-[22px] border p-6">
                  <p className="text-ink/55 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    Momentum signals
                  </p>
                  <div className="mt-5 grid gap-5">
                    {signals.map((s, idx) => (
                      <SignalBar key={s.label} signal={s} idx={idx} active={active} />
                    ))}
                  </div>
                  <p className="text-muted mt-6 text-xs">
                    These bars are a visual shorthand—your real KPIs are defined per project and
                    tracked after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
