# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# FadeMaster Studio - Premium Barbershop Portfolio

## Project Architecture

This is a **cutting-edge frontend-only barbershop portfolio** built with modern web technologies and premium visual design. The application showcases services, portfolio, testimonials, and team information with stunning visuals and high-end animations.

### Core Architecture Pattern
- **State Management**: Zustand store (`src/store/useStore.js`) handles theme switching, contact forms, and mobile menu
- **Routing**: React Router with clean URLs and client-side navigation 
- **Component Structure**: Layout wrapper pattern with nested page components
- **Data Pattern**: Centralized mock data in `src/data/mockData.js` with localStorage persistence
- **Performance**: Custom hooks in `src/hooks/usePerformance.js` for monitoring and optimization

### State Architecture
```javascript
// Zustand Store Structure
{
  theme: 'light' | 'dark',           // Persistent theme with system detection
  contactForm: { ... },              // Form state with validation
  isMobileMenuOpen: boolean,         // Mobile navigation state
  toggleTheme(),                     // Theme switching with DOM updates
  submitContactForm(),               // Form submission to localStorage
  initializeTheme()                  // System preference detection
}
```

### Component Hierarchy
```
App.jsx (Theme & Performance initialization)
└── Layout.jsx (Header + Footer wrapper)
    ├── Header.jsx (Navigation + Theme toggle + Mobile menu)
    ├── [Page Components] (Home, Services, Portfolio, etc.)
    └── Footer.jsx (Links + Contact info)
```

## Development Commands

```bash
# Development
npm run dev              # Start development server (port 5173)
npm run build           # Production build to dist/
npm run preview         # Preview production build (port 4173)
npm run lint           # ESLint code quality check

# Key Build Files
dist/                  # Production build output
vercel.json           # Client-side routing configuration
```

## Premium Visual Enhancement Strategy

### Current Tech Stack (Base)
- React 18+ with Vite bundler
- Tailwind CSS with custom design system
- Zustand for state management
- React Router for navigation
- Lucide React for icons

### Cutting-Edge Enhancements to Implement

#### 1. Animation & Motion
- **Framer Motion**: Add to package.json for fluid page transitions, scroll-triggered animations, and micro-interactions
- **Lottie Animations**: JSON-based animations for barbershop tools and styling elements
- **Parallax Scrolling**: Multi-layer depth effects on hero sections

#### 2. Premium Typography
- **Google Fonts**: Playfair Display (headings) + Inter (body) for luxury feel
- **Variable Fonts**: Weight and spacing animations
- **Text Reveal Effects**: Character-by-character animations

#### 3. Visual Assets Strategy
- **High-Resolution Barbershop Images**: Replace Unsplash with professional barbershop photography
- **Video Backgrounds**: Looping barbershop ambiance videos in hero sections
- **SVG Icon System**: Custom barbershop tool icons with animation paths

#### 4. Advanced CSS Effects
- **3D Transforms**: CSS transform-style: preserve-3d for card hover effects
- **Backdrop Filters**: Modern glass morphism effects
- **CSS Grid Masonry**: Pinterest-style portfolio layouts
- **Custom Shaders**: CSS @property for gradient animations

#### 5. Interactive Elements
- **Scroll-Triggered Animations**: IntersectionObserver-based reveals
- **Gesture Controls**: Touch/swipe interactions for mobile gallery
- **Particle Systems**: Canvas-based background effects

## Key Configuration Files

### Tailwind Configuration (`tailwind.config.js`)
Custom color palette with primary/accent/gold scales, extended spacing, custom animations, and dark mode support.

### Vite Configuration (`vite.config.js`) 
Code splitting with vendor/store/icons chunks, esbuild minification, and performance optimization.

### Vercel Configuration (`vercel.json`)
Client-side routing rewrites and security headers for SPA deployment.

## State Management Patterns

### Theme System
- System preference detection on initialization
- Persistent localStorage storage
- Immediate DOM class application for theme switching
- Dark mode optimized color palette

### Form Handling
- Zustand-based form state with validation
- localStorage persistence for submitted forms
- Email regex validation and required field checking
- Form reset after successful submission

### Mobile Responsiveness
- Mobile-first Tailwind breakpoints
- Responsive navigation with hamburger menu
- Touch-optimized interactive elements
- Performance monitoring for mobile devices

## Development Constraints & Rules

- **No Backend**: All data hardcoded or localStorage-based
- **Custom Components Only**: No external UI libraries (maintain design control)
- **Mobile-First**: All features designed for mobile, enhanced for desktop  
- **Performance-First**: Lazy loading, code splitting, performance monitoring
- **Accessibility**: WCAG compliant with keyboard navigation and screen readers

## Premium Feature Implementation Priority

1. **Animation System**: Framer Motion integration for page transitions
2. **Typography Upgrade**: Google Fonts with variable font features
3. **Image Strategy**: High-quality barbershop photography and optimization
4. **3D Effects**: CSS transform-style and WebGL for premium feel
5. **Scroll Animations**: IntersectionObserver-based reveal animations
6. **Particle Effects**: Canvas-based background animations
7. **Video Integration**: Background videos with fallback images

This architecture supports rapid development of premium barbershop websites while maintaining performance and accessibility standards.