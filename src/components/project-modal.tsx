import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    details: string
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">{project.description}</p>
            <div className="prose prose-sm">
              <p>{project.details}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
