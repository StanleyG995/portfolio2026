'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
        <a href="#home" className="text-xs uppercase tracking-widest hover:text-blue-500 transition-colors">Intro</a>
        <a href="#work" className="text-xs uppercase tracking-widest hover:text-blue-500 transition-colors">Work</a>
        <a href="#about" className="text-xs uppercase tracking-widest hover:text-blue-500 transition-colors">About</a>
        <div className="h-4 w-[1px] bg-white/20" />
        <a href="#contact" className="text-xs uppercase tracking-widest font-bold text-blue-400">Contact</a>
      </div>
    </nav>
  );
}