import HeroCard from './HeroCard'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-wrap">
        {/* Left text */}
        <div>
          <div className="hero-eyebrow">
            <span className="pulse-dot" />&nbsp; Open to opportunities
          </div>
          <h1>
            <span style={{ display: 'block' }}>Subashree</span>
          </h1>
          <p className="hero-sub">
            Backend Developer building <span className="hi">scalable APIs</span>,{' '}
            <span className="hi">AI-integrated platforms</span> &amp; containerized systems.
            MERN · Node.js · Docker · LangChain.
            <br />
            <span className="amb">DSA Enthusiast · Open Source Contributor</span>
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-p">View Projects ↗</a>
            <a href="#contact" className="btn-o">Get in Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
              View Resume
            </a>
          </div>
        </div>

        {/* Right 3D card */}
        <HeroCard />
      </div>
    </section>
  )
}
