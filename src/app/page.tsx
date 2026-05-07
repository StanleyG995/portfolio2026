export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tighter">
            PROJEKTY <span className="text-zinc-500">2026</span>
          </h1>
          <p className="text-zinc-400 mt-2 font-mono">React + TypeScript + Three.js</p>
        </header>

        {/* Tu zaraz powstanie Twój Grid z filmami */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800">
            <p className="text-zinc-600 italic">Miejsce na wideo szafy 3D...</p>
          </div>
          <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800">
            <p className="text-zinc-600 italic">Miejsce na wideo mapy mieszkań...</p>
          </div>
        </section>
      </div>
    </main>
  );
}