import React from 'react'

function TechStacks() {
  return (
    <main>
        <div id="Stacks" className="w-full max-w-5xl mx-auto mt-32 px-6">
            <div className="p-8 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Tech Stack</h2>
                <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto">
                Here are the technologies powering <span className="font-semibold text-white">NueKey</span>.
                Each tool was chosen to provide speed, flexibility, and a beautiful user experience.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">React.js</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">Tailwind CSS</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">Firebase</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">Vite</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">Lucide Icons</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">React Router</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">Netlify / Vercel</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-center">
                    <p className="font-semibold text-white">Mock API</p>
                </div>
                </div>
            </div>
            </div>
    </main>
  )
}

export default TechStacks