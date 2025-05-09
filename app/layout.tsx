import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import GTranslateInitializer from "@/components/GTranslateInitializer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Tjäder | Composer",
  description: "Official website of Daniel Tjäder, composer and pianist",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="gtranslate_wrapper"></div>
        <GTranslateInitializer />
      </body>
    </html>
  )
}



import './globals.css'
