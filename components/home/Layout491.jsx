"use client";

import { Button } from "@relume_io/relume-ui";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const TABS = [
  {
    title: "Same-day dispatch",
    body: "Storm damage or a failed post? We answer fast and get a crew on the road—covering every mile from Jacksonville to Tampa.",
    image: {
      src: "/images/home-hero-header-section.jpg",
      alt: "Fence repair crew responding quickly",
    },
  },
  {
    title: "Central Florida coverage",
    body: "One company for the full corridor. Residential repair and commercial installs with crews who know local codes and HOA rules.",
    image: {
      src: "/images/home-about-section.jpg",
      alt: "Fence installation across Central Florida",
    },
  },
  {
    title: "Work done right",
    body: "Deeper posts, clean lines, and materials built for Florida wind and sun. We don’t leave until the line is true and the gate swings right.",
    image: {
      src: "/images/home-gallery-section-2.jpg",
      alt: "Quality finished fence line",
    },
  },
];

const useTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) =>
    clsx("cursor-pointer border-b border-border-primary py-6", {
      "opacity-100": activeTab === index,
      "opacity-25": activeTab !== index,
    });
  const getActiveTabButtonContentStyles = (index) => ({
    height: activeTab === index ? "auto" : 0,
    opacity: activeTab === index ? 1 : 0,
  });
  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    getActiveTabButtonContentStyles,
    activeTab,
  };
};

export function Layout491() {
  const tabs = useTabs();
  const active = TABS[tabs.activeTab];

  return (
    <section id="why-meridian" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="brand-eyebrow">Why Meridian</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            A fence down today is fixed by tomorrow
          </h2>
          <p className="md:text-md">
            Straight lines. Strong fences. Fast response for install and repair
            across Central Florida.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Services" variant="secondary" asChild>
              <a href="/services">Services</a>
            </Button>
            <Button
              title="Contact"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild
            >
              <a href="/contact-us">Contact</a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
            {TABS.map((tab, index) => (
              <div
                key={tab.title}
                onClick={tabs.setActiveTabSetter(index)}
                className={tabs.getActiveTabButtonStyles(index)}
              >
                <h3 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tab.title}
                </h3>
                <motion.div
                  initial={false}
                  animate={tabs.getActiveTabButtonContentStyles(index)}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 md:mt-4">{tab.body}</p>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={active.image.src + tabs.activeTab}
                src={active.image.src}
                alt={active.image.alt}
                className="aspect-[4/3] w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
