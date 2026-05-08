import React from 'react'

const stack = [
  {
    category: "Design & UX",
    tools: ["Figma", "Adobe Suite", "Visual Hierarchy", "Prototyping", "Motion"],
    badge: "8 Years Exp.",
    accent: "text-amber-500/80",
    dot: "bg-amber-500/80"
  },
  {
    category: "Modern Frontend",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js",],
    badge: "Current Focus",
    accent: "text-blue-500",
    dot: "bg-blue-500"
  },
  {
    category: "Web Ecosystem",
    tools: ["Hosting", "WordPress", "SEO", "Performance"],
    badge: "6 Years Exp.",
    accent: "text-emerald-500/80",
    dot: "bg-emerald-500/80"
  }
]

export default function TechStack() {
  return (
    <section className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">03. Stack & Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Tools of the trade</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stack.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[32px] bg-zinc-900/10 border border-zinc-800/60 hover:bg-zinc-900/30 transition-all duration-500"
            >
              <div className="mb-8">
                <span className={`text-xs font-bold font-mono uppercase tracking-widest ${item.accent} block mb-2`}>
                  {item.badge}
                </span>
                <h4 className="text-2xl font-bold text-white">{item.category}</h4>
              </div>
              
              <ul className="space-y-3">
                {item.tools.map((tool) => (
                  <li 
                    key={tool}
                    className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 flex items-center text-base"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 ${item.dot}`} />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}