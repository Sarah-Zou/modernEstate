import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'The Modern Estate - Research, financing, and tech for modern homes in New Jersey and New York',
    template: '%s | The Modern Estate'
  },
  description: 'Expert insights on modern & mid-century residential design, New Jersey and New York real estate practice, financing strategies, and cutting-edge technology for housing and real estate professionals.',
  keywords: ['real estate', 'New Jersey', 'New York', 'modern homes', 'mid-century design', 'real estate financing', 'property technology', 'housing research'],
  authors: [{ name: 'The Modern Estate' }],
  creator: 'The Modern Estate',
  publisher: 'The Modern Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://themodernestate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://themodernestate.com',
    title: 'The Modern Estate - Research, financing, and tech for modern homes in New Jersey and New York',
    description: 'Expert insights on modern & mid-century residential design, New Jersey and New York real estate practice, financing strategies, and cutting-edge technology for housing and real estate professionals.',
    siteName: 'The Modern Estate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Modern Estate - Research, financing, and tech for modern homes in New Jersey and New York',
    description: 'Expert insights on modern & mid-century residential design, New Jersey and New York real estate practice, financing strategies, and cutting-edge technology for housing and real estate professionals.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

