import Link from "next/link"
import { ChevronRight, Mail, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { getAboutExcerpt } from "@/lib/aboutText"
import type { Project } from '@/payload-types'
import ProjectList from "@/components/ProjectList"
import { headers } from "next/headers"
//
// interface Project {
//   title: string
//   description: string
//   image: string
//   details: string
//   audioSrc: string
// }

// This function will now fetch projects from the Payload API
async function getProjects(): Promise<Project[]> {
  try {
    // Build absolute URL because Node fetch requires it in Server Components
    const headersList = await headers() as any
    const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost:3000'
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const url = `${protocol}://${host}/api/projects?limit=100`
    const res = await fetch(url, {
      next: { tags: ['projects'] },
    } as RequestInit & { next: { tags: string[] } })
    
    if (!res.ok) {
      throw new Error('Failed to fetch projects')
    }

    const data = await res.json()
    return data.docs
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}


export default async function Home() {
  const allProjects = await getProjects()
  const aboutExcerpt = getAboutExcerpt(3)

  // Client-side state management for the modal and "load more" functionality
  // will be handled within a new client component. We'll wrap the projects
  // section in a component that can use hooks like useState and useEffect.
  
  // For now, we will render the fetched projects directly.
  // The interactive parts will be refactored next.

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden page-section">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img
            src="/media/frontpage_image.png"
            alt="Daniel Tjäder performing"
            className="w-full h-full object-cover object-top filter grayscale-[30%] blur-xl scale-150"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 notranslate">Daniel Tjäder</h1>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto mb-8">
            Composer · Musician · Sound Designer
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white/70 w-8 h-8" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white page-section" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Projects</h2>
          <div className="w-20 h-px bg-gray-200 mb-12"></div>
          <ProjectList projects={allProjects} />
        </div>
      </section>

      {/* The ProjectModal and its state management will be moved to the new client component */}

      {/* About Section */}
      <section className="py-24 bg-gray-50 page-section" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/media/bg_04.jpg"
                alt="Daniel Tjäder portrait"
                className="shadow-lg w-full"
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Om mig</h2>
              <div className="w-20 h-px bg-gray-200 mb-6"></div>
              {aboutExcerpt.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <Link href="/about">
                <Button variant="outline" className="group">
                  Läs Hela Biografin
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white page-section" id="contact-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Contact</h2>
            <div className="w-20 h-px bg-gray-200 mx-auto mb-12"></div>
          </div>
          {/* <ContactForm /> */}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:daniel@example.com" className="hover:text-gray-900"><Mail /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900"><Instagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900"><Twitter /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Daniel Tjäder. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
