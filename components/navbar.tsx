"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    
    // Check if we're already on the homepage
    if (pathname === '/') {
      // We're on the homepage, just scroll
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on another page, navigate to homepage with a hash
      router.push('/#contact')
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className={`text-xl font-light ${isScrolled ? "text-gray-900" : "text-white"} notranslate`}>
            Daniel Tjäder
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Music", href: "/music" },
              { name: "About", href: "/about" },
              { name: "Compositions", href: "/compositions" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant={isScrolled ? "default" : "outline"}
              size="sm"
              className={!isScrolled ? "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" : ""}
              onClick={scrollToContact}
            >
              Contact Now
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {[
              { name: "Home", href: "/" },
              { name: "Music", href: "/music" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button onClick={scrollToContact}>Contact Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
