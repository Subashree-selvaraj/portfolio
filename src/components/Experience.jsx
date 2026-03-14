import { experience } from '../data/index.jsx'

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Work History</div>
          <h2 className="sh-title">Experience</h2>
        </div>
        <div className="exp-line">
          {experience.map((exp, idx) => (
            <div key={exp.company} className={`exp-item r scroll-reveal${idx > 0 ? ` delay-${Math.min(idx, 3)}` : ''}`}>
              <div className="exp-dot" />
              <div className="exp-head">
                <div>
                  <div className="exp-co">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
              <div className="exp-box">
                <ul>
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
