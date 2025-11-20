import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">À propos</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Consultant en Gestion et Automatisation, je transforme les processus métier en systèmes automatisés. Mes solutions sur mesure ont réduit jusqu'à 60% du temps administratif et 75% des erreurs manuelles.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Formé en commerce puis en informatique de gestion, j'ai développé une expertise unique en combinant compréhension métier et maîtrise technique. Spécialisé en Excel/VBA, j'ai élargi mes compétences au développement web, à l'intégration d'IA et aux architectures de données.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Chaque projet suit une méthodologie éprouvée : diagnostic approfondi, conception sur mesure, formation des équipes et support post-déploiement pour garantir l'adoption.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-100 to-gray-50 p-2 shadow-inner">
              <div className="h-full w-full rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <span className="text-sky-700 font-medium">Portrait de Florian</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
