import { SITE } from "@/lib/site";

/**
 * Fence Line brand logo.
 * variant:
 *  - "dark"  → green wordmark on light surfaces (header/footer)
 *  - "light" → white wordmark on dark surfaces
 *  - "black" → black monochrome
 *  - "gold"  → gold on transparent (optional accent)
 */
const SRC = {
  dark: "/logo/logo-dark.png",
  light: "/logo/logo-light.png",
  black: "/logo/logo-black.png",
  gold: "/logo/logo-gold.png",
  mark: "/logo/logo-mark.png",
};

export function BrandLogo({
  variant = "dark",
  showWordmark = true,
  className = "",
  href = "/",
  /** height in px — width auto from aspect */
  height = 36,
}) {
  const src = showWordmark
    ? SRC[variant] || SRC.dark
    : SRC.mark;

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={SITE.webName}
      height={height}
      className={`h-[${height}px] w-auto max-w-[min(200px,55vw)] object-contain object-left md:max-w-[220px] ${className}`}
      style={{ height, width: "auto" }}
      decoding="async"
    />
  );

  // sr-only name when using mark-only
  const content = (
    <span className="inline-flex items-center">
      {img}
      <span className="sr-only">
        {SITE.webName}
      </span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-flex items-center no-underline"
        aria-label={SITE.webName}
      >
        {content}
      </a>
    );
  }
  return content;
}
