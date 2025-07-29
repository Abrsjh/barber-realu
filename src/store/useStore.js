import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Helper function to detect system theme preference
const getSystemTheme = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const useStore = create(
  persist(
    (set, get) => ({
      // Theme state - initialize with system preference if no saved preference
      theme: 'light',
      
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light'
          
          // Apply theme to document immediately
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          
          return { theme: newTheme }
        })
      },
      
      // Initialize theme on app load
      initializeTheme: () => {
        const { theme } = get()
        // Check if we have a saved theme, otherwise use system preference
        const finalTheme = theme || getSystemTheme()
        
        if (finalTheme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        
        // Update state if we used system preference
        if (theme !== finalTheme) {
          set({ theme: finalTheme })
        }
      },
      
      // Contact form state
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      },
      
      setContactForm: (field, value) => {
        set((state) => ({
          contactForm: {
            ...state.contactForm,
            [field]: value
          }
        }))
      },
      
      resetContactForm: () => {
        set({
          contactForm: {
            name: '',
            email: '',
            phone: '',
            message: '',
            service: ''
          }
        })
      },
      
      submitContactForm: () => {
        const { contactForm } = get()
        
        // Validate required fields
        if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.phone.trim() || !contactForm.message.trim()) {
          throw new Error('Please fill in all required fields')
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(contactForm.email)) {
          throw new Error('Please enter a valid email address')
        }
        
        const submission = {
          ...contactForm,
          timestamp: new Date().toISOString(),
          id: Date.now()
        }
        
        try {
          // Store in localStorage
          const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
          existingSubmissions.push(submission)
          localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions))
          
          // Reset form after successful submission
          get().resetContactForm()
          
          return submission
        } catch (error) {
          console.error('Failed to save contact submission:', error)
          throw new Error('Failed to submit form. Please try again.')
        }
      },
      
      // Get all contact submissions (for testing/admin purposes)
      getContactSubmissions: () => {
        try {
          return JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
        } catch (error) {
          console.error('Failed to retrieve contact submissions:', error)
          return []
        }
      },
      
      // Mobile menu state
      isMobileMenuOpen: false,
      toggleMobileMenu: () => {
        set((state) => ({
          isMobileMenuOpen: !state.isMobileMenuOpen
        }))
      },
      
      closeMobileMenu: () => {
        set({ isMobileMenuOpen: false })
      }
    }),
    {
      name: 'fademaster-storage',
      partialize: (state) => ({ 
        theme: state.theme 
      }),
      // Handle hydration properly
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.initializeTheme?.()
        }
      },
    }
  )
)

export { useStore }