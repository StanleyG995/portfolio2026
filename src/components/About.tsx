import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black/40 overflow-hidden">
  
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
        
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">
                02. Professional Background
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Crafting interfaces where <br />
                <span className="text-zinc-500 italic font-light">vision meets execution.</span>
              </h3>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-2xl">
              <p>
                My journey in the digital space spans over <span className="text-white">7 years of visual design</span>. 
                This foundation allows me to look at code through a different lens—focusing on user emotion, 
                pixel-perfect precision, and seamless transitions.
              </p>
              <p>
                After <span className="text-white">6 years of architecting web solutions</span> within the 
                WordPress ecosystem, I transitioned to modern frontend engineering. I moved to 
                <span className="text-white font-semibold"> React and Next.js</span> to gain 
                full technical control over performance and interactive experiences.
              </p>
              <p className="text-sm border-l border-blue-500 pl-4 py-1 italic">
                I don’t just build websites; I build digital products that feel premium and function flawlessly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl backdrop-blur-md">
              <h4 className="text-white font-bold mb-2">Design Maturity</h4>
              <p className="text-zinc-500 text-sm">
                I understand visual hierarchy and UX patterns. I take full responsibility for the UI, 
                minimizing the gap between design and production.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl backdrop-blur-md">
              <h4 className="text-white font-bold mb-2">Technical Evolution</h4>
              <p className="text-zinc-500 text-sm">
                Leveraging my experience to build modern applications with Next.js, 
                focusing on clean architecture and scalable components.
              </p>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl backdrop-blur-md">
              <h4 className="text-blue-400 font-bold mb-2 text-lg italic">The Next Step</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Currently immersing myself in <span className="text-white">Three.js</span> and 
                <span className="text-white font-bold"> React Three Fiber</span> to create 
                next-level spatial interfaces.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}