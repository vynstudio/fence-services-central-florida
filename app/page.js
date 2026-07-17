import { LandingPage } from "@/components/landing/landing-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getHomeJsonLd } from "@/lib/seo";
import { HOME_DESCRIPTION, HOME_TITLE, SITE } from "@/lib/site";

export const metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE.url,
    type: "website",
    // Share card: /opengraph-image (designed OG graphic)
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={getHomeJsonLd()} />
      <LandingPage />
    </>
  );
}
