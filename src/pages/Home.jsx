import { Link } from 'react-router-dom'
import { Scissors, Star, Users, Clock } from 'lucide-react'
import { studioInfo } from '../data/mockData'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-20"></div>
        
        <div className="relative container-custom py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Title */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-primary-800/80 backdrop-blur-sm rounded-full px-6 py-2 border border-accent-200 dark:border-accent-700">
                <Scissors className="h-5 w-5 text-accent-600" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  Est. {studioInfo.established}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-900 dark:text-white mb-6 leading-tight">
              {studioInfo.name}
            </h1>
            
            <p className="text-xl lg:text-2xl text-accent-600 dark:text-accent-400 font-medium mb-4">
              {studioInfo.tagline}
            </p>
            
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {studioInfo.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                View Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg mb-3">
                  <Star className="h-6 w-6 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-primary-900 dark:text-white">500+</div>
                <div className="text-sm text-primary-600 dark:text-primary-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg mb-3">
                  <Users className="h-6 w-6 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-primary-900 dark:text-white">3</div>
                <div className="text-sm text-primary-600 dark:text-primary-300">Expert Barbers</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg mb-3">
                  <Clock className="h-6 w-6 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-primary-900 dark:text-white">7</div>
                <div className="text-sm text-primary-600 dark:text-primary-300">Days a Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              From classic cuts to modern fades, we deliver exceptional results with every visit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <Scissors className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Classic Cuts
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                Traditional barbershop cuts with modern precision and attention to detail
              </p>
            </div>
            
            <div className="card text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <Star className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Signature Fades
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                Our specialty fades that blend artistry with technical expertise
              </p>
            </div>
            
            <div className="card text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                Hot Towel Service
              </h3>
              <p className="text-primary-600 dark:text-primary-300">
                Luxurious traditional wet shaves with premium hot towel treatment
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-accent-600 dark:bg-accent-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for Your Best Look?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the FadeMaster difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Now
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home