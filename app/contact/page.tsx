"use client"

import type React from "react"

import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Youtube, Facebook, Mail } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:thelindsays12@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">Contact</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed">
            We'd love to hear from you! Reach out with questions, prayer requests, or just to say hello.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your heart..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Connect With Us</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Follow us on social media to stay updated with our latest content, behind-the-scenes moments, and
                  community updates.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Hopefield Radio (Shared)</h3>
                    <div className="space-y-2">
                      <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <a href="https://www.instagram.com/thelindsaysshow/" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-3" />
                          @thelindsaysshow
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <a href="https://www.facebook.com/profile.php?id=61585583761173#" target="_blank" rel="noopener noreferrer">
                          <Facebook className="w-4 h-4 mr-3" />
                          Hopefield Radio
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">TJ Lindsay</h3>
                    <div className="space-y-2">
                      <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <a href="https://instagram.com/real_talito" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-3" />
                          @real_talito
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <a href="https://youtube.com/@talito2726" target="_blank" rel="noopener noreferrer">
                          <Youtube className="w-4 h-4 mr-3" />
                          TJ Lindsay
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Tyanna Lindsay</h3>
                    <div className="space-y-2">
                      <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <a href="https://instagram.com/highofflife12" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-3" />
                          @highofflife12
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Direct Email</h3>
                <p className="text-gray-700 mb-4">Prefer email? Reach us directly at:</p>
                <a
                  href="mailto:hello@hopefieldradio.com"
                  className="text-amber-600 hover:text-amber-700 font-medium text-lg break-all"
                >
                  thelindsays12@gmail.com
                </a>
                <p className="text-xs text-gray-500 mt-2">(We would love to hear from you)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
