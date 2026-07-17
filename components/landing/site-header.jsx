"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#process", label: "Process" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
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
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <BrandLogo variant="dark" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-text-primary hover:text-brand-accent"
            >
              {l.label}
            </a>
          ))}
          <QuoteButton size="sm" className="ml-3">
            Get quote
          </QuoteButton>
          <Button size="sm" variant="secondary" className="ml-2" asChild>
            <a href={SITE.phoneHref}>Call</a>
          </Button>
        </nav>

        <button
          type="button"
          className="flex size-11 flex-col items-center justify-center lg:hidden"
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

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border-primary bg-background-primary px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="block py-3 text-base font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <QuoteButton className="w-full" size="sm">
              Get quote
            </QuoteButton>
            <Button className="w-full" size="sm" variant="secondary" asChild>
              <a href={SITE.phoneHref} onClick={close}>
                Call
              </a>
            </Button>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
