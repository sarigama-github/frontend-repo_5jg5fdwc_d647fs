import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 'Avancé' },
  { name: 'FastAPI', level: 'Avancé' },
  { name: 'MongoDB', level: 'Avancé' },
  { name: 'TypeScript', level: 'Intermédiaire' },
  { name: 'Tailwind CSS', level: 'Avancé' },
  { name: 'Framer Motion', level: 'Intermédiaire' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Compétences</h2>
        <p className="mt-2 text-gray-600">Focalisé sur la création de produits accessibles et agréables.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="rounded-2xl border border-sky-100 bg-sky-50 p-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="font-medium text-sky-800">{s.name}</p>
              <p className="text-sm text-sky-900/70">{s.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
