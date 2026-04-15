import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GNNIS AI | Best AI Tools Directory & Free AI Web Services',
  description:
    'Explore the best AI tools directory with GNNIS AI. Access free AI web services for creative drawing, super Q&A, and 3D character generation. Boost your workflow today.',
  keywords: [
    'Best AI Tools Directory',
    'Free AI Web Services',
    'GNNIS AI',
    'AI tools',
    'AI drawing',
    'AI Q&A',
    '3D AI Character',
  ],
  openGraph: {
    title: 'GNNIS AI | Best AI Tools Directory & Free AI Web Services',
    description:
      'Explore the best AI tools directory with GNNIS AI. Access free AI web services for creative drawing, super Q&A, and 3D character generation.',
    url: 'https://ai.gnnis.com',
    siteName: 'GNNIS AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GNNIS AI | Best AI Tools Directory',
    description: 'The ultimate AI tools directory for creators. Discover free AI web services today.',
  },
  themeColor: '#14b8a6',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GNNIS AI',
  url: 'https://ai.gnnis.com',
  description: 'Best AI Tools Directory & Free AI Web Services. Explore tools for drawing, Q&A, and 3D characters.',
  potentialAction: {
    '@type': 'SearchAction',
    'target': 'https://ai.gnnis.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

import { LanguageProvider } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // dark class 保持默认深色模式（与原版一致）
    <html lang="zh" className="dark">
      <body
        className={`
          ${roboto.variable}
          font-sans
          bg-black text-white
          antialiased
          pt-20
          flex flex-col min-h-screen
        `}
      >
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
