import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projects', label: 'Projets' },
  { href: '#services', label: 'Services' },
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 ring-1 ring-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-slate-100 text-lg">
            <span className="text-sky-300">{`<`}</span> Florian Anthony <span className="text-sky-300">{`/>`}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-300/80 hover:text-sky-200 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-sky-500 text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-sky-400 transition-colors">
              Me contacter
            </a>
          </div>

          <button className="md:hidden inline-flex items-center p-2 rounded-md text-slate-200 hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-2 py-2 rounded text-slate-100 hover:bg-white/5" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="block px-2 py-2 rounded bg-sky-500 text-slate-900 text-center" onClick={() => setOpen(false)}>
              Me contacter
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
