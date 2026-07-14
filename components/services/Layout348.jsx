"use client";

import { Button } from "@relume_io/relume-ui";
import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useSectionScroll = () => {
  const [activeSection, setActiveSection] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const getOverlayClassNames = () => {
    return clsx(
      "fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300",
      {
        "opacity-100": activeSection === 0 || activeSection === 2,
        "opacity-0": activeSection !== 0 && activeSection !== 2,
      },
    );
  };
  const getImageClassNames = (index) => {
    return clsx("absolute w-full", {
      "opacity-100": activeSection === index,
      "opacity-0": activeSection !== index,
    });
  };
  return {
    getOverlayClassNames,
    getImageClassNames,
  };
};

export function Layout348() {
  const scroll = useSectionScroll();
  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            <img
              src="/images/home-features-list-section-0.jpg"
              className={scroll.getImageClassNames(0)}
              alt="Fence project photo"
            />
            <img
              src="/images/home-features-list-section-1.jpg"
              className={scroll.getImageClassNames(1)}
              alt="Fence project photo"
            />
            <img
              src="/images/home-features-list-section-2.jpg"
              className={scroll.getImageClassNames(2)}
              alt="Fence project photo"
            />
            <img
              src="/images/home-features-list-section-3.jpg"
              className={scroll.getImageClassNames(3)}
              alt="Fence project photo"
            />
          </div>
          <div className="grid grid-cols-1 gap-12 md:block">
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Install</p>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  A new fence starts with a straight line
                </h2>
                <p className="md:text-md">
                  We stake the property line, pull permits, and handle the dig.
                  You choose the material and we do the rest.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
                  </Button>
                  <Button
                    title="Install"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Install
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/home-features-list-section-0.jpg"
                    className="w-full"
                    alt="Fence project photo"
                  />
                </div>
                <div className={scroll.getOverlayClassNames()} />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Install</p>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  A new fence starts with a straight line
                </h2>
                <p className="md:text-md">
                  We stake the property line, pull permits, and handle the dig.
                  You choose the material and we do the rest.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
                  </Button>
                  <Button
                    title="Install"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Install
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/home-features-list-section-1.jpg"
                    className="w-full"
                    alt="Fence project photo"
                  />
                </div>
                <div className={scroll.getOverlayClassNames()} />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Install</p>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  A new fence starts with a straight line
                </h2>
                <p className="md:text-md">
                  We stake the property line, pull permits, and handle the dig.
                  You choose the material and we do the rest.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
                  </Button>
                  <Button
                    title="Install"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Install
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/home-features-list-section-2.jpg"
                    className="w-full"
                    alt="Fence project photo"
                  />
                </div>
                <div className={scroll.getOverlayClassNames()} />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Install</p>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  A new fence starts with a straight line
                </h2>
                <p className="md:text-md">
                  We stake the property line, pull permits, and handle the dig.
                  You choose the material and we do the rest.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
                  </Button>
                  <Button
                    title="Install"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Install
                  </Button>
                </div>
                <div className="mt-10 block w-full md:hidden">
                  <img
                    src="/images/home-features-list-section-2.jpg"
                    className="w-full"
                    alt="Fence project photo"
                  />
                </div>
                <div className={scroll.getOverlayClassNames()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
