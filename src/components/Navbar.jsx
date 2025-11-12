import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#projects', label: 'Proyek' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:bg-white/10 supports-[backdrop-filter]:bg-white/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 ring-2 ring-white/60" />
              <span className="text-sm sm:text-base font-semibold tracking-tight text-gray-900">Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700/90 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/70 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/70 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:shadow-md transition-shadow">
                <Mail size={16} /> Hubungi Saya
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/70">
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/40 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-gray-800 hover:text-gray-900" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/70 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/70 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#contact" className="ml-auto inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow">
                    <Mail size={16} /> Kontak
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
