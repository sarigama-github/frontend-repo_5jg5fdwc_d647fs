import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Splash from './components/Splash'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen text-slate-100 bg-[#0b1020] relative font-sans">
      <Splash show={showSplash} />

      {/* Global decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[40rem] bg-gradient-to-t from-sky-500/10 to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_100%)]" />
      </div>

      <Navbar />
      <main className={`pt-16 transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-300/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            Construit avec passion. © {new Date().getFullYear()} Florian Anthony — Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-300 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-sky-300 transition-colors">GitHub</a>
            <a href="#" className="hover:text-sky-300 transition-colors">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
