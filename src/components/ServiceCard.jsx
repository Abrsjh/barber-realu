import { Scissors, Zap, User, Flame, Smile, Droplets, Clock, DollarSign } from 'lucide-react'

const ServiceCard = ({ service }) => {
  const getIcon = (iconName) => {
    const icons = {
      scissors: Scissors,
      zap: Zap,
      user: User,
      flame: Flame,
      smile: Smile,
      droplets: Droplets
    }
    const IconComponent = icons[iconName] || Scissors
    return <IconComponent className="h-8 w-8 text-accent-600" />
  }

  return (
    <div className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
          {getIcon(service.icon)}
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
          {service.name}
        </h3>
        
        <p className="text-primary-600 dark:text-primary-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Price and Duration */}
        <div className="flex items-center justify-center space-x-6 text-sm border-t border-primary-200 dark:border-primary-700 pt-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-accent-600" />
            <span className="font-semibold text-primary-900 dark:text-white">
              ${service.price}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-accent-600" />
            <span className="text-primary-600 dark:text-primary-300">
              {service.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard