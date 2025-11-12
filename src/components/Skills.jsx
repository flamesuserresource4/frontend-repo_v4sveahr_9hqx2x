import { motion } from 'framer-motion'
import { Code, Palette, Rocket, Sparkles } from 'lucide-react'

const skills = [
  { icon: Code, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'Design System', 'Prototyping', 'UX Writing'] },
  { icon: Rocket, title: 'Tools', items: ['Vercel', 'Git', 'Notion', 'Jira'] },
  { icon: Sparkles, title: 'Soft Skills', items: ['Communication', 'Leadership', 'Problem Solving', 'Adaptability'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Keahlian
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <s.icon className="h-6 w-6 text-gray-800" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {s.items.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
