import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | JSSON Language',
    default: 'JSSON | Universal Configuration Meta-format',
  },
  description:
    'JSSON is a universal configuration meta-format that allows you to write declarative logic once and transpile to JSON, YAML, TOML, or TypeScript.',
  keywords: [
    'JSSON',
    'JSSON Language',
    'Configuration Meta-format',
    'Universal Config',
    'JSON with variables',
    'Config transpiler',
    'Type-safe config',
  ],
  openGraph: {
    title: 'JSSON Language',
    description: 'Universal Configuration Meta-format. Write once, transpile anywhere.',
    url: 'https://docs.jssonlang.tech',
    siteName: 'JSSON Documentation',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSSON Language',
    description: 'Universal Configuration Meta-format. Write once, transpile anywhere.',
    images: ['/logo.png'],
  },
  verification: {
    google: '6qeyW-HDbBat5RyhEyy94NNXlTpn_gyBGuX9kCi8EBw',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
