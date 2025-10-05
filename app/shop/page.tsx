import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const products = [
  { id: 1, name: "Limited Edition Vinyl", price: "$35" },
  { id: 2, name: "Studio Merch Pack", price: "$50" },
  { id: 3, name: "Artist Collaboration Tee", price: "$28" },
  { id: 4, name: "Digital Album Bundle", price: "$15" },
]

export default function ShopPage() {
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

        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">Shop</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors"
            >
              <h2 className="text-xl font-serif tracking-tight mb-2">{product.name}</h2>
              <p className="text-2xl font-mono tracking-wider text-accent">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
