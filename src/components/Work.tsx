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
        <span className="text-zinc-600 font-mono text-sm">/ 001 — 004</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <ProjectCard
            title="3D Wardrobe Configurator"
            tags={["Three.js", "R3F", "Zustand"]}
            videoSrc="/Wardrobe.webm"
          />
        </div>
        <div className="md:col-span-4">
          <ProjectCard
            title="Apartment Finder"
            tags={["Interactive SVG", "Next.js"]}
            videoSrc="/developer-thumbnail.webm"
          />
        </div>
      </div>
    </section>
  );
}
