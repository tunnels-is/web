# Project Context: Modern React Website

## Agent Instructions

**IMPORTANT**: When the user requests any UI work, frontend work, component creation, styling changes, or visual design tasks, you MUST automatically invoke the `/ui` agent by using the Skill tool. This includes requests mentioning:
- UI, frontend, design, styling, visual
- Components, pages, layouts
- CSS, Tailwind, colors, spacing
- Buttons, cards, forms, navigation
- Responsive design, mobile layout
- Animations, transitions, hover effects

Do not ask - just invoke `/ui` immediately when these topics come up.

## Project Overview

This is a modern, production-ready portfolio website built with React, Vite, Tailwind CSS v4, and Framer Motion. It features a dark theme design with smooth animations and full responsiveness.

**Current Status**: Fully functional with 5 pages (Home, About, Projects, Contact, 404)

## Tech Stack

### Core Technologies
- **React 19.2.0** - Latest React with modern hooks and concurrent features
- **Vite 7.1.10** - Lightning-fast build tool with HMR
- **React Router DOM 7.9.4** - Client-side routing with BrowserRouter
- **Tailwind CSS 4.1.14** - Latest v4 with CSS-first configuration (@theme directive)
- **Framer Motion 12.23.24** - Production-ready animation library
- **Puppeteer 24.25.0** - Headless browser for screenshots (dev dependency)

### Build Tools
- PostCSS with Autoprefixer
- @vitejs/plugin-react for Fast Refresh
- ES modules throughout

## Project Structure

```
website-new/
├── .claude/
│   ├── claude.md                 # This file - project context for Claude
│   ├── settings.local.json       # Pre-approved commands
│   └── commands/
│       └── ui.md                 # UI agent for frontend work
├── src/
│   ├── components/
│   │   ├── TopBar.jsx           # Sticky nav with mobile menu
│   │   ├── Layout.jsx           # Page wrapper with TopBar + Footer
│   │   └── Footer.jsx           # Three-column footer
│   ├── pages/
│   │   ├── Home.jsx             # Hero + features + CTA
│   │   ├── About.jsx            # Bio + skills + timeline
│   │   ├── Projects.jsx         # Project showcase grid
│   │   ├── Contact.jsx          # Contact form + info cards
│   │   └── NotFound.jsx         # 404 error page
│   ├── hooks/
│   │   └── useScrollAnimation.js # Intersection Observer hook
│   ├── App.jsx                  # Router configuration
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + @theme config
├── scripts/
│   ├── screenshot.js            # Full screenshot suite
│   └── take-screenshot.js       # Quick single screenshot
├── public/                      # Static assets
├── screenshots/                 # Auto-generated screenshots (gitignored)
├── index.html                   # HTML template
├── vite.config.js              # Vite config (host: 0.0.0.0:5173)
├── tailwind.config.js          # Tailwind v3-style config
├── postcss.config.js           # PostCSS with Tailwind plugin
├── package.json                # Dependencies + scripts
├── README.md                   # User-facing documentation
├── FEATURES.md                 # Detailed feature list
├── SCREENSHOTS.md              # Screenshot utility docs
├── PUPPETEER-SETUP.md         # Puppeteer integration docs
└── task.md                     # Current task/objective
```

## Design System

### Color Palette (Dark Theme)
Defined in `src/index.css` using Tailwind v4's `@theme` directive:

```css
--color-dark-bg: #0a0a0a           /* Deep black background */
--color-dark-surface: #121212       /* Card/surface background */
--color-dark-elevated: #1e1e1e      /* Elevated surfaces */
--color-dark-border: #2a2a2a        /* Border color */
--color-dark-text-primary: #ffffff  /* Primary text */
--color-dark-text-secondary: #a0a0a0 /* Secondary text */
--color-dark-text-muted: #666666    /* Muted text */
--color-dark-accent-primary: #3b82f6    /* Blue accent */
--color-dark-accent-secondary: #8b5cf6  /* Purple accent */
--color-dark-accent-tertiary: #06b6d4   /* Cyan accent */
```

### Typography
- System font stack for performance
- Antialiased rendering
- Consistent sizing scale via Tailwind

### Effects
- **Glass-morphism**: `backdrop-blur` + transparency (`.glass-effect` utility)
- **Gradient text**: Multi-color gradients with text clip (`.text-gradient` utility)
- **Shadows**: Subtle shadows with accent color tints
- **Hover states**: Scale, translate, color changes

### Animations
Custom keyframes defined in `@theme`:
- `fade-in`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `scale-in`
- Framer Motion used for complex animations and gestures
- Respects `prefers-reduced-motion`

## Key Components

### TopBar (`src/components/TopBar.jsx`)
- Sticky navigation with blur effect on scroll
- Responsive mobile hamburger menu
- Active route highlighting
- Logo with gradient text effect
- Links: Home, About, Projects, Contact

### Layout (`src/components/Layout.jsx`)
- Wrapper component providing consistent structure
- Includes TopBar and Footer
- Main content area with proper spacing

### Footer (`src/components/Footer.jsx`)
- Three-column responsive layout
- Quick links, social icons, brand info
- Sticky at bottom with dark background

### useScrollAnimation Hook (`src/hooks/useScrollAnimation.js`)
- Custom hook using Intersection Observer API
- Returns `isVisible` boolean for scroll-triggered animations
- Configurable threshold and root margin
- Used throughout pages for fade-in effects

## Routing

Configured in `src/App.jsx` using React Router:
- `/` → Home
- `/about` → About
- `/projects` → Projects
- `/contact` → Contact
- `*` → NotFound (404)

Uses `BrowserRouter` for clean URLs. Can switch to `HashRouter` for static hosting compatibility.

## Development Workflow

