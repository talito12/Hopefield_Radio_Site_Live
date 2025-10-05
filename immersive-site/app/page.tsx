import { FloatingNav } from "@/components/floating-nav"
import { BackgroundVideo } from "@/components/background-video"
import { PopupMessages } from "@/components/popup-messages"
import { MusicPlayer } from "@/components/music-player"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundVideo />
      <FloatingNav />
      <MainContent />
      <PopupMessages />
      <MusicPlayer />
    </main>
  )
}
