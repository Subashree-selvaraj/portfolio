import { certs } from '../data/index.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <div className="sh r">
          <div className="sh-label">Credentials</div>
          <h2 className="sh-title">Certifications</h2>
        </div>
        <div className="cert-grid">
          {certs.map((c) => (
            <div key={c.name} className="cert-item r">
              <div className="cert-dot" />
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-by">{c.by}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
