import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Repair & Installation`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "fence installation",
    "fence repair",
    "Central Florida fence company",
    "Orlando fence",
    "Jacksonville fence",
    "Tampa fence",
    "wood fence",
    "vinyl fence",
    "aluminum fence",
    "chain link fence",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
