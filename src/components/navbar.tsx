"use client"

import { useState, useEffect, MouseEvent } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const pagesRequiringOpaqueNavbar = ['/about', '/projects', '/compositions'];
  const forceOpaque = pagesRequiringOpaqueNavbar.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Let the Link component handle navigation to /#sectionId
      // The router.push here would be redundant if href is already set correctly
      // router.push(`/#${sectionId}`);
    }
  };

  const navShouldBeOpaque = isScrolled || forceOpaque;
  const projectsSectionId = "projects"; // Changed from music to projects

  const navItems = [
    { name: "Projects", href: `/#${projectsSectionId}`, action: (e: MouseEvent<HTMLAnchorElement>) => handleScrollToSection(e, projectsSectionId) },
    { name: "About", href: "/about" },
    { name: "Compositions", href: "/compositions" },
  ];

  const mobileNavItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: `/#${projectsSectionId}`, action: (e: MouseEvent<HTMLAnchorElement>) => handleScrollToSection(e, projectsSectionId) },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact", action: (e: MouseEvent<HTMLAnchorElement>) => handleScrollToSection(e, "contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navShouldBeOpaque ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className={`text-xl font-light ${navShouldBeOpaque ? "text-gray-900" : "text-white"} notranslate`}>
            Daniel Tjäder
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.action ? (e) => item.action!(e) : undefined}
                className={`text-sm ${
                  navShouldBeOpaque ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant={navShouldBeOpaque ? "default" : "outline"}
              size="sm"
              className={!navShouldBeOpaque ? "bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" : ""}
              onClick={(e) => handleScrollToSection(e as unknown as MouseEvent<HTMLAnchorElement>, "contact")}
            >
              Contact Now
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${navShouldBeOpaque ? "text-gray-900" : "text-white"}`}
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
            {mobileNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl text-gray-900"
                onClick={(e) => {
                  if (item.action) {
                    item.action(e);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={(e) => {
                handleScrollToSection(e as unknown as MouseEvent<HTMLAnchorElement>, "contact");
              }}
            >
              Contact Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
