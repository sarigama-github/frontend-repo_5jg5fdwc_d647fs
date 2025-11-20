import { motion, AnimatePresence } from 'framer-motion'

export default function Splash({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1020] text-slate-100 overflow-hidden"
        >
          {/* Decorative background blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08)_0,transparent_25%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08)_0,transparent_25%),radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_100%)]" />
          </div>

          {/* Logo / Welcome motion */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5"
            >
              <div className="h-16 w-16 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400/80 to-indigo-400/80" />
              </div>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl font-montserrat tracking-tight">
              Bienvenue
            </h1>
            <p className="mt-2 text-slate-300/80 font-sans">
              Chargement de l’expérience de Florian…
            </p>

            <motion.div
              className="mt-6 h-1.5 w-40 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.div
                className="h-full w-1/3 bg-gradient-to-r from-sky-400 to-indigo-400"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
