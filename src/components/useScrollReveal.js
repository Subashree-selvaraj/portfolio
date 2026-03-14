import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    // Handle old '.r' class elements
    const els = document.querySelectorAll('.r')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('vis'), i * 70)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => obs.observe(el))

    // Handle new scroll-reveal classes
    const scrollRevealEls = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
    const scrollRevealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            scrollRevealObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    scrollRevealEls.forEach((el) => scrollRevealObs.observe(el))

    return () => {
      obs.disconnect()
      scrollRevealObs.disconnect()
    }
  }, [])
}
