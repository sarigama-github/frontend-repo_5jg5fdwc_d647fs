import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700 shadow">Available for freelance</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Hi, I’m <span className="text-sky-700">Your Name</span>. I design and build digital products.
            </h1>
            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed bg-white/70 backdrop-blur rounded-xl p-4 md:p-5 shadow">
              Modern, clean, minimalistic interfaces with a focus on performance and delightful details. Fintech, SaaS, and e‑commerce friendly.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-sky-700 transition-colors">View work</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/80 text-sky-700 ring-1 ring-sky-200 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
    </section>
  )
}
