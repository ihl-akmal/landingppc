import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'
import { GA_ID } from "@/lib/gtag"




// export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
//   const lang = params?.lang || "en"

//   const meta = {
//     en: {
//       description: "Papua Paradise Center is a nonprofit dedicated to empowering Papuan communities through education, grassroots economic initiatives, and sustainable development.",
//       ogLocale: "en_US",
//       keywords: ["Papua", "Non-profit organization", "Community empowerment", "Papua Paradise Center", "Sustainable development"]
//     },
//     id: {
//       description: "Papua Paradise Center adalah organisasi nirlaba yang berfokus memberdayakan masyarakat Papua melalui program pendidikan, ekonomi kerakyatan, dan pembangunan berkelanjutan.",
//       ogLocale: "id_ID",
//       keywords: ["Papua", "Organisasi Masyarakat Sipil", "Organisasi nirlaba", "Pemberdayaan masyarakat", "Papua Paradise Center"]
//     }
//   }

//   const current = meta[lang as keyof typeof meta] || meta.en

//   return {
//     metadataBase: new URL("https://papuaparadisecenter.org"),
//     title: 'Papua Paradise Center',
//     description: current.description,
//     keywords: current.keywords,
//     openGraph: {
//       title: "Papua Paradise Center",
//       description: current.description,
//       url: "https://papuaparadisecenter.org",
//       siteName: "Papua Paradise Center",
//       locale: current.ogLocale,
//       type: "website",
//       images: [
//         {
//           url: "https://papuaparadisecenter.org/galeri/galeri21.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Papua Paradise Center",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Papua Paradise Center",
//       description: current.description,
//       images: ["https://papuaparadisecenter.org/galeri/galeri21.jpg"],
//     },
//     alternates: {
//       canonical: "./",
//     },
//     icons: {
//       icon: [
//         { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//         { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//       ],
//       apple: '/favicon/apple-touch-icon.png',
//     },
//     manifest: '/favicon/site.webmanifest',
//   }
// }

export default function RootLayout({
  
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>)
{
  const locale = params?.lang || "en"
  
   return (
    <html lang={locale === "id" ? "id" : "en"}>
      <head>
       
        <Script async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
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
        <meta name="google-site-verification" content="9FFL4xvCHLB8UkHjA0BZ3IuDXI_ljraZ1DoffoeKqUQ" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
