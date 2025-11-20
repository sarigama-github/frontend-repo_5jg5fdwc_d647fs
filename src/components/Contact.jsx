import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const body = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.currentTarget.reset()
      } else {
        const t = await res.text()
        setStatus(`Something went wrong: ${t}`)
      }
    } catch (err) {
      setStatus(`Network error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Let’s talk</h2>
            <p className="mt-4 text-gray-600">Have a project in mind or just want to say hi? Drop a message and I’ll respond within 1–2 business days.</p>
            {status && <p className="mt-4 text-sky-700 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">{status}</p>}
          </div>

          <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
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
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-sky-700">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
