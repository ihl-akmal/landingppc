"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/galeri/galeri12.jpg",
      className: "row-span-2",
    },
    {
      src: "/galeri/galeri3.jpg",
      className: "col-span-1",
    },
    {
      src: "/galeri/galeri6.jpg",
      className: "col-span-1",
    },
    {
      src: "/galeri/galeri7.jpg",
      className: "row-span-2",
    },
    {
      src: "/galeri/galeri8.jpg",
      className: "col-span-1",
    },
    {
      src: "/galeri/galeri9.jpg",
      className: "row-span-2",
    },
    {
      src: "/galeri/galeri21.jpg",
      className: "col-span-1",
    },
    {
      src: "/galeri/galeri23.jpg",
      className: "col-span-1",
    },
  ]

  return (
    <>
      <section id="galeri" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Gallery Kegiatan</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Momen nyata dari lapangan bersama masyarakat Papua
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
                  alt="kegiatan papua paradise center"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
               onClick={() => window.open('https://www.instagram.com/papua.paradisecenter/', '_blank')} size="lg"
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
