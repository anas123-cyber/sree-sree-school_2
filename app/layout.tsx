import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  title: "Sree Sree Educational Society",
  description: "Empowering excellence through education since 1987",
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