import { useEffect, useRef } from 'react'

const ParticleBackground = ({ density = 50, speed = 0.5, color = '#f59e0b', opacity = 0.6 }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []

    // Resize canvas to full container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const particleCount = Math.min(density, (canvas.width * canvas.height) / 10000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
        })
      }
      particlesRef.current = particles
    }

    // Particle update and draw
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.angle += particle.angleSpeed
        
        // Update life
        particle.life -= 0.5
        
        // Boundary check with wrap-around
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        // Reset particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = particle.maxLife
          particle.size = Math.random() * 3 + 1
        }
        
        // Calculate alpha based on life
        const alpha = (particle.life / particle.maxLife) * opacity
        
        // Draw particle with glow effect
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.shadowBlur = 10
        ctx.shadowColor = color
        
        // Draw main particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        
        // Draw inner glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        ctx.restore()
      })
      
      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.1 * opacity
            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
    }

    // Animation loop
    const animate = () => {
      updateParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initParticles()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [density, speed, color, opacity])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default ParticleBackground