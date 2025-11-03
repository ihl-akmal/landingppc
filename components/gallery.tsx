"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/galeri1.jpg",
      alt: "Kegiatan belajar mengajar",
      className: "row-span-2",
    },
    {
      src: "/galeri2.jpg",
      alt: "Pemeriksaan kesehatan gratis",
      className: "col-span-1",
    },
    {
      src: "/galeri3.jpg",
      alt: "Pelatihan kewirausahaan",
      className: "col-span-1",
    },
    {
      src: "/galeri4.jpg",
      alt: "Distribusi bantuan",
      className: "row-span-2",
    },
    {
      src: "/bumma1.jpg",
      alt: "Kegiatan bermain anak",
      className: "col-span-1",
    },
    {
      src: "/bumma2.jpg",
      alt: "Layanan kesehatan lansia",
      className: "row-span-2",
    },
    {
      src: "/bumma3.jpg",
      alt: "Diskusi komunitas",
      className: "col-span-1",
    },
    {
      src: "/bumma4.jpg",
      alt: "Perpustakaan komunitas",
      className: "col-span-1",
    },
  ]

  return (
    <>
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Gallery Kegiatan</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Momen nyata dari lapangan, bersama penerima manfaat dan relawan.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px] max-w-7xl mx-auto mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${image.className}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
            >
              Lihat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-background/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
