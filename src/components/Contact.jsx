import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_500px_at_80%_20%,rgba(168,85,247,0.12),transparent)]" />
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ayo Bekerja Bersama
        </motion.h2>
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 rounded-2xl border border-gray-200/70 bg-white/80 p-6 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Nama" className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <input placeholder="Subjek" className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
          <textarea required placeholder="Pesan" rows="4" className="w-full rounded-lg border border-gray-200 bg-white/80 p-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
          <button className="mt-2 inline-flex justify-center rounded-xl bg-gray-900 px-5 py-3 text-white shadow hover:shadow-lg transition-shadow">Kirim</button>
        </motion.form>
      </div>
    </section>
  )
}
