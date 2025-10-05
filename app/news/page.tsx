import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "New Album Release",
    date: "2025-01-15",
    excerpt: "Exciting new sounds coming your way next week.",
  },
  {
    id: 2,
    title: "Studio Expansion",
    date: "2025-01-10",
    excerpt: "We are expanding our facilities with state-of-the-art equipment.",
  },
  {
    id: 3,
    title: "Artist Spotlight",
    date: "2025-01-05",
    excerpt: "Meet the talented artists shaping our sound.",
  },
]

export default function NewsPage() {
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

        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">News</h1>

        <div className="space-y-8">
          {newsItems.map((item) => (
            <article key={item.id} className="border-b border-border pb-8 hover:border-accent transition-colors">
              <time className="text-xs font-mono tracking-wider text-muted-foreground">{item.date}</time>
              <h2 className="text-3xl font-serif tracking-tight mt-2 mb-3">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
