import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Holographic ID Card',
    desc: 'Eksperimen UI futuristik dengan efek holografik dan interaksi micro-animation.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Fintech Dashboard',
    desc: 'Dasbor transaksi real-time dengan visualisasi data responsif.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: '3D Web Experience',
    desc: 'Integrasi Spline 3D untuk pengalaman hero interaktif yang ringan.',
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Proyek Pilihan
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a key={p.title} href={p.link} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur shadow-sm">
              <div className="aspect-[16/11] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
