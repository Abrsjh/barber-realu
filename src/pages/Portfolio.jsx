import { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioImages } from '../data/mockData'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['all', 'classic', 'fade', 'beard', 'modern']
  
  const filteredImages = filter === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === filter)

  return (
    <div>
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-primary-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg lg:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our finest work and transformations. Each cut tells a story of precision, 
            artistry, and the perfect blend of traditional technique with modern style.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Book Your Transformation
          </Link>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  filter === category
                    ? 'bg-accent-600 text-white'
                    : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-accent-100 dark:hover:bg-accent-900/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-white dark:bg-primary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-primary-100 dark:bg-primary-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-accent-600 rounded-full text-xs font-medium">
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white dark:bg-primary-800 rounded-xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              ×
            </button>
            <div className="aspect-video bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-primary-600 dark:text-primary-300 mb-4">
                {selectedImage.description}
              </p>
              <span className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-accent-600 dark:bg-accent-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join Our Portfolio?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Let us create your next signature look and add your transformation to our collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Book Now
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

export default Portfolio