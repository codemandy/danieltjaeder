"use client"

import Link from "next/link"
import { ChevronRight, Mail, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AudioPlayer from "@/components/audio-player"
import MusicGrid from "@/components/music-grid"
import ContactForm from "@/components/contact-form"
import { useEffect, useState } from 'react'
import ProjectModal from "@/components/project-modal"
import { getAboutExcerpt } from "@/lib/aboutText"

interface Project {
  title: string
  description: string
  image: string
  details: string
  audioSrc: string
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(3)
  const aboutExcerpt = getAboutExcerpt(3)

  const allProjects = [
    {
      title: "SOS",
      description: "From the album 'Midnight Compositions' (2023)",
      image: "/media/projects/sos.jpeg",
      details: "A contemporary composition exploring the relationship between sound and space. This piece was created as part of a larger project investigating the acoustic properties of different environments.",
      audioSrc: "/audio/test.mp3"
    },
    {
      title: "EURO",
      description: "Sound Design Project (2023)",
      image: "/media/projects/euro.png",
      details: "An immersive sound installation that transforms urban noise into musical elements. This project was exhibited at the Stockholm Sound Festival.",
      audioSrc: "/audio/urban.mp3"
    },
    {
      title: "Berlin Daniel",
      description: "Orchestral Composition (2022)",
      image: "/media/projects/berlin_daniel.jpg",
      details: "A symphonic piece that blends traditional Nordic folk music with contemporary orchestral arrangements. Performed by the Stockholm Philharmonic Orchestra.",
      audioSrc: "/audio/nordic.mp3"
    },
    {
      title: "Digital Soundscapes",
      description: "Interactive Installation (2023)",
      image: "/media/projects/kg_01.png",
      details: "An interactive sound installation that responds to audience movement, creating unique sonic environments for each visitor.",
      audioSrc: "/audio/digital.mp3"
    },
    {
      title: "Ambient Reflections",
      description: "Album Release (2022)",
      image: "/media/projects/seaofsounds.jpg",
      details: "A collection of ambient compositions exploring the relationship between natural and electronic sounds.",
      audioSrc: "/audio/ambient.mp3"
    },
    {
      title: "Sonic Architecture",
      description: "Exhibition Soundtrack (2023)",
      image: "/media/projects/studio_seedaa.png",
      details: "A site-specific sound composition created for the Modern Architecture Museum's main exhibition.",
      audioSrc: "/audio/architecture.mp3"
    }
  ]

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3)
  }

  useEffect(() => {
    // Check for hash in URL for contact section scrolling (existing logic)
    if (window.location.hash === '#contact-section') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []) // Keep other dependencies if any, or empty if only GTranslate was here.

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
          {/* <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            Listen to Latest Work
          </Button> */}
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white/70 w-8 h-8" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white page-section" id="music">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Projects</h2>
          <div className="w-20 h-px bg-gray-200 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.slice(0, visibleProjects).map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
              >
                <div className="relative aspect-video mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>

          {visibleProjects < allProjects.length && (
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="group"
                onClick={loadMoreProjects}
              >
                Load More Projects
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

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

      {/* Upcoming Work
      <section className="py-24 bg-white" id="work">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Upcoming Work</h2>
          <div className="w-20 h-px bg-gray-200 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "May 15, 2025",
                venue: "Stockholm Concert Hall",
                location: "Stockholm, Sweden",
                title: "Spring Sonatas",
              },
              {
                date: "June 3, 2025",
                venue: "Berlin Philharmonic",
                location: "Berlin, Germany",
                title: "Nordic Compositions",
              },
              {
                date: "July 22, 2025",
                venue: "Royal Albert Hall",
                location: "London, UK",
                title: "Summer Night Concerto",
              },
            ].map((work, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm text-gray-500 mb-2">{work.date}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">{work.title}</h3>
                <div className="text-gray-700 mb-4">{work.venue}</div>
                <div className="text-gray-500 mb-6">{work.location}</div>
                <Button variant="outline" size="sm" className="w-full">
                  Read more
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/work">
              <Button variant="outline" className="group">
                View all
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-24 bg-gray-50 page-section" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2 text-center">
              Get in Touch
            </h2>
            <div className="w-20 h-px bg-gray-200 mx-auto mb-12"></div>

            <ContactForm />

            <div className="mt-16 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
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
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/music" className="text-sm text-gray-400 hover:text-white transition-colors">
                Music
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
