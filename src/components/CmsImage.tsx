type CmsImageProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

/**
 * CMS image URLs can come from any host. Use a plain img so an unknown
 * hostname cannot crash the page (next/image would 500 in production).
 */
export function CmsImage({
  src,
  alt = "",
  className,
  priority = false,
}: CmsImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
