import { Mail, Linkedin, Github, Code2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-glass r">
            <div className="sh-label" style={{ margin: 0, justifyContent: 'center' }}>
              Let's Build Together
            </div>
            <div className="contact-cta">Get In Touch</div>

            {/* Status Badge */}
            <div className="contact-status">
              Available for Internships & SDE Roles
            </div>

            {/* Email */}
            <a href="mailto:subashreesde@gmail.com" className="contact-item email-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <span className="contact-text">subashreesde@gmail.com</span>
            </a>

            {/* Response Time Message */}
            <p className="contact-message">
              "I reply within 24 hours. Let's build something."
            </p>

            {/* Social Links */}
            <div className="contact-links">
              <a 
                href="https://linkedin.com/in/subashree-s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link linkedin-link"
                title="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Subashree-selvaraj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link github-link"
                title="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://leetcode.com/u/subashree_selvaraj/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link leetcode-link"
                title="LeetCode"
              >
                <Code2 size={18} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
