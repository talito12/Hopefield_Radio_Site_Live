import type { Metadata } from "next"
import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, HandHeart, ShoppingBasket, ExternalLink, Heart, Phone } from "lucide-react"

// ---------------------------------------------------------------------------
// EVENT DETAILS — update these values for the event.
// SIGNUP_GENIUS_URL: paste the link to your SignUpGenius sign-up
// (e.g. https://www.signupgenius.com/go/XXXXXXXX-thanksgiving)
// ---------------------------------------------------------------------------
const SIGNUP_GENIUS_URL = "https://www.signupgenius.com/go/20F0D44AAAE23A3F4C25-66925700-thanksgiving"

// Donation handles (shown in the "Donate" section)
const donations = [
  {
    name: "Cash App",
    handle: "$TyannaLindsay",
    url: "https://cash.app/$TyannaLindsay",
    className: "bg-[#00D632] hover:bg-[#00b82b] text-white",
  },
  {
    name: "Venmo",
    handle: "@tykty",
    url: "https://venmo.com/u/tykty",
    className: "bg-[#008CFF] hover:bg-[#0074d4] text-white",
  },
]

const event = {
  title: "Thanksgiving Sharing",
  tagline: "Feeding our neighbors experiencing homelessness in Columbus, Ohio",
  date: "Thursday, November 26, 2026",
  time: "10:00 AM – 4:00 PM",
  venue: "Short North Church",
  street: "25 W 5th Avenue",
  cityStateZip: "Columbus, OH 43201",
  phoneDisplay: "(567) 274-8980",
  phoneLink: "tel:+15672748980",
}

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${event.venue}, ${event.street}, ${event.cityStateZip}`,
)}`

export const metadata: Metadata = {
  title: "Thanksgiving Sharing | Hopefield Radio",
  description:
    "Join Hopefield Radio this Thanksgiving as we serve meals to our neighbors experiencing homelessness in Columbus, Ohio. Sign up to bring items.",
  metadataBase: new URL("https://hopefieldradio.com"),
  // Picture + title shown when the link is texted or shared on social media
  openGraph: {
    title: "Thanksgiving Sharing | Hopefield Radio",
    description: "Community meal serving for our neighbors in Columbus, Ohio. Sign up to bring items or donate.",
    url: "/thanksgiving",
    type: "website",
    images: [{ url: "/thanksgiving_flyer.jpg", width: 1999, height: 1545, alt: "Thanksgiving Sharing flyer" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/thanksgiving_flyer.jpg"],
  },
}

const steps = [
  {
    icon: ShoppingBasket,
    title: "Pick an item",
    text: "Tap the Sign Up button below and choose an item (or a few) from the list that you can buy.",
  },
  {
    icon: HandHeart,
    title: "Check it off",
    text: "Sign up for the slot so everyone knows it's covered and we don't double up.",
  },
  {
    icon: Heart,
    title: "Bring it & serve",
    text: "Bring your items on event day and help us share a warm meal and some hope.",
  },
]

export default function ThanksgivingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white drop-shadow-lg mb-4">
            {event.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow mb-12 leading-relaxed max-w-3xl">
            {event.tagline}
          </p>

          {/* Flyer */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-8">
            <img
              src="/thanksgiving_flyer.jpg"
              alt={`${event.title} flyer: Community meal serving on ${event.date}, ${event.time}, at ${event.street}, ${event.cityStateZip}. Sponsored by Hopefield Radio.`}
              width={1999}
              height={1545}
              className="w-full h-auto block"
            />
          </div>

          {/* Event details */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Give Thanks by Giving Back</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Thanksgiving, Hopefield Radio is hosting our 6th annual Thanksgiving Event where we come together to prepare and serve meals for people experiencing
              homelessness in Columbus. Every item you bring helps fill a plate and remind someone that they are seen
              and loved. Use the sign-up below to claim the items you'll provide.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono tracking-wider text-gray-500">DATE</p>
                  <p className="text-gray-900">{event.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono tracking-wider text-gray-500">TIME</p>
                  <p className="text-gray-900">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-mono tracking-wider text-gray-500">LOCATION</p>
                  <address className="not-italic text-gray-900 leading-snug">
                    <span className="block font-semibold">{event.venue}</span>
                    <span className="block text-gray-700">{event.street}</span>
                    <span className="block text-gray-700">{event.cityStateZip}</span>
                  </address>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-amber-700 hover:text-amber-800 underline underline-offset-2"
                  >
                    Get directions
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <step.icon className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-xs font-mono tracking-wider text-gray-500 mb-1">STEP {i + 1}</p>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* SignUpGenius */}
          {/* SignUpGenius doesn't allow its pages to be embedded on other sites, so we link out. */}
          <div id="signup" className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8 text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Sign Up to Bring Items</h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              See the full list of what we need and check off the items you're buying. It opens SignUpGenius in a new
              tab, and everyone can see what's already covered.
            </p>
            <Button asChild size="lg" className="text-lg px-10 py-6">
              <a href={SIGNUP_GENIUS_URL} target="_blank" rel="noopener noreferrer">
                Sign Up on SignUpGenius
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Donate */}
          <div id="donate" className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Can't Shop? Donate Instead</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every dollar goes toward food and supplies for the event. Tap a button below to give through Cash App or
              Venmo.
            </p>
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <Heart className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold">Tyanna Lindsay</span> is the lead organizer of Thanksgiving Sharing, so
                donations go directly to her. You'll see her name when you pay on Cash App or Venmo.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {donations.map((d) => (
                <a
                  key={d.name}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${d.className} rounded-lg px-6 py-5 shadow-md transition-colors flex items-center justify-between`}
                >
                  <div>
                    <p className="text-xl font-semibold">Donate with {d.name}</p>
                    <p className="font-mono text-white/90">
                      {d.handle} · Tyanna Lindsay
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Want to help in another way, or have a question about what to bring? Give us a call at{" "}
              <a href={event.phoneLink} className="font-semibold text-gray-900 underline underline-offset-2">
                {event.phoneDisplay}
              </a>{" "}
              or reach out through our contact page.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={event.phoneLink}>
                  <Phone className="w-4 h-4" />
                  Call {event.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">About Hopefield Radio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
