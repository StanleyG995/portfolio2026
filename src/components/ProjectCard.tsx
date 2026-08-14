"use client"

import { useRef, useEffect } from "react"

interface ProjectCardProps {
  title: string
  tags: string[]
  videoSrc: string
}

export default function ProjectCard({ title, tags, videoSrc }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Uruchomienie odtwarzania od razu po zamontowaniu komponentu
    videoRef.current?.play().catch(err => console.log("Video autoplay blocked", err))
  }, [])

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
      
      <div className="aspect-video w-full overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/video-placeholder.jpg"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
    </div>
  )
}