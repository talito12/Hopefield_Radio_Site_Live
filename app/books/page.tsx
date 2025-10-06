import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const books = [
  {
    id: 1,
    title: "Letter to my sisters",
    author: "Tyanna Lindsay",
    status: "available",
    description: "Letters to my sisters is a fierce, faith-lit memoir of a black woman who turns her most private pain into a public path to healing. Raised under relentless expectations, she spirals into self-doubt and suicidal thoughts-until a quiet inner voice urgers her to fight. Witness this epic Journey of love, faith and redemption",
    coverImage: "/Letters_to_my_sisters.jpg",
  },
  {
    id: 2,
    title: "Tripping for Jesus",
    author: "Tyanna Lindsay",
    status: "preorder",
    description:
      "An inspiring journey of faith and adventure as Tyanna shares stories of traveling the world while deepening her relationship with God. Discover how stepping out in faith can lead to extraordinary experiences and spiritual growth.",
    coverImage: "/Letters_to_my_sisters.jpg",
  },
  {
    id: 3,
    title: "Ain't Nobody Playing But You",
    author: "TJ Lindsay",
    status: "preorder",
    description:
      "A powerful exploration of authenticity, purpose, and taking life seriously. TJ challenges readers to stop playing games with their destiny and start living with intention, passion, and unwavering commitment to their calling.",
    coverImage: "/book-cover-ain-t-nobody-playing-motivation-purpose.jpg",
  },
  {
    id: 4,
    title: "Hopefield",
    author: "TJ & Tyanna Lindsay",
    status: "preorder",
    description:
      "The story behind Hopefield Radio and the journey of building a creative ministry together. A testament to faith, love, and the power of hope to transform lives and inspire communities.",
    coverImage: "/book-cover-hopefield-hope-faith-ministry.jpg",
  },
]

export default function BooksPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">Books</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed max-w-3xl">
            Discover inspiring books that nurture faith, strengthen relationships, and encourage creative expression.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {books.map((book) => (
              <Dialog key={book.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
                        <img
                          src={book.coverImage || "/placeholder.svg"}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-xl text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${
                            book.status === "available" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {book.status === "available" ? "Available Now" : "Pre-Order"}
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-serif">{book.title}</DialogTitle>
                    <DialogDescription className="text-lg">by {book.author}</DialogDescription>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <img
                        src={book.coverImage || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">About This Book</h4>
                        <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                      </div>
                      <div className="space-y-3">
                        <Button asChild className="w-full" size="lg">
                          <a href="https://hopefieldradio.myshopify.com" target="_blank" rel="noopener noreferrer">
                            {book.status === "available" ? "Order Now" : "Pre-Order Now"}
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href="/about">About the Author</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Why Read Our Books?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Each book is crafted with love and intention, designed to inspire hope, strengthen faith, and encourage
              you on your journey. Whether you're seeking spiritual growth, relationship wisdom, or creative
              inspiration, our collection offers something meaningful for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href="/about">Meet the Authors</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/podcasts">Listen to Our Podcasts</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
