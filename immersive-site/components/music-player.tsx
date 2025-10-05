"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react"
import { useMusic } from "@/lib/music-context"
import { playlist } from "@/config/playlist"

export function MusicPlayer() {
  const { isPlaying, togglePlay, audioRef } = useMusic()
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const currentTrack = playlist[currentTrackIndex]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.src = currentTrack.src
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [volume, audioRef, currentTrack, isPlaying])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
  }

  const previousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
  }

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className="bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 shadow-2xl backdrop-blur-sm flex items-center gap-4">
        {playlist.length > 1 && (
          <button
            onClick={previousTrack}
            className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            aria-label="Previous track"
          >
            <SkipBack size={18} />
          </button>
        )}

        <button
          onClick={togglePlay}
          className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {playlist.length > 1 && (
          <button
            onClick={nextTrack}
            className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            aria-label="Next track"
          >
            <SkipForward size={18} />
          </button>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
            className="w-20 h-1 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-600"
          />
        </div>

        <span className="text-xs font-mono tracking-wider text-gray-700 dark:text-gray-300 font-semibold">
          {currentTrack.title}
        </span>
      </div>

      <audio ref={audioRef} loop src={currentTrack.src} />
    </div>
  )
}
