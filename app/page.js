import { LandingPage } from "@/components/landing/landing-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getHomeJsonLd } from "@/lib/seo";
import {
  HOME_DESCRIPTION,
  HOME_OG_DESCRIPTION,
  HOME_TITLE,
  SITE,
} from "@/lib/site";

export const metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE.url}/`,
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/`,
    title: HOME_TITLE,
    description: HOME_OG_DESCRIPTION,
    siteName: SITE.webName,
    // Share card: app/opengraph-image (1200×630); brief also lists logo-dark.png
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_OG_DESCRIPTION,
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
