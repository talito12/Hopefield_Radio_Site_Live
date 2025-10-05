import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Space_Mono } from "next/font/google"
import "./globals.css"
import { MusicProvider } from "@/lib/music-context"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Hopefield Radio",
  description: "Inspiring Hope Through Love, Faith and Creative Expression",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceMono.variable}`}>
      <body className="antialiased">
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  )
}
