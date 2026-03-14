import { useEffect, useRef } from 'react'
import { Code2, Zap, Brain, Target } from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight * 0.75

      if (isVisible) {
        sectionRef.current.classList.add('visible')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const highlights = [
    { icon: Code2, title: 'Clean Code', desc: 'Well-structured & maintainable' },
    { icon: Zap, title: 'Performance', desc: 'Optimized & lightning-fast' },
    { icon: Brain, title: 'Problem Solver', desc: 'Creative & analytical approach' },
    { icon: Target, title: 'Detail-Oriented', desc: 'Pixel-perfect implementations' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section scroll-reveal"
    >
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Introduction</div>
          <h2 className="sh-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-highlight">
              I'm a passionate full-stack developer with a proven track record of building scalable applications
              and solving complex technical problems. My journey spans AI integration, real-time systems, and
              creating delightful user experiences.
            </p>
            
            <p>
              With expertise in <span className="tech-stack">Node.js, React, MongoDB, and LLM integration</span>,
              I architect solutions that balance performance, maintainability, and user experience. I'm driven by
              the challenge of turning ideas into elegant code.
            </p>
            
            <p>
              Beyond coding, I actively contribute to open-source projects, mentor aspiring developers, and stay
              ahead of emerging technologies. I believe in continuous learning and sharing knowledge with the community.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="highlight-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="highlight-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="highlight-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
