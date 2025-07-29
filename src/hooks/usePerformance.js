import { useEffect } from 'react'

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      return
    }

    // Simple performance tracking
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log performance metrics for debugging (remove in production)
          if (process.env.NODE_ENV === 'development') {
            console.log(`${entry.name}: ${entry.duration}ms`)
          }
        })
      })

      try {
        // Observe navigation and resource timing
        observer.observe({ entryTypes: ['navigation', 'resource'] })
        
        return () => observer.disconnect()
      } catch (error) {
        // Fallback if observer fails
        console.warn('Performance observer not supported:', error)
      }
    }
  }, [])
}

// Image lazy loading hook
export const useImageLazyLoading = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return

    // Add intersection observer for images if not already supported
    if ('loading' in HTMLImageElement.prototype) {
      return // Native lazy loading is supported
    }

    // Fallback intersection observer implementation
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]')
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))

      return () => imageObserver.disconnect()
    }
  }, [])
}

// Preload critical resources
export const preloadCriticalResources = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return

  // Preload critical fonts (optional - using system fonts)
  const fontLinks = [
    // Using system fonts instead of web fonts for better performance
    // 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ]

  fontLinks.forEach((href) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style'
    link.href = href
    document.head.appendChild(link)
  })

  // Preload hero images (using placeholder images)
  const heroImages = [
    // Using Unsplash images that are already optimized
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop'
  ]

  heroImages.forEach((src) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}