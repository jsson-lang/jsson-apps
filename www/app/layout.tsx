import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AnchoredToastProvider, ToastProvider } from '@/components/ui/toast';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'JSSON — JavaScript Simplified Object Notation | Config Meta-Language',
  description:
    'JSSON is a powerful meta-language and transpiler that generates JSON, YAML, TOML, and TypeScript. Features presets, auto-generated data, templates, and full LSP support.',
  keywords: [
    'JSSON',
    'JSSON language',
    'JSSON transpiler',
    'config generator',
    'multi-format transpiler',
    'YAML generator',
    'TOML generator',
    'TypeScript generator',
    'config meta-language',
    'data generation',
    'template syntax',
    'configuration tool',
    'JSSON syntax',
    'Presets',
    'Validators',
    'LSP',
  ],
  verification: {
    google: '6qeyW-HDbBat5RyhEyy94NNXlTpn_gyBGuX9kCi8EBw',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'JSSON — The Config Meta-Language for Modern Development',
    description:
      'JSSON transpiler: Write once, generate JSON, YAML, TOML & TypeScript. Features presets, auto-generated data, templates, and full LSP support.',
    url: 'https://jssonlang.tech',
    siteName: 'JSSON Language',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JSSON - JavaScript Simplified Object Notation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSSON — Config Meta-Language',
    description:
      'JSSON transpiler for JSON, YAML, TOML & TypeScript. Presets, validators, templates & LSP.',
    creator: '@jssonlang',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'JSSON',
    applicationCategory: 'DeveloperApplication',
    description:
      'JSSON - JavaScript Simplified Object Notation. A powerful meta-language and transpiler for generating JSON, YAML, TOML, and TypeScript with presets, auto-validators, and LSP support.',
    url: 'https://jssonlang.tech',
    operatingSystem: 'Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'JSSON',
      url: 'https://jssonlang.tech',
    },
    softwareVersion: '0.0.6',
    releaseNotes: 'https://docs.jssonlang.tech/changelog/',
    programmingLanguage: 'Go',
    keywords: 'JSSON, transpiler, config generator, YAML, TOML, TypeScript, templates',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ToastProvider position="top-center">
          <AnchoredToastProvider>{children}</AnchoredToastProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
