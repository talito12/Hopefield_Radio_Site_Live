import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import { Button } from "@/components/ui/button"
import { Youtube, ShoppingCart } from "lucide-react"

const albums = [
  {
    id: 1,
    title: "Where's Lito",
    artist: "Talito",
    status: "preorder",
    year: "2026",
    description: "The highly anticipated new album that discusses the transformation of Talito and details his journey since his last project 5 years ago.",
    coverImage: "/Untitled_album_design.jpg",
  },
  {
    id: 2,
    title: "Sweet Science",
    artist: "Talito",
    status: "available",
    year: "2021",
    description: "A masterful display of lyricism and production that is based on the 4 kings boxing era in the 80s!",
    coverImage: "/Sweet_Science_Artwork.jpg",
  },
  {
    id: 3,
    title: "Talito 2020",
    artist: "Talito",
    status: "available",
    year: "2020",
    description: "The presendential campaigne of Talito that gives impactful songs with with mature messaging that leads you to think deeply about the current state of affairs.",
    coverImage: "/Talito_2020_Artwork.jpg",
  },
  {
    id: 4,
    title: "The Cure",
    artist: "Talito",
    status: "available",
    year: "2019",
    description: "A Covid documentary that gives the world solutions to its current state and makes you bop your head while the message is being conveyed!",
    coverImage: "/The_Cure_Artwork.jpg",
  },
  {
    id: 5,
    title: "Preseason",
    artist: "Talito",
    status: "available",
    year: "2018",
    description: "A refelctive masterpiece that looks deep within the soul of a former basketball star realizing everything isn't what it seems in life.",
    coverImage: "/Preseason_Artwork.jpg",
  },
  {
    id: 6,
    title: "Life Is So Serious",
    artist: "Talito",
    status: "available",
    year: "2017",
    description: "A timeless journey that centers around the concept of good and evil through the lense of Talito.",
    coverImage: "/Life_is_So_Serious_Artwork.jpg",
  },
  {
    id: 7,
    title: "Time Travel",
    artist: "Talito",
    status: "available",
    year: "2016",
    description: "A holiday Classic! Timeless music that feels good to the ear and soul.",
    coverImage: "/Time_Travel_Artwork.jpg",
  },
  {
    id: 8,
    title: "Pen State",
    artist: "TJ Lindsay",
    status: "available",
    year: "2016",
    description: "Detailing the prison state of america and its relationship to the corporate corruption going on at Penn state University during this time.",
    coverImage: "/Pen_State_Artwork.jpg",
  },
  {
    id: 9,
    title: "FTP",
    artist: "Talito",
    status: "available",
    year: "2016",
    description: "The most important album in Mansfield music history. This album is full of anthems and love songs sure to motivate and heal you.",
    coverImage: "/FTP_Artwork.jpg",
  },
  {
    id: 10,
    title: "The Knowledge Tape",
    artist: "Talito",
    status: "available",
    year: "2016",
    description: "A journey through post college stress syndrom communicated through powerful synths and personal lyrics.",
    coverImage: "/Knowledge_Tape_Artwork.jpg",
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
                    <a href="https://talito.bandcamp.com" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://talito.bandcamp.com" target="_blank" rel="noopener noreferrer">
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
              <a href="https://www.youtube.com/@talito2726" target="_blank" rel="noopener noreferrer">
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
