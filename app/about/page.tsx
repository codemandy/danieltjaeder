import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { attributes as aboutAttrs, react as AboutContent } from "@/content/about.md"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <header className="pt-12 pb-8">
        {/* Intentionally left empty; reduced padding to tighten top spacing */}
      </header>

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-7 space-y-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">Biography</h2>
              <section className="prose prose-xl max-w-none">
                <AboutContent />
              </section>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="sticky top-24 space-y-12">
                <div>
                  <img
                    src={aboutAttrs.profile_image || "/media/about_01.png"}
                    alt="Daniel Tjäder portrait"
                    className="shadow-lg w-full"
                  />
                </div>

                <section>
                  <h2 className="text-lg font-normal text-gray-900 mb-4">Contact</h2>
                  <a
                    href={`mailto:${aboutAttrs.contact_email || "contact@danieltjader.com"}`}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {aboutAttrs.contact_email || "contact@danieltjader.com"}
                  </a>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-6">Platforms</h2>
                  <div className="space-y-4">
                    {(aboutAttrs.social_links || []).map((link: any, idx: number) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-600 transition-colors">
                        <span className="mr-2 uppercase">{link.platform}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                      </a>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-normal text-gray-900 mb-4">Career Highlights</h2>
                  <ul className="space-y-2">
                    <li className="text-gray-700">The Radio Dept. (Keyboardist)</li>
                    <li className="text-gray-700">Korallreven (Co-founder)</li>
                    <li className="text-gray-700">Composer for Theatre & Film</li>
                    <li className="text-gray-700">University Lecturer</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="contact-section" className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-normal text-gray-900 mb-8">Interested in working together?</h2>
          <div className="mt-12">
            <a 
              href="/#contact" 
              className="inline-block bg-black text-white font-medium py-3 px-6 rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} <span className="notranslate">Daniel Tjäder</span>. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/#top" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
