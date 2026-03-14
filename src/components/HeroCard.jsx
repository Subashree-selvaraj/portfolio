import { useRef } from 'react'

export default function HeroCard() {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const ry = (e.clientX - cx) / (rect.width / 2) * -18
    const rx = (e.clientY - cy) / (rect.height / 2) * 12
    card.style.animation = 'none'
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.animation = ''
    card.style.transform = ''
  }

  return (
    <div
      className="hero-card-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-card" ref={cardRef}>
        <div className="card-body">
          <div className="card-orb2" />

          {/* Top: avatar + info */}
          <div className="card-top">
            <div className="card-avatar">S</div>
            <div className="card-info">
              <div className="card-name">Subashree S</div>
              <div className="card-role">Backend Developer · AI Integration</div>
              <div className="card-loc">📍 Coimbatore, India</div>
            </div>
          </div>

          {/* Tech badges */}
          <div className="card-badges">
            {['Node.js', 'Express', 'MongoDB', 'Docker', 'LangChain', 'Redis', 'Socket.io', 'React'].map((b, i) => (
              <span key={b} className={`cbadge${i < 3 ? ' hi' : ''}`}>{b}</span>
            ))}
          </div>

          {/* Stats grid */}
          <div className="card-stats">
            <div className="cstat">
              <div className="cstat-num n-cyan">Top 1.2%</div>
              <div className="cstat-lbl">Open Source</div>
            </div>
            <div className="cstat">
              <div className="cstat-num n-purple">#517 / 42K</div>
              <div className="cstat-lbl">GSSoC Rank</div>
            </div>
            <div className="cstat">
              <div className="cstat-num n-amber">3</div>
              <div className="cstat-lbl">Hackathon Wins</div>
            </div>
            <div className="cstat">
              <div className="cstat-num n-teal">48</div>
              <div className="cstat-lbl">GitHub Repositories</div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="card-footer-bar">
            <div className="cfb-item">
              <div className="cfb-val">650+</div>
              <div className="cfb-lbl">GitHub Contributions</div>
            </div>
            <div className="cfb-div" />
            <div className="cfb-item">
              <div className="cfb-val">250+</div>
              <div className="cfb-lbl">LeetCode Problems</div>
            </div>
          </div>

          {/* Status */}
          <div className="card-status">
            <span className="status-dot" />
            Available for Internships &amp; SDE Roles
          </div>
        </div>
      </div>
    </div>
  )
}
