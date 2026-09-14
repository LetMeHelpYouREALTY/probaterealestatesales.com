import Image, { type ImageProps } from 'next/image';
import {
  getSiteImageAlt,
  getSiteImageSrc,
  isCloudflareImagesEnabled,
  type SiteImageId,
} from '@/lib/cloudflare-images';

type SiteImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  imageId: SiteImageId;
  alt?: string;
};

export default function SiteImage({
  imageId,
  alt,
  sizes = '(max-width: 768px) 100vw, 1200px',
  ...props
}: SiteImageProps) {
  const src = getSiteImageSrc(imageId);
  const resolvedAlt = getSiteImageAlt(imageId, alt);
  const remote = isCloudflareImagesEnabled();

  return <Image src={src} alt={resolvedAlt} sizes={sizes} unoptimized={remote} {...props} />;
}
