import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { SITE } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Thank you",
  description: "We received your quote request.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="site-header px-5 py-4 md:px-8">
        <div className="mx-auto max-w-[1120px]">
          <BrandLogo variant="dark" />
        </div>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <p className="brand-eyebrow">Message sent</p>
        <h1 className="mb-4 max-w-lg text-3xl font-bold md:text-5xl">
          Thanks — we got it
        </h1>
        <p className="mb-8 max-w-md text-text-secondary md:text-md">
          A real person will review your fence project and follow up shortly.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href={SITE.phoneHref}>Call {SITE.phone}</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
