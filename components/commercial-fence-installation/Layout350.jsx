"use client";

import { Button, Tabs, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const ObservedSection = ({ section, index, onIntersect, children }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect?.(index);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onIntersect]);
  return (
    <div id={section.id} ref={sectionRef}>
      {children}
    </div>
  );
};

const useRelume = ({ sections = [] } = {}) => {
  const getInitialActiveSection = (list) => {
    if (!list.length) return "";
    if (typeof window === "undefined") return list[0].id;
    const hash = window.location.hash.slice(1);
    const matchingSection = list.find((section) => section.id === hash);
    return matchingSection?.id ?? list[0].id;
  };
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const [activeSection, setActiveSection] = useState(() =>
    getInitialActiveSection(sections),
  );
  const scrollToSection = useCallback((sectionId) => {
    scrollToElement(sectionId);
    setActiveSection(sectionId);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${sectionId}`);
    }
  }, []);
  const handleIntersection = useCallback(
    (index) => {
      if (sections[index]) setActiveSection(sections[index].id);
    },
    [sections],
  );
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sections.some((section) => section.id === hash)) {
        scrollToSection(hash);
      }
    };
    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToSection, sections]);
  const currentSection =
    sections.find((section) => section.id === activeSection) ?? sections[0];
  return {
    activeSection,
    currentSection,
    scrollToSection,
    handleIntersection,
  };
};

export function Layout350() {
  const useScroll = useRelume({
    sections: [
      {
        id: "Content-Block-1",
        anchorTrigger: "Tab One",
        image: {
          src: "/images/home-features-list-section-0.jpg",
          alt: "Relume placeholder image 1",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        id: "Content-Block-2",
        anchorTrigger: "Tab Two",
        image: {
          src: "/images/home-features-list-section-1.jpg",
          alt: "Relume placeholder image 2",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        id: "Content-Block-3",
        anchorTrigger: "Tab Three",
        image: {
          src: "/images/home-features-list-section-2.jpg",
          alt: "Relume placeholder image 3",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        id: "Content-Block-4",
        anchorTrigger: "Tab Four",
        image: {
          src: "/images/home-features-list-section-3.jpg",
          alt: "Relume placeholder image 4",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-20">
          <div className="grid items-start gap-12 md:flex md:flex-col md:gap-0">
            <Tabs
              value={useScroll.activeSection}
              onValueChange={useScroll.scrollToSection}
              className="sticky top-24 z-10 hidden md:block"
            >
              <TabsList className="flex w-full gap-x-1 border border-border-primary bg-background-primary p-1">
                <TabsTrigger
                  value="Content-Block-1"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Survey
                </TabsTrigger>
                <TabsTrigger
                  value="Content-Block-2"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  value="Content-Block-3"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Permit
                </TabsTrigger>
                <TabsTrigger
                  value="Content-Block-4"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Build
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <ObservedSection
              section={{
                id: "Content-Block-1",
                anchorTrigger: "Survey",
                image: {
                  src: "/images/home-features-list-section-0.jpg",
                  alt: "Relume placeholder image 1",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={0}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="brand-eyebrow">Process</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  We start by walking the line
                </h2>
                <p className="md:text-md">
                  A project manager surveys your site to measure grade changes,
                  locate utilities, and mark easements. You get a fixed-price
                  proposal, not an estimate.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Assess" asChild><a href="/contact-us">Get assessment</a></Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="/images/home-features-list-section-0.jpg"
                    alt="Fence project photo"
                  />
                </div>
              </div>
            </ObservedSection>
            <ObservedSection
              section={{
                id: "Content-Block-2",
                anchorTrigger: "Design",
                image: {
                  src: "/images/home-features-list-section-1.jpg",
                  alt: "Relume placeholder image 2",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={1}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="brand-eyebrow">Process</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  We start by walking the line
                </h2>
                <p className="md:text-md">
                  A project manager surveys your site to measure grade changes,
                  locate utilities, and mark easements. You get a fixed-price
                  proposal, not an estimate.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Assess" asChild><a href="/contact-us">Get assessment</a></Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="/images/home-features-list-section-1.jpg"
                    alt="Fence project photo"
                  />
                </div>
              </div>
            </ObservedSection>
            <ObservedSection
              section={{
                id: "Content-Block-3",
                anchorTrigger: "Permit",
                image: {
                  src: "/images/home-features-list-section-2.jpg",
                  alt: "Relume placeholder image 3",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={2}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="brand-eyebrow">Process</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  We start by walking the line
                </h2>
                <p className="md:text-md">
                  A project manager surveys your site to measure grade changes,
                  locate utilities, and mark easements. You get a fixed-price
                  proposal, not an estimate.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Assess" asChild><a href="/contact-us">Get assessment</a></Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="/images/home-features-list-section-2.jpg"
                    alt="Fence project photo"
                  />
                </div>
              </div>
            </ObservedSection>
            <ObservedSection
              section={{
                id: "Content-Block-4",
                anchorTrigger: "Build",
                image: {
                  src: "/images/home-features-list-section-3.jpg",
                  alt: "Relume placeholder image 4",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Built for Florida weather—solid posts, clean lines, and work that stands up to storms and salt air.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={3}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="brand-eyebrow">Process</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  We start by walking the line
                </h2>
                <p className="md:text-md">
                  A project manager surveys your site to measure grade changes,
                  locate utilities, and mark easements. You get a fixed-price
                  proposal, not an estimate.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Assess" asChild><a href="/contact-us">Get assessment</a></Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="/images/home-features-list-section-3.jpg"
                    alt="Fence project photo"
                  />
                </div>
              </div>
            </ObservedSection>
          </div>
          <div className="sticky top-0 hidden h-screen flex-col items-center justify-center md:flex">
            <img
              src={useScroll.currentSection.image.src}
              alt={useScroll.currentSection.image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
