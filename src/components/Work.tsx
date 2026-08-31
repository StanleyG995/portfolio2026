import React from "react";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">
            01. Work
          </h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Selected Projects
          </p>
        </div>
        <span className="text-zinc-600 font-mono text-sm">/ 001 — 002</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <ProjectCard
            title="Bespoke 3D Wardrobe Configurator"
            description="Interactive parametric customizer built with React Three Fiber, featuring real-time dimensional constraints, dynamic component management, and global state synchronization via Zustand."
            tags={["Next.js", "TailwindCSS", "Three.js", "Zustand"]}
            videoSrc="/Wardrobe.webm"
            projectStatus='COMPLETE'
            github='https://github.com/StanleyG995/wardrobe-configurator'
            live='https://wardrobe-configurator-liard.vercel.app/'
          />
        </div>
        <div className="md:col-span-6">
          <ProjectCard
            title="Interactive PropTech Platform"
            description="A cutting-edge platform for interactive property visualization and management."
            tags={["Interactive SVG", "Next.js", "Supabase", "TailwindCSS"]}
            videoSrc="/proptech-thumbnail.webm"
            projectStatus='IN PROGRESS'
            github='https://github.com/StanleyG995/interactive-proptech-platform'
          />
        </div>
      </div>
    </section>
  );
}
