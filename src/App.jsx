import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(1200px_800px_at_50%_-200px,rgba(59,130,246,0.08),transparent)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/30 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-700 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <a href="#home" className="hover:underline">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  )
}

export default App
