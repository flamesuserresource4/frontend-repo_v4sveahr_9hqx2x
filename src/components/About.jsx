import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_500px_at_20%_20%,rgba(56,189,248,0.12),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Tentang Saya
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="text-gray-700 leading-relaxed">
            Saya seorang profesional yang antusias dalam membangun pengalaman digital yang mulus, cepat, dan berorientasi pada manusia. Saya menikmati proses mengubah ide menjadi produk nyata yang bernilai.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {[
              'Design System',
              'Interaction Design',
              'Frontend Dev',
              'Micro Animation',
              'Performance',
              'Accessibility',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-200/70 bg-white/80 p-4 text-sm text-gray-800 shadow-sm">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
