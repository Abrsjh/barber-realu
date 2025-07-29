# PLAN.md - FadeMaster Studio Development Tasks

## Setup & Configuration
- [ ] Create `package.json` with React + Vite dependencies
- [ ] Add Tailwind CSS configuration files
- [ ] Create `vercel.json` for client-side routing
- [ ] Set up `src/` directory structure
- [ ] Initialize `.gitignore` file

## Core Data & State
- [ ] Create `src/data/mockData.js` with all content
- [ ] Build Zustand store in `src/store/useStore.js`
- [ ] Implement theme toggle with localStorage
- [ ] Add contact form state management

## Layout Components
- [ ] Create `src/components/Layout/Header.jsx`
- [ ] Build navigation menu with theme toggle
- [ ] Create `src/components/Layout/Footer.jsx`
- [ ] Implement mobile navigation menu
- [ ] Add responsive layout container

## Routing Setup
- [ ] Configure React Router in `src/App.jsx`
- [ ] Create route structure for all pages
- [ ] Add navigation link components
- [ ] Test URL-based routing

## Homepage Development
- [ ] Create `src/pages/Home.jsx`
- [ ] Build hero banner component
- [ ] Add call-to-action buttons
- [ ] Implement responsive hero section
- [ ] Add brand tagline and styling

## Services Page
- [ ] Create `src/pages/Services.jsx`
- [ ] Build `ServiceCard` component
- [ ] Add service icons from lucide-react
- [ ] Implement pricing display
- [ ] Make services grid responsive

## Portfolio Page
- [ ] Create `src/pages/Portfolio.jsx`
- [ ] Build image gallery component
- [ ] Add hover effects for images
- [ ] Use placeholder images
- [ ] Implement responsive grid layout

## Testimonials Page
- [ ] Create `src/pages/Testimonials.jsx`
- [ ] Build `TestimonialCard` component
- [ ] Add client photos (placeholders)
- [ ] Implement testimonial quotes
- [ ] Make testimonials responsive

## About Page
- [ ] Create `src/pages/About.jsx`
- [ ] Build `TeamMember` component
- [ ] Add barbershop history section
- [ ] Include team member bios
- [ ] Style with consistent layout

## Contact Page
- [ ] Create `src/pages/Contact.jsx`
- [ ] Build contact form component
- [ ] Connect form to Zustand state
- [ ] Add form validation
- [ ] Store submissions to localStorage

## Styling & Theme
- [ ] Configure Tailwind dark mode
- [ ] Create custom color palette
- [ ] Add typography system
- [ ] Implement consistent spacing
- [ ] Test light/dark theme switching

## Testing & Polish
- [ ] Test all page routing
- [ ] Verify mobile responsiveness
- [ ] Test theme toggle persistence
- [ ] Validate contact form functionality
- [ ] Check cross-browser compatibility

## Final Deployment Prep
- [ ] Verify build process works
- [ ] Test vercel.json routing
- [ ] Optimize performance
- [ ] Final visual polish
- [ ] Documentation update