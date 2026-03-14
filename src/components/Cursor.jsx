import { useEffect, useRef, useState, useCallback } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef(null)
  const hoveredRef = useRef(false)
  const interactablesRef = useRef(new Set())

  useEffect(() => {
    // Use passive listener for better scroll performance
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    document.addEventListener('mousemove', onMove, { passive: true })

    const lerp = () => {
      const p = pos.current
      const cur = curRef.current
      const ring = ringRef.current
      
      if (cur) {
        cur.style.transform = `translate(${p.mx}px, ${p.my}px)`
      }
      
      p.rx += (p.mx - p.rx) * 0.25
      p.ry += (p.my - p.ry) * 0.25
      
      if (ring) {
        ring.style.transform = `translate(${p.rx}px, ${p.ry}px)`
      }
      rafRef.current = requestAnimationFrame(lerp)
    }
    rafRef.current = requestAnimationFrame(lerp)

    // Debounce hover detection updates
    let debounceTimer = null
    const updateInteractables = () => {
      const interactables = document.querySelectorAll('a, button, .proj-card, .sk-card, .ach-card, .cstat, .about-tile')
      
      interactablesRef.current.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
      
      interactablesRef.current.clear()
      interactables.forEach(el => {
        interactablesRef.current.add(el)
        el.addEventListener('mouseenter', handleHoverEnter, { passive: true })
        el.addEventListener('mouseleave', handleHoverLeave, { passive: true })
      })
    }

    const handleHoverEnter = () => {
      hoveredRef.current = true
      setHovered(true)
    }
    
    const handleHoverLeave = () => {
      hoveredRef.current = false
      setHovered(false)
    }

    updateInteractables()
    
    // Listen for dynamic content updates
    const observer = new MutationObserver(() => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(updateInteractables, 300)
    })
    
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      clearTimeout(debounceTimer)
      observer.disconnect()
      interactablesRef.current.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={curRef} className={`cursor${hovered ? ' hovered' : ''}`} />
      <div ref={ringRef} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  )
}
