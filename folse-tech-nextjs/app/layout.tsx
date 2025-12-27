import type { Metadata } from "next";
import "./globals.css";
import SEOJsonLd from "./components/SEOJsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://folsetech.net"),
  title: "Folse Tech - AI Web Design & Development | Gonzales, Louisiana",
  description: "Professional AI-powered web design, development, and digital solutions in Gonzales, Louisiana. Enterprise security, performance optimization, and responsive development for businesses nationwide.",
  keywords: ["web design", "web development", "AI design", "Gonzales Louisiana", "responsive design", "SEO optimization", "enterprise security"],
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
    title: "Folse Tech - AI Web Design & Development",
    description: "Professional AI-powered web design and development services in Gonzales, Louisiana",
    siteName: "Folse Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Folse Tech - AI Web Design & Development",
    description: "Professional AI-powered web design and development services",
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
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href="https://folsetech.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <GoogleAnalytics />
        <SEOJsonLd />
        {children}
      </body>
    </html>
  );
}