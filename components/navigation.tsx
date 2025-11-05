"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { programsData } from "@/lib/program-data"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false) // mobile submenu toggle
  const [isDesktopProgramsOpen, setIsDesktopProgramsOpen] = useState(false) // desktop dropdown state
  const [desktopDropdownTimeout, setDesktopDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo -> go to homepage */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image src="/logo-ppc.svg" alt="Logo Papua Paradise Center" width={250} height={250} className="h-16 w-16" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              Home
            </Link>
            {/* dropdown Program (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => {
    if (desktopDropdownTimeout) clearTimeout(desktopDropdownTimeout)
    setIsDesktopProgramsOpen(true)
  }}
  onMouseLeave={() => {
    const timeout = setTimeout(() => setIsDesktopProgramsOpen(false), 150)
    setDesktopDropdownTimeout(timeout)
  }}
            >
              <button
                type="button"
                onClick={() => setIsDesktopProgramsOpen((s) => !s)}
                className={`font-medium transition-colors inline-flex items-center gap-2 ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                Program
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown harus tetap di dalam parent ini */}
              <div
                className={`absolute left-0 top-full mt-1 w-48 bg-card border rounded-md shadow-lg z-50 transition-opacity ${
                  isDesktopProgramsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="py-2">
                  {programsData.map((program) => (
                    <Link
                      key={program.id}
                      href={`/program/${program.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-muted/60"
                      onClick={() => setIsDesktopProgramsOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-left font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {/* mobile: Program with toggle to show submenu */}
              <div>
                <button
                  className="w-full flex items-center justify-between font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsProgramsOpen((s) => !s)}
                >
                  <span>Program</span>
                  {isProgramsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {isProgramsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    {programsData.map((program) => (
                      <Link
                        key={program.id}
                        href={`/program/${program.slug}`}
                        className="text-left text-sm hover:text-primary transition-colors py-1"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsProgramsOpen(false)
                        }}
                      >
                        {program.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
