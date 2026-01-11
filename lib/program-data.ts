import { GraduationCap, TreePine, Package } from "lucide-react"

// export interface Program {
//   id: string
//   title: string
//   slug: string
//   description?: string
// }

// export const programs: Program[] = [
//   {
//     id: "konseling",
//     title: "Konseling",
//     slug: "konseling",
//   },
//   {
//     id: "pendampingan",
//     title: "Pendampingan",
//     slug: "pendampingan",
//   },
//   // Tambahkan program lain sesuai kebutuhan
// ]

export type DetailedProgram = {
  id: string  
  slug: string
  title: string
  updatedAt?: string;
  icon: any
  heroImage: string
  backgroundImage: string
  activityImage: string
  galleryImages: {
    src: string
  }[]
}

export const programsData: DetailedProgram[] = [
    {
        id: "contextual-education",
        slug: "contextual-education",
        title: "Contextual Education",
        icon: GraduationCap,
        heroImage:"/galeri/galeri4.jpg",
        backgroundImage:"/galeri/galeri4.jpg",
        activityImage:"/galeri/galeri7.jpg",
        galleryImages: [
          { src: "/galeri/galeri8.jpg" },
          { src: "/galeri/galeri21.jpg" },
          { src: "/galeri/galeri1.jpg" },
        ],
  },
  {
        id: "grassroot-economy",
        slug: "grassroot-economy",
        title: "Grassroot Economy",
        icon: Package,
        heroImage:"/galeri/galeri25.jpg",
        backgroundImage:"/galeri/galeri2.jpg",
        activityImage:"/galeri/galeri5.jpg",
        galleryImages: [
          { src: "/galeri/galeri26.jpg" },
          { src: "/galeri/galeri5.jpg" },
          { src: "/galeri/galeri23.jpg" },
        ],
  },
  {
        id: "indigenous-forest-and-environment",
        slug: "indigenous-forest-and-environment",
        title: "Indigenous Forest and Environment",
        icon: TreePine,
        heroImage:"/galeri/galeri18.jpg",
        backgroundImage:"/galeri/galeri2.jpg",
        activityImage:"/galeri/galeri9.jpg",
        galleryImages: [
          { src: "/galeri/galeri19.jpg" },
          { src: "/galeri/galeri24.jpg" },
          { src: "/galeri/galeri20.jpg" },
        ],
  },
    
]
export function getProgramBySlug(slug: string): DetailedProgram | undefined {
  return programsData.find((p) => p.slug === slug)
}
