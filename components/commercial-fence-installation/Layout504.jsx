"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout504() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Compliant</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Florida code is not optional
            </h1>
            <p className="md:text-md">
              We know the wind load maps for Jacksonville and the permit office
              in Tampa. Your fence will pass inspection the first time because
              we build to the letter of the Florida Building Code.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Codes" variant="secondary">
                Codes
              </Button>
              <Button
                title="Learn"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Wind loads
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Permitting
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Inspections
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="/images/home-hero-header-section.jpg"
                  className="w-full object-cover"
                  alt="Fence project photo"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Engineered</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Footings and post depths calculated for hurricane season
                </h2>
                <p>
                  We do not guess on embedment depth. Every post is set
                  according to site-specific wind load calculations, not a
                  one-size-fits-all chart.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Specs" variant="secondary">
                    Specs
                  </Button>
                  <Button
                    title="View"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="/images/home-about-section.jpg"
                  className="w-full object-cover"
                  alt="Fence project photo"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Engineered</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Footings and post depths calculated for hurricane season
                </h2>
                <p>
                  We do not guess on embedment depth. Every post is set
                  according to site-specific wind load calculations, not a
                  one-size-fits-all chart.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Specs" variant="secondary">
                    Specs
                  </Button>
                  <Button
                    title="View"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <img
                  src="/images/home-gallery-section-0.jpg"
                  className="w-full object-cover"
                  alt="Fence project photo"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Engineered</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Footings and post depths calculated for hurricane season
                </h2>
                <p>
                  We do not guess on embedment depth. Every post is set
                  according to site-specific wind load calculations, not a
                  one-size-fits-all chart.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Specs" variant="secondary">
                    Specs
                  </Button>
                  <Button
                    title="View"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
