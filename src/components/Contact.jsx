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
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Contact</h2>
            <p className="mt-4 text-gray-600">Prêt à automatiser vos processus ? Discutons de votre projet et transformons vos défis en solutions efficaces.</p>
            {status && <p className="mt-4 text-sky-700 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">{status}</p>}
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Nom</label>
                <input name="name" required className="w-full rounded-xl border-gray-200 focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-xl border-gray-200 focus:ring-sky-500 focus:border-sky-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-xl border-gray-200 focus:ring-sky-500 focus:border-sky-500" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-sky-700">Envoyer</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
