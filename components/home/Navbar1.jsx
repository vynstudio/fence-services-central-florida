"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/residential-fence-repair", label: "Repair" },
  { href: "/commercial-fence-installation", label: "Commercial" },
  { href: "/contact-us", label: "Contact" },
];

const useNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

export function Navbar1() {
  const nav = useNav();

  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col lg:flex-row lg:items-center lg:justify-between lg:px-[5%]">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-[5rem] lg:px-0">
          <BrandLogo variant="dark" />
          <button
            type="button"
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={nav.toggleMobileMenu}
            aria-expanded={nav.isMobileMenuOpen}
            aria-label={nav.isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-background-alternative"
              animate={nav.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-background-alternative"
              animate={nav.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-background-alternative"
              animate={nav.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>

        <motion.nav
          variants={{
            open: { height: "auto", opacity: 1 },
            close: { height: 0, opacity: 0 },
          }}
          initial="close"
          animate={nav.animateMobileMenu}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-border-primary px-[5%] pb-4 lg:flex lg:items-center lg:overflow-visible lg:border-t-0 lg:px-0 lg:pb-0 lg:[height:auto!important] lg:[opacity:1!important]"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={nav.closeMobileMenu}
              className="block py-3 text-base font-medium first:pt-4 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2 lg:ml-4 lg:mt-0 lg:flex-row lg:items-center">
            <QuoteButton
              title="Quote"
              variant="secondary"
              size="sm"
              className="w-full lg:w-auto"
            >
              Quote
            </QuoteButton>
            <Button title="Call" size="sm" className="w-full lg:w-auto" asChild>
              <a href="tel:+14075550198">Call</a>
            </Button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
