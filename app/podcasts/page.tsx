"use client"

import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import { useMusic } from "@/lib/music-context"
import { Mic } from "lucide-react"
import { useEffect, useRef } from "react"

export default function PodcastsPage() {
  const { pauseMusic } = useMusic()
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // YouTube iframe API sends messages when video state changes
      if (event.data && typeof event.data === "string") {
        try {
          const data = JSON.parse(event.data)
          // YouTube player state: 1 = playing
          if (data.event === "onStateChange" && data.info === 1) {
            pauseMusic()
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [pauseMusic])

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">Podcasts</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed">
            Listen to inspiring conversations about faith, relationships, and creative living.
          </p>

          {/* The Lindsays Podcast - Featured */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-8 h-8 text-amber-600" />
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-mono">
                  FEATURED PODCAST
                </span>
              </div>
              <h2 className="text-4xl font-serif text-gray-900 mb-4">The Lindsays</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Join TJ and Tyanna Lindsay as they share honest conversations about marriage, faith, and navigating life
                together. Each episode offers practical wisdom, laughter, and real talk about building a strong
                relationship rooted in love and faith.
              </p>

              {/* YouTube Embed Placeholder */}
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?list=PLkmS7-bizgDGLImyRtO5hm2Wjq5PgD30z"
                  title="The Lindsays Podcast"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600">Episodes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">Weekly</p>
                  <p className="text-sm text-gray-600">New Episodes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600">Subscribers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Episodes Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif text-white drop-shadow-lg mb-6">Recent Episodes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: 'yAMns3CN3_w', title: 'Who\'s the prize in a relationship?', description: 'Who\'s the prize in a relationship?' },
                { id: 'wSFkuHKnIjA&t', title: 'The Great Expectation Reset: Aligning your marriage vision', description: 'Managing Expectations in marriage over time' },
                { id: 'eh3XRCSY_-Q&t', title: 'Pick Mes, Simps and Reciprocation', description: 'Discussing the concept behind common labels placed on people in today\'s dating society'},
                { id: 'RqG8uI8bXGQ', title: 'The Talking Stage and the power of words', description: 'Sharing our thoughts on the relevance of the talking stage in a relationship'},
              ].map((episode, i) => (
                <div key={i} className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-video bg-gray-900">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${episode.id}`}
                      title={episode.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif text-lg text-gray-900 mb-2">{episode.title}</h4>
                    <p className="text-sm text-gray-600">{episode.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hopefield Radio Podcast */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-6 h-6 text-amber-600" />
                <h2 className="text-3xl font-serif text-gray-900">Hopefield Radio Podcast</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                TJ's solo podcast diving deep into faith, creativity, and purpose. Each episode features inspiring
                stories, practical wisdom, and conversations that challenge you to live authentically and pursue your
                calling with passion.
              </p>

              {/* YouTube Embed Placeholder */}
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HOPEFIELD_PLAYLIST_ID"
                  title="Hopefield Radio Podcast"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-900">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/HOPEFIELD_VIDEO_${i}`}
                        title={`Hopefield Radio Episode ${i}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif text-lg text-gray-900 mb-2">Episode Title {i}</h4>
                      <p className="text-sm text-gray-600">Inspiring conversations about purpose</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
