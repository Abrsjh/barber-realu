import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'text-gold-400 fill-current' 
            : 'text-primary-300 dark:text-primary-600'
        }`}
      />
    ))
  }

  return (
    <div className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      {/* Quote */}
      <blockquote className="text-primary-700 dark:text-primary-300 mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </blockquote>
      
      {/* Client Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-primary-200 dark:border-primary-700">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-700">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <div className="font-semibold text-primary-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-accent-600 dark:text-accent-400">
            {testimonial.service}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard