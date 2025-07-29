import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Page transition wrapper
export const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll-triggered reveal animation
export const ScrollReveal = ({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  duration = 0.6 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export const StaggerItem = ({ children, className = '' }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  className = '', 
  offset = 50,
  speed = 0.5 
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hover scale effect
export const HoverScale = ({ 
  children, 
  className = '', 
  scale = 1.05,
  duration = 0.2 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale,
        transition: { duration, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation
export const FloatingElement = ({ 
  children, 
  className = '', 
  amplitude = 10,
  duration = 3 
}) => {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation
export const TextReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants = {
    hidden: { 
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Card flip animation
export const FlipCard = ({ 
  front, 
  back, 
  className = '' 
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="preserve-3d w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0">
          {front}
        </div>
        
        {/* Back */}
        <div className="backface-hidden absolute inset-0 rotate-y-180">
          {back}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Magnetic button effect
export const MagneticButton = ({ 
  children, 
  className = '',
  strength = 0.3 
}) => {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength
    
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}