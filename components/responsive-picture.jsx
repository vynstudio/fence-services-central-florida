/**
 * Device-aware image: mobile (<768) / tablet (768–1023) / desktop (≥1024).
 * Uses native <picture> so the browser only downloads the matching file.
 *
 * @param {string} name - base key, e.g. "wood", "about", "gallery-0"
 * @param {string} alt
 * @param {string} [className]
 * @param {string} [fallback] - root /images path if device folder missing
 */
export function ResponsivePicture({
  name,
  alt,
  className = "",
  imgClassName = "size-full object-cover",
  fallback = null,
}) {
  const mobile = `/images/mobile/${name}.jpg`;
  const tablet = `/images/tablet/${name}.jpg`;
  const desktop = `/images/desktop/${name}.jpg`;
  const def = fallback || tablet;

  return (
    <picture className={className}>
      {/* Desktop wide */}
      <source media="(min-width: 1024px)" srcSet={desktop} />
      {/* iPad */}
      <source media="(min-width: 768px)" srcSet={tablet} />
      {/* Phone (default) */}
      <img
        src={mobile}
        alt={alt}
        className={imgClassName}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
        onError={(e) => {
          if (fallback && e.currentTarget.src !== fallback) {
            e.currentTarget.src = fallback;
          } else if (e.currentTarget.src !== def) {
            e.currentTarget.src = def;
          }
        }}
      />
    </picture>
  );
}
