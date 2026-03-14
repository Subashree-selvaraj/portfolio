import { Code2 } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <div className="logo-container">
          <div className="logo-bg"></div>
          <Code2 size={24} strokeWidth={2.5} className="logo-icon" />
          <span className="logo-text">Subashree</span>
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact" className="nav-cta">Hire Me</a></li>
      </ul>
    </nav>
  )
}
