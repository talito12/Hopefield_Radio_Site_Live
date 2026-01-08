"use client"

import { useState } from "react"
import { Heart, Baby, MapPin, Plane, Syringe as Ring, Church, Car } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TimelineEvent {
  year: string
  title: string
  location: string
  description: string
  icon: any
  image: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "High School",
    title: "We Met",
    location: "Mansfield, OH",
    description: "Our story began in high school in Mansfield, where we first crossed paths.",
    icon: Heart,
    image: "/Mansfield_Senior_High.jpg",
  },
  {
    year: "2016",
    title: "Got Together",
    location: "Mansfield, OH",
    description: "We officially became a couple and started our journey together in Mansfield.",
    icon: Heart,
    image: "/early_days.jpg",
  },
  {
    year: "2017",
    title: "Moved to Columbus",
    location: "Columbus, OH",
    description: "We took a big step and moved to Columbus to start our new life together.",
    icon: MapPin,
    image: "/Moved_Columbus.jpeg",
  },
  {
    year: "2018",
    title: "First Child",
    location: "Columbus, OH",
    description: "God blessed us with our first child, beginning our journey as parents.",
    icon: Baby,
    image: "/Ahsata.jpeg",
  },
  {
    year: "2019",
    title: "Fort Myers Trip",
    location: "Fort Myers, FL",
    description: "We traveled to Fort Myers for a beautiful family vacation by the beach.",
    icon: Plane,
    image: "/first_child.jpg",
  },
  {
    year: "2020",
    title: "Second Child",
    location: "Columbus, OH",
    description: "Our family grew with the arrival of our second child, doubling our blessings.",
    icon: Baby,
    image: "/Ezra.jpeg",
  },
  {
    year: "2020",
    title: "Got Engaged",
    location: "Columbus, OH",
    description: "TJ proposed and we got engaged in Columbus, taking the next step in our journey.",
    icon: Ring,
    image: "/Engagement.jpeg",
  },
  {
    year: "2021",
    title: "Got Married",
    location: "Columbus, OH",
    description: "We said 'I do' and became husband and wife in a beautiful ceremony in Columbus.",
    icon: Church,
    image: "/Wedding_LAUGH.jpeg",
  },
  {
    year: "2021",
    title: "Honeymoon",
    location: "San Diego, CA",
    description: "We celebrated our marriage with a romantic honeymoon in beautiful San Diego.",
    icon: Plane,
    image: "/Honey_Moon.jpeg",
  },
  {
    year: "2022",
    title: "1st Anniversary",
    location: "Washington DC",
    description: "We celebrated our first year of marriage with a trip to Washington DC.",
    icon: Heart,
    image: "/1st_Anniversary.jpeg",
  },
  {
    year: "2023",
    title: "2nd Anniversary",
    location: "Cleveland, OH",
    description: "Our second anniversary took us to Cleveland for a special celebration.",
    icon: Heart,
    image: "/2nd_Anniversary.jpeg",
  },
  {
    year: "2024",
    title: "3rd Anniversary",
    location: "Toronto, Canada",
    description: "We celebrated three years of marriage with an international trip to Toronto.",
    icon: Heart,
    image: "/3rd_Anniversary.jpeg",
  },
  {
    year: "2024",
    title: "Universal Studios",
    location: "Orlando, FL",
    description: "A magical family trip to Universal Studios in Orlando with our children.",
    icon: Plane,
    image: "/Universal_Studios.jpeg",
  },
  {
    year: "2025",
    title: "4th Anniversary",
    location: "San Diego, CA",
    description: "Celebrating four years of marriage back in San Diego, where we honeymooned.",
    icon: Heart,
    image: "/4th_Anniversary.jpeg",
  },
]

export function RelationshipTimeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleEventClick = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  const selectedEvent = selectedIndex !== null ? timelineEvents[selectedIndex] : null

  return (
    <div className="space-y-8">
      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl font-serif">
                  <selectedEvent.icon className="w-6 h-6 text-amber-600" />
                  {selectedEvent.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gradient-to-br from-pink-100 to-purple-200 rounded-lg overflow-hidden">
                  <img
                    src={selectedEvent.image || "/placeholder.svg"}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-amber-600 font-semibold mb-2">
                    {selectedEvent.year} • {selectedEvent.location}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Timeline with Car */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600" />

        {/* Car Icon - moves vertically */}
        {selectedIndex !== null && (
          <div
            className="absolute left-8 -translate-x-1/2 transition-all duration-700 ease-in-out z-20"
            style={{
              top: `${(selectedIndex / (timelineEvents.length - 1)) * 100}%`,
            }}
          >
            <div className="bg-white rounded-full p-2 shadow-lg border-2 border-amber-500">
              <Car className="w-5 h-5 text-amber-600 rotate-90" />
            </div>
          </div>
        )}

        {/* Timeline Events */}
        <div className="space-y-6 pl-20">
          {timelineEvents.map((event, index) => (
            <button
              key={index}
              onClick={() => handleEventClick(index)}
              className={`w-full text-left transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-amber-50 border-2 border-amber-500 shadow-lg scale-105"
                  : "bg-white/80 border border-gray-200 hover:bg-white hover:shadow-md"
              } rounded-lg p-4`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedIndex === index ? "bg-amber-500" : "bg-gray-200"
                  }`}
                >
                  <event.icon className={`w-6 h-6 ${selectedIndex === index ? "text-white" : "text-gray-600"}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-amber-600 mb-1">{event.year}</p>
                  <h4 className="text-lg font-serif text-gray-900 mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
