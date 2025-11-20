const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'FastAPI', level: 'Advanced' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Skills</h2>
        <p className="mt-2 text-gray-600">Focused on building delightful, accessible products.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(s => (
            <div key={s.name} className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
              <p className="font-medium text-sky-800">{s.name}</p>
              <p className="text-sm text-sky-900/70">{s.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
