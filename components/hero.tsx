"use client";

import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/galeri/galeri21.jpg"
          alt="tentang papua paradise center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Perkumpulan Papua Paradise Center
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-pretty opacity-95">
          Tanah adat terjaga, masyarakat adat sejahtera.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
            onClick={() => {
              document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Heart className="mr-2 h-5 w-5" />
            Lihat Program Kami
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="bg-background/95 text-foreground hover:bg-background hover:text-foreground border-2 px-8 py-6 text-lg font-semibold"
          >
            <Users className="mr-2 h-5 w-5" />
            Jadi Relawan
          </Button> */}
        </div>
      </div>
    </section>
  );
}
