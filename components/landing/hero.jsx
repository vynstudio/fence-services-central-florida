"use client";

import { Button } from "@relume_io/relume-ui";
import { QuoteButton } from "@/components/quote-button";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { BiCheckCircle, BiPhone } from "react-icons/bi";

const MATERIALS = [
  {
    id: "wood",
    label: "Wood",
    short: "Wood",
    line: "Privacy that ages with character",
    name: "wood",
    fallback: "/images/home-gallery-section-0.jpg",
  },
  {
    id: "vinyl",
    label: "Vinyl",
    short: "Vinyl",
    line: "Low care. Holds color in the sun.",
    name: "vinyl",
    fallback: "/images/home-gallery-section-1.jpg",
  },
  {
    id: "aluminum",
    label: "Aluminum",
    short: "Alum.",
    line: "Ornamental strength. Pool-ready.",
    name: "aluminum",
    fallback: "/images/home-gallery-section-3.jpg",
  },
  {
    id: "chain",
    label: "Chain link",
    short: "Chain",
    line: "Security that doesn’t quit",
    name: "chain",
    fallback: "/images/home-gallery-section-2.jpg",
  },
];



function MaterialTabs({ active, setActive, setPaused, compact = false }) {
  return (
    <div
      className={`flex gap-1.5 ${compact ? "w-full overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "flex-wrap"}`}
      role="tablist"
      aria-label="Fence materials"
    >
      {MATERIALS.map((m, i) => {
        const selected = i === active;
        return (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => {
              setActive(i);
              setPaused(true);
            }}
            className={`relative shrink-0 touch-manipulation px-3 py-2.5 text-xs font-semibold tracking-wide transition min-h-11 md:min-h-10 md:py-2 md:text-sm ${
              selected
                ? "bg-white text-black"
                : "border border-white/25 bg-black/40 text-white/85 backdrop-blur-sm active:bg-black/60 hover:border-white/50 hover:bg-black/55"
            }`}
          >
            <span className="md:hidden">{m.short}</span>
            <span className="hidden md:inline">{m.label}</span>
            {selected && (
              <motion.span
                layoutId="mat-underline"
                className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-accent"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [canParallax, setCanParallax] = useState(false);
  const material = MATERIALS[active];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    // Desktop pointer only — skip parallax on phones / iPads
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)");
    const apply = () => setCanParallax(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const onMove = useCallback(
    (e) => {
      if (!canParallax) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      mx.set(x);
      my.set(y);
    },
    [canParallax, mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % MATERIALS.length);
    }, 4200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="shell-section !py-3 md:!py-6 lg:!py-10">
      <div className="shell-inner">
        <div
          className="relative overflow-hidden border border-border-primary bg-[#0a0a0a]"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          onMouseEnter={() => setPaused(true)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          {/* Decorative posts — desktop/tablet only (noise on small screens) */}
          <div
            className="pointer-events-none absolute inset-0 hidden opacity-[0.07] md:block"
            aria-hidden
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0, transparent 47px, rgba(255,255,255,0.9) 47px, rgba(255,255,255,0.9) 48px)",
            }}
          />

          {/* True line — tablet+ */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-[42%] z-[5] hidden h-px origin-left bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-80 md:block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            aria-hidden
          />

          {/*
            Phone:   stack (photo → copy), tall 3:4
            iPad:    50/50 side-by-side, min-h 28rem
            Desktop: 5/7 cinematic split, min-h 36rem + estimate card
          */}
          <div className="relative z-10 grid md:grid-cols-2 md:min-h-[28rem] lg:grid-cols-12 lg:min-h-[36rem] xl:min-h-[40rem]">
            {/* ── Visual stage ── */}
            <div className="relative order-1 md:order-2 lg:col-span-7 lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={material.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={canParallax ? { x: sx, y: sy } : undefined}
                  >
                    <picture className="absolute inset-0 block size-full">
                      <source
                        media="(min-width: 1024px)"
                        srcSet={`/images/desktop/${material.name}.jpg`}
                      />
                      <source
                        media="(min-width: 768px)"
                        srcSet={`/images/tablet/${material.name}.jpg`}
                      />
                      <img
                        src={`/images/mobile/${material.name}.jpg`}
                        alt={`${material.label} fence installation`}
                        className="size-full object-cover object-center"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                        decoding="async"
                      />
                    </picture>
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25 md:bg-gradient-to-r md:from-[#0a0a0a]/90 md:via-[#0a0a0a]/20 md:to-transparent lg:from-[#0a0a0a] lg:via-[#0a0a0a]/30" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:from-black/40" />

                {/* Photo chrome: caption + materials */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 md:p-5 lg:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
                    <div className="min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={material.id + "-line"}
                          className="mb-0.5 text-sm font-medium text-white md:text-base"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.25 }}
                        >
                          {material.line}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-[11px] text-white/50 md:text-xs">
                        <span className="md:hidden">Swipe materials</span>
                        <span className="hidden md:inline">
                          Tap a material — we install & repair each
                        </span>
                      </p>
                    </div>
                    <MaterialTabs
                      active={active}
                      setActive={setActive}
                      setPaused={setPaused}
                      compact
                    />
                  </div>
                  <div className="mt-3 h-0.5 w-full overflow-hidden bg-white/10">
                    <motion.div
                      key={`${active}-${paused}`}
                      className="h-full bg-brand-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={
                        paused
                          ? { duration: 0 }
                          : { duration: 4.2, ease: "linear" }
                      }
                    />
                  </div>
                </div>

                {/* Estimate card — desktop only */}
                <motion.div
                  className="absolute right-8 top-8 z-10 hidden w-[11.5rem] border border-white/15 bg-black/55 p-4 backdrop-blur-md lg:block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.45 }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
                    Next open
                  </p>
                  <p className="mt-1 text-base font-bold leading-tight text-white lg:text-lg">
                    Free estimate
                  </p>
                  <p className="mt-1 text-[11px] text-white/55 lg:text-xs">
                    Same-week repair slots when storms hit
                  </p>
                  <QuoteButton size="sm" className="mt-3 w-full min-h-10">
                    Get quote
                  </QuoteButton>
                </motion.div>
              </div>
            </div>

            {/* ── Copy ── */}
            <div className="relative order-2 flex flex-col justify-center px-4 py-6 sm:px-6 sm:py-9 md:order-1 md:px-7 md:py-10 lg:col-span-5 lg:order-1 lg:px-12 lg:py-16 xl:px-14 xl:py-20">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-accent-bright sm:mb-4 sm:text-xs md:text-xs">
                  <span className="inline-block size-1.5 shrink-0 rounded-full bg-brand-accent-bright shadow-[0_0_14px_#1A9A5C]" />
                  {SITE.tagline}
                </p>

                <h1 className="mb-3 text-[1.625rem] font-bold leading-[1.14] tracking-tight text-white sm:mb-4 sm:text-[2rem] md:text-[2.2rem] md:leading-[1.1] lg:text-[2.75rem] lg:leading-[1.06] xl:text-[3rem]">
                  Fence installation &amp; repair
                  <span className="mt-0.5 block font-semibold text-white/50 md:mt-1">
                    in Central Florida
                  </span>
                </h1>

                <p className="mb-4 max-w-md text-base leading-relaxed text-white/80 sm:mb-6 sm:text-base md:text-[1.05rem]">
                  {SITE.heroSubheadline}
                </p>

                <ul
                  className="mb-5 grid grid-cols-1 gap-2.5 sm:mb-7 sm:gap-2.5"
                  aria-label="Highlights"
                >
                  {SITE.heroBullets.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2.5 text-sm leading-snug text-white/85 sm:text-sm"
                    >
                      <BiCheckCircle
                        className="mt-0.5 size-5 shrink-0 text-brand-accent-bright"
                        aria-hidden
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2.5 sm:gap-3 md:flex-row md:flex-wrap">
                  <QuoteButton className="min-h-12 w-full touch-manipulation text-base md:min-h-11 md:w-auto md:min-w-[10.5rem] md:text-sm">
                    {SITE.heroCta}
                  </QuoteButton>
                  <Button
                    variant="secondary-alt"
                    className="min-h-12 w-full touch-manipulation border-white/30 bg-transparent text-base text-white hover:bg-white/10 md:min-h-11 md:w-auto md:text-sm"
                    asChild
                  >
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <BiPhone className="size-5 shrink-0" aria-hidden />
                      <span className="md:hidden">Call now</span>
                      <span className="hidden md:inline">Call {SITE.phone}</span>
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Corridor — tablet+ */}
              <div className="mt-6 hidden flex-wrap items-center gap-2 border-t border-white/10 pt-5 md:mt-8 md:flex lg:mt-10 lg:pt-6">
                {["Jacksonville", "Orlando", "Tampa"].map((city, i) => (
                  <React.Fragment key={city}>
                    {i > 0 && (
                      <span className="text-brand-accent/80" aria-hidden>
                        →
                      </span>
                    )}
                    <span className="text-xs font-medium tracking-wide text-white/60">
                      {city}
                    </span>
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile-only corridor strip */}
              <p className="mt-5 text-[11px] font-medium tracking-wide text-white/45 md:hidden">
                Jax · Orlando · Tampa corridor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
