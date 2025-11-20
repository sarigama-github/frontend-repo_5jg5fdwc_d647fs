import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Votre Nom. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-700">LinkedIn</a>
            <a href="#" className="hover:text-sky-700">GitHub</a>
            <a href="#" className="hover:text-sky-700">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
