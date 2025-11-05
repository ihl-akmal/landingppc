import { MetadataRoute } from 'next'
import { programsData } from '@/lib/program-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://papuaparadisecenter.org'

  const programEntries = programsData.map((p) => ({
    url: `${baseUrl}/program/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...programEntries,
  ]
}
