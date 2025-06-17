'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProjectModal from '@/components/project-modal'
import type { Project as ProjectType } from '@/payload-types'
import { ChevronRight } from 'lucide-react'

interface ProjectListProps {
  projects: ProjectType[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3)
  }

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project) => {
          const imageUrl = typeof project.image === 'object' && project.image?.url ? project.image.url : '/placeholder.png'
          
          return (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative aspect-video mb-4 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          )
        })}
      </div>

      {visibleProjects < projects.length && (
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="group"
            onClick={loadMoreProjects}
          >
            Load More Projects
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  )
} 
