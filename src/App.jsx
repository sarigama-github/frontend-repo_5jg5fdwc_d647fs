import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Construit avec Vite + React et Tailwind CSS. © {new Date().getFullYear()} Florian Anthony. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-700">LinkedIn</a>
            <a href="#" className="hover:text-sky-700">GitHub</a>
            <a href="#" className="hover:text-sky-700">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
