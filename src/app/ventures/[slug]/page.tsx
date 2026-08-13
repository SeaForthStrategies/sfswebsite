import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getVenture, ventures } from '@/data/ventures';
import { SITE } from '@/lib/site';
import { VentureVisual } from '@/components/ventures/VentureVisual';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ventures.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) return { title: 'Venture Not Found' };

  return {
    title: venture.name,
    description: venture.description,
    alternates: { canonical: `/ventures/${venture.slug}` },
    openGraph: {
      title: `${venture.name} | Seaforth Strategies`,
      description: venture.tagline,
      url: `/ventures/${venture.slug}`,
      images: venture.images[0] ? [venture.images[0].src] : undefined,
    },
  };
}

export default async function VenturePage({ params }: Props) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();
  const cover = venture.images[0];
  const textOnly = venture.slug === 'hey-beautiful';

  const schema = {
    '@context': 'https://schema.org',
    '@type': venture.visual === 'community' ? 'Product' : 'SoftwareApplication',
    name: venture.name,
    description: venture.description,
    applicationCategory: venture.category,
    url: `${SITE.url}/ventures/${venture.slug}`,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="shell page-intro">
        <div>
          <div className="venture-meta">
            <span>{venture.category}</span>
            <span>{venture.stage}</span>
          </div>
          <h1 className="page-title">{venture.name}</h1>
        </div>
        <p className="lead">{venture.tagline}</p>
      </header>
      {textOnly ? (
        <div className="shell venture-detail-visual">
          <div className="venture-text-panel venture-text-panel--detail">
            <p className="eyebrow">Company in development</p>
            <h2>{venture.name}</h2>
            <p>{venture.tagline}</p>
          </div>
        </div>
      ) : cover ? (
        <div className="wide-image">
          <Image src={cover.src} alt={cover.alt} fill priority sizes="100vw" />
        </div>
      ) : (
        <div className="shell venture-detail-visual">
          <VentureVisual venture={venture} detail />
        </div>
      )}
      <section className="shell section">
        <div className="detail-sections">
          <div className="detail-row">
            <h2>Overview</h2>
            <p>{venture.description}</p>
          </div>
          <div className="detail-row">
            <h2>The idea</h2>
            <p>{venture.idea}</p>
          </div>
          <div className="detail-row">
            <h2>What we&apos;re building</h2>
            <p>{venture.building}</p>
          </div>
          <div className="detail-row">
            <h2>Seaforth&apos;s role</h2>
            <p>{venture.seaforthRole}</p>
          </div>
        </div>
      </section>
    </>
  );
}
