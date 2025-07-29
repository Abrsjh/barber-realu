import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { studioInfo } from '../data/mockData'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6">
            <MessageSquare className="h-8 w-8 text-accent-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          
          <p className="text-lg lg:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your style? Contact us to book your appointment or ask any questions. 
            We're here to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
                Visit Our Studio
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300">
                Multiple ways to reach us and visit our studio
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                        Address
                      </h3>
                      <p className="text-primary-600 dark:text-primary-300">
                        {studioInfo.address.street}<br />
                        {studioInfo.address.city}, {studioInfo.address.state} {studioInfo.address.zip}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                        Phone
                      </h3>
                      <a 
                        href={`tel:${studioInfo.phone}`}
                        className="text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
                      >
                        {studioInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                        Email
                      </h3>
                      <a 
                        href={`mailto:${studioInfo.email}`}
                        className="text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
                      >
                        {studioInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Clock className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700">
                    <span className="text-primary-600 dark:text-primary-300">Monday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.monday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700">
                    <span className="text-primary-600 dark:text-primary-300">Tuesday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.tuesday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700">
                    <span className="text-primary-600 dark:text-primary-300">Wednesday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.wednesday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700">
                    <span className="text-primary-600 dark:text-primary-300">Thursday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.thursday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700">
                    <span className="text-primary-600 dark:text-primary-300">Friday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.friday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700">
                    <span className="text-primary-600 dark:text-primary-300">Saturday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-primary-600 dark:text-primary-300">Sunday</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                Find Us
              </h2>
              <p className="text-primary-600 dark:text-primary-300">
                Located in the heart of {studioInfo.location}
              </p>
            </div>
            
            <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-800 dark:to-accent-900/30 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-accent-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                    {studioInfo.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-300">
                    {studioInfo.address.street}<br />
                    {studioInfo.address.city}, {studioInfo.address.state}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300">
                Common questions about booking and visiting our studio
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                  Do I need an appointment?
                </h3>
                <p className="text-primary-600 dark:text-primary-300">
                  While we welcome walk-ins, we highly recommend booking an appointment to ensure availability 
                  and minimize wait times. You can book online, call us, or visit in person.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                  What's your cancellation policy?
                </h3>
                <p className="text-primary-600 dark:text-primary-300">
                  We ask for at least 24 hours notice for cancellations. This helps us accommodate other clients 
                  and ensures our barbers can manage their schedules effectively.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-primary-600 dark:text-primary-300">
                  We accept cash, all major credit cards, and digital payments including Apple Pay and Google Pay. 
                  Tips can be added to card payments or given in cash.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact