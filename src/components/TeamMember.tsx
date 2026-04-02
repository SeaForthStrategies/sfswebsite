import Image from 'next/image';
import { CONTACT_EMAIL_HREF, publicAssetPath } from '@/lib/site';

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
        <div className="bg-brand-yellow/20 absolute inset-0 -rotate-3 rounded-3xl transition-transform group-hover:rotate-0" />
        <div className="bg-brand-teal/20 absolute inset-0 rotate-3 rounded-3xl transition-transform group-hover:rotate-0" />
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-white shadow-2xl">
          <Image
            src={publicAssetPath(imagePath)}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="w-full space-y-6 md:w-1/2">
        <div>
          <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase">
            {role}
          </span>
          <h3 className="mt-2 text-4xl font-bold text-neutral-950">{name}</h3>
          <div className="bg-brand-teal mt-4 h-1.5 w-20 rounded-full" />
        </div>

        <p className="text-lg leading-relaxed text-neutral-600 italic">{bio}</p>

        {quote && (
          <div className="border-brand-yellow relative border-l-4 pl-8">
            <span className="text-brand-yellow font-display absolute top-0 left-0 text-6xl leading-none opacity-20">
              “
            </span>
            <p className="text-xl font-medium text-neutral-800 italic">{quote}</p>
          </div>
        )}

        <div className="pt-4">
          <a
            href={CONTACT_EMAIL_HREF}
            className="text-brand-teal inline-flex items-center gap-2 font-bold transition-all hover:gap-4"
          >
            Email us <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
