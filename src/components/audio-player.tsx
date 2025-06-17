"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface AudioPlayerProps {
  title: string
  description: string
  audioDuration: string
  audioSrc?: string
}

export default function AudioPlayer({
  title,
  description,
  audioDuration,
  audioSrc = "/sample-audio.mp3",
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(audioSrc)
    audioRef.current = audio

    audio.addEventListener("loadedmetadata", () => {
      setTotalDuration(audio.duration)
    })

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime)
    })

    audio.addEventListener("ended", () => {
      setIsPlaying(false)
      setCurrentTime(0)
    })

    return () => {
      audio.pause()
      audio.src = ""
      audio.removeEventListener("loadedmetadata", () => {})
      audio.removeEventListener("timeupdate", () => {})
      audio.removeEventListener("ended", () => {})
    }
  }, [audioSrc])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeChange = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="border border-gray-100 rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full mr-4 flex-shrink-0"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </Button>
        <div>
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 w-10">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={totalDuration || 100}
            step={0.1}
            onValueChange={handleTimeChange}
            className="flex-1"
          />
          <span className="text-xs text-gray-500 w-10">
            {totalDuration ? formatTime(totalDuration) : audioDuration}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleMute}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="w-24" />
        </div>
      </div>
    </div>
  )
}

