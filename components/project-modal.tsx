import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    details: string
    credits: string
    gallery?: string[]
    citation: string
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!project) return null

  const slides = project.gallery?.map(src => ({ src })) || []

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="relative max-h-[80vh]">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain object-top w-full h-full cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
            </div>
            <div className="space-y-4">
              <p className="font-semibold">{project.description}</p>
              <div className="prose prose-sm">
                <h4 className="font-semibold">Description</h4>
                <p>{project.details}</p>
              </div>
              {project.credits && (
                <div className="prose prose-sm">
                  <h4 className="font-semibold">Credits</h4>
                  <p className="text-gray-600">{project.credits}</p>
                </div>
              )}
              {project.citation && (
                <div className="prose prose-sm italic mt-4">
                  <p>"{project.citation}"</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {slides.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
        />
      )}
    </>
  )
} 
