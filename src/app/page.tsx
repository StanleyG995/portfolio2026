import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* SECTION: HERO */}
      <section id="home" className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 items-center px-6 max-w-6xl mx-auto pt-20">
        
        {/* Lewa strona: Tekst (8 kolumn) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex flex-col mb-6">
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">
              Stanisław G. — Based in Poland
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
            Design-driven <span className="text-white">Frontend Engineer</span> with 7 years of visual craft. 
            After 6 years of mastering WordPress, I now architect high-performance React applications and 
            immersive 3D experiences where <span className="italic">logic meets high-end aesthetics.</span>
          </p>
        </div>

        {/* Prawa strona: Floating Stats (4 kolumny) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-12 border-l border-zinc-900/50 pl-12 h-fit">
          <div className="group">
            <span className="block text-4xl font-bold italic text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">7y</span>
            <span className="text-[14px] uppercase tracking-[0.3em] text-zinc-600 font-mono">Visual Design Craft</span>
          </div>
          <div className="group">
            <span className="block text-4xl font-bold italic text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">6y</span>
            <span className="text-[14px] uppercase tracking-[0.3em] text-zinc-600 font-mono">WordPress Ecosystem</span>
          </div>
          <div className="group">
            <span className="block text-4xl font-bold italic text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">100%</span>
            <span className="text-[14px] uppercase tracking-[0.3em] text-zinc-600 font-mono">React & 3D Focused</span>
          </div>
        </div>
      </section>

      {/* SECTION: WORK */}
      <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold italic text-white">Selected Works</h2>
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

      <Contact/>
    </div>
  );
}