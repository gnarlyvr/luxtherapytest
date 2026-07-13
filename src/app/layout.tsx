import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { practiceInfo } from "@/data/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.newaviv.com"),
  title: {
    default: "New Aviv | Hope, Care, and Healing",
    template: "%s | New Aviv",
  },
  description:
    "New Aviv offers compassionate counseling for young adults, couples, and families—primarily virtual, with in-person appointments available at our Somerville, Massachusetts office.",
  openGraph: {
    title: "New Aviv",
    description: practiceInfo.quote,
    type: "website",
    locale: "en_US",
    url: "https://www.newaviv.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="site-atmosphere flex min-h-full flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-lux-moss-deep focus:shadow"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
