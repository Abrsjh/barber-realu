# FadeMaster Studio - Barbershop Portfolio Website

A modern, responsive frontend-only portfolio website for FadeMaster Studio barbershop, showcasing services, portfolio, testimonials, and team information with a full-featured contact form.

## 🚀 Live Demo

Visit the live site: [FadeMaster Studio](https://your-deployment-url.vercel.app)

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Portfolio**: Image gallery with filtering and modal viewing
- **Contact Form**: Working form with validation and localStorage storage
- **Theme Toggle**: Persistent dark/light mode with system preference detection
- **Performance Optimized**: Lazy loading, code splitting, and performance monitoring
- **Accessibility Ready**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand for client-side state
- **Routing**: React Router for navigation
- **Icons**: Lucide React
- **Deployment**: Vercel with client-side routing support

## 📁 Project Structure

```
fademaster-studio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── TeamMember.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── hooks/
│   │   └── usePerformance.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── store/
│   │   └── useStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── memory-bank/
│   ├── projectbrief.md
│   ├── techContext.md
│   ├── systemPatterns.md
│   ├── activeContext.md
│   └── progress.md
├── CLAUDE.md
├── PLAN.md
├── TESTING.md
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fademaster-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with call-to-action buttons
- Services preview with icons
- Statistics showcase
- Responsive design with smooth animations

### Services (`/services`)
- Complete service listings with pricing
- Service cards with icons and descriptions
- Pricing information and booking policies
- Service selection integration with contact form

### Portfolio (`/portfolio`)
- Interactive image gallery with filtering
- Category-based filtering (Classic, Fade, Beard, Modern)
- Modal view for enlarged images
- Responsive grid layout with hover effects

### Testimonials (`/testimonials`)
- Client testimonials with ratings
- Star rating system
- Featured testimonial section
- Social proof statistics

### About (`/about`)
- Studio history and story
- Team member profiles with specialties
- Company values and mission
- Studio location and contact information

### Contact (`/contact`)
- Working contact form with validation
- Form data stored in localStorage
- Service selection dropdown
- Business hours and location info
- FAQ section

## 🎨 Design System

### Colors
- **Primary**: Neutral grays for text and backgrounds
- **Accent**: Orange (#f16207) for CTAs and highlights  
- **Gold**: Yellow (#f59e0b) for premium elements

### Typography
- **Font**: Inter (system fallback)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400-500)

### Components
- **Cards**: Rounded corners with shadow
- **Buttons**: Three variants (primary, secondary, ghost)
- **Forms**: Consistent styling with validation states

## 💾 State Management

### Zustand Store (`src/store/useStore.js`)

```javascript
// Theme management
theme: 'light' | 'dark'
toggleTheme()
initializeTheme()

// Contact form
contactForm: { name, email, phone, message, service }
setContactForm(field, value)
submitContactForm()

// Mobile menu
isMobileMenuOpen: boolean
toggleMobileMenu()
```

### localStorage Integration
- Theme preference persistence
- Contact form submissions storage
- System theme preference detection

## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
- React plugin setup
- Build optimization
- Code splitting configuration

### Tailwind Configuration (`tailwind.config.js`)
- Custom color palette
- Extended spacing and typography
- Dark mode configuration
- Custom animations

### Vercel Configuration (`vercel.json`)
- Client-side routing support
- Security headers
- Performance optimizations

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**: None required for this static site

### Other Platforms

The build output in `dist/` folder can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🧪 Testing

Comprehensive testing documentation available in [`TESTING.md`](./TESTING.md)

### Test Coverage
- ✅ Page routing and navigation
- ✅ Mobile responsiveness
- ✅ Theme toggle functionality
- ✅ Contact form validation
- ✅ Cross-browser compatibility
- ✅ Performance metrics
- ✅ Accessibility compliance

## 🔧 Development

### Development Rules
- **No Backend**: All data is hardcoded or stored in localStorage
- **Mobile-First**: Responsive design starting from mobile
- **Custom Components**: No external UI libraries
- **Performance**: Optimized loading and interactions

### Code Style
- **ESLint**: Consistent code formatting
- **Tailwind**: Utility-first CSS approach
- **Component-Based**: Reusable React components
- **TypeScript Ready**: Easy migration path if needed

## 📊 Performance

### Optimizations
- **Lazy Loading**: Images load on demand
- **Code Splitting**: Vendor chunks separated
- **Performance Monitoring**: Built-in metrics tracking
- **Resource Preloading**: Critical resources preloaded

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

## ♿ Accessibility

### Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Clear focus indicators
- **Reduced Motion**: Respects user preferences

## 🔒 Security

### Measures
- **XSS Protection**: Input sanitization
- **Content Security**: Security headers via Vercel
- **No Sensitive Data**: All data is public-facing
- **Form Validation**: Client-side input validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `memory-bank/`

---

**Built with ❤️ for FadeMaster Studio**