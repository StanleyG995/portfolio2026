import React from 'react'

export default function Hero() {
  return (
<section id="home" className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-12 items-center px-6 max-w-6xl mx-auto pt-20">
        
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex flex-col mb-6">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">
              Stanisław Goral — Based in Poland
            </span>
            <span className="text-zinc-600 font-mono text-xs uppercase tracking-tight">
              Available for projects 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-10">
            CREATIVE <br /> 
            <span className="text-zinc-700">DEVELOPER</span>
          </h1>

          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
            <span className="text-white">Frontend Developer</span> with a 7-year background in visual design. Building on years of experience with WordPress, I am now focused on creating performant web applications using React and Next.js. My goal is to bridge the gap between precise design and functional, modern code.
          </p>
        </div>
    
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-12 border-l border-zinc-900/50 pl-12 h-fit">
          <div className="group">
            <span className="block text-4xl font-bold italic text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">8y</span>
            <span className="text-[14px] uppercase tracking-[0.3em] text-zinc-600 font-mono">Design Experience</span>
          </div>
          <div className="group">
            <span className="block text-4xl font-bold italic text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">6y</span>
            <span className="text-[14px] uppercase tracking-[0.3em] text-zinc-600 font-mono">Web Development (WP)</span>
          </div>
          <div className="group">
            <span className="block text-4xl font-bold italic text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">Next.js</span>
            <span className="text-[14px] uppercase tracking-[0.3em] text-zinc-600 font-mono">Current Focus</span>
          </div>
        </div>
      </section>
  )
}
