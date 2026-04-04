import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://rishikolisetty-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Rishi Kolisetty — Entrepreneur, Builder, Engineer",
  description:
    "Entrepreneur and builder based in Bangalore. Building startups, AI tools, and trading systems. Explore my interactive macOS desktop portfolio.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Rishi Kolisetty — Entrepreneur, Builder, Engineer",
    description:
      "Entrepreneur and builder based in Bangalore. Building startups, AI tools, and trading systems.",
    type: "website",
    url: siteUrl,
    siteName: "Rishi Kolisetty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Kolisetty",
    description:
      "Entrepreneur and builder based in Bangalore. Interactive macOS desktop portfolio.",
    creator: "@rishikolisetty",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rishi Kolisetty",
              description:
                "Entrepreneur and builder based in Bangalore, India. Building startups, AI tools, and trading systems.",
              url: siteUrl,
              sameAs: [
                "https://github.com/rish-e",
                "https://linkedin.com/in/rishikolisetty",
                "https://twitter.com/rishikolisetty",
              ],
              jobTitle: "Founder & Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
