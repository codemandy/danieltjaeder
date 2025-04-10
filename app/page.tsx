"use client"

import Link from "next/link"
import { ChevronRight, Mail, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AudioPlayer from "@/components/audio-player"
import MusicGrid from "@/components/music-grid"
import ContactForm from "@/components/contact-form"
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Check for hash in URL
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }, 100) // Small delay to ensure the page is fully loaded
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/10" />
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Daniel Tjäder performing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">Daniel Tjäder</h1>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto mb-8">
            Composer · Pianist · Producer
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            Listen to Latest Work
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white/70 w-8 h-8" />
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="py-24 bg-white" id="music">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Featured Work</h2>
          <div className="w-20 h-px bg-gray-200 mb-12"></div>

          <div className="mb-16">
            <AudioPlayer
              title="Nocturne in F Minor"
              description="From the album 'Midnight Compositions' (2023)"
              duration="4:32"
            />
          </div>

          <MusicGrid />

          <div className="mt-12 text-center">
            <Link href="/music">
              <Button variant="outline" className="group">
                View All Compositions
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Daniel Tjäder portrait"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">About</h2>
              <div className="w-20 h-px bg-gray-200 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My interest in music started early, but for a long time I chose music over academic studies. After graduating from university and working as a journalist, I was offered an interview to join The Radio Dept., a band I admired. I started playing keyboards with them, which led to album releases, appearances in blockbuster films and international tours.
              </p>
           
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Making music is my greatest source of joy and inspiration, and it is when I am creating music that I feel most alive. Becoming a composer was a great liberation for me. I write music for others and don't have to be in the spotlight. My music is part of something bigger – film, image, or message – where it enhances or gives new dimensions. I love the variety: one day dance music, the next day something for orchestra, indie, ambient or even mello. Music is my passion in all its forms.
              </p>
              <Link href="/about">
                <Button variant="outline" className="group">
                  Read Full Biography
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Performances */}
      <section className="py-24 bg-white" id="performances">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-2">Upcoming Performances</h2>
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
            ].map((performance, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm text-gray-500 mb-2">{performance.date}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">{performance.title}</h3>
                <div className="text-gray-700 mb-4">{performance.venue}</div>
                <div className="text-gray-500 mb-6">{performance.location}</div>
                <Button variant="outline" size="sm" className="w-full">
                  Get Tickets
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/performances">
              <Button variant="outline" className="group">
                View All Performances
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50" id="contact">
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
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Daniel Tjäder. All rights reserved.</p>
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
              <Link href="/performances" className="text-sm text-gray-400 hover:text-white transition-colors">
                Performances
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
