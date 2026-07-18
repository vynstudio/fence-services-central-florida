"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { SITE } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

/** Desktop bar — room for 4 links */
const DESKTOP_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#areas", label: "Areas" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

/** iPad bar — 3 links max so it never wraps */
const TABLET_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#areas", label: "Areas" },
  { href: "/#reviews", label: "Reviews" },
];

/** Phone drawer — full map */
const MENU_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#areas", label: "Areas" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#why", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      {/* Phone: compact · iPad: mid · Desktop: full rail */}
      <div className="shell-rail flex items-center justify-between gap-2 py-2.5 md:gap-3 md:py-3.5 lg:py-4">
        <BrandLogo variant="dark" height={34} className="md:!h-10" />

        {/* ── iPad shell ── */}
        <nav
          className="shell-tablet-only items-center gap-0.5"
          aria-label="Tablet navigation"
        >
          {TABLET_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-2.5 py-2 text-[13px] font-medium text-text-primary hover:text-brand-accent"
            >
              {l.label}
            </a>
          ))}
          <QuoteButton size="sm" className="ml-2 min-h-10 px-3.5">
            Get quote
          </QuoteButton>
          <Button size="sm" variant="secondary" className="ml-1.5 min-h-10" asChild>
            <a href={SITE.phoneHref}>Call</a>
          </Button>
        </nav>

        {/* ── Desktop shell ── */}
        <nav
          className="shell-desktop-only items-center gap-0.5"
          aria-label="Primary navigation"
        >
          {DESKTOP_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-text-primary hover:text-brand-accent"
            >
              {l.label}
            </a>
          ))}
          <QuoteButton size="sm" className="ml-4 min-h-10 px-4">
            Get quote
          </QuoteButton>
          <Button size="sm" variant="secondary" className="ml-2 min-h-10" asChild>
            <a href={SITE.phoneHref}>Call</a>
          </Button>
        </nav>

        {/* ── Phone shell ── */}
        <div className="shell-phone-only items-center gap-2">
          <QuoteButton size="sm" className="min-h-11 px-3.5 text-sm">
            Quote
          </QuoteButton>
          <button
            type="button"
            className="flex size-11 touch-manipulation flex-col items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`mb-1.5 block h-0.5 w-6 bg-text-primary transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`mb-1.5 block h-0.5 w-6 bg-text-primary transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-text-primary transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Phone drawer only */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border-primary bg-background-primary md:hidden"
            aria-label="Mobile menu"
          >
            <div className="px-4 py-2 pb-5">
              {MENU_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block min-h-12 border-b border-border-primary/40 py-3.5 text-base font-medium touch-manipulation last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <QuoteButton className="min-h-12 w-full" size="sm">
                  Get quote
                </QuoteButton>
                <Button
                  className="min-h-12 w-full"
                  size="sm"
                  variant="secondary"
                  asChild
                >
                  <a href={SITE.phoneHref} onClick={close}>
                    Call
                  </a>
                </Button>
              </div>
              <a
                href={SITE.smsHref}
                onClick={close}
                className="mt-2 flex min-h-12 items-center justify-center border border-border-primary text-sm font-semibold touch-manipulation"
              >
                Text us
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
