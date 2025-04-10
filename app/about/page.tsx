import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <header className="pt-24 pb-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-0">About</h1>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-7 space-y-12">
              <section>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  I'm a music composer specializing in customized soundscapes and music productions for film, theatre as well as audio branding. Clients include well-known cultural institutions and companies, mainly in Sweden but also numerous syncs in ads and movies worldwide. I have previously (20+ years) been a member/founder of swedish indie bands The Radio Dept and Korallreven, writing songs, producing, touring etc.
                </p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Songwriting credits for a number of big swedish pop acts and a major league american artist. I have also done arts projects on my own and lectured at various universities in Sweden.
                </p>

                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Since 2016, I have focused on creating music and sound for commissions for, among others, Daniel
                  Berlin Krog, Malmö City Theatre and the theatre company Bombina Bombast. In parallel, I have taught at
                  universities in Malmö and Stockholm, run projects with cultural administrations and cultural
                  institutions, and analyzed and wrote reports.
                </p>

                <p className="text-xl leading-relaxed text-gray-700">
                  Making music is my greatest source of joy and inspiration, and it is when I am creating music that I
                  feel most alive. Becoming a composer was a great liberation for me. I write music for others and don't
                  have to be in the spotlight. My music is part of something bigger – film, image, or message – where it
                  enhances or gives new dimensions. I love the variety: one day dance music, the next day something for
                  orchestra, indie, ambient or even mello. Music is my passion in all its forms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-gray-900 mb-8">Selected Works</h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "Malmö City Theatre",
                      description: "Original score for 'The Winter's Tale'",
                      year: "2022",
                    },
                    {
                      title: "Bombina Bombast",
                      description: "Sound design for 'Virtual Reality Experience'",
                      year: "2020",
                    },
                    {
                      title: "Daniel Berlin Krog",
                      description: "Ambient soundscape for restaurant experience",
                      year: "2019",
                    },
                    {
                      title: "Korallreven - An Album",
                      description: "Co-writer and producer",
                      year: "2011",
                    },
                  ].map((work, index) => (
                    <div key={index} className="border-t border-gray-100 pt-6">
                      <div className="text-sm text-gray-500 mb-1">{work.year}</div>
                      <h3 className="text-xl font-normal text-gray-900 mb-1">{work.title}</h3>
                      <p className="text-gray-600">{work.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/music" className="inline-flex items-center text-gray-900 hover:underline">
                    View all works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </section>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="sticky top-24 space-y-12">
                <div>
                  <img
                    src="/media/daniel_01.jpg"
                    alt="Daniel Tjäder portrait"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                <section>
                  <h2 className="text-lg font-normal text-gray-900 mb-4">Contact</h2>
                  <a
                    href="mailto:contact@danieltjader.com"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    contact@danieltjader.com
                  </a>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-6">Platforms</h2>
                  <div className="space-y-4">
                    <a href="https://www.instagram.com/daniel_cheyda" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-600 transition-colors">
                      <span className="mr-2">INSTAGRAM</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="https://twine.net/Cheyda" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-600 transition-colors">
                      <span className="mr-2">TWINE</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="mailto:your.email@example.com" className="flex items-center text-lg hover:text-blue-600 transition-colors">
                      <span className="mr-2">EMAIL</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
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
    </div>
  )
}
