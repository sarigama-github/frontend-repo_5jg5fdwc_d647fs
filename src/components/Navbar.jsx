import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold text-gray-800 tracking-tight text-lg">
            <span className="text-sky-600">{`<`}</span> Portfolio <span className="text-sky-600">{`/>`}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-sky-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-sky-700 transition-colors">
              Me contacter
            </a>
          </div>

          <button className="md:hidden inline-flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-2 py-2 rounded text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="block px-2 py-2 rounded bg-sky-600 text-white text-center" onClick={() => setOpen(false)}>
              Me contacter
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
