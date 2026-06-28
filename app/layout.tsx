import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CallButton from "@/components/CallButton";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sree Sree Educational Society | Best School in Eluru, AP",
    template: "%s | Sree Sree Educational Society",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Sree Sree Educational Society",
    "Sree Sree School Eluru",
    "best school in Eluru",
    "schools in Eluru",
    "CBSE school Eluru",
    "primary school Eluru",
    "high school Eluru",
    "school admissions Eluru",
    "holistic education Andhra Pradesh",
    "Eluru school with yoga",
  ],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: "Sree Sree Educational Society | Best School in Eluru, AP",
    description: SITE.description,
    locale: SITE.locale,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Sree Sree Educational Society campus, Eluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Sree Educational Society | Best School in Eluru, AP",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  category: "education",
  // TODO: paste your Google Search Console verification code here once you
  // add the property (skip if you verify via DNS instead).
  // verification: { google: "your-google-site-verification-code" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // No maximumScale — pinch-to-zoom stays available for accessibility
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-primary antialiased">
        {/* Site-wide structured data: identifies the school as an entity to
            Google and AI answer engines, present on every page. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ScrollProgress />
        <AdmissionModal />
        <TopBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CallButton />
        <ScrollToTop />
      </body>
    </html>
  );
}