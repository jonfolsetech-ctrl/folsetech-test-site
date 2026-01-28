import type { Metadata } from "next";
import "./globals.css";
import SEOJsonLd from "./components/SEOJsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://folsetech.net"),
  title: "Folsetech AI Solutions LLC - AI Web Design & SEO | Louisiana",
  description: "Folsetech AI Solutions LLC specializes in AI-powered web design and full SEO integration for Louisiana businesses. We build fast, responsive, search-optimized websites designed to rank on Google and generate real traffic. Serving Gonzales, Prairieville, Baton Rouge, New Orleans, LaPlace, and Denham Springs.",
  keywords: ["AI web design", "Louisiana web design", "local SEO Louisiana", "Gonzales LA", "Baton Rouge web design", "responsive design", "SEO optimization", "New Orleans web design"],
  authors: [{ name: "Folse Tech" }],
  creator: "Folse Tech",
  publisher: "Folse Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://folsetech.net",
    title: "Folsetech AI Solutions LLC - AI Web Design & SEO | Louisiana",
    description: "AI-powered web design and full SEO integration for Louisiana businesses. Fast, responsive, search-optimized websites that rank on Google.",
    siteName: "Folsetech AI Solutions LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Folsetech AI Solutions LLC - AI Web Design & SEO | Louisiana",
    description: "AI-powered web design and full SEO integration for Louisiana businesses. Contact jon@folsetech.net for AI web design and local SEO services.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://folsetech.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="bg-brand-navy text-slate-100 antialiased">
        <GoogleAnalytics />
        <SEOJsonLd />
        {children}
      </body>
    </html>
  );
}