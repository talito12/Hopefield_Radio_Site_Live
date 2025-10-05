import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DistributionPage() {
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

        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8">Distribution</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-xl">Get your music heard worldwide with our comprehensive distribution services.</p>
          <p>
            We partner with all major streaming platforms and digital stores to ensure your music reaches the widest
            possible audience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {["Spotify", "Apple Music", "YouTube", "Amazon Music"].map((platform) => (
              <div key={platform} className="bg-card border border-border rounded-lg p-4 text-center font-mono text-sm">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
