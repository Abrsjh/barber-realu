import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Scissors } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { studioInfo } from '../../data/mockData'

const Header = () => {
  const location = useLocation()
  const { theme, toggleTheme, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useStore()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-primary-900/95 backdrop-blur-sm border-b border-primary-200 dark:border-primary-700">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl lg:text-2xl font-bold text-primary-900 dark:text-white"
            onClick={closeMobileMenu}
          >
            <Scissors className="h-6 w-6 lg:h-8 lg:w-8 text-accent-600" />
            <span>{studioInfo.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-primary-700 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="btn-ghost p-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="btn-ghost p-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="btn-ghost p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-200 dark:border-primary-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-primary-700 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary inline-block text-center mt-4"
                onClick={closeMobileMenu}
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header