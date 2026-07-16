import { SITE } from "@/lib/site";

/**
 * Meridian Fence Group mark + wordmark.
 * variant: "dark" (navy on light bg) | "light" (white on dark bg)
 */
export function BrandLogo({
  variant = "dark",
  showWordmark = true,
  className = "",
  href = "/",
}) {
  const isLight = variant === "light";
  const ink = isLight ? "#FFFFFF" : "#0F2744";
  const copper = "#B87333";

  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* True line / fence post mark */}
        <rect x="16" y="4" width="4" height="28" rx="1" fill={ink} />
        <rect x="8" y="10" width="20" height="3" rx="1" fill={copper} />
        <rect x="10" y="22" width="16" height="2.5" rx="1" fill={ink} opacity="0.35" />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="text-[0.95rem] font-bold tracking-tight md:text-base"
            style={{ color: ink }}
          >
            {SITE.shortName}
          </span>
          <span
            className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
            style={{ color: isLight ? "rgba(255,255,255,0.75)" : copper }}
          >
            Group
          </span>
        </span>
      )}
      <span className="sr-only">{SITE.name}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex items-center no-underline">
        {content}
      </a>
    );
  }
  return content;
}