### Available Scripts

```bash
npm run dev              # Start dev server (0.0.0.0:5173)
npm run build            # Production build → dist/
npm run preview          # Preview production build
npm run screenshot       # Capture all pages (multiple viewports)
npm run screenshot:quick # Quick single screenshot
```

### Screenshot Utility

Puppeteer-based screenshot tool for visual testing:

```bash
# Quick screenshot
node scripts/take-screenshot.js http://localhost:5173 home

# Custom viewport (mobile)
node scripts/take-screenshot.js http://localhost:5173 mobile 375 667

# Different pages
node scripts/take-screenshot.js http://localhost:5173/about about
```

Screenshots saved to `./screenshots/` (gitignored)

## Important Notes

### Tailwind CSS v4
This project uses Tailwind v4, which has a different configuration approach:
- Uses `@theme` directive in CSS instead of JS config
- CSS-first configuration in `src/index.css`
- `tailwind.config.js` kept for compatibility but v4 prefers CSS config
- No `@tailwind` directives needed, uses `@import "tailwindcss"`

### Vite Configuration
- Server binds to `0.0.0.0:5173` for network access
- Base path set to `'./'` for flexible deployment
- Fast Refresh enabled for React

### Git Status
- Current branch: `master`
- Untracked files: `SCREENSHOTS.md`, `task.md`
- Recent commits: "Adding puppeteer", "Init"

## Recent Updates

### Content Migration (Completed 2025-10-19)

Successfully migrated all content from the old Tunnels website to this new modern React implementation. See `MIGRATION_SUMMARY.md` for complete details.

**Pages Created:**
- `/features` - Comprehensive feature showcase (Basic, Advanced, Enterprise)
- `/dns` - DNS security and routing capabilities
- `/enterprise` - Enterprise solutions and scalability
- `/technical` - Technical deep-dive with diagrams
- `/download` - Platform-specific downloads with quick start
- `/pricing` - Subscription tiers and pricing information

**Updates Made:**
- TopBar navigation updated with new menu structure
- Home page rebranded for Tunnels with VPN/LAN focus
- Footer updated with proper social links and community resources
- All routes configured in App.jsx
- Old placeholder pages removed (About, Projects, Contact, NotFound)

**Build Status:** ✅ Production-ready, all pages functional

## Code Style Guidelines

### File Naming
- Components: PascalCase (e.g., `TopBar.jsx`)
- Hooks: camelCase with `use` prefix (e.g., `useScrollAnimation.js`)
- Pages: PascalCase (e.g., `Home.jsx`)

### Component Structure
- Functional components with hooks
- Framer Motion for animations
- Tailwind for styling (no CSS modules)
- PropTypes/TypeScript not currently used

### Styling Approach
- Utility-first with Tailwind
- Custom utilities: `.text-gradient`, `.glass-effect`
- Inline styles avoided
- Responsive: mobile-first breakpoints

## Performance Optimizations

- Code splitting by route (ready for React.lazy)
- Optimized animations using transform/opacity
- Minimal bundle size
- Tree-shaking enabled
- CSS purging in production
- Assets optimized by Vite

## Accessibility Features

- Semantic HTML elements
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Proper heading hierarchy

## Deployment Considerations

### Recommended Hosts
- Vercel (auto-routing)
- Netlify (auto-routing)
- Cloudflare Pages
- GitHub Pages (needs HashRouter)

### Build Output
- Static files in `dist/` after build
- All routes redirect to `index.html` for client-side routing
- No server-side rendering required

## Future Enhancements (from FEATURES.md)

### High Priority
- Add real content and images
- Connect contact form to backend/email service
- Add meta tags for SEO
- Create favicon and app icons
- Test on real devices

### Medium Priority
- Blog section
- Search functionality
- More page transitions
- Loading states
- Analytics integration

### Low Priority
- Dark/Light theme toggle
- Custom cursor effects
- Particle animations
- PWA features

## Common Commands for Claude

### Screenshot Current State
```bash
npm run dev  # Start server (note the port in output)
# In another terminal:
node scripts/take-screenshot.js http://localhost:5173 current
```

### Check Build
```bash
npm run build
npm run preview
```

### Test New Component
```bash
# Create component in src/components/
# Import in page
# View at http://localhost:5173
```

## Dependencies Summary

### Production
- react, react-dom: UI library
- react-router-dom: Routing
- framer-motion: Animations

### Development
- vite: Build tool
- @vitejs/plugin-react: React Fast Refresh
- tailwindcss: Styling framework
- postcss, autoprefixer: CSS processing
- puppeteer: Screenshots

## Known Issues & Quirks

1. **Port Auto-increment**: If 5173 is busy, Vite uses 5174. Check terminal output.
2. **Tailwind v4**: Different config approach, uses CSS `@theme` directive
3. **Screenshots**: Require dev server running first
4. **Mobile Menu**: Uses Framer Motion AnimatePresence for transitions

## Best Practices for This Project

1. **Always read existing components** before creating similar ones
2. **Use the screenshot tool** to verify visual changes
3. **Follow the design system** - use theme colors and utilities
4. **Test responsiveness** - mobile-first approach
5. **Use Framer Motion** for animations, not raw CSS
6. **Check FEATURES.md** before implementing new features
7. **Update documentation** when adding significant features

## Quick Reference

- Main colors in `src/index.css` under `@theme`
- Navigation links in `src/components/TopBar.jsx`
- Routes in `src/App.jsx`
- Global styles in `src/index.css`
- Custom hook for scroll: `useScrollAnimation`
- Glass effect: `glass-effect` class
- Gradient text: `text-gradient` class

---

**Last Updated**: 2025-10-19
**Status**: Active development, fully functional base
**Next**: Implement content migration from old website
