import { CONTACT_EMAIL_HREF } from '@/lib/site';

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  category: string;
  packages: PricingPackage[];
}

export function PricingCard({ category, packages }: PricingCardProps) {
  return (
    <div className="flex w-full flex-col gap-8">
      <h3 className="mb-4 text-center text-2xl font-bold text-brand-teal">{category}</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
              pkg.highlighted
                ? 'z-10 scale-105 border-brand-yellow bg-white shadow-xl'
                : 'border-neutral-200 bg-neutral-50/50 hover:border-brand-teal hover:bg-white'
            }`}
          >
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-bold text-neutral-950">{pkg.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-brand-teal">{pkg.price}</span>
                {pkg.price !== 'Custom' && !pkg.price.includes('/mo') && (
                  <span className="text-sm text-neutral-500">starting at</span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{pkg.description}</p>
            </div>

            <div className="mb-8 flex-grow">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-neutral-400">
                Includes
              </p>
              <ul className="space-y-3">
                {pkg.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-1 text-brand-yellow">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-neutral-100 pt-6">
              <p className="mb-6 text-xs italic text-neutral-500">
                <span className="mr-2 text-[10px] font-bold uppercase not-italic tracking-tighter text-brand-teal">
                  Ideal For:
                </span>
                {pkg.idealFor}
              </p>
              <a
                href={CONTACT_EMAIL_HREF}
                className={`flex w-full items-center justify-center rounded-xl py-3 font-bold transition-all ${
                  pkg.highlighted
                    ? 'bg-brand-teal text-white shadow-md hover:bg-brand-teal/90'
                    : 'border-2 border-brand-teal bg-white text-brand-teal hover:bg-brand-teal hover:text-white'
                }`}
              >
                Email us
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
