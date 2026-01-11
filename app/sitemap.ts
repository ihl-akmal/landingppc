import { MetadataRoute } from 'next'
import { programsData } from '@/lib/program-data'
import { i18n } from '@/i18n-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://papuaparadisecenter.org'
  const locales = i18n.locales

  // 1. Generate sitemap untuk halaman statis (Home)
  const staticPages = locales.flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  ])

  // 2. Generate sitemap untuk halaman dinamis (Programs)
  const programPages = programsData.flatMap((program) =>
    locales.map((lang) => {
      // Perbaikan Error: Pastikan p.updatedAt di-parse dengan benar
      // Jika updatedAt tidak ada, gunakan waktu sekarang (Date.now())
      const dateValue = program.updatedAt ? new Date(program.updatedAt) : new Date();
      
      // Jika hasil parse menghasilkan "Invalid Date", gunakan waktu sekarang
      const finalDate = isNaN(dateValue.getTime()) ? new Date() : dateValue;

      return {
        url: `${baseUrl}/${lang}/program/${program.slug}`,
        lastModified: finalDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    })
  )

  return [...staticPages, ...programPages]
}