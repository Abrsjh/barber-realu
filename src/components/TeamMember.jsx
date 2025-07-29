const TeamMember = ({ member }) => {
  return (
    <div className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
      {/* Photo */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary-100 dark:bg-primary-700 group-hover:scale-105 transition-transform duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Info */}
      <div>
        <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-2">
          {member.name}
        </h3>
        <p className="text-accent-600 dark:text-accent-400 font-medium mb-4">
          {member.role}
        </p>
        <p className="text-primary-600 dark:text-primary-300 mb-6 leading-relaxed">
          {member.bio}
        </p>
        
        {/* Specialties */}
        <div>
          <h4 className="text-sm font-semibold text-primary-900 dark:text-white mb-3">
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {member.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember