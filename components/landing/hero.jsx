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
    line: "Privacy that ages with character",
    image: "/images/home-gallery-section-0.jpg",
  },
  {
    id: "vinyl",
    label: "Vinyl",
    line: "Low care. Holds color in the sun.",
    image: "/images/home-gallery-section-1.jpg",
  },
  {
    id: "aluminum",
    label: "Aluminum",
    line: "Ornamental strength. Pool-ready.",
    image: "/images/home-gallery-section-3.jpg",
  },
  {
    id: "chain",
    label: "Chain link",
    line: "Security that doesn’t quit",
    image: "/images/home-gallery-section-2.jpg",
  },
];

const TRUST = [
  "Free on-site quotes",
  "Storm-depth posts",
  "HOA & permits handled",
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const material = MATERIALS[active];

  // Gentle parallax on the photo stack
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const onMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      mx.set(x);
      my.set(y);
    },
    [mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  // Auto-rotate materials when idle
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % MATERIALS.length);
    }, 4200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="px-5 pb-12 pt-4 md:px-8 md:pb-16 md:pt-6 lg:pb-20 lg:pt-8">
      <div className="mx-auto max-w-[1120px]">
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
          {/* Fence-post vertical rhythm (decorative) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0, transparent 47px, rgba(255,255,255,0.9) 47px, rgba(255,255,255,0.9) 48px)",
            }}
          />

          {/* Animated true-line */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-[38%] z-[5] h-px origin-left bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-80"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            aria-hidden
          />

          <div className="relative z-10 grid lg:grid-cols-12 lg:min-h-[36rem]">
            {/* ── Copy ── */}
            <div className="relative flex flex-col justify-center px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:col-span-5 lg:px-12 lg:py-20 xl:px-14">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent sm:text-xs">
                  <span className="inline-block size-1.5 rounded-full bg-brand-accent shadow-[0_0_12px_#1F6B4A]" />
                  {SITE.tagline}
                </p>

                <h1 className="mb-5 text-[2.15rem] font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.1rem] lg:leading-[1.02]">
                  The true line
                  <span className="mt-1 block font-semibold text-white/40">
                    across Florida
                  </span>
                </h1>

                <p className="mb-7 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                  Install and repair from Jacksonville to Tampa. Posts set for
                  storms. Quotes without the dance.
                </p>

                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <QuoteButton className="w-full sm:w-auto sm:min-w-[10.5rem]">
                    Get free quote
                  </QuoteButton>
                  <Button
                    variant="secondary-alt"
                    className="w-full border-white/25 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                    asChild
                  >
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <BiPhone className="size-5 shrink-0" aria-hidden />
                      {SITE.phone}
                    </a>
                  </Button>
                </div>

                <ul className="space-y-2.5" aria-label="Highlights">
                  {TRUST.map((t, i) => (
                    <motion.li
                      key={t}
                      className="flex items-center gap-2.5 text-sm text-white/75"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + i * 0.08, duration: 0.4 }}
                    >
                      <BiCheckCircle
                        className="size-4 shrink-0 text-brand-accent"
                        aria-hidden
                      />
                      {t}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Corridor chips */}
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
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
              </motion.div>
            </div>

            {/* ── Visual stage ── */}
            <div className="relative lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={material.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ x: sx, y: sy }}
                  >
                    <img
                      src={material.image}
                      alt={`${material.label} fence installation`}
                      className="size-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Edge vignette so left copy blends */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent lg:via-[#0a0a0a]/25" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                {/* Material selector + caption — floats on photo */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={material.id + "-line"}
                          className="mb-1 text-sm font-medium text-white sm:text-base"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.3 }}
                        >
                          {material.line}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-xs text-white/50">
                        Tap a material — we install & repair each
                      </p>
                    </div>

                    <div
                      className="flex flex-wrap gap-1.5"
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
                            className={`relative px-3 py-2 text-xs font-semibold tracking-wide transition sm:text-sm ${
                              selected
                                ? "bg-white text-black"
                                : "border border-white/25 bg-black/40 text-white/85 backdrop-blur-sm hover:border-white/50 hover:bg-black/55"
                            }`}
                          >
                            {m.label}
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
                  </div>

                  {/* Progress bar for auto-rotate */}
                  <div className="mt-4 h-0.5 w-full overflow-hidden bg-white/10">
                    <motion.div
                      key={`${active}-${paused}`}
                      className="h-full bg-brand-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: paused ? "100%" : "100%" }}
                      transition={
                        paused
                          ? { duration: 0 }
                          : { duration: 4.2, ease: "linear" }
                      }
                    />
                  </div>
                </div>

                {/* Floating estimate card — desktop only */}
                <motion.div
                  className="absolute right-6 top-6 z-10 hidden w-[11.5rem] border border-white/15 bg-black/55 p-4 backdrop-blur-md md:block lg:right-8 lg:top-8"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
                    Next open
                  </p>
                  <p className="mt-1 text-lg font-bold leading-tight text-white">
                    Free estimate
                  </p>
                  <p className="mt-1 text-xs text-white/55">
                    Same-week repair slots when storms hit
                  </p>
                  <QuoteButton
                    size="sm"
                    className="mt-3 w-full"
                    variant="primary"
                  >
                    Book now
                  </QuoteButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
