"use client";

import { Button } from "@relume_io/relume-ui";
import { QuoteButton } from "@/components/quote-button";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiPhone } from "react-icons/bi";

const MATERIALS = [
  {
    id: "wood",
    label: "Wood",
    short: "Wood",
    line: "Privacy that ages with character",
    name: "wood",
  },
  {
    id: "vinyl",
    label: "Vinyl",
    short: "Vinyl",
    line: "Low care. Holds color in the sun.",
    name: "vinyl",
  },
  {
    id: "aluminum",
    label: "Aluminum",
    short: "Alum.",
    line: "Ornamental strength. Pool-ready.",
    name: "aluminum",
  },
  {
    id: "chain",
    label: "Chain link",
    short: "Chain",
    line: "Security that doesn’t quit",
    name: "chain",
  },
];

const EASE = [0.22, 1, 0.36, 1];

const STAGGER = {
  h1: 0,
  sub: 0.08,
  trust: 0.14,
  cta: 0.2,
  corridor: 0.28,
};

function MaterialTabs({ active, setActive, setPaused }) {
  return (
    <div
      className="flex w-full justify-center gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:w-auto md:justify-start"
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
            className={`relative shrink-0 touch-manipulation px-3 py-2.5 text-xs font-bold tracking-wide transition min-h-11 md:min-h-10 md:py-2 md:text-sm ${
              selected
                ? "bg-white text-black"
                : "border border-white/30 bg-black/45 text-white backdrop-blur-sm active:bg-black/60 hover:border-white/50 hover:bg-black/55"
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

function fadeUp(reduceMotion, delay = 0) {
  if (reduceMotion) {
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: EASE, delay },
  };
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const material = MATERIALS[active];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % MATERIALS.length);
    }, 4200);
    return () => clearInterval(id);
  }, [paused]);

  const imgTransition = reduceMotion
    ? { duration: 0.15 }
    : { duration: 0.55, ease: EASE };

  return (
    <section className="shell-section !py-3 md:!py-6 lg:!py-10">
      <div className="shell-inner">
        <div
          className="relative overflow-hidden border border-brand-line bg-brand-navy-deep"
          onMouseEnter={() => setPaused(true)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          {/*
            Phone:   stack (photo → copy)
            iPad+:   copy left, photo right
          */}
          <div className="relative z-10 grid md:grid-cols-2 md:min-h-[26rem] lg:min-h-[32rem] xl:min-h-[36rem]">
            {/* Visual stage — real photos only, no decorative AI overlays */}
            <div className="relative order-1 md:order-2">
              <div className="relative aspect-[3/4] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={material.id}
                    className="absolute inset-0"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={imgTransition}
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
                        sizes="(max-width: 767px) 100vw, 50vw"
                        decoding="async"
                      />
                    </picture>
                  </motion.div>
                </AnimatePresence>

                {/* Soft bottom scrim only — keep photo readable */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 md:p-5 lg:p-6">
                  <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
                    <div className="min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={material.id + "-line"}
                          className="mb-0.5 text-sm font-bold text-white md:text-base"
                          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduceMotion ? undefined : { opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        >
                          {material.line}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-[11px] font-semibold text-white/60 md:text-xs">
                        <span className="md:hidden">Choose a material</span>
                        <span className="hidden md:inline">
                          Tap a material — we install &amp; repair each
                        </span>
                      </p>
                    </div>
                    <MaterialTabs
                      active={active}
                      setActive={setActive}
                      setPaused={setPaused}
                    />
                  </div>
                  <div className="mt-3 h-0.5 w-full overflow-hidden bg-white/15">
                    <motion.div
                      key={`${active}-${paused}`}
                      className="h-full bg-brand-accent-bright"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={
                        paused || reduceMotion
                          ? { duration: 0 }
                          : { duration: 4.2, ease: "linear" }
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Copy — left-aligned, bold, two-line H1, clean black panel */}
            <div className="relative order-2 flex flex-col justify-center bg-brand-navy-deep px-5 py-10 text-left sm:px-8 sm:py-12 md:order-1 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-14">
              <div className="flex w-full max-w-md flex-col items-start md:max-w-lg">
                <motion.h1
                  className="mb-4 w-full text-left text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-white sm:mb-5 sm:text-[2.15rem] md:text-[2.35rem] md:leading-[1.1] lg:text-[2.75rem] xl:text-[3rem]"
                  {...fadeUp(reduceMotion, STAGGER.h1)}
                >
                  <span className="block">Fence installation &amp; repair</span>
                  <span className="mt-1 block font-extrabold text-white">
                    in Central Florida
                  </span>
                  <span className="mt-4 block h-0.5 w-16 overflow-hidden sm:mt-5">
                    <motion.span
                      className="block h-0.5 w-full origin-left bg-brand-accent-bright"
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.55, ease: EASE, delay: 0.1 }
                      }
                      aria-hidden
                    />
                  </span>
                </motion.h1>

                <motion.p
                  className="mb-3 w-full text-left text-base font-bold leading-snug text-white sm:mb-4 sm:text-lg md:text-[1.125rem]"
                  {...fadeUp(reduceMotion, STAGGER.sub)}
                >
                  {SITE.heroSubheadline}
                </motion.p>

                <motion.p
                  className="mb-7 w-full text-left text-sm font-bold leading-snug text-white/80 sm:mb-8 sm:text-[0.95rem]"
                  {...fadeUp(reduceMotion, STAGGER.trust)}
                >
                  {SITE.heroTrust}
                </motion.p>

                <motion.div
                  className="flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-start sm:gap-3"
                  {...fadeUp(reduceMotion, STAGGER.cta)}
                >
                  <QuoteButton className="min-h-12 w-full touch-manipulation !bg-brand-accent text-base font-bold text-white hover:!bg-brand-accent-hover sm:w-auto sm:min-w-[11rem] md:min-h-11 md:text-sm">
                    {SITE.heroCta}
                  </QuoteButton>
                  <Button
                    variant="secondary-alt"
                    className="min-h-12 w-full touch-manipulation border-2 border-white/35 bg-transparent text-base font-bold text-white hover:border-brand-accent-bright hover:bg-white/10 sm:w-auto md:min-h-11 md:text-sm"
                    asChild
                  >
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center justify-center gap-2 font-bold"
                    >
                      <BiPhone className="size-5 shrink-0" aria-hidden />
                      <span className="sm:hidden">Call now</span>
                      <span className="hidden sm:inline">Call {SITE.phone}</span>
                    </a>
                  </Button>
                </motion.div>

                <motion.p
                  className="mt-6 text-left text-xs font-bold tracking-wide text-white/55 md:mt-7 md:text-sm"
                  {...fadeUp(reduceMotion, STAGGER.corridor)}
                >
                  Jax · Orlando · Tampa
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
