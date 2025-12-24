import type { Metadata } from "next";
import "./globals.css";
import SEOJsonLd from "./components/SEOJsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Folse Tech - AI Web Design | Gonzales, Louisiana",
  description: "Professional web design and development services powered by AI. Located in Gonzales, Louisiana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <GoogleAnalytics />
        <SEOJsonLd />
        {children}
      </body>
    </html>
  );
}