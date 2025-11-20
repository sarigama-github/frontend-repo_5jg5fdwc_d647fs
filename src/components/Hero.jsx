import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Background gradient grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.04] [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-sky-200 shadow"
            >
              Disponible pour des missions freelance
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Salut, je m'appelle <span className="text-sky-300">Florian Anthony</span>.
              <br />
              <span className="text-slate-200">Consultant en Gestion et Automatisation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-xl p-4 md:p-5 shadow"
            >
              Je transforme vos processus répétitifs en systèmes automatisés. Résultats : -60% de temps, -75% d'erreurs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 flex items-center gap-3"
            >
              <a href="#projects" className="inline-flex items-center rounded-full bg-sky-400 text-slate-900 px-5 py-2.5 text-sm font-medium shadow hover:bg-sky-300 transition-colors">Voir mes projets</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 text-sky-200 ring-1 ring-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition-colors">Me contacter</a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1020]/40 to-[#0b1020]" />
    </section>
  )
}
