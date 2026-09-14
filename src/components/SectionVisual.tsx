import SiteImage from '@/components/SiteImage';
import type { SiteImageId } from '@/lib/cloudflare-images';

type SectionVisualProps = {
  imageId: SiteImageId;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export default function SectionVisual({
  imageId,
  alt,
  className = '',
  priority = false,
}: SectionVisualProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl shadow-md ${className}`}>
      <SiteImage
        imageId={imageId}
        alt={alt}
        width={1200}
        height={675}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, 640px"
      />
    </div>
  );
}
