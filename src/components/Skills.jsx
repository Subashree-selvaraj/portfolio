import { skills } from '../data/index.jsx'
import { Code, Server, Database, Cpu, Wrench, Layout } from 'lucide-react'

const iconMap = {
  Code,
  Server,
  Database,
  Cpu,
  Wrench,
  Layout,
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Expertise</div>
          <h2 className="sh-title">Engineering Stack</h2>
          <p className="sh-subtitle">Core tools and technologies I use to build backend systems and AI-driven applications.</p>
        </div>
        <div className="skills-wrap">
          {skills.map((sk, idx) => {
            const IconComponent = iconMap[sk.icon]
            return (
              <div key={sk.category} className={`sk-card r scroll-reveal${idx > 0 ? ` delay-${Math.min(idx, 3)}` : ''}`}>
                <div className="sk-cat">
                  <span className="sk-cat-icon">
                    {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                  </span>
                  {sk.category}
                </div>
                <div className="sk-pills">
                  {sk.pills.map((p) => (
                    <span key={p} className="sp">{p}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
