import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, precision: 'lowp' })
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 1.5 : 1)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 30

    // Reduced particle count for better performance
    const N = 80
    const positions = new Float32Array(N * 3)
    const colors = new Float32Array(N * 3)
    const vels = []
    const palette = [
      [0.486, 0.227, 0.929],
      [0.024, 0.714, 0.831],
      [0.961, 0.620, 0.043],
      [0.929, 0.282, 0.600],
    ]
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2]
      vels.push({
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        vz: (Math.random() - 0.5) * 0.01,
      })
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const mat = new THREE.PointsMaterial({ size: 0.25, vertexColors: true, transparent: true, opacity: 0.75, sizeAttenuation: true })
    const pts = new THREE.Points(geo, mat)
    scene.add(pts)

    // Optimize line connections - reduced distance threshold
    const lineGeo = new THREE.BufferGeometry()
    const maxLines = N * 6
    const linePositions = new Float32Array(maxLines * 3)
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineSegments = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.06 }))
    scene.add(lineSegments)

    // Torus rings - reduced opacity
    const rings = []
    ;[10, 16, 22].forEach((r, i) => {
      const tg = new THREE.TorusGeometry(r, 0.03, 8, 80)
      const tm = new THREE.MeshBasicMaterial({ color: [0x7c3aed, 0x06b6d4, 0xf59e0b][i], transparent: true, opacity: 0.08 })
      const t = new THREE.Mesh(tg, tm)
      t.rotation.x = Math.random() * Math.PI
      t.rotation.y = Math.random() * Math.PI
      scene.add(t)
      rings.push(t)
    })

    let mouse3x = 0, mouse3y = 0
    let lastMouseTime = 0
    const onMouseMove = (e) => {
      const now = Date.now()
      if (now - lastMouseTime > 16) { // ~60fps throttle
        mouse3x = (e.clientX / window.innerWidth - 0.5) * 2
        mouse3y = -(e.clientY / window.innerHeight - 0.5) * 2
        lastMouseTime = now
      }
    }
    document.addEventListener('mousemove', onMouseMove, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Pause rendering when tab is not focused for performance
    let isAnimating = true
    const onVisibilityChange = () => {
      isAnimating = !document.hidden
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    let animId
    function animate() {
      animId = requestAnimationFrame(animate)
      if (!isAnimating) return // Skip rendering when tab is hidden

      const pos2 = geo.attributes.position.array
      let lineIdx = 0
      const lp = lineGeo.attributes.position.array
      const maxDistance = 6.5 // Reduced from 8 to skip more connections

      for (let i = 0; i < N; i++) {
        pos2[i * 3] += vels[i].vx
        pos2[i * 3 + 1] += vels[i].vy
        pos2[i * 3 + 2] += vels[i].vz
        if (Math.abs(pos2[i * 3]) > 30) vels[i].vx *= -1
        if (Math.abs(pos2[i * 3 + 1]) > 20) vels[i].vy *= -1
        if (Math.abs(pos2[i * 3 + 2]) > 10) vels[i].vz *= -1
        
        // Only check nearby particles instead of all
        for (let j = i + 1; j < Math.min(N, i + 20); j++) {
          const dx = pos2[i * 3] - pos2[j * 3]
          const dy = pos2[i * 3 + 1] - pos2[j * 3 + 1]
          const dz = pos2[i * 3 + 2] - pos2[j * 3 + 2]
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (d < maxDistance && lineIdx < maxLines - 6) {
            lp[lineIdx++] = pos2[i * 3]; lp[lineIdx++] = pos2[i * 3 + 1]; lp[lineIdx++] = pos2[i * 3 + 2]
            lp[lineIdx++] = pos2[j * 3]; lp[lineIdx++] = pos2[j * 3 + 1]; lp[lineIdx++] = pos2[j * 3 + 2]
          }
        }
      }
      geo.attributes.position.needsUpdate = true
      lineGeo.attributes.position.needsUpdate = true
      lineGeo.setDrawRange(0, lineIdx / 3)

      rings.forEach((r, i) => {
        r.rotation.x += 0.0002 * (i + 1)
        r.rotation.y += 0.0003 * (i + 1)
      })

      camera.position.x += (mouse3x * 3 - camera.position.x) * 0.015
      camera.position.y += (mouse3y * 2 - camera.position.y) * 0.015
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      lineGeo.dispose()
      lineSegments.material.dispose()
      rings.forEach(r => {
        r.geometry.dispose()
        r.material.dispose()
      })
    }
  }, [])

  return <canvas ref={canvasRef} className="three-canvas" />
}
