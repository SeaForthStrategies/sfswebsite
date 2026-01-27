import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the co-founders of SeaForth Strategies. We combine creative marketing strategy with data-driven insights to help small businesses thrive online.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-teal to-[rgba(31,92,98,1)] text-white">
        <div className="container pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="section-eyebrow">
              <span className="eyebrow-text">WHO WE ARE</span>
              <div className="gold-divider-small" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Meet the Crew Behind SeaForth
            </h1>
            <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed">
            We&apos;re Abby and Savanna—a creative strategist and a data analyst who joined forces to build
            something different. A marketing agency that doesn&apos;t just talk strategy—we live it, breathe
              it, and deliver it.
            </p>
            <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed mt-4">
            Based in San Diego, we help businesses grow smarter with marketing that&apos;s equal parts creative
            and analytical. No fluff. No guesswork. Just results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)]">
        <div className="container py-12 lg:py-16">
          <div className="section-eyebrow">
            <span className="eyebrow-text">THE TEAM</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-3">
            The Dynamic Duo
          </h2>
          <p className="text-center text-brand-yellow font-semibold mb-10">
            Where Creative Vision Meets Analytical Precision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamCard
              imageSrc="/images/Abby.png"
              name="Abby Lehr"
              role="Co-Founder & Chief Creative Officer (CCO)"
              bio={[
                "I\u2019m the creative force behind SeaForth\u2014the one who turns big ideas into bold campaigns. At 22, I\u2019ve built a career bringing brands to life online with websites that wow, social content that stops the scroll, and ad campaigns that actually convert.",
                "I believe great marketing should feel effortless, look stunning, and drive real results. That\u2019s what I build for every client\u2014digital experiences that don\u2019t just exist, they perform.",
              ]}
            />
            <TeamCard
              imageSrc="/images/Savanna.png"
              name="Savanna Spayd"
              role="Co-Founder & Chief Analytics Officer (CAO)"
              bio={[
                "I\u2019m the analytical backbone of SeaForth\u2014the one who makes sure every campaign is backed by data, optimized for performance, and built to scale. I turn complex metrics into clear insights that drive smarter decisions and measurable growth.",
                "Numbers don\u2019t lie, and I make sure they tell the story of what\u2019s working, what\u2019s not, and where your next big opportunity is hiding.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-12 lg:py-16">
          <div className="section-eyebrow">
            <span className="eyebrow-text">OUR STORY</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-10">
            How We Got Here
          </h2>
          <div className="mx-auto max-w-4xl text-neutral-600 leading-relaxed space-y-6">
            <p>
              SeaForth Strategies was born from a simple realization: most marketing agencies talk a big
              game but fail to deliver results. We saw too many businesses pouring money into campaigns that
              looked pretty but didn&apos;t perform.
            </p>
            <p>
              So we decided to do things differently. We combined Abby&apos;s creative vision with Savanna&apos;s
              analytical precision to create a marketing agency that doesn&apos;t just make noise—it makes an
              impact. Every strategy we build is rooted in data, every creative decision is intentional,
              and every campaign is designed to drive real, measurable growth.
            </p>
            <p>
              Based in sunny San Diego, we work with ambitious businesses who are ready to level up.
              Whether you&apos;re a startup looking to make your mark or an established brand ready to scale, we
              bring the perfect blend of creativity and analytics to chart your course to success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)]">
        <div className="container py-12 lg:py-16">
          <div className="section-eyebrow">
            <span className="eyebrow-text">BY THE NUMBERS</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-4">
            Results That Speak Volumes
          </h2>
          <p className="text-center text-neutral-600 mb-10">
            Our success is measured by the success of our clients. Here&apos;s what we&apos;ve achieved together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon="fas fa-rocket" value="150%" label="Average ROI Increase" />
            <StatCard icon="fas fa-users" value="50+" label="Happy Clients" />
            <StatCard icon="fas fa-chart-line" value="2.5M+" label="In Revenue Generated" />
            <StatCard icon="fas fa-trophy" value="98%" label="Client Satisfaction Rate" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-12 lg:py-16">
          <div className="section-eyebrow">
            <span className="eyebrow-text">OUR VALUES</span>
            <div className="gold-divider-small" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-950 mb-10">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon="fas fa-lightbulb"
              title="Results Over Everything"
              text="We don't do marketing for the sake of marketing. Every campaign is built to deliver measurable results and real ROI."
            />
            <ValueCard
              icon="fas fa-chart-line"
              title="Data-Driven Decisions"
              text="Gut feelings don't scale. We let the numbers guide our strategy and optimize relentlessly based on performance."
            />
            <ValueCard
              icon="fas fa-users"
              title="Partnership, Not Transactions"
              text="We're not here for one-off projects. We build long-term partnerships and invest in your success like it's our own."
            />
            <ValueCard
              icon="fas fa-rocket"
              title="Creative Excellence"
              text="Good design is table stakes. We deliver creative work that's bold, memorable, and strategically sound."
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)]">
        <div className="container py-12 lg:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Let’s build a marketing strategy that actually moves the needle.
          </p>
          <Button href="/contact" className="text-base sm:text-lg px-8 py-4">
            Let’s Talk
          </Button>
        </div>
      </section>
    </>
  );
}

function TeamCard({
  imageSrc,
  name,
  role,
  bio,
}: {
  imageSrc: string;
  name: string;
  role: string;
  bio: string[];
}) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto mb-6 w-[220px] aspect-square overflow-hidden rounded-full border-4 border-brand-teal shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt={name} className="h-full w-full object-cover object-top" />
      </div>
      <h3 className="text-2xl font-bold text-neutral-950 text-center mb-1">{name}</h3>
      <p className="text-brand-yellow font-semibold text-center mb-4">{role}</p>
      <div className="text-neutral-600 leading-relaxed space-y-4">
        {bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </article>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-md text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-white text-xl shadow-sm">
        <i className={icon} aria-hidden="true" />
      </div>
      <div className="text-3xl font-extrabold text-neutral-950">{value}</div>
      <div className="mt-2 text-sm font-semibold text-neutral-600 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-md text-center transition hover:-translate-y-1 hover:shadow-xl hover:border-brand-teal">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-white text-xl">
        <i className={icon} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-neutral-950 mb-2">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{text}</p>
    </div>
  );
}

