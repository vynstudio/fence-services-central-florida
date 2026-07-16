"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = ({ data = [] } = {}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const getStyles = (index) => {
    const len = Math.max(data.length, 1);
    const startProgress = index / len;
    const endProgress = (index + 1) / len;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0],
    );
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.1),
        startProgress,
        endProgress - 0.1,
        Math.min(1, endProgress),
      ],
      [100, 0, 0, -100],
    );
    return { opacity, y };
  };
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout513() {
  const { isTablet } = useTablet();
  const { isMobile } = useMobile();
  const render = { isTablet, isMobile };
  const useSctoll = useRelume({
    data: [
      {
        heading: "01 Feature one",
        description:
          "Solid materials, clean installs, and repairs that last through Florida storms.",
        image: {
          src: "/images/home-features-list-section-0.jpg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "/images/home-features-list-section-0.jpg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        heading: "02 Feature two",
        description:
          "Solid materials, clean installs, and repairs that last through Florida storms.",
        image: {
          src: "/images/home-features-list-section-1.jpg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "/images/home-features-list-section-1.jpg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        heading: "03 Feature three",
        description:
          "Solid materials, clean installs, and repairs that last through Florida storms.",
        image: {
          src: "/images/home-features-list-section-2.jpg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "/images/home-features-list-section-2.jpg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        heading: "04 Feature four",
        description:
          "Solid materials, clean installs, and repairs that last through Florida storms.",
        image: {
          src: "/images/home-features-list-section-3.jpg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "/images/home-features-list-section-3.jpg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section
      ref={useSctoll.containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Services</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                The specific fix your fence needs right now
              </h2>
              <p className="md:text-md">
                A fence fails in its own way. We bring the right tools and the
                right technique for the job.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Call" asChild><a href="tel:+14075550198">Call</a></Button>
                <Button
                  title="Quote"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Quote
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-8">
              <AnimatePresence>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        Post replacement
                      </h5>
                      <p>
                        Broken slats and rails are removed and replaced to match
                        the existing look.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/home-features-list-section-0.jpg"
                          alt="Fence project photo"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(0).opacity,
                        y: useSctoll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Post replacement
                      </h5>
                      <p className="md:text-md">
                        Broken slats and rails are removed and replaced to match
                        the existing look.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">Panel repair</h5>
                      <p>
                        Broken slats and rails are removed and replaced to match
                        the existing look.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/home-features-list-section-1.jpg"
                          alt="Fence project photo"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(1).opacity,
                        y: useSctoll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Panel repair
                      </h5>
                      <p className="md:text-md">
                        Broken slats and rails are removed and replaced to match
                        the existing look.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        Gate realignment
                      </h5>
                      <p>
                        New hinges, latches, and brackets installed to make the
                        fence solid and quiet.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/home-features-list-section-2.jpg"
                          alt="Fence project photo"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(2).opacity,
                        y: useSctoll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Gate realignment
                      </h5>
                      <p className="md:text-md">
                        New hinges, latches, and brackets installed to make the
                        fence solid and quiet.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={render.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">Hardware fixes</h5>
                      <p>
                        Broken slats and rails are removed and replaced to match
                        the existing look.
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/home-features-list-section-3.jpg"
                          alt="Fence project photo"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={render.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(3).opacity,
                        y: useSctoll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Hardware fixes
                      </h5>
                      <p className="md:text-md">
                        Broken slats and rails are removed and replaced to match
                        the existing look.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="h-screen overflow-hidden">
              <img
                src="/images/home-features-list-section-0.jpg"
                alt="Fence project photo"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="/images/home-features-list-section-1.jpg"
                alt="Fence project photo"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="/images/home-features-list-section-2.jpg"
                alt="Fence project photo"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="/images/home-features-list-section-3.jpg"
                alt="Fence project photo"
                className="size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
