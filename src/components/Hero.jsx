import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(56,189,248,0.22),transparent),radial-gradient(800px_500px_at_80%_20%,rgba(168,85,247,0.22),transparent)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur pointer-events-none">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance & remote work
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Halo, saya <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">Profesional Kreatif</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 max-w-xl text-base sm:text-lg text-gray-700">
              Saya membangun produk digital yang indah, cepat, dan berdampak. Fokus pada pengalaman pengguna, performa, dan detail yang memikat.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-6 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white shadow hover:shadow-lg transition-shadow">Lihat Proyek</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-gray-900/10 bg-white/70 px-5 py-3 text-gray-900 hover:bg-white/90 transition-colors">Kontak</a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.8 }} className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20">
                  <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" alt="Foto Profil" className="h-full w-full object-cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">Nama Anda</h3>
                  <p className="text-gray-600">UI/UX Designer · Frontend Engineer</p>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -right-6 -bottom-10 h-24 w-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 blur-2xl opacity-40 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
