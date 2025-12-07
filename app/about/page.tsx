import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Mic, Music } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed">
            Meet The Lindsays!!!
          </p>

          {/* Couple Photo Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-8">
            <div className="aspect-[16/9] relative bg-gradient-to-br from-amber-100 to-orange-200">
              <img
                src="/Wedding_LAUGH.jpeg"
                alt="TJ and Tyanna Lindsay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h2 className="text-4xl font-serif text-gray-900 mb-2">TJ & Tyanna Lindsay</h2>
              <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Founders of Hopefield Radio
              </p>
            </div>
          </div>

          {/* Our Journey */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Journey</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                What started as a dream in a cozy living room has blossomed into Hopefield Radio—a creative ministry
                dedicated to inspiring hope through love, faith, and creative expression. Our journey together has been
                marked by God's faithfulness, countless adventures, and a shared passion for using our gifts to
                encourage others.
              </p>
              <p className="leading-relaxed mb-4">
                Through the ups and downs, the laughter and tears, we've learned that marriage is a beautiful
                partnership where two people become one in purpose and vision. Hopefield Radio is the fruit of our love
                story—a testament to what God can do when two hearts unite in faith and creativity.
              </p>
              <p className="leading-relaxed">
                Today, we reach people around the world through books, podcasts, music, and radio shows. But at the
                heart of it all is our desire to share hope, strengthen marriages, and inspire others to live out their
                God-given purpose with passion and authenticity.
              </p>
            </div>
          </div>

          {/* Individual Bios */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Tyanna's Bio */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="aspect-square relative bg-gradient-to-br from-pink-100 to-purple-200 rounded-lg mb-6 overflow-hidden">
                <img
                  src="/TYANNA_BIO.jpeg"
                  alt="Tyanna Lindsay"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-2">Tyanna Lindsay</h3>
              <p className="text-amber-600 font-mono text-sm mb-4">Author • Speaker • Co-Host</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tyanna is an author, speaker, and passionate advocate for women's empowerment through faith. Her books,
                including "Letter to my sisters" and the upcoming "Tripping for Jesus," inspire women to embrace their
                identity in Christ and live boldly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a heart for sisterhood and spiritual growth, Tyanna uses her voice to encourage women to step into
                their purpose with confidence and grace. When she's not writing or recording podcasts, you'll find her
                traveling, exploring new cultures, and creating memories with TJ.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">🌏 Fun Fact</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Did you know Tyanna traveled to Honduras on a missions trip with Rock City church and helped to build
                  houses for a family in need. She is well known in her community for her work serving others and started
                  a yearly Thanksgiving serving event that feeds the homeless population in Columbus, Ohio.
                </p>
              </div>
              {/* Honduras picture*/}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img
                  src="/TYANNA_MISSION_TRIP.jpeg"
                  alt="TJ Lindsay Mission Trip"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-white/70 text-center">Mission trip experience</p>
            </div>

            {/* TJ's Bio */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="aspect-square relative bg-gradient-to-br from-blue-100 to-teal-200 rounded-lg mb-6 overflow-hidden">
                <img
                  src="/TJ_BIO.jpeg"
                  alt="TJ Lindsay"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-2">TJ Lindsay</h3>
              <p className="text-amber-600 font-mono text-sm mb-4">Musician • Author • Radio Host</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                TJ is a musician, author, and creative visionary behind Hopefield Radio. His music and upcoming books,
                including "Ain't Nobody Playing But You" and "Hopefield," challenge people to live with purpose and
                authenticity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a passion for inspiring others through music and storytelling, TJ creates content that resonates
                with the heart and moves the soul. His latest album "Where's Lito" showcases his unique sound and
                message of hope. TJ believes in the power of creativity to transform lives and bring people closer to
                their calling.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">🏀 Fun Fact</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Did you know TJ is a graduate of Southern Illinois University where he played college basketball. His athletic
                  journey took him across the country, from New York City to Salt Lake City, shaping his discipline,
                  teamwork, and competitive spirit that he brings to everything he does today.
                </p>
              </div>
              {/* Basketball Picture */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img
                  src="/TJ_BASKETBALL.jpeg"
                  alt="TJ Lindsay Basketball Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-white/70 text-center">Playing basketball</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-serif text-gray-900 mb-6 text-center">Explore More</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button asChild className="h-auto py-4 flex-col gap-2">
                <Link href="/contact">
                  <Heart className="w-6 h-6" />
                  <span>Contact Us</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
                <Link href="/podcasts">
                  <Mic className="w-6 h-6" />
                  <span>Our Podcasts</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
                <Link href="/books">
                  <BookOpen className="w-6 h-6" />
                  <span>Our Books</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
                <Link href="/music">
                  <Music className="w-6 h-6" />
                  <span>Our Music</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
