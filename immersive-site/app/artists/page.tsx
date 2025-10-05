import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const artists = [
  { id: 1, name: "Luna Rivers", genre: "Electronic" },
  { id: 2, name: "The Midnight Collective", genre: "Indie Rock" },
  { id: 3, name: "Neon Dreams", genre: "Synthwave" },
  { id: 4, name: "Echo Chamber", genre: "Experimental" },
]

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span className="font-mono text-sm tracking-wider">back</span>
        </Link>

        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">Artists</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors"
            >
              <h2 className="text-2xl font-serif tracking-tight mb-2">{artist.name}</h2>
              <p className="text-sm font-mono tracking-wider text-muted-foreground">{artist.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
