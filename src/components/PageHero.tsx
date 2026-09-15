import type { ReactNode } from 'react';
import SiteImage from '@/components/SiteImage';
import type { SiteImageId } from '@/lib/cloudflare-images';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageId: SiteImageId;
  imageAlt?: string;
  children?: ReactNode;
  overlayClassName?: string;
};

export default function PageHero({
  title,
  subtitle,
  imageId,
  imageAlt,
  children,
  overlayClassName = 'from-slate-950/80 via-slate-900/70 to-primary-900/60',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <SiteImage
          imageId={imageId}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayClassName}`} />
      </div>
      <div className="relative container-max px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">{title}</h1>
        {subtitle ? (
          <p className="mt-6 text-xl md:text-2xl text-white/95 max-w-3xl">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
