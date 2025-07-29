# FadeMaster Studio - Barbershop Portfolio Website

## Project Overview
Building a modern, responsive frontend-only portfolio website for FadeMaster Studio barbershop using React + Vite.

## Tech Stack
- **Frontend Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS (mobile-first, responsive)
- **State Management**: Zustand for client state
- **Routing**: React Router (URL-based navigation)
- **Icons**: lucide-react
- **Data Storage**: localStorage + hardcoded mock data
- **Date Handling**: date-fns (only if needed)

## Development Rules
- **NO BACKEND**: All data is hardcoded or stored in localStorage
- **NO EXTERNAL COMPONENT LIBRARIES**: Build custom components only
- **TDD APPROACH**: Test-driven development required
- **NO TERMINAL COMMANDS**: Manual package installation and dev server startup
- **MOBILE-FIRST**: Responsive design with pixel-perfect UI
- **MEMORY-DRIVEN**: Use Claude Code memory system throughout

## Key Features
- Light/dark mode with localStorage persistence
- Clean URL routing (/services, /portfolio, /contact, etc.)
- Mock data from src/data/mockData.js
- Working contact form (stores to Zustand state)
- vercel.json for client-side routing deployment

## File Structure Requirements
- All mock data in `src/data/mockData.js`
- Memory files in `memory-bank/` directory
- `vercel.json` in project root for deployment
- Component-based architecture with custom styling

## Commands to Remember
- Lint: `npm run lint` (if available)
- Typecheck: `npm run typecheck` (if available)
- Build: `npm run build`