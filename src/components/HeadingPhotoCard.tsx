import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteImage from '@/components/SiteImage';
import type { SiteImageId } from '@/lib/cloudflare-images';

type HeadingPhotoCardProps = {
  imageId: SiteImageId;
  title: string;
  headingLevel?: 'h2' | 'h3';
  href?: string;
  children?: ReactNode;
  className?: string;
};

export default function HeadingPhotoCard({
  imageId,
  title,
  headingLevel = 'h3',
  href,
  children,
  className = '',
}: HeadingPhotoCardProps) {
  const HeadingTag = headingLevel;

  const card = (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 ${className}`}
    >
      <div className="relative h-36">
        <SiteImage
          imageId={imageId}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <HeadingTag className="text-xl font-semibold text-secondary-900 mb-3">{title}</HeadingTag>
        {children}
      </div>
    </div>
  );

  if (!href) {
    return card;
  }

  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a href={href} className="block hover:shadow-lg transition-shadow">
        {card}
      </a>
    );
  }

  return (
    <Link href={href} className="block hover:shadow-lg transition-shadow">
      {card}
    </Link>
  );
}
