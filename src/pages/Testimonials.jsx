import { Link } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/mockData'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return (
    <div>
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6">
            <Quote className="h-8 w-8 text-accent-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            What Our Clients Say
          </h1>
          
          <p className="text-lg lg:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients who trust us 
            with their style and keep coming back for the FadeMaster experience.
          </p>
          
          {/* Rating Summary */}
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-primary-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-accent-200 dark:border-accent-700">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(averageRating) 
                      ? 'text-gold-400 fill-current' 
                      : 'text-primary-300 dark:text-primary-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              {averageRating.toFixed(1)} out of 5 stars ({testimonials.length} reviews)
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6 mx-auto">
                <Quote className="h-10 w-10 text-accent-600" />
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-primary-700 dark:text-primary-300 mb-8 leading-relaxed italic">
                "I've been going to different barbershops for years, but FadeMaster Studio is in a league of its own. 
                The attention to detail, the craftsmanship, and the overall experience is unmatched. 
                I wouldn't trust my hair to anyone else."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-700">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Featured Client"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-primary-900 dark:text-white text-lg">
                    Anthony M.
                  </div>
                  <div className="text-accent-600 dark:text-accent-400">
                    Long-time Client
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Trusted by the Community
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who make FadeMaster Studio their go-to destination
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                500+
              </div>
              <div className="text-primary-600 dark:text-primary-300">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                4.9
              </div>
              <div className="text-primary-600 dark:text-primary-300">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                95%
              </div>
              <div className="text-primary-600 dark:text-primary-300">
                Return Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-accent-600 dark:bg-accent-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join Our Happy Clients
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Experience the service that keeps our clients coming back. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Appointment
            </Link>
            <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials