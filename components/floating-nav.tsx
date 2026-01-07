"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Disc3 } from "lucide-react"
import { useMusic } from "@/lib/music-context"

const navLinks = [
  { href: "/books", label: "Books" },
  { href: "/music", label: "Music" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/marriage", label: "Marriage" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { togglePlay } = useMusic()

  const handleRadioClick = (e: React.MouseEvent) => {
    e.preventDefault()
    togglePlay()
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 text-white hover:text-amber-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="text-sm font-mono tracking-wider font-bold">MENU</span>
          </button>

          <Link
            href="/"
            className="text-white hover:text-amber-300 transition-all drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95"
            aria-label="Return to Home"
          >
            <Disc3 size={32} className="animate-spin-slow" style={{ animationDuration: "3s" }} />
          </Link>

          <a
            href="https://hopefieldradio.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-white/80 rounded-full text-sm font-mono tracking-wider font-bold text-white hover:bg-white hover:text-gray-900 transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            SHOP
          </a>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm">
          <div className="flex flex-col items-start justify-center h-full px-12 md:px-24">
            <div className="space-y-2 mb-12">
              <p className="text-xs font-mono tracking-wider text-muted-foreground">radio.</p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-5xl md:text-7xl font-serif tracking-tight text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-1 text-xs font-mono tracking-wider text-muted-foreground">
              <p>hopefield radio</p>
              <p>inspiring hope</p>
              <p>faith & creativity</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
