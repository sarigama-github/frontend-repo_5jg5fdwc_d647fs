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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">À propos de moi</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Développeur orienté produit, passionné par le design minimal et les expériences claires. Expérience en fintech et e‑commerce, je construis des interfaces performantes et des services backend robustes. J'accorde de l'importance à la qualité, à l'accessibilité et à une livraison rapide de valeur.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="text-3xl font-semibold text-sky-700">5+ ans</p>
                <p className="text-sm text-sky-900/70">Expérience</p>
              </div>
              <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="text-3xl font-semibold text-sky-700">30+</p>
                <p className="text-sm text-sky-900/70">Projets</p>
              </div>
            </div>
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
                <span className="text-sky-700 font-medium">Votre portrait ici</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
