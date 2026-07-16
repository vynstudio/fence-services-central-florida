"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MATERIALS = [
  {
    id: "01",
    label: "Wood",
    heading: "Custom wood fence installation",
    description:
      "Warm, private, and built to last. Cedar and pressure-treated options matched to your home—posts set for Florida soil and storms.",
    image: "/images/home-gallery-section-0.jpg",
  },
  {
    id: "02",
    label: "Vinyl",
    heading: "Low-maintenance vinyl fencing",
    description:
      "Privacy that never needs painting. Clean vinyl panels that hold color and stand up to Florida sun, humidity, and salt air.",
    image: "/images/home-gallery-section-1.jpg",
  },
  {
    id: "03",
    label: "Chain link",
    heading: "Durable chain link systems",
    description:
      "Affordable security for homes, pets, and commercial lots. Galvanized and coated options with clean tension and solid posts.",
    image: "/images/home-gallery-section-2.jpg",
  },
  {
    id: "04",
    label: "Aluminum",
    heading: "Elegant aluminum fence installation",
    description:
      "Rust-proof and refined. Aluminum that frames your property and pool line without blocking the view—built to code where it matters.",
    image: "/images/home-gallery-section-3.jpg",
  },
];

const useAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const CardContent = isMobile ? motion.div : "div";
  const animateWidth = (index) =>
    isMobile ? "100%" : index === activeIndex ? "100%" : "5rem";
  const animateHeight = (index) =>
    index === activeIndex ? "auto" : "0px";
  const handleSetIsActive = (index) => () => {
    setActiveIndex((prev) => (prev === index ? prev : index));
  };
  return {
    handleSetIsActive,
    CardContent,
    animateWidth,
    animateHeight,
    activeIndex,
  };
};

export function Layout351() {
  const panel = useAccordion();

  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <p className="brand-eyebrow">Services</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Every fence type installed and repaired with confidence
          </h2>
          <p className="md:text-md">
            Wood, vinyl, chain link, and aluminum—install or repair, residential
            or commercial.
          </p>
        </div>
        <div className="flex w-full flex-col overflow-hidden border-b border-l border-r border-border-primary lg:h-[90vh] lg:flex-row lg:border-r-0 lg:border-t">
          {MATERIALS.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-border-primary"
              onClick={panel.handleSetIsActive(index)}
              initial={false}
              animate={{ width: panel.animateWidth(index) }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
                <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
                  {item.id}
                </p>
                <h3 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
                  {item.label}
                </h3>
                <p className="text-xl font-bold md:text-2xl lg:hidden">
                  {item.label}
                </p>
              </div>
              <panel.CardContent
                className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
                animate={{ height: panel.animateHeight(index) }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {item.heading}
                  </h3>
                  <p className="md:text-md">{item.description}</p>
                  <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </panel.CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
