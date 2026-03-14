import { Download, FileText } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Documentation</div>
          <h2 className="sh-title">Resume</h2>
        </div>

        <div className="resume-container">
          <div className="resume-card scroll-reveal">
            <div className="resume-icon">
              <FileText size={48} />
            </div>
            <h3 className="resume-title">Download My Resume</h3>
            <p className="resume-desc">
              Get a detailed overview of my experience, skills, and achievements. 
              Perfect for recruiters and hiring managers.
            </p>
            <a 
              href="/resume.pdf" 
              download="Subashree_Resume.pdf"
              className="resume-btn"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
            <p className="resume-meta">PDF • 500 KB • Updated Mar 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
