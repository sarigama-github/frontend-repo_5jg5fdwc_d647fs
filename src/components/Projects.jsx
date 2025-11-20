import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Tableau de bord Fintech',
    desc: "Plateforme orientée analytics avec émission de cartes et paiements.",
    tags: ['React', 'Tailwind', 'FastAPI'],
    link: '#'
  },
  {
    title: 'Starter E‑commerce',
    desc: 'Boutique minimaliste avec backend headless.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Site marketing SaaS',
    desc: 'Système de landing pages propre et performant.',
    tags: ['Vite', 'Framer Motion'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Travaux sélectionnés</h2>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-sky-700">Travaillons ensemble</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group relative rounded-2xl border border-sky-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-sky-100 to-gray-50 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">{p.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200 px-2.5 py-1 text-xs">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
