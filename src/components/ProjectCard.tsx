"use client"

import { useRef, useEffect } from "react"

interface ProjectCardProps {
  title: string
  tags: string[]
  videoSrc: string
  projectStatus: 'IN PROGRESS' | 'COMPLETE' | 'PLANNED'
  github?: string
  live?: string
}

export default function ProjectCard({ title, tags, videoSrc, projectStatus, github, live }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(err => console.log("Video autoplay blocked", err))
  }, [])

  const statusColors = {
    'COMPLETE': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    'IN PROGRESS': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    'PLANNED': 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
  }

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between">
      
      <div>
    
        <div className="aspect-video w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            poster="/video-placeholder.jpg"
          />
        </div>

        <div className="p-6 pb-4">
          {/* Tagi technologiczne */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase tracking-widest bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {title}
            </h3>
            <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border whitespace-nowrap ${statusColors[projectStatus]}`}>
              {projectStatus}
            </span>
          </div>
        </div>
      </div>

      
      {(github || live) && (
        <div className="px-6 pb-4 pt-4 flex items-center gap-3 border-t border-zinc-200/60 dark:border-zinc-800/60 mt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-200/70 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3.5 py-2 rounded-xl transition-colors"
            >
          
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-xl transition-colors shadow-sm shadow-blue-500/20"
            >
            
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0l12 21H0z" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      )}
      
    </div>
  )
}