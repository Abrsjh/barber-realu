import { useState } from 'react'
import { useStore } from '../store/useStore'
import { services } from '../data/mockData'

const ContactForm = () => {
  const { contactForm, setContactForm, submitContactForm } = useStore()
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!contactForm.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!contactForm.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!contactForm.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      submitContactForm()
      setIsSubmitted(true)
      setErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  const handleInputChange = (field, value) => {
    setContactForm(field, value)
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="card text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 mx-auto">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">
          Thank You!
        </h3>
        <p className="text-primary-600 dark:text-primary-300 mb-4">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-6 text-center">
        Book Your Appointment
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={contactForm.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-primary-800 text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200 ${
              errors.name ? 'border-red-500' : 'border-primary-300 dark:border-primary-600'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={contactForm.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-primary-800 text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200 ${
              errors.email ? 'border-red-500' : 'border-primary-300 dark:border-primary-600'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={contactForm.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-primary-800 text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200 ${
              errors.phone ? 'border-red-500' : 'border-primary-300 dark:border-primary-600'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
            Preferred Service
          </label>
          <select
            id="service"
            value={contactForm.service}
            onChange={(e) => handleInputChange('service', e.target.value)}
            className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg bg-white dark:bg-primary-800 text-primary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={contactForm.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-primary-800 text-primary-900 dark:text-white placeholder-primary-400 dark:placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200 resize-none ${
            errors.message ? 'border-red-500' : 'border-primary-300 dark:border-primary-600'
          }`}
          placeholder="Tell us about your preferred style, any special requests, or questions you might have..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="btn-primary text-lg px-8 py-3"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm