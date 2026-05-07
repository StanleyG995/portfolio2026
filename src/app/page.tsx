import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* SECTION: HERO */}
      <section id="home" className="min-h-[80vh] flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <span className="text-blue-500 font-mono mb-4 block">Based in Poland / Available 2026</span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
          CREATIVE <br /> 
          <span className="text-zinc-700">DEVELOPER</span>
        </h1>
        <p className="max-w-xl text-zinc-400 text-lg leading-relaxed">
          Nazywam się Stanisław. Przekuwam 10 lat doświadczenia w designie i WordPressie na zaawansowane interfejsy 3D budowane w React i Next.js.
        </p>
      </section>

      {/* SECTION: WORK */}
      <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold italic">Selected Works</h2>
          <span className="text-zinc-600 font-mono text-sm">/ 001 — 003</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <ProjectCard 
              title="3D Wardrobe Configurator" 
              tags={["Three.js", "R3F", "Zustand"]}
              videoSrc="/videos/szafa.mp4" 
            />
          </div>
          <div className="md:col-span-4">
            <ProjectCard 
              title="Apartment Finder" 
              tags={["Interactive SVG", "Next.js"]}
              videoSrc="/videos/mapa.mp4" 
            />
          </div>
          <div className="md:col-span-12">
            <ProjectCard 
              title="The 2026 Portfolio" 
              tags={["Next.js 15", "Tailwind v4", "Framer"]}
              videoSrc="/videos/portfolio.mp4" 
            />
          </div>
        </div>
      </section>

      {/* Tutaj potem dodamy sekcję About i Contact */}
    </div>
  );
}