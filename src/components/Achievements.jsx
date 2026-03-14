import { Globe, Trophy, Medal, Rocket, Award, Code } from 'lucide-react'
import { achievements } from '../data/index.jsx'

const iconMap = {
  Globe,
  Trophy,
  Medal,
  Rocket,
  Award,
  Code,
}

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Recognition</div>
          <h2 className="sh-title">Achievements</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, idx) => {
            const IconComponent = iconMap[a.icon]
            return (
              <div key={a.title} className={`achievement-card scroll-reveal${idx > 0 ? ` delay-${Math.min(idx, 3)}` : ''}`}>
                <div className="achievement-glow" style={{ background: a.glow }} />
                <div className="achievement-icon">
                  {IconComponent && <IconComponent size={28} strokeWidth={1.8} />}
                </div>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-sub">{a.sub}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
