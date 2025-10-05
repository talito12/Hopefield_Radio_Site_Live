"use client"

import Image from "next/image"

export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/images/hfbg_01.png"
        alt="Hopefield Radio Studio"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  )
}
