import { motion } from 'framer-motion'

const services = [
  {
    title: 'Automatisation de processus',
    desc: 'De l\'audit à la mise en production : macro Excel/VBA, scripts PowerShell, intégrations API, orchestrations et alerting.',
  },
  {
    title: 'Sites web avec IA',
    desc: 'Intégration de chatbots, recommandations personnalisées et analyses prédictives pour des expériences intelligentes.',
  },
  {
    title: 'Architecture de données',
    desc: 'Bases MySQL / Supabase et APIs RESTful Node.js / Python. Centralisation des données et automatisation de la collecte.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
