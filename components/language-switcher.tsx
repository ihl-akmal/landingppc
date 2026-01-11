"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LanguageSwitcher() {
  const pathname = usePathname()

  // Fungsi untuk mengganti kode bahasa di URL
  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/"
    const segments = pathname.split("/")
    segments[1] = locale // Mengganti 'id' atau 'en' di URL
    return segments.join("/")
  }

  // Cek bahasa saat ini dari URL
  const currentLang = pathname.split("/")[1] || "en"

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-blue-100 shadow-sm w-fit">
      {/* Tombol EN */}
      <Link
        href={redirectedPathname("en")}
        className={`flex items-center px-4 py-1.5 rounded-full transition-all duration-300 ${
          currentLang === "en" 
          ? "bg-blue-200 shadow-inner" // Style saat aktif (seperti di gambar)
          : "hover:bg-gray-200"
        }`}
      >
        <img 
        src="https://flagcdn.com/w40/us.png" 
        alt="English" 
        className="w-5 h-auto mr-2 rounded-sm" 
        />
        <span className="text-xs font-bold text-slate-700">EN</span>
      </Link>

      {/* Tombol ID */}
      <Link
        href={redirectedPathname("id")}
        className={`flex items-center px-4 py-1.5 rounded-full transition-all duration-300 ${
          currentLang === "id" 
          ? "bg-blue-200 shadow-inner" // Style saat aktif
          : "hover:bg-gray-200"
        }`}
      >
        <img 
        src="https://flagcdn.com/w40/id.png" 
        alt="Indonesia" 
        className="w-5 h-auto mr-2 rounded-sm" 
    />
        <span className="text-xs font-bold text-slate-700">ID</span>
      </Link>
    </div>
  )
}