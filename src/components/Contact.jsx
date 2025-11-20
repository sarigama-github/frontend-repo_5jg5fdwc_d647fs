import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Envoi en cours...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const body = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('Merci ! Je vous répondrai sous 1–2 jours ouvrés.')
        e.currentTarget.reset()
      } else {
        const t = await res.text()
        setStatus(`Une erreur est survenue : ${t}`)
      }
    } catch (err) {
      setStatus(`Erreur réseau : ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Contact</h2>
            <p className="mt-4 text-slate-300">Prêt à automatiser vos processus ? Discutons de votre projet et transformons vos défis en solutions efficaces.</p>
            {status && <p className="mt-4 text-sky-200 bg-sky-400/10 ring-1 ring-sky-400/30 rounded-xl px-4 py-3">{status}</p>}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="bg-white/5 rounded-2xl ring-1 ring-white/10 p-6 shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-200 mb-1">Nom</label>
                <input name="name" required className="w-full rounded-xl border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-400 focus:ring-sky-400 focus:border-sky-400" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-xl border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-400 focus:ring-sky-400 focus:border-sky-400" placeholder="vous@exemple.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-200 mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-xl border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-400 focus:ring-sky-400 focus:border-sky-400" placeholder="Parlez-moi de votre projet..." />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-sky-400 text-slate-900 px-5 py-2.5 text-sm font-medium shadow hover:bg-sky-300">Envoyer</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
