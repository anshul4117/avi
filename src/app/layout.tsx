import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aviral-verma.vercel.app'),
  title: 'Aviral Verma - Network Engineer & Aspiring Data Scientist Portfolio',
  description:
    'Professional portfolio of Aviral Verma, a Network Engineer and Aspiring Data Scientist with expertise in AWS, CCNA networking, Python, and data analysis.',
  keywords: [
    'network engineer portfolio',
    'aspiring data scientist portfolio', 
    'network engineer',
    'data scientist',
    'aviral verma',
    'aviral verma portfolio',
    'portfolio website',
    'aws networking',
    'ccna engineer',
    'cisco routing switching',
    'python programming',
    'data science fundamentals',
    'cloud infrastructure',
    'terraform',
    'machine learning'
  ],
  authors: [{ name: 'Aviral Verma' }],
  creator: 'Aviral Verma',
  publisher: 'Aviral Verma',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aviral-verma.vercel.app',
    title: 'Aviral Verma - Network Engineer & Aspiring Data Scientist Portfolio',
    description: 'Professional portfolio of Aviral Verma, a Network Engineer and Aspiring Data Scientist with expertise in AWS, CCNA networking, Python, and data analysis.',
    siteName: 'Aviral Verma Portfolio',
    images: [
      {
        url: '/profile-pic.svg',
        width: 1200,
        height: 630,
        alt: 'Aviral Verma - Network Engineer & Aspiring Data Scientist',
      },
    ],
  },
  alternates: {
    canonical: 'https://aviral-verma.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aviral Verma',
    jobTitle: 'Network Engineer & Aspiring Data Scientist',
    description: 'Aspiring Network Engineer with hands-on experience in networking, routing, switching, and cloud computing, with a long-term goal in Data Science.',
    url: 'https://aviral-verma.vercel.app',
    image: 'https://aviral-verma.vercel.app/profile-pic.svg',
    sameAs: [
      'https://github.com/aviral-verma',
      'https://www.linkedin.com/in/aviral-verma-bb34723a1/',
    ],
    knowsAbout: [
      'Network Engineering',
      'Data Science', 
      'AWS',
      'CCNA',
      'Routing & Switching',
      'Python',
      'Cloud Computing',
      'Data Analysis',
      'Machine Learning'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'KR Network Cloud'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://aviral-verma.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <Navbar />
            <main role="main">
              {children}
            </main>
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
