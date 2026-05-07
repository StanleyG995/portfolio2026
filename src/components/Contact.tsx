'use client';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hello@sgcode.dev";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-zinc-500 uppercase text-xs tracking-[0.3em] mb-8">Let's build something together.</h2>
      
      <div className="group relative inline-block">
        <button 
          onClick={copyToClipboard}
          className="text-4xl md:text-7xl font-bold tracking-tighter hover:text-blue-500 transition-all duration-300"
        >
          {email}
        </button>
        
        <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm font-mono transition-opacity duration-300 ${copied ? 'opacity-100 text-blue-400' : 'opacity-0'}`}>
          {copied ? 'Skopiowano!' : 'Kliknij, aby skopiować'}
        </span>
      </div>

      <div className="mt-24 flex justify-center gap-12 text-zinc-500 font-mono text-sm">
  <a href="https://linkedin.com/in/twoj-profil" className="hover:text-white transition-colors">LinkedIn</a>
  <a href="https://github.com/twoj-github" className="hover:text-white transition-colors">GitHub</a>
  <a href="/Stanislaw_G_CV.pdf" target="_blank" className="hover:text-blue-400 transition-colors border-b border-zinc-800">Download CV</a>
</div>
    </section>
  );
}