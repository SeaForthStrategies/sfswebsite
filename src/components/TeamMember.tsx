import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  quote?: string;
  imagePath: string;
  reverse?: boolean;
}

export function TeamMember({ name, role, bio, quote, imagePath, reverse }: TeamMemberProps) {
  return (
    <div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-12`}
    >
      <div className="group relative w-full md:w-1/2">
        <div className="absolute inset-0 -rotate-3 rounded-3xl bg-brand-yellow/20 transition-transform group-hover:rotate-0" />
        <div className="absolute inset-0 rotate-3 rounded-3xl bg-brand-teal/20 transition-transform group-hover:rotate-0" />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-white shadow-2xl">
          <Image
            src={imagePath}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="w-full space-y-6 md:w-1/2">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            {role}
          </span>
          <h3 className="mt-2 text-4xl font-bold text-neutral-950">{name}</h3>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-teal" />
        </div>

        <p className="text-lg italic leading-relaxed text-neutral-600">{bio}</p>

        {quote && (
          <div className="relative border-l-4 border-brand-yellow pl-8">
            <span className="absolute left-0 top-0 font-serif text-6xl leading-none text-brand-yellow opacity-20">
              “
            </span>
            <p className="text-xl font-medium italic text-neutral-800">{quote}</p>
          </div>
        )}

        <div className="pt-4">
          <a
            href="mailto:contact@seaforthstrategies.com"
            className="inline-flex items-center gap-2 font-bold text-brand-teal transition-all hover:gap-4"
          >
            Email us <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
