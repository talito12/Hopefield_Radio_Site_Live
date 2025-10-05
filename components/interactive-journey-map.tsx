"use client"

import { useState } from "react"
import { MapPin, Car, Heart, GraduationCap, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Location {
  id: string
  name: string
  x: number // percentage from left
  y: number // percentage from top
  date: string
  reason: string
  images: string[]
  category: "relationship" | "college" | "travel" | "home"
}

const locations: Location[] = [
  {
    id: "mansfield",
    name: "Mansfield, Ohio",
    x: 68,
    y: 42,
    date: "2015",
    reason: "Where we met - the beginning of our love story",
    images: ["/couple-meeting-first-date-romantic.jpg", "/mansfield-ohio-romantic-location.jpg"],
    category: "relationship",
  },
  {
    id: "columbus",
    name: "Columbus, Ohio",
    x: 67,
    y: 44,
    date: "Present",
    reason: "Our home - where we build our life together",
    images: ["/columbus-ohio-home-family.jpg", "/couple-home-happy-living.jpg"],
    category: "home",
  },
  {
    id: "atlanta",
    name: "Atlanta, Georgia",
    x: 63,
    y: 58,
    date: "2018",
    reason: "Our wedding day and where Hopefield Radio was born",
    images: ["/wedding-ceremony-bride-groom-celebration.jpg", "/atlanta-georgia-wedding-venue.jpg"],
    category: "relationship",
  },
  {
    id: "toronto",
    name: "Toronto, Canada",
    x: 70,
    y: 32,
    date: "2019",
    reason: "Anniversary trip - exploring new horizons together",
    images: ["/toronto-canada-couple-travel.jpg", "/anniversary-trip-romantic-getaway.jpg"],
    category: "travel",
  },
  {
    id: "niagara",
    name: "Niagara Falls",
    x: 72,
    y: 34,
    date: "2019",
    reason: "Witnessed the beauty of God's creation together",
    images: ["/niagara-falls-couple-romantic.jpg", "/waterfall-nature-beautiful-scenery.jpg"],
    category: "travel",
  },
  {
    id: "dc",
    name: "Washington DC",
    x: 73,
    y: 46,
    date: "2020",
    reason: "Family trip exploring history and culture",
    images: ["/washington-dc-monuments-travel.jpg", "/family-trip-vacation-sightseeing.jpg"],
    category: "travel",
  },
  {
    id: "sandiego",
    name: "San Diego, California",
    x: 18,
    y: 58,
    date: "2021",
    reason: "West coast adventure and beach memories",
    images: ["/san-diego-beach-sunset-couple.jpg", "/california-coast-travel-vacation.jpg"],
    category: "travel",
  },
  {
    id: "honduras",
    name: "Honduras",
    x: 48,
    y: 88,
    date: "2022",
    reason: "Mission trip - serving together in faith",
    images: ["/honduras-mission-trip-ministry.jpg", "/international-travel-service-faith.jpg"],
    category: "travel",
  },
  {
    id: "orlando",
    name: "Orlando, Florida",
    x: 68,
    y: 68,
    date: "2022",
    reason: "Family vacation filled with joy and laughter",
    images: ["/orlando-florida-vacation-family.jpg", "/theme-park-fun-family-trip.jpg"],
    category: "travel",
  },
  {
    id: "fortmyers",
    name: "Fort Myers, Florida",
    x: 65,
    y: 72,
    date: "2023",
    reason: "Beach getaway and quality time together",
    images: ["/fort-myers-beach-florida-sunset.jpg", "/beach-vacation-couple-relaxing.jpg"],
    category: "travel",
  },
  {
    id: "clearwater",
    name: "Clearwater Beach, Florida",
    x: 64,
    y: 68,
    date: "2023",
    reason: "Anniversary celebration by the ocean",
    images: ["/clearwater-beach-florida-romantic.jpg", "/anniversary-beach-celebration-couple.jpg"],
    category: "travel",
  },
  {
    id: "cincinnati",
    name: "Cincinnati, Ohio",
    x: 64,
    y: 46,
    date: "2020",
    reason: "Weekend getaway exploring the city",
    images: ["/cincinnati-ohio-city-skyline.jpg", "/couple-city-exploration-date.jpg"],
    category: "travel",
  },
  {
    id: "cleveland",
    name: "Cleveland, Ohio",
    x: 68,
    y: 40,
    date: "2021",
    reason: "Family visit and city adventures",
    images: ["/cleveland-ohio-lakefront-city.jpg", "/family-visit-travel-memories.jpg"],
    category: "travel",
  },
  {
    id: "stlouis",
    name: "St. Louis, Missouri",
    x: 55,
    y: 48,
    date: "2024",
    reason: "Road trip exploring the Gateway Arch",
    images: ["/st-louis-missouri-gateway-arch.jpg", "/road-trip-couple-adventure.jpg"],
    category: "travel",
  },
  {
    id: "carbondale",
    name: "Carbondale, Illinois",
    x: 58,
    y: 50,
    date: "College Years",
    reason: "TJ's college town - Southern Illinois University, where he played basketball",
    images: ["/southern-illinois-university-campus.jpg", "/college-basketball-player-court.jpg"],
    category: "college",
  },
  {
    id: "nyc",
    name: "New York City",
    x: 76,
    y: 44,
    date: "College Years",
    reason: "TJ's college experience in the big city",
    images: ["/new-york-city-skyline-urban.jpg", "/college-student-city-life.jpg"],
    category: "college",
  },
  {
    id: "saltlake",
    name: "Salt Lake City, Utah",
    x: 28,
    y: 44,
    date: "College Years",
    reason: "TJ's college journey in the mountains",
    images: ["/salt-lake-city-utah-mountains.jpg", "/college-campus-mountain-view.jpg"],
    category: "college",
  },
  {
    id: "jackson",
    name: "Jackson, Mississippi",
    x: 58,
    y: 60,
    date: "College Years",
    reason: "TJ's college experience in the South",
    images: ["/jackson-mississippi-college-town.jpg", "/southern-college-campus-life.jpg"],
    category: "college",
  },
]

export function InteractiveJourneyMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(activeLocation === locationId ? null : locationId)
  }

  const activeLocationData = locations.find((loc) => loc.id === activeLocation)

  const getCategoryIcon = (category: Location["category"]) => {
    switch (category) {
      case "relationship":
        return <Heart className="w-4 h-4" />
      case "college":
        return <GraduationCap className="w-4 h-4" />
      case "travel":
        return <Plane className="w-4 h-4" />
      case "home":
        return <MapPin className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: Location["category"]) => {
    switch (category) {
      case "relationship":
        return "text-red-500 bg-red-100 border-red-300"
      case "college":
        return "text-blue-500 bg-blue-100 border-blue-300"
      case "travel":
        return "text-purple-500 bg-purple-100 border-purple-300"
      case "home":
        return "text-amber-500 bg-amber-100 border-amber-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Map Container with Real Map Background */}
      <div className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden border-2 border-gray-300 shadow-xl">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02538cea5390d5a598d225ac48ba7bc7-36ziKpxe84v8cdqo360NEZ9gubS2f8.jpg"
          alt="North America Map"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Location Markers */}
        {locations.map((location) => {
          const isActive = activeLocation === location.id
          const isDimmed = activeLocation !== null && !isActive

          return (
            <button
              key={location.id}
              onClick={() => handleLocationClick(location.id)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isActive ? "scale-125 z-20" : isDimmed ? "scale-75 opacity-40" : "scale-100 opacity-100 hover:scale-110"
              }`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 shadow-lg transition-all ${getCategoryColor(
                  location.category,
                )} ${isActive ? "ring-4 ring-offset-2 ring-amber-400" : ""}`}
              >
                {getCategoryIcon(location.category)}
              </div>
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-semibold text-gray-700 drop-shadow-sm bg-white/90 px-2 py-0.5 rounded">
                  {location.name.split(",")[0]}
                </span>
              </div>
            </button>
          )
        })}

        {/* Animated Car - moves to active location */}
        {activeLocationData && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out z-30"
            style={{
              left: `${activeLocationData.x}%`,
              top: `${activeLocationData.y - 8}%`,
            }}
          >
            <Car className="w-8 h-8 text-amber-600 drop-shadow-lg animate-bounce" />
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-xs font-semibold text-gray-700 mb-2">Legend</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <Heart className="w-3 h-3 text-red-500" />
              <span>Relationship Milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3 h-3 text-blue-500" />
              <span>College Years (TJ)</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-3 h-3 text-purple-500" />
              <span>Travel Adventures</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>Home</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Details Panel */}
      {activeLocationData && (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-amber-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-1">{activeLocationData.name}</h3>
                <p className="text-sm text-gray-500 font-mono">{activeLocationData.date}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setActiveLocation(null)}>
                Close
              </Button>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{activeLocationData.reason}</p>

            <div className="grid grid-cols-2 gap-4">
              {activeLocationData.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${activeLocationData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!activeLocation && (
        <div className="text-center text-sm text-gray-600 italic">
          Click on any location marker to see photos and details about our journey there
        </div>
      )}
    </div>
  )
}
