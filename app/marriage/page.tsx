"use client"

import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Video, Users } from "lucide-react"
import { RelationshipTimeline } from "@/components/relationship-timeline"

export default function MarriagePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">Marriage</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed">
            Celebrating love, faith, and the beautiful journey of marriage
          </p>

          {/* Hero Image */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="aspect-[21/9] relative bg-gradient-to-br from-pink-100 to-purple-200">
              <img
                src="/beautiful-couple-wedding-love-romantic-sunset.jpg"
                alt="TJ and Tyanna Lindsay Marriage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Love Story</h2>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our marriage is a testament to God's faithfulness and the power of love rooted in faith. Through every
                season, we've learned that marriage is not just about finding the right person, but being the right
                person—growing together, supporting each other's dreams, and building a life that honors God and
                inspires others.
              </p>
            </div>
          </div>

          {/* Relationship Timeline */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Journey Together</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              From where we met in Mansfield, Ohio, to building our home in Columbus, our journey has taken us across
              the country and beyond. Click on any milestone to see photos and details from that special moment in our
              story.
            </p>
            <RelationshipTimeline />
          </div>

          {/* Wedding Video */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-8 h-8 text-amber-600" />
                <h2 className="text-3xl font-serif text-gray-900">Our Wedding Day</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Relive the joy and beauty of our special day. Watch our wedding video and experience the love, laughter,
                and celebration that marked the beginning of our journey as husband and wife.
              </p>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/I5ZqTlObxw0?si=YNbvKHIRz6VF-7In"
                  title="TJ and Tyanna Wedding Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Marriage Workshop */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-serif text-gray-900">Marriage Workshop</h2>
              </div>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-mono mb-6">
                COMING SOON
              </span>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We're creating a transformative marriage workshop designed to strengthen relationships at every
                    stage—whether you're single and preparing for marriage, dating and building a foundation, or married
                    and seeking to deepen your connection.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our workshop will provide practical tools, biblical wisdom, and real-life insights to help you build
                    a marriage that thrives through every season of life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-4">Who It's For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Singles</p>
                        <p className="text-sm text-gray-600">Preparing your heart for a godly marriage</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Couples</p>
                        <p className="text-sm text-gray-600">Building a strong foundation together</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Married</p>
                        <p className="text-sm text-gray-600">Deepening your connection and growing together</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-serif text-gray-900 mb-4">The Beauty of Marriage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Marriage is a beautiful reflection of God's love—a sacred covenant where two people become one,
                  supporting each other through life's joys and challenges. It's a journey of growth, sacrifice, and
                  unconditional love that mirrors Christ's love for the church. Our workshop celebrates this beauty
                  while providing practical wisdom to help your marriage flourish.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Notified When We Launch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
