import { useEffect } from 'react'
import Cursor from './components/Cursor'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './components/useScrollReveal'

export default function App() {
  useScrollReveal()

  // Re-run cursor hover detection after mount (DOM is ready)
  useEffect(() => {
    const addHover = () => {}
    // Cursor component handles its own listeners via useEffect
    // This ensures interactables added after initial render are picked up
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('portfolio-ready'))
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Cursor />
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
