"use client";

import { Button } from "@relume_io/relume-ui";
import { QuoteButton } from "@/components/quote-button";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiPhone } from "react-icons/bi";

const MATERIALS = [
  {
    id: "vinyl",
    label: "Vinyl",
    short: "Vinyl",
    line: "Low care. Holds color in the sun.",
    name: "vinyl",
  },
  {
    id: "chain",
    label: "Chain link",
    short: "Chain link",
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

function MaterialTabs({ active, setActive, setPaused, variant = "dark" }) {
  const isLight = variant === "light";
  return (
    <div
      className={`grid w-full grid-cols-2 gap-1.5 sm:gap-2 ${isLight ? "" : ""}`}
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
            className={`relative min-h-11 touch-manipulation px-3 py-2.5 text-center text-sm font-bold tracking-wide transition md:min-h-10 md:text-[0.9375rem] ${
              selected
                ? isLight
                  ? "bg-brand-accent text-white"
                  : "bg-white text-black"
                : isLight
                  ? "border border-brand-line bg-white text-text-primary active:bg-brand-soft"
                  : "border border-white/30 bg-black/45 text-white backdrop-blur-sm active:bg-black/60 hover:border-white/50 hover:bg-black/55"
            }`}
          >
            {m.label}
            {selected && !isLight && (
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

function HeroPicture({ material, imgTransition, reduceMotion, priority }) {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={material.id}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
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
            fetchPriority={priority ? "high" : "auto"}
          />
        </picture>
      </motion.div>
    </AnimatePresence>
  );
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
    <section className="shell-section !py-0 md:!py-5 lg:!py-8">
      <div className="shell-inner">
        {/* ═══════════ PHONE: conversion-first stacked hero ═══════════ */}
        <div className="md:hidden">
          {/* Compact media banner — not a tall portrait that buries the H1 */}
          <div
            className="hero-bleed relative overflow-hidden bg-brand-navy-deep"
            onTouchStart={() => setPaused(true)}
          >
            <div className="relative aspect-[16/10] min-h-[11.5rem] max-h-[42vh] w-full overflow-hidden sm:aspect-[16/9]">
              <HeroPicture
                material={material}
                imgTransition={imgTransition}
                reduceMotion={reduceMotion}
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-3 pt-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={material.id + "-line-m"}
                    className="text-sm font-bold text-white"
                    initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  >
                    {material.line}
                  </motion.p>
                </AnimatePresence>
                <div className="mt-2 h-0.5 w-full overflow-hidden bg-white/20">
                  <motion.div
                    key={`${active}-${paused}-m`}
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

          {/* Copy + CTAs — primary above-fold content on phones */}
          <div className="bg-background-primary px-0 pb-6 pt-5">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-accent">
              Jacksonville · Orange · Seminole · Osceola
            </p>
            <h1 className="mb-3 text-[1.55rem] font-extrabold leading-[1.12] tracking-tight text-text-primary sm:text-[1.85rem]">
              Fence Installation in Jacksonville
              <span className="mt-1 block text-text-primary">
                &amp; Central Florida
              </span>
            </h1>
            <p className="mb-2 text-[0.975rem] font-semibold leading-snug text-text-primary">
              {SITE.heroSubheadline}
            </p>
            <p className="mb-5 text-sm leading-snug text-text-secondary">
              {SITE.heroTrust}
            </p>

            <div className="mb-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-secondary">
                Choose material
              </p>
              <MaterialTabs
                active={active}
                setActive={setActive}
                setPaused={setPaused}
                variant="light"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <QuoteButton className="min-h-12 w-full touch-manipulation !bg-brand-accent text-base font-bold text-white hover:!bg-brand-accent-hover">
                {SITE.heroCta}
              </QuoteButton>
              <a
                href={SITE.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 border-2 border-brand-accent bg-transparent text-base font-bold text-brand-accent touch-manipulation active:bg-brand-soft"
              >
                <BiPhone className="size-5 shrink-0" aria-hidden />
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        {/* ═══════════ TABLET + DESKTOP: split stage ═══════════ */}
        <div
          className="relative hidden overflow-hidden border border-brand-line bg-brand-navy-deep md:block"
          onMouseEnter={() => setPaused(true)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <div className="relative z-10 grid md:min-h-[26rem] md:grid-cols-2 lg:min-h-[30rem] xl:min-h-[34rem]">
            {/* Visual */}
            <div className="relative order-2">
              <div className="relative aspect-[4/3] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
                <HeroPicture
                  material={material}
                  imgTransition={imgTransition}
                  reduceMotion={reduceMotion}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 lg:p-6">
                  <div className="flex flex-col items-start gap-3 text-left">
                    <div className="min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={material.id + "-line-d"}
                          className="mb-0.5 text-base font-bold text-white"
                          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduceMotion ? undefined : { opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        >
                          {material.line}
                        </motion.p>
                      </AnimatePresence>
                      <p className="text-xs font-semibold text-white/60">
                        Select a material — we install each for homes &amp; businesses
                      </p>
                    </div>
                    <div className="w-full max-w-xs">
                      <MaterialTabs
                        active={active}
                        setActive={setActive}
                        setPaused={setPaused}
                        variant="dark"
                      />
                    </div>
                  </div>
                  <div className="mt-3 h-0.5 w-full overflow-hidden bg-white/15">
                    <motion.div
                      key={`${active}-${paused}-d`}
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

            {/* Copy panel */}
            <div className="relative order-1 flex flex-col justify-center bg-brand-navy-deep px-8 py-12 text-left lg:px-12 lg:py-16 xl:px-14">
              <div className="flex w-full max-w-md flex-col items-start md:max-w-lg">
                <motion.h1
                  className="mb-4 w-full text-left text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]"
                  {...fadeUp(reduceMotion, STAGGER.h1)}
                >
                  <span className="block">Fence Installation in</span>
                  <span className="mt-1 block font-extrabold text-white">
                    Jacksonville &amp; Central Florida
                  </span>
                  <span className="mt-5 block h-0.5 w-16 overflow-hidden">
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
                  className="mb-3 w-full text-left text-lg font-bold leading-snug text-white lg:text-[1.125rem]"
                  {...fadeUp(reduceMotion, STAGGER.sub)}
                >
                  {SITE.heroSubheadline}
                </motion.p>

                <motion.p
                  className="mb-8 w-full text-left text-[0.95rem] font-semibold leading-snug text-white/80"
                  {...fadeUp(reduceMotion, STAGGER.trust)}
                >
                  {SITE.heroTrust}
                </motion.p>

                <motion.div
                  className="flex w-full flex-row flex-wrap items-center justify-start gap-3"
                  {...fadeUp(reduceMotion, STAGGER.cta)}
                >
                  <QuoteButton className="min-h-11 min-w-[11rem] touch-manipulation !bg-brand-accent text-sm font-bold text-white hover:!bg-brand-accent-hover">
                    {SITE.heroCta}
                  </QuoteButton>
                  <Button
                    variant="secondary-alt"
                    className="min-h-11 touch-manipulation border-2 border-white/35 bg-transparent text-sm font-bold text-white hover:border-brand-accent-bright hover:bg-white/10"
                    asChild
                  >
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center justify-center gap-2 font-bold"
                    >
                      <BiPhone className="size-5 shrink-0" aria-hidden />
                      Call {SITE.phone}
                    </a>
                  </Button>
                </motion.div>

                <motion.p
                  className="mt-7 text-left text-sm font-bold tracking-wide text-white/55"
                  {...fadeUp(reduceMotion, STAGGER.corridor)}
                >
                  Jacksonville · Orange · Seminole · Osceola County
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
