import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type FooterDict = {
  description: string;
  contactTitle: string;
  address: string;
  quickLinksTitle: string;
  socmedTitle: string ;
  links: { 
    about: string; 
    impact: string;
    program: string;
    gallery: string; 
  };
}

export function Footer({ dict }: { dict: FooterDict }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            {/* Logo -> go to homepage */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image src={`${basePath}/logo-ppc.svg`} alt="Logo Papua Paradise Center" width={250} height={250} className="h-16 w-16" unoptimized />
          </Link>
            <p className="text-background/80 leading-relaxed mb-6">
              {dict.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{dict.contactTitle}</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@harapanbersama.org" className="hover:text-background transition-colors">
                  marthenayub03@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-background transition-colors">
                  +62853-6699-7521
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>
                  {dict.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{dict.quickLinksTitle}</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/#about" className="hover:text-background transition-colors">
                  {dict.links.about}
                </a>
              </li>
              <li>
                <a href="/#impact" className="hover:text-background transition-colors">
                  {dict.links.impact}
                </a>
              </li>
              <li>
                <a href="/#program" className="hover:text-background transition-colors">
                  {dict.links.program}
                </a>
              </li>
              <li>
                <a href="/#galeri" className="hover:text-background transition-colors">
                  {dict.links.gallery}
                </a>
              </li>
              
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{dict.socmedTitle}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/papua.paradise.39/" target="_blank"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/papua.paradisecenter/" target="_blank"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCNeu5SyGITuVMI5fPPOgP8g" target="_blank"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Papua Paradise Center. Designed by <a href="https://ihlasulamal-web-portfolio.vercel.app/" target="_blank" className="hover:text-background transition-colors"><u>Ihlasul A'mal</u></a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
