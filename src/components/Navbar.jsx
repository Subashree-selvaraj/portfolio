export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <div className="logo-container">
          <div className="logo-bg"></div>
          <svg 
            className="logo-icon" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            {/* Stylized 'S' for Subashree */}
            <path 
              d="M 8 12 Q 8 8 12 8 L 28 8 Q 32 8 32 12 Q 32 16 28 16 L 12 16 Q 10 16 10 18 L 10 22 Q 10 24 12 24 L 28 24 Q 32 24 32 28 Q 32 32 28 32 L 12 32 Q 8 32 8 28" 
              stroke="url(#logoGrad)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* Accent dot */}
            <circle cx="34" cy="8" r="2" fill="url(#logoGrad)" opacity="0.8" />
          </svg>
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
