import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Work from "@/components/Work"
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

import { Reveal } from "@/components/Reveal"

export default function Home() {
  return (
    <div className="text-white selection:bg-blue-500 selection:text-white">
      <Reveal><Navbar/></Reveal>
      <Reveal><Hero/></Reveal>
      <Reveal><Work/></Reveal>
      <Reveal><About/></Reveal>
      <Reveal><TechStack/></Reveal>
      <Reveal><Contact/></Reveal>
    </div>
  );
}