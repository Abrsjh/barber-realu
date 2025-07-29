import { Link } from 'react-router-dom'
import { services } from '../data/mockData'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional barbering services combining traditional techniques with modern style. 
            Each service is tailored to bring out your best look with precision and care.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Book Your Service
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
                Service Information
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300">
                Everything you need to know about our services and pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pricing Notes */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                  Pricing & Packages
                </h3>
                <ul className="space-y-3 text-primary-600 dark:text-primary-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>All prices include consultation and styling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Package deals available for multiple services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Senior and student discounts available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>First-time clients receive 10% off</span>
                  </li>
                </ul>
              </div>
              
              {/* Booking Info */}
              <div className="card">
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                  Booking & Policies
                </h3>
                <ul className="space-y-3 text-primary-600 dark:text-primary-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Walk-ins welcome, appointments recommended</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>24-hour cancellation policy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Cash, card, and digital payments accepted</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-600 mt-1">•</span>
                    <span>Complimentary refreshments during service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-accent-600 dark:bg-accent-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Look Your Best?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience our premium barbering services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Appointment
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services