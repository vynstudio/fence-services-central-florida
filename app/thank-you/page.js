import Link from "next/link";

export const metadata = {
  title: "Thank you",
  description: "We received your message and will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-[5%] py-20 text-center">
      <p className="mb-3 font-semibold">Message sent</p>
      <h1 className="mb-5 max-w-lg text-5xl font-bold md:text-7xl">
        Thanks — we got it
      </h1>
      <p className="mb-8 max-w-md text-md">
        A real person will review your fence project and follow up shortly.
        Need to talk now? Call us.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="tel:+14075550198"
          className="inline-flex items-center justify-center rounded-button border border-transparent bg-background-alternative px-6 py-3 font-medium text-text-alternative"
        >
          Call (407) 555-0198
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-button border border-border-primary px-6 py-3 font-medium"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
