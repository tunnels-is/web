# Claude Context - Modern React Website

## Development Environment

- **Website Status**: Live and running on `localhost:5173`
- **Dev Server**: Vite dev server (accessible on 0.0.0.0:5173)
- **Puppeteer**: Available for browser automation, screenshots,
- **Puppeteer**: scripts should be placed in ./scripts
- **Puppeteer Screenshots**: screenshots should be placed in ./screenshots
- **Node Version**: 18+
- **Package Manager**: npm

## Project Overview

This is a modern React website featuring a dark theme with smooth animations. The site showcases various pages including Home, Features, Technical details, Enterprise offerings, Pricing, DNS, Personal VPN, Homelab, Cloud/Baremetal, Free & Open Source, and Download sections.

### Key Technologies

- **React 19.2.0** - Latest React with modern features
- **Vite 7.1.10** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.14** - Utility-first CSS framework (v4)
- **Framer Motion 12.23.24** - Production-ready animation library
- **React Router DOM 7.9.4** - Client-side routing
- **Puppeteer 24.25.0** - Browser automation and screenshots

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx              # Main layout wrapper
│   ├── TopBar.jsx              # Navigation bar
│   ├── Footer.jsx              # Footer component
│   ├── animations/             # Animation components
│   │   ├── FloatingOrbs.jsx    # Floating orb animations
│   │   └── WaveAnimation.jsx   # Wave background animation
│   ├── sections/               # Reusable section components
│   │   ├── HeroWithWaves.jsx
│   │   ├── HeroWithGradients.jsx
│   │   ├── HeroSimple.jsx
│   │   ├── FeatureGrid.jsx
│   │   ├── FeatureTimeline.jsx
│   │   ├── FeatureComparison.jsx
│   │   ├── ContentSection.jsx
│   │   ├── StaggeredGrid.jsx
│   │   ├── CTASection.jsx
│   │   ├── TechnicalFeaturesSection.jsx
│   │   ├── CloudProvidersGrid.jsx
│   │   ├── FAQSection.jsx
│   │   └── PricingHighlight.jsx
│   └── ui/                     # UI components
│       ├── FeatureCard.jsx
│       └── SectionHeader.jsx
├── pages/                      # Page components
│   ├── Home.jsx
│   ├── Features.jsx
│   ├── Technical.jsx
│   ├── Enterprise.jsx
│   ├── Pricing.jsx
│   ├── DNS.jsx
│   ├── PersonalVPN.jsx
│   ├── Homelab.jsx
│   ├── CloudBaremetal.jsx
│   ├── FreeAndOpenSource.jsx
│   └── Download.jsx
├── hooks/
│   └── useScrollAnimation.js   # Custom scroll animation hook
├── App.jsx                     # Main app with routes
├── main.jsx                    # Entry point
└── index.css                   # Global styles & Tailwind config
```

## Component Architecture

### Reusable Section Components
The project follows a component-driven architecture with reusable section components that can be easily composed to build pages:

- **Hero Sections**: Three variants (Simple, Gradients, Waves)
- **Feature Sections**: Grid, Timeline, Comparison layouts
- **Content Sections**: Flexible content blocks
- **CTA Sections**: Call-to-action blocks
- **Specialized Sections**: Technical features, Cloud providers, FAQ, Pricing

### UI Components
- **FeatureCard**: Reusable card component for features
- **SectionHeader**: Consistent section headers with titles and subtitles

### Animations
- **FloatingOrbs**: Animated background orbs
- **WaveAnimation**: Smooth wave animations
- **Scroll Animations**: Custom hook for scroll-triggered animations

## Available NPM Scripts

```bash
npm run dev              # Start dev server on localhost:5173
npm run build            # Build for production (outputs to dist/)
npm run preview          # Preview production build
npm run screenshot       # Screenshot all pages (multiple viewports)
npm run screenshot:quick # Quick screenshot of specific page
```

## Styling System

### Color Scheme (Dark Theme)
The site uses a custom dark theme defined in `src/index.css`:

- Background colors: `--color-dark-bg`, `--color-dark-surface`
- Accent colors: Primary blue, secondary purple, tertiary cyan
- Text colors: Primary, secondary, muted variants
- Border colors: Subtle dark borders

### Tailwind Configuration
- Using Tailwind CSS v4 with `@tailwindcss/postcss`
- Custom color tokens defined in `@theme` block
- Responsive design utilities
- Animation classes for smooth transitions

## Animation Patterns

### Framer Motion Usage
- Fade-in animations on scroll
- Stagger effects for lists and grids
- Hover animations on interactive elements
- Page transitions
- Respect for `prefers-reduced-motion`

### Custom Hooks
- `useScrollAnimation.js` - Handles scroll-triggered animations with IntersectionObserver

## Routing

Routes are defined in `App.jsx` using React Router:
- `/` - Home
- `/features` - Features overview
- `/technical` - Technical details
- `/enterprise` - Enterprise offerings
- `/pricing` - Pricing page
- `/dns` - DNS services
- `/personal-vpn` - Personal VPN
- `/homelab` - Homelab solutions
- `/cloud-baremetal` - Cloud/Baremetal
- `/free-open-source` - FOSS page
- `/download` - Download page

## Puppeteer Integration

### Screenshot Scripts
- `scripts/screenshot.js` - Multi-viewport screenshot utility
- `scripts/take-screenshot.js` - Quick single-page screenshots

### Usage Examples
```bash
# Quick screenshot
npm run screenshot:quick http://localhost:5173/features

