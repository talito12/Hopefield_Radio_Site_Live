"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { popupMessages } from "@/config/popups"

export function PopupMessages() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isDismissed && isVisible) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % popupMessages.length)
      }, 10000)

      return () => clearInterval(interval)
    }
  }, [isDismissed, isVisible])

  if (!isVisible || isDismissed) return null

  const message = popupMessages[currentMessage]

  return (
    <div className="fixed bottom-8 right-8 z-50 max-w-xs md:max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm">
        {message.image && (
          <div className="relative w-full h-48">
            <Image src={message.image || "/placeholder.svg"} alt={message.type} fill className="object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs font-mono tracking-wider text-amber-600 dark:text-amber-400 uppercase font-semibold">
              {message.type}
            </span>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-gray-900 dark:text-gray-100 mb-4 text-pretty leading-relaxed font-medium">
            {message.content}
          </p>
          {message.author && (
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-medium">— {message.author}</p>
          )}
          <Link
            href={message.link}
            className="text-sm font-mono tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors underline underline-offset-4 font-semibold"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  )
}
