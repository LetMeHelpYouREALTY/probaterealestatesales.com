import { YOUTUBE_FEATURED_EMBED_SRC, YOUTUBE_FEATURED_TITLE } from '@/config/youtube';

type FeaturedYouTubeVideoProps = {
  sectionHeadingId?: string;
  className?: string;
};

/**
 * Single-video embed for a Google “watch page” (primary player above the fold).
 * Pair with VideoObject JSON-LD using the same {@link YOUTUBE_FEATURED_EMBED_SRC}.
 */
export function FeaturedYouTubeVideo({
  sectionHeadingId = 'featured-probate-video-heading',
  className = 'py-12 bg-white border-b border-gray-200',
}: FeaturedYouTubeVideoProps) {
  return (
    <section className={className} aria-labelledby={sectionHeadingId} id="featured-video">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id={sectionHeadingId}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 scroll-mt-24"
        >
          Featured video
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Press play to watch on this page. You can also open the full channel on YouTube for more
          episodes.
        </p>
        <div className="relative rounded-xl overflow-hidden shadow-xl bg-black aspect-video">
          <iframe
            title={YOUTUBE_FEATURED_TITLE}
            src={YOUTUBE_FEATURED_EMBED_SRC}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
