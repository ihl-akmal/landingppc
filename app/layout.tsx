import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'
import { GA_ID } from "@/lib/gtag"

export const metadata: Metadata = {
  title: 'Papua Paradise Center',
  description: 'Papua Paradise Center adalah organisasi nirlaba yang berfokus memberdayakan masyarakat Papua melalui program pendidikan, ekonomi kerakyatan, dan pembangunan berkelanjutan.',
  keywords: [
    "Papua",
    "Organisasi Masyarakat Sipil",
    "Organisasi nirlaba",
    "Pemberdayaan masyarakat",
    "Papua Paradise Center",
  ],
  openGraph: {
    title: "Papua Paradise Center",
    description:
      "Papua Paradise Center adalah organisasi nirlaba yang berfokus memberdayakan masyarakat Papua melalui program pendidikan, ekonomi kerakyatan, dan pembangunan berkelanjutan.",
    url: "https://papuaparadisecenter.org",
    siteName: "Papua Paradise Center",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://papuaparadisecenter.org/galeri/galeri21.jpg",
        width: 1200,
        height: 630,
        alt: "Papua Paradise Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Papua Paradise Center",
    description:
      "Membangun masa depan Papua lewat pendidikan dan pemberdayaan masyarakat.",
    images: ["https://papuaparadisecenter.org/galeri/galeri21.jpg"],
  },
  alternates: {
    canonical: "https://papuaparadisecenter.org",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
   return (
    <html lang="en">
      <head>
       
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });                
              `}
        </Script>

        <Script id="schema-markup" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Papua Paradise Center",
            "url": "https://papuaparadisecenter.org",
            "logo": "https://papuaparadisecenter.org/logo.png"
          })}
        </Script>
        <meta name="google-site-verification" content="PIiSyBSZikwO9mDXqLz8V0Z0PTzYv2UUmDReMhfR8Ps" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}