import { GraduationCap, HeartPulse, Briefcase, Leaf } from "lucide-react"

export type Program = {
  slug: string
  icon: any
  title: string
  shortDescription: string
  heroDescription: string
  backgroundTitle: string
  backgroundContent: string
  benefits: {
    title: string
    description: string
  }[]
  galleryImages: {
    src: string
    alt: string
  }[]
}

export const programsData: Program[] = [
    {
        slug: "pendidikan-kontekstual",
        icon: GraduationCap,
        title: "Pendidikan Kontekstual",
        shortDescription:
        "Anak-anak belajar sambil bermain di Sekolah Alam Paradise, mengasah karakter, bahasa, serta keterampilan sesuai minat dan hobi. Setiap proses belajar dirancang kontekstual, menyenangkan, dan dekat dengan kehidupan sehari-hari.",
        heroDescription: "Memberdayakan generasi melalui akses pendidikan berkualitas",
        backgroundTitle: "Latar Belakang Program Pendidikan",
        backgroundContent:
        "Program Pendidikan Harapan Bersama dimulai dari observasi mendalam terhadap kesenjangan akses pendidikan di daerah terpencil Indonesia. Kami melihat ribuan anak berbakat tidak bisa melanjutkan pendidikan karena keterbatasan ekonomi dan infrastruktur. Melalui program ini, kami menyediakan beasiswa penuh, membangun perpustakaan komunitas, dan melatih guru lokal dengan metode pembelajaran modern. Setiap anak berhak mendapatkan pendidikan berkualitas tanpa memandang latar belakang ekonomi mereka.",
        benefits: [
        {
            title: "Beasiswa Penuh",
            description: "Kami menyediakan beasiswa lengkap untuk siswa berprestasi dari keluarga kurang mampu.",
        },
        {
            title: "Perpustakaan Komunitas",
            description: "Membangun akses buku dan literasi digital di setiap desa yang kami layani.",
        },
        {
            title: "Pelatihan Guru",
            description: "Meningkatkan kompetensi guru dengan metode pembelajaran inovatif dan berbasis teknologi.",
        },
        {
            title: "Mentoring & Bimbingan",
            description: "Program pembimbingan intensif untuk persiapan ujian dan pengembangan potensi siswa.",
        },
        ],
        galleryImages: [
        { src: "/galeri/galeri4.jpg", alt: "Kegiatan belajar mengajar" },
        { src: "/students-reading-books-in-library.jpg", alt: "Perpustakaan komunitas" },
        { src: "/indonesian-children-studying-in-classroom-educatio.jpg", alt: "Siswa belajar" },
        { src: "/indonesian-children-smiling-in-classroom-education.jpg", alt: "Anak-anak bersemangat" },
        ],
  },
  {
        slug: "ekonomi-kerakyatan",
        icon: GraduationCap,
        title: "Ekonomi Keraykatan",
        shortDescription:
        "Mendampingi komunitas lokal mengembangkan produk kreatif berbasis budaya dan warisan leluhur, mulai dari noken hingga VCO dan keripik. Dengan dukungan kami, usaha mereka bisa bertumbuh sambil menjaga identitas dan kearifan lokal",
        heroDescription: "Memberdayakan generasi melalui akses pendidikan berkualitas",
        backgroundTitle: "Latar Belakang Program Pendidikan",
        backgroundContent:
        "Program Pendidikan Harapan Bersama dimulai dari observasi mendalam terhadap kesenjangan akses pendidikan di daerah terpencil Indonesia. Kami melihat ribuan anak berbakat tidak bisa melanjutkan pendidikan karena keterbatasan ekonomi dan infrastruktur. Melalui program ini, kami menyediakan beasiswa penuh, membangun perpustakaan komunitas, dan melatih guru lokal dengan metode pembelajaran modern. Setiap anak berhak mendapatkan pendidikan berkualitas tanpa memandang latar belakang ekonomi mereka.",
        benefits: [
        {
            title: "Beasiswa Penuh",
            description: "Kami menyediakan beasiswa lengkap untuk siswa berprestasi dari keluarga kurang mampu.",
        },
        {
            title: "Perpustakaan Komunitas",
            description: "Membangun akses buku dan literasi digital di setiap desa yang kami layani.",
        },
        {
            title: "Pelatihan Guru",
            description: "Meningkatkan kompetensi guru dengan metode pembelajaran inovatif dan berbasis teknologi.",
        },
        {
            title: "Mentoring & Bimbingan",
            description: "Program pembimbingan intensif untuk persiapan ujian dan pengembangan potensi siswa.",
        },
        ],
        galleryImages: [
        { src: "/galeri/galeri26.jpg", alt: "Kegiatan belajar mengajar" },
        { src: "/students-reading-books-in-library.jpg", alt: "Perpustakaan komunitas" },
        { src: "/indonesian-children-studying-in-classroom-educatio.jpg", alt: "Siswa belajar" },
        { src: "/indonesian-children-smiling-in-classroom-education.jpg", alt: "Anak-anak bersemangat" },
        ],
  },
  {
        slug: "hutan-adat-dan-lingkungan",
        icon: GraduationCap,
        title: "Hutan Adat & Lingkungan",
        shortDescription:
        "Bersama masyarakat adat memetakan wilayah hutan, menjaga ekosistem, dan mengubah sampah plastik menjadi EcoBrick untuk furnitur, menanam mangrove, serta bersih-bersih lingkungan guna menjaga lingkungan tetap lestari.",
        heroDescription: "Memberdayakan generasi melalui akses pendidikan berkualitas",
        backgroundTitle: "Latar Belakang Program Pendidikan",
        backgroundContent:
        "Program Pendidikan Harapan Bersama dimulai dari observasi mendalam terhadap kesenjangan akses pendidikan di daerah terpencil Indonesia. Kami melihat ribuan anak berbakat tidak bisa melanjutkan pendidikan karena keterbatasan ekonomi dan infrastruktur. Melalui program ini, kami menyediakan beasiswa penuh, membangun perpustakaan komunitas, dan melatih guru lokal dengan metode pembelajaran modern. Setiap anak berhak mendapatkan pendidikan berkualitas tanpa memandang latar belakang ekonomi mereka.",
        benefits: [
        {
            title: "Beasiswa Penuh",
            description: "Kami menyediakan beasiswa lengkap untuk siswa berprestasi dari keluarga kurang mampu.",
        },
        {
            title: "Perpustakaan Komunitas",
            description: "Membangun akses buku dan literasi digital di setiap desa yang kami layani.",
        },
        {
            title: "Pelatihan Guru",
            description: "Meningkatkan kompetensi guru dengan metode pembelajaran inovatif dan berbasis teknologi.",
        },
        {
            title: "Mentoring & Bimbingan",
            description: "Program pembimbingan intensif untuk persiapan ujian dan pengembangan potensi siswa.",
        },
        ],
        galleryImages: [
        { src: "/galeri/galeri18.jpg", alt: "Kegiatan belajar mengajar" },
        { src: "/students-reading-books-in-library.jpg", alt: "Perpustakaan komunitas" },
        { src: "/indonesian-children-studying-in-classroom-educatio.jpg", alt: "Siswa belajar" },
        { src: "/indonesian-children-smiling-in-classroom-education.jpg", alt: "Anak-anak bersemangat" },
        ],
  },
  {
        slug: "budaya-perempuan",
        icon: GraduationCap,
        title: "Budaya & Perempuan",
        shortDescription:
        "Melestarikan bahasa dan budaya lokal melalui buku saku dialek suku Marind, Marori, dan Kanum. Sementara itu, perempuan didorong untuk terlibat aktif dalam pengambilan keputusan dan kegiatan komunitas, memperkuat peran mereka di kampung.",
        heroDescription: "Memberdayakan generasi melalui akses pendidikan berkualitas",
        backgroundTitle: "Latar Belakang Program Pendidikan",
        backgroundContent:
        "Program Pendidikan Harapan Bersama dimulai dari observasi mendalam terhadap kesenjangan akses pendidikan di daerah terpencil Indonesia. Kami melihat ribuan anak berbakat tidak bisa melanjutkan pendidikan karena keterbatasan ekonomi dan infrastruktur. Melalui program ini, kami menyediakan beasiswa penuh, membangun perpustakaan komunitas, dan melatih guru lokal dengan metode pembelajaran modern. Setiap anak berhak mendapatkan pendidikan berkualitas tanpa memandang latar belakang ekonomi mereka.",
        benefits: [
        {
            title: "Beasiswa Penuh",
            description: "Kami menyediakan beasiswa lengkap untuk siswa berprestasi dari keluarga kurang mampu.",
        },
        {
            title: "Perpustakaan Komunitas",
            description: "Membangun akses buku dan literasi digital di setiap desa yang kami layani.",
        },
        {
            title: "Pelatihan Guru",
            description: "Meningkatkan kompetensi guru dengan metode pembelajaran inovatif dan berbasis teknologi.",
        },
        {
            title: "Mentoring & Bimbingan",
            description: "Program pembimbingan intensif untuk persiapan ujian dan pengembangan potensi siswa.",
        },
        ],
        galleryImages: [
        { src: "/galeri/galeri25.jpg", alt: "Kegiatan belajar mengajar" },
        { src: "/students-reading-books-in-library.jpg", alt: "Perpustakaan komunitas" },
        { src: "/indonesian-children-studying-in-classroom-educatio.jpg", alt: "Siswa belajar" },
        { src: "/indonesian-children-smiling-in-classroom-education.jpg", alt: "Anak-anak bersemangat" },
        ],
  },
    
]
export function getProgramBySlug(slug: string): Program | undefined {
  return programsData.find((p) => p.slug === slug)
}