import { motion } from 'framer-motion'

const stacks = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Python', 'Flask', 'FastAPI', 'Django', 'Laravel', '.NET'],
  'Bases de données': ['MySQL', 'PostgreSQL', 'Supabase'],
  'CMS & Outils': ['WordPress', 'Excel/VBA']
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Compétences</h2>
        <p className="mt-2 text-slate-300">Voici quelques technologies sur lesquelles j'ai travaillé :</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {Object.entries(stacks).map(([group, items], gi) => (
            <motion.div
              key={group}
              className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 backdrop-blur"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-sky-200">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="inline-flex items-center rounded-full bg-white/10 text-sky-100 ring-1 ring-white/10 px-3 py-1 text-xs">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
