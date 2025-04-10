import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample music data
const musicItems = [
  {
    id: 1,
    title: "Autumn Leaves",
    album: "Seasonal Variations",
    year: "2023",
    image: "/placeholder.svg?height=400&width=400",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Winter's Embrace",
    album: "Seasonal Variations",
    year: "2023",
    image: "/placeholder.svg?height=400&width=400",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Spring Awakening",
    album: "Seasonal Variations",
    year: "2023",
    image: "/placeholder.svg?height=400&width=400",
    duration: "3:58",
  },
  {
    id: 4,
    title: "Summer Dreams",
    album: "Seasonal Variations",
    year: "2023",
    image: "/placeholder.svg?height=400&width=400",
    duration: "5:10",
  },
]

export default function MusicGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {musicItems.map((item) => (
        <div key={item.id} className="group relative">
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Play className="h-5 w-5 ml-0.5" />
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{item.title}</h3>
            <p className="text-sm text-gray-500">
              {item.album} ({item.year})
            </p>
            <p className="text-xs text-gray-400 mt-1">{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

