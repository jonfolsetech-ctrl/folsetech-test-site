import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Folse Tech - AI Web Design | Gonzales, Louisiana",
  description: "Professional web design and development services powered by AI. Located in Gonzales, Louisiana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}