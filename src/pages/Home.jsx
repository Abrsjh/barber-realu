import { Link } from 'react-router-dom'
import { Scissors, Star, Users, Clock, Sparkles, Award, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { studioInfo } from '../data/mockData'
import ParticleBackground from '../components/ParticleBackground'
import { 
  PageTransition, 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  ParallaxElement,
  HoverScale,
  FloatingElement,
  TextReveal,
  MagneticButton
} from '../components/MotionComponents'

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section with Premium Visuals */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-gold-50 dark:from-primary-900 dark:via-primary-800 dark:to-accent-900 overflow-hidden hero-3d">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <ParticleBackground density={60} speed={0.8} color="#f59e0b" opacity={0.4} />
        </div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-20 dark:opacity-10" />
        
        {/* Floating Geometric Shapes */}
        <FloatingElement amplitude={15} duration={4} className="absolute top-20 left-10 w-20 h-20 opacity-10 dark:opacity-5">
          <div className="w-full h-full bg-accent-600 rounded-full blur-xl" />
        </FloatingElement>
        <FloatingElement amplitude={20} duration={5} className="absolute top-40 right-20 w-32 h-32 opacity-10 dark:opacity-5">
          <div className="w-full h-full bg-gold-500 rounded-full blur-xl" />
        </FloatingElement>
        <FloatingElement amplitude={12} duration={6} className="absolute bottom-40 left-1/4 w-16 h-16 opacity-10 dark:opacity-5">
          <div className="w-full h-full bg-accent-500 rounded-full blur-xl" />
        </FloatingElement>
        
        <div className="relative container-custom py-20 lg:py-32 z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Hero Badge with Animation */}
            <ScrollReveal direction="down" delay={0.2}>
              <div className="flex justify-center mb-8">
                <motion.div 
                  className="inline-flex items-center space-x-3 glass-premium backdrop-blur-2xl rounded-full px-8 py-3 border border-accent-200/30 dark:border-accent-700/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="h-5 w-5 text-accent-600 animate-pulse" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300 font-display">
                    Est. {studioInfo.established} • Premium Experience
                  </span>
                  <Sparkles className="h-5 w-5 text-gold-600 animate-pulse" />
                </motion.div>
              </div>
            </ScrollReveal>
            
            {/* Hero Title with Advanced Typography */}
            <TextReveal delay={0.4} duration={1.2}>
              <h1 className="hero-title text-premium mb-8">
                {studioInfo.name}
              </h1>
            </TextReveal>
            
            {/* Hero Subtitle with Shimmer Effect */}
            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-2xl lg:text-3xl font-display font-medium mb-6 text-shimmer">
                {studioInfo.tagline}
              </p>
            </ScrollReveal>
            
            {/* Hero Description */}
            <ScrollReveal direction="up" delay={0.8}>
              <p className="text-lg lg:text-xl text-primary-600 dark:text-primary-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body">
                {studioInfo.description}
              </p>
            </ScrollReveal>
            
            {/* Premium CTA Buttons */}
            <ScrollReveal direction="up" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <MagneticButton strength={0.2}>
                  <Link to="/contact" className="btn-primary text-lg px-10 py-4 font-display font-semibold">
                    Book Your Experience
                  </Link>
                </MagneticButton>
                <HoverScale scale={1.02}>
                  <Link to="/services" className="btn-secondary text-lg px-10 py-4 font-display font-semibold">
                    Explore Services
                  </Link>
                </HoverScale>
              </div>
            </ScrollReveal>
            
            {/* Premium Stats Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
              <StaggerItem>
                <HoverScale className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 glass-premium rounded-2xl mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Star className="h-8 w-8 text-accent-600 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold font-display text-primary-900 dark:text-white mb-2">500+</div>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-300 font-body">Happy Clients</div>
                </HoverScale>
              </StaggerItem>
              
              <StaggerItem>
                <HoverScale className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 glass-premium rounded-2xl mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Users className="h-8 w-8 text-accent-600 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold font-display text-primary-900 dark:text-white mb-2">3</div>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-300 font-body">Master Barbers</div>
                </HoverScale>
              </StaggerItem>
              
              <StaggerItem>
                <HoverScale className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 glass-premium rounded-2xl mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Award className="h-8 w-8 text-accent-600 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold font-display text-primary-900 dark:text-white mb-2">7</div>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-300 font-body">Days a Week</div>
                </HoverScale>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-accent-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-600 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Premium Services Preview */}
      <section className="section-padding bg-white dark:bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary-900 dark:text-white mb-6 text-premium">
              Signature <span className="text-shimmer">Services</span>
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-300 max-w-3xl mx-auto font-body">
              From classic cuts to modern fades, we deliver exceptional results with every visit
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" staggerDelay={0.2}>
            <StaggerItem>
              <HoverScale className="card-premium text-center group min-h-[300px] flex flex-col justify-center">
                <ParallaxElement offset={20} className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 glass-premium rounded-3xl group-hover:shadow-glow-lg transition-all duration-500">
                    <Scissors className="h-10 w-10 text-accent-600 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                </ParallaxElement>
                <h3 className="text-2xl font-bold font-display text-primary-900 dark:text-white mb-4 text-premium">
                  Classic Cuts
                </h3>
                <p className="text-primary-600 dark:text-primary-300 font-body leading-relaxed">
                  Traditional barbershop cuts with modern precision and attention to detail
                </p>
              </HoverScale>
            </StaggerItem>
            
            <StaggerItem>
              <HoverScale className="card-premium text-center group min-h-[300px] flex flex-col justify-center">
                <ParallaxElement offset={30} className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 glass-premium rounded-3xl group-hover:shadow-glow-lg transition-all duration-500">
                    <Star className="h-10 w-10 text-accent-600 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                </ParallaxElement>
                <h3 className="text-2xl font-bold font-display text-primary-900 dark:text-white mb-4 text-premium">
                  Signature Fades
                </h3>
                <p className="text-primary-600 dark:text-primary-300 font-body leading-relaxed">
                  Our specialty fades that blend artistry with technical expertise
                </p>
              </HoverScale>
            </StaggerItem>
            
            <StaggerItem>
              <HoverScale className="card-premium text-center group min-h-[300px] flex flex-col justify-center">
                <ParallaxElement offset={25} className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 glass-premium rounded-3xl group-hover:shadow-glow-lg transition-all duration-500">
                    <Users className="h-10 w-10 text-accent-600 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                </ParallaxElement>
                <h3 className="text-2xl font-bold font-display text-primary-900 dark:text-white mb-4 text-premium">
                  Hot Towel Service
                </h3>
                <p className="text-primary-600 dark:text-primary-300 font-body leading-relaxed">
                  Luxurious traditional wet shaves with premium hot towel treatment
                </p>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
          
          <ScrollReveal className="text-center">
            <MagneticButton strength={0.15}>
              <Link to="/services" className="btn-primary text-lg px-8 py-4 font-display font-semibold">
                View All Services
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="section-padding bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 dark:from-accent-700 dark:via-accent-800 dark:to-accent-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <ParticleBackground density={30} speed={1.2} color="#ffffff" opacity={0.3} />
        </div>
        
        {/* Floating Elements */}
        <FloatingElement amplitude={8} duration={4} className="absolute top-10 left-10 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-white rounded-full blur-xl" />
        </FloatingElement>
        <FloatingElement amplitude={12} duration={5} className="absolute bottom-10 right-10 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gold-300 rounded-full blur-xl" />
        </FloatingElement>
        
        <div className="container-custom text-center relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-white mb-6 text-premium">
              Ready for Your <span className="text-gold-300">Best Look?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl lg:text-2xl text-accent-100 mb-12 max-w-3xl mx-auto font-body">
              Book your appointment today and experience the FadeMaster difference
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton strength={0.2}>
                <Link to="/contact" className="bg-white text-accent-700 hover:bg-accent-50 font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl font-display">
                  Book Now
                </Link>
              </MagneticButton>
              <HoverScale>
                <Link to="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-accent-700 font-semibold py-4 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm font-display">
                  See Our Work
                </Link>
              </HoverScale>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home