import { useRef, useState, useEffect } from 'react'
import { projects } from '../data/index.jsx'
import { ChevronLeft, ChevronRight, ExternalLink, Github, FileText, Leaf, GitBranch, PieChart, Zap } from 'lucide-react'

const iconMap = {
  FileText,
  Leaf,
  GitBranch,
  PieChart,
  Zap,
}

export default function Projects() {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        container.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 500)
    }
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Portfolio</div>
          <h2 className="sh-title">Featured Projects</h2>
        </div>

        <div className="carousel-wrapper">
          {/* Main Carousel */}
          <div className="carousel-container" ref={scrollContainerRef}>
            {projects.map((p, idx) => {
              const IconComponent = iconMap[p.icon]
              return (
                <div 
                  key={p.name} 
                  className="carousel-item scroll-reveal" 
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className={`proj-card premium${p.featured ? ' featured' : ''}`}>
                    {/* Premium Background */}
                    <div className="proj-card-bg" style={{ background: p.bg }} />
                    
                    {/* Gradient Overlay */}
                    <div className="proj-card-overlay" style={{ background: `linear-gradient(135deg, ${p.color}15, transparent)` }} />

                    {/* Top Section with Icon */}
                    <div className="proj-header">
                      <div className="proj-icon-wrapper">
                        <div className="proj-icon-bg" style={{ background: `linear-gradient(135deg, ${p.color}30, ${p.color}10)`, borderColor: `${p.color}50` }}>
                          {IconComponent && <IconComponent size={36} strokeWidth={1.8} color={p.color} />}
                        </div>
                      </div>
                      <div className="proj-badge" style={{ color: p.color, borderColor: p.color }}>
                        {p.featured ? 'Featured' : 'Project'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="proj-body">
                      <h3 className="proj-name">{p.name}</h3>
                      {p.highlight && <p className="proj-highlight">{p.highlight}</p>}
                      <p className="proj-desc">{p.desc}</p>

                      {/* Tech Stack */}
                      <div className="proj-stack">
                        {p.stack.slice(0, 4).map((s) => (
                          <span key={s} className="stk">{s}</span>
                        ))}
                        {p.stack.length > 4 && <span className="stk-more">+{p.stack.length - 4}</span>}
                      </div>

                      {/* Links */}
                      <div className="proj-links">
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-link demo-link">
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link github-link">
                            <Github size={14} />
                            <span>Source</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="proj-card-accent" style={{ background: p.color }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          {canScrollLeft && (
            <button
              className="carousel-nav carousel-nav-left"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {canScrollRight && (
            <button
              className="carousel-nav carousel-nav-right"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Scroll Indicator */}
          <div className="carousel-indicator">
            <span className="indicator-text">Scroll to explore</span>
            <div className="indicator-dots">
              {projects.map((_, idx) => (
                <div 
                  key={idx} 
                  className="dot" 
                  style={{ opacity: idx === activeIndex ? 1 : 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
