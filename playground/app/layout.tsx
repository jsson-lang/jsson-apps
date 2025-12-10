import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playground - JSSON — JavaScript Simplified Object Notation | Config Meta-Language",
  description:
    "Playground for JSSON - JavaScript Simplified Object Notation. Experiment with JSSON's powerful features for generating JSON, YAML, TOML, and TypeScript configurations using templates, ranges, maps, and streaming support.",
  keywords: [
    "JSSON playground",
    "JSSON",
    "JSSON language",
    "JSSON transpiler",
    "config generator",
    "multi-format transpiler",
    "YAML generator",
    "TOML generator",
    "TypeScript generator",
    "config meta-language",
    "data generation",
    "template syntax",
    "configuration tool",
    "JSSON syntax",
  ],
  verification: {
    google: "",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JSSON — The Config Meta-Language for Modern Development",
    description:
      "JSSON transpiler: Write once, generate JSON, YAML, TOML & TypeScript. Features templates, smart ranges, maps, and streaming for 100k+ items. 10x faster config writing.",
    url: "https://playground.jssonlang.tech",
    siteName: "JSSON Language",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSSON - JavaScript Simplified Object Notation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playground - JSSON — Config Meta-Language",
    description:
      "JSSON transpiler for JSON, YAML, TOML & TypeScript. Templates, ranges, maps & streaming.",
    creator: "@jssonlang",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://playground.jssonlang.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JSSON Playground",
    applicationCategory: "DeveloperApplication",
    description:
      "Playground for JSSON - JavaScript Simplified Object Notation. Experiment with JSSON's powerful features for generating JSON, YAML, TOML, and TypeScript configurations using templates, ranges, maps, and streaming support.",
    url: "https://playground.jssonlang.tech",
    operatingSystem: "Windows, macOS, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "JSSON Playground",
      url: "https://playground.jssonlang.tech",
    },
    softwareVersion: "0.0.5.2",
    releaseNotes: "https://docs.jssonlang.tech/changelog/",
    programmingLanguage: "Go",
    keywords:
      "JSSON, transpiler, config generator, YAML, TOML, TypeScript, templates",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider position="top-center">
          <AnchoredToastProvider>{children}</AnchoredToastProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
