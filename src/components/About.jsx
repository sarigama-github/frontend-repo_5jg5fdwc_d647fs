export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">About me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a product-focused developer with a love for minimal design and clear user experiences. I’ve worked across fintech and e‑commerce, building performant interfaces and robust backend services. I care about craft, accessibility, and shipping value quickly.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="text-3xl font-semibold text-sky-700">5+ yrs</p>
                <p className="text-sm text-sky-900/70">Experience</p>
              </div>
              <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="text-3xl font-semibold text-sky-700">30+</p>
                <p className="text-sm text-sky-900/70">Projects</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-100 to-gray-50 p-2 shadow-inner">
              <div className="h-full w-full rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <span className="text-sky-700 font-medium">Your portrait here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