# Custom viewport
node scripts/take-screenshot.js http://localhost:5173 mobile 375 667

# All pages
npm run screenshot
```

## Development Workflow

1. **Start Dev Server**: `npm run dev` (runs on port 5173)
2. **Make Changes**: Hot module replacement (HMR) active
3. **Test in Browser**: Visit `http://localhost:5173`
4. **Take Screenshots**: Use Puppeteer scripts for visual testing
5. **Build**: `npm run build` when ready for production

## Git Status

- **Current Branch**: master
- **Recent Work**: Refactoring into components, personal VPN page, homelab page, style updates
- **Untracked Files**: page-task.md, task.md

## Design Principles

1. **Component Reusability**: Build once, use everywhere
2. **Responsive First**: Mobile to desktop
3. **Performance**: Code splitting, lazy loading where appropriate
4. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
5. **Dark Theme**: Consistent dark mode throughout
6. **Smooth Animations**: Framer Motion for professional polish

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `TopBar.jsx`
4. Use existing section components for consistency

### Creating a New Section Component
1. Add to `src/components/sections/`
2. Use Framer Motion for animations
3. Accept props for customization
4. Follow existing component patterns

### Styling Changes
- Edit color tokens in `src/index.css` `@theme` block
- Use Tailwind utility classes
- Custom CSS only when necessary

### Testing Visual Changes
```bash
# Start dev server
npm run dev

# In another terminal, take screenshot
npm run screenshot:quick http://localhost:5173/your-page
```

## Performance Considerations

- Vite provides fast HMR and optimized builds
- React 19 with automatic batching and concurrent features
- Framer Motion with GPU-accelerated animations
- Tailwind CSS purges unused styles in production
- Code splitting via React Router

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Focus management for keyboard navigation
- Respects `prefers-reduced-motion` media query
- Color contrast ratios meet WCAG standards

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features assumed
- No legacy browser support

## Notes for Claude

- **Always test changes on localhost:5173** - The dev server is running
- **Use Puppeteer for visual verification** - Screenshots available via npm scripts
- **Maintain component structure** - Keep sections modular and reusable
- **Follow existing patterns** - Animations, styling, component composition
- **Dark theme only** - No light mode currently
- **Responsive design** - Test across viewports (mobile, tablet, desktop)
- **Use Framer Motion** - For all animations and transitions
- **Tailwind utilities preferred** - Over custom CSS
