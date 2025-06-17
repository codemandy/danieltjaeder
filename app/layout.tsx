import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import GTranslateInitializer from "@/components/GTranslateInitializer"

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
      <head>
        {/* Custom font DTL Haarlemmer Sans D */}
        <link
          href="https://db.onlinewebfonts.com/c/40599ff8ca2eb503c82cad0b8ab28561?family=DTLHaarlemmerSansD"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://db.onlinewebfonts.com/c/dc5f5d1ac747ff380de858c82201518d?family=DTLHaarlemmerSD-Bold"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <div className="gtranslate_wrapper"></div>
        <GTranslateInitializer />
      </body>
    </html>
  )
}
