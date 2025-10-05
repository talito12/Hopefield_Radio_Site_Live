import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import { Button } from "@/components/ui/button"
import { Youtube, ShoppingCart } from "lucide-react"

const albums = [
  {
    id: 1,
    title: "Where's Lito",
    artist: "TJ Lindsay",
    status: "preorder",
    year: "2025",
    description: "The highly anticipated new album featuring soulful melodies and powerful messages of hope and faith.",
    coverImage: "/album-cover-where-s-lito-music-hip-hop-gospel.jpg",
  },
  {
    id: 2,
    title: "Faith & Fire",
    artist: "TJ Lindsay",
    status: "available",
    year: "2023",
    description: "A collection of inspiring tracks that blend contemporary sounds with timeless messages.",
    coverImage: "/album-cover-gospel-music-contemporary.jpg",
  },
  {
    id: 3,
    title: "Unshaken",
    artist: "TJ Lindsay",
    status: "available",
    year: "2022",
    description: "Raw, authentic music that speaks to the heart and soul.",
    coverImage: "/album-cover-urban-gospel-music.jpg",
  },
  {
    id: 4,
    title: "Kingdom Sound",
    artist: "TJ Lindsay",
    status: "available",
    year: "2021",
    description: "Powerful worship anthems that declare God's glory and goodness.",
    coverImage: "/gospel-worship-album-cover.jpg",
  },
  {
    id: 5,
    title: "Breakthrough",
    artist: "TJ Lindsay",
    status: "available",
    year: "2020",
    description: "Songs of victory and overcoming through faith in Christ.",
    coverImage: "/breakthrough-gospel-album-cover.jpg",
  },
  {
    id: 6,
    title: "Grace Notes",
    artist: "TJ Lindsay",
    status: "available",
    year: "2019",
    description: "Melodic reflections on God's amazing grace and mercy.",
    coverImage: "/grace-gospel-music-album.jpg",
  },
  {
    id: 7,
    title: "Elevated",
    artist: "TJ Lindsay",
    status: "available",
    year: "2018",
    description: "Uplifting tracks that inspire listeners to rise higher in their faith journey.",
    coverImage: "/elevated-worship-album-cover.jpg",
  },
  {
    id: 8,
    title: "Testimony",
    artist: "TJ Lindsay",
    status: "available",
    year: "2017",
    description: "Personal stories of God's faithfulness told through powerful music.",
    coverImage: "/testimony-gospel-album.jpg",
  },
  {
    id: 9,
    title: "New Season",
    artist: "TJ Lindsay",
    status: "available",
    year: "2016",
    description: "Celebrating fresh beginnings and God's renewal in our lives.",
    coverImage: "/new-season-gospel-music.jpg",
  },
  {
    id: 10,
    title: "First Light",
    artist: "TJ Lindsay",
    status: "available",
    year: "2015",
    description: "The debut project that started it all - raw passion and authentic worship.",
    coverImage: "/debut-gospel-album-cover.jpg",
  },
]

export default function MusicPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">Music</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed">
            Experience uplifting music that inspires hope and celebrates faith through creative expression.
          </p>

          {/* Featured Album */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <img
                  src={albums[0].coverImage || "/placeholder.svg"}
                  alt={albums[0].title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-mono mb-4 w-fit">
                  NEW RELEASE
                </span>
                <h2 className="text-4xl font-serif text-gray-900 mb-2">{albums[0].title}</h2>
                <p className="text-xl text-gray-600 mb-4">by {albums[0].artist}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{albums[0].description}</p>
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <a href="https://your-shopify-store.com" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Pre-Order Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Albums */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-white drop-shadow-lg mb-6">Complete Discography</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.slice(1).map((album) => (
                <div key={album.id} className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
                  <div className="p-4">
                    <img
                      src={album.coverImage || "/placeholder.svg"}
                      alt={album.title}
                      className="w-full aspect-square object-cover rounded-lg shadow mb-4"
                    />
                    <div>
                      <h3 className="text-xl font-serif text-gray-900 mb-1">{album.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{album.year}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{album.description}</p>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <a href="https://your-shopify-store.com" target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy Digital Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Channel */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-serif text-gray-900">Watch More on YouTube</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Explore TJ's full music catalog, behind-the-scenes content, and exclusive videos on YouTube. Subscribe to
              stay updated with new releases and special performances.
            </p>
            <Button asChild size="lg">
              <a href="https://youtube.com/@tjlindsay" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" />
                Visit YouTube Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
