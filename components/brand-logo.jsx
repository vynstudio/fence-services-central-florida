import { SITE } from "@/lib/site";

/**
 * FenceLine Florida mark + wordmark (DBA of Diler Dynamics Group LLC).
 * variant: "dark" (black on light) | "light" (white on dark)
 */
export function BrandLogo({
  variant = "dark",
  showWordmark = true,
  className = "",
  href = "/",
}) {
  // className may include scale utilities for phone shell
  const isLight = variant === "light";
  const ink = isLight ? "#FFFFFF" : "#111111";
  const accent = "#0E7C4A";

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* True line / fence post */}
        <rect x="16" y="4" width="4" height="28" rx="1" fill={ink} />
        <rect x="8" y="10" width="20" height="3" rx="1" fill={accent} />
        <rect
          x="10"
          y="22"
          width="16"
          height="2.5"
          rx="1"
          fill={ink}
          opacity="0.28"
        />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="text-base font-bold tracking-tight lg:text-[1.05rem]"
            style={{ color: ink }}
          >
            FenceLine
          </span>
          <span
            className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]"
            style={{ color: isLight ? "rgba(255,255,255,0.7)" : accent }}
          >
            Florida
          </span>
        </span>
      )}
      <span className="sr-only">
        {SITE.webName} — {SITE.name}
      </span>
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
