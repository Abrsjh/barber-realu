import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Scissors } from 'lucide-react'
import { studioInfo } from '../../data/mockData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Studio Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
                <Scissors className="h-6 w-6 text-accent-400" />
                <span>{studioInfo.name}</span>
              </Link>
              <p className="text-primary-300 mb-6 leading-relaxed">
                {studioInfo.description}
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`https://instagram.com/${studioInfo.socialMedia.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-accent-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href={`https://facebook.com/${studioInfo.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-accent-400 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href={`https://twitter.com/${studioInfo.socialMedia.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-accent-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-3">
                <Link to="/" className="block text-primary-300 hover:text-accent-400 transition-colors duration-200">
                  Home
                </Link>
                <Link to="/services" className="block text-primary-300 hover:text-accent-400 transition-colors duration-200">
                  Services
                </Link>
                <Link to="/portfolio" className="block text-primary-300 hover:text-accent-400 transition-colors duration-200">
                  Portfolio
                </Link>
                <Link to="/about" className="block text-primary-300 hover:text-accent-400 transition-colors duration-200">
                  About Us
                </Link>
                <Link to="/contact" className="block text-primary-300 hover:text-accent-400 transition-colors duration-200">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-300">
                    <p>{studioInfo.address.street}</p>
                    <p>{studioInfo.address.city}, {studioInfo.address.state} {studioInfo.address.zip}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <a 
                    href={`tel:${studioInfo.phone}`}
                    className="text-primary-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {studioInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${studioInfo.email}`}
                    className="text-primary-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {studioInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="mt-12 pt-8 border-t border-primary-700">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-5 w-5 text-accent-400" />
              <h3 className="text-lg font-semibold">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-primary-300">Monday:</span>
                <span className="text-white">{studioInfo.hours.monday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-300">Tuesday:</span>
                <span className="text-white">{studioInfo.hours.tuesday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-300">Wednesday:</span>
                <span className="text-white">{studioInfo.hours.wednesday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-300">Thursday:</span>
                <span className="text-white">{studioInfo.hours.thursday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-300">Friday:</span>
                <span className="text-white">{studioInfo.hours.friday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-300">Saturday:</span>
                <span className="text-white">{studioInfo.hours.saturday}</span>
              </div>
              <div className="flex justify-between sm:col-span-2 lg:col-span-1">
                <span className="text-primary-300">Sunday:</span>
                <span className="text-white">{studioInfo.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-primary-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-primary-400 text-sm">
              © {currentYear} {studioInfo.name}. All rights reserved.
            </p>
            <p className="text-primary-400 text-sm">
              Established {studioInfo.established} • {studioInfo.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer