import type { Metadata } from "next";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Sree Sree Educational Society",
  description: "Empowering excellence through education since 1987",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-primary antialiased">
        <AdmissionModal />
        <TopBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}