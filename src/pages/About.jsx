import { Link } from 'react-router-dom'
import { Scissors, Award, Clock, Heart } from 'lucide-react'
import { teamMembers, aboutHistory, studioInfo } from '../data/mockData'
import TeamMember from '../components/TeamMember'

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-6">
            <Scissors className="h-8 w-8 text-accent-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            About {studioInfo.name}
          </h1>
          
          <p className="text-lg lg:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {studioInfo.tagline} - Discover the story behind our passion for exceptional barbering 
            and the talented team that brings your vision to life.
          </p>
          
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Meet the Team
          </Link>
        </div>
      </section>

      {/* Studio History */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
                {aboutHistory.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-primary-600 dark:text-primary-300 leading-relaxed mb-8">
                  {aboutHistory.content}
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                      {studioInfo.established}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-300">
                      Established
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-300">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=500&fit=crop"
                    alt="FadeMaster Studio Interior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              The principles that guide everything we do at FadeMaster Studio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <Award className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                Excellence
              </h3>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                We strive for perfection in every cut, ensuring each client leaves looking and feeling their absolute best.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <Clock className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                Tradition
              </h3>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Rooted in classic barbering traditions while embracing modern techniques and contemporary styles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
                <Heart className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                Community
              </h3>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Building lasting relationships with our clients and being an integral part of our local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              Skilled professionals dedicated to delivering exceptional results and outstanding service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Studio Info */}
      <section className="section-padding bg-primary-50 dark:bg-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-white mb-4">
                Visit Our Studio
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-300">
                Located in the heart of {studioInfo.location}, we're easily accessible and ready to serve you
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                  Location & Hours
                </h3>
                <div className="space-y-4 text-primary-600 dark:text-primary-300">
                  <div>
                    <div className="font-semibold">Address:</div>
                    <div>
                      {studioInfo.address.street}<br />
                      {studioInfo.address.city}, {studioInfo.address.state} {studioInfo.address.zip}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Phone:</div>
                    <div>{studioInfo.phone}</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Email:</div>
                    <div>{studioInfo.email}</div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Monday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.monday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Tuesday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.tuesday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Wednesday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.wednesday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Thursday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.thursday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Friday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.friday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Saturday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600 dark:text-primary-300">Sunday:</span>
                    <span className="text-primary-900 dark:text-white font-medium">{studioInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-accent-600 dark:bg-accent-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Join the FadeMaster family and discover why we're the premier choice for discerning clients
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

export default About