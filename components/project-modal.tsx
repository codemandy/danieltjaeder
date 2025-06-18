import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    details: string
    credits: string
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
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
              className="object-contain w-full h-full"
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
                <p>{project.credits}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
