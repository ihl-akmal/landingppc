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
  icon: any
  title: string
  category: string
  shortDescription: string
  heroDescription: string
  heroImage: string
  backgroundTitle: string
  backgroundContent: string
  backgroundImage: string
  activityTitle: string
  activityDescription: string
  activityImage: string
  benefits: {
    title: string
    description: string
  }[]
  galleryImages: {
    src: string
    alt: string
  }[]
}

export const programsData: DetailedProgram[] = [
    {
        id: "pendidikan-kontekstual",
        slug: "pendidikan-kontekstual",
        icon: GraduationCap,
        title: "Pendidikan Kontekstual",
        category: "Program",
        heroImage:"/galeri/galeri4.jpg",
        backgroundImage:"/galeri/galeri4.jpg",
        shortDescription:
        "Anak-anak belajar sambil bermain di Sekolah Alam Paradise, mengasah karakter, bahasa, serta keterampilan sesuai minat dan hobi. Setiap proses belajar dirancang kontekstual, menyenangkan, dan dekat dengan kehidupan sehari-hari.",
        heroDescription: "Memberdayakan generasi papua melalui pembelajaran yang menyenangkan.",
        backgroundTitle: "Setiap Anak Papua Bisa Bersinar",
        backgroundContent:
        "Anak-anak belajar sambil bermain di Sekolah Alam Paradise, mengasah karakter, bahasa, serta keterampilan sesuai minat dan hobi. Setiap proses belajar dirancang kontekstual, menyenangkan, dan dekat dengan kehidupan sehari-hari.",
        activityTitle : "Kegiatan Program",
        activityDescription : "Kegiatan belajar mengajar di Sekolah Alam Paradise (SAP) di Merauke, Sekolah Alam Paradise Ambonggo (SAPA) di Boven Digoel, PKBM Paradise. Kami belajar tentang karakter, bahasa inggris, bahasa daerah, matematika, merajut, sepak bola, mengasah skill anak2 sesuai dengan hobi mereka. Setiap proses belajar dirancang kontekstual, menyenangkan, dan dekat dengan kehidupan sehari-hari.",
        activityImage:"/galeri/galeri7.jpg",
        benefits: [
        {
            title: "Tumbuh Percaya Diri dalam Berbahasa",
            description: "Melalui pembelajaran bahasa Inggris dan bahasa daerah, mereka berani mengekspresikan diri dan menghargai keberagaman budaya di sekitar.",
        },
        {
            title: "Belajar yang Relevan dengan Kehidupan",
            description: "Anak-anak memahami pelajaran dari hal-hal yang mereka temui setiap hari membuat belajar terasa dekat, nyata, dan bermakna.",
        },
        {
            title: "Mengasah Bakat & Kreativitas",
            description: "Setiap anak diberi ruang untuk menyalurkan minatnya dari merajut, olahraga, hingga seni agar tumbuh rasa bangga dan tanggung jawab atas potensinya.",
        },
        {
            title: "Belajar Nilai Hidup & Karakter",
            description: "Proses belajar tidak hanya tentang pengetahuan, tapi juga pembentukan sikap, empati, dan kerjasama sebagai bekal menghadapi masa depan.",
        },
        ],
        galleryImages: [
        { src: "/galeri/galeri8.jpg", alt: "Kegiatan belajar mengajar" },
        { src: "/galeri/galeri21.jpg", alt: "kegiatan belajar mengajar" },
        { src: "/galeri/galeri1.jpg", alt: "kegiatan bermain" },
        
        ],
  },
  {
        id: "ekonomi-kerakyatan",
        slug: "ekonomi-kerakyatan",
        icon: Package,
        title: "Ekonomi Kerakyatan",
        category: "Program",
        heroImage:"/galeri/galeri25.jpg",
        backgroundImage:"/galeri/galeri2.jpg",
        shortDescription:
        "Mendampingi komunitas lokal mengembangkan produk kreatif berbasis budaya dan warisan leluhur, mulai dari noken hingga VCO dan keripik. Dengan dukungan kami, usaha mereka bisa bertumbuh sambil menjaga identitas dan kearifan lokal.",
        heroDescription: "Memberdayakan komunitas lokal papua untuk produktif",
        backgroundTitle: "Memajukan Ekonomi Papua untuk Kehidupan Lebih Baik",
        backgroundContent:
        "Mendampingi komunitas lokal mengembangkan produk kreatif berbasis budaya dan warisan leluhur, mulai dari noken hingga VCO dan keripik. Dengan dukungan kami, usaha mereka bisa bertumbuh sambil menjaga identitas dan kearifan lokal.",
        activityTitle : "Kegiatan Program",
        activityDescription : "Kami mendampingi kelompok masyarakat yang menggerakkan ekonomi lokal berbasis budaya. Kelompok Yekinto di Kampung Yanggandur membuat atribut budaya untuk menjaga warisan leluhur. Kelompok Yu Mbu Tar Ta di Kampung Onggaya memproduksi VCO, terasi, abon, keripik, dan hiasan adat sebagai wujud kewirausahaan berbasis tradisi. Kelompok Katin Sai di Gudang Arang, Merauke, beranggotakan ibu-ibu perajin noken yang menguatkan ekonomi keluarga melalui karya dan ketekunan.",
        activityImage:"/galeri/galeri5.jpg",
        benefits: [
        {
            title: "Kemandirian Ekonomi Berbasis Lokal",
            description: "Masyarakat belajar mengelola potensi alam dan budaya di sekitarnya untuk menciptakan sumber penghasilan yang berkelanjutan.",
        },
        {
            title: "Pelestarian Warisan & Budaya",
            description: "Melalui produk seperti noken dan atribut adat, tradisi turun-temurun tetap hidup dan diwariskan kepada generasi muda.",
        },
        {
            title: "Kolaborasi dan Solidaritas Komunitas",
            description: "Setiap kelompok tumbuh melalui kerja sama, saling dukung, dan berbagi pengetahuan antaranggota komunitas.",
        },
        
        ],
        galleryImages: [
        { src: "/galeri/galeri26.jpg", alt: "ekonomi-kerakyatan ppc" },
        { src: "/galeri/galeri5.jpg", alt: "ekonomi-kerakyatan ppc" },
        { src: "/galeri/galeri23.jpg", alt: "ekonomi-kerakyatan ppc" },
        
        ],
  },
  {
        id: "hutan-adat-lingkungan",
        slug: "hutan-adat-lingukungan",
        icon: TreePine,
        title: "Hutan Adat dan Linkungan",
        category: "Program",
        heroImage:"/galeri/galeri18.jpg",
        backgroundImage:"/galeri/galeri2.jpg",
        shortDescription:
        "Bersama masyarakat adat memetakan wilayah hutan, menjaga ekosistem, dan mengubah sampah plastik menjadi EcoBrick untuk furnitur, menanam mangrove, serta bersih-bersih lingkungan guna menjaga lingkungan tetap lestari.",
        heroDescription: "Mendukung masyarakat adat menjaga hutan dan menghidupkan lingkungannya.",
        backgroundTitle: "Menjaga Alam, Menjaga Rumah Kita di Tanah Papua",
        backgroundContent:
        "Bersama masyarakat adat memetakan wilayah hutan, menjaga ekosistem, dan mengubah sampah plastik menjadi EcoBrick untuk furnitur, menanam mangrove, serta bersih-bersih lingkungan guna menjaga lingkungan tetap lestari",
        activityTitle : "Kegiatan Program",
        activityDescription : "Kami membantu masyarakat adat menjaga hutan adat mereka dengan melakukan pemetaan wilayah adat di dua suku, yaitu Suku Kanum dan Suku Marori, untuk menjaga lingkungan kami juga mengolah sampah plastik berupa botol menjadi EcoBrick (Bata Plastik) sementara dikumpulkan untuk di olah menjadi kursi, meja dll. Kami juga sering melakukan aksi pembersihan sampah dan melakukan penanaman pohon mangrove di lahan-lahan kritis yang bisa mengakibatkan banjir di sekitar Gudang Arang, Merauke, Papua Selatan.",
        activityImage:"/galeri/galeri9.jpg",
        benefits: [
        {
            title: "Hutan Adat Terlindungi",
            description: "Masyarakat adat semakin memahami batas dan nilai wilayahnya melalui pemetaan hutan, sehingga mampu menjaga dan mengelola sumber daya alam secara berkelanjutan.",
        },
        {
            title: "Lingkungan Lebih Bersih & Sehat",
            description: "Melalui kegiatan daur ulang botol plastik menjadi EcoBrick, serta aksi bersih kampung dan penanaman mangrove, lingkungan sekitar menjadi lebih tertata dan bebas dari sampah.",
        },
        {
            title: "Tumbuhnya Kesadaran Ekologis",
            description: "Masyarakat mulai melihat bahwa menjaga hutan dan lingkungan bukan hanya kewajiban, tapi juga investasi untuk masa depan kehidupan mereka sendiri.",
        },
        
        ],
        galleryImages: [
        { src: "/galeri/galeri19.jpg", alt: "hutan adat ppc" },
        { src: "/galeri/galeri24.jpg", alt: "hutan adat ppc" },
        { src: "/galeri/galeri20.jpg", alt: "hutan adat ppc" },
        
        ],
  },
    
]
export function getProgramBySlug(slug: string): DetailedProgram | undefined {
  return programsData.find((p) => p.slug === slug)
}
