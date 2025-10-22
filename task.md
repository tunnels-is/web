I want you to look at all of the pages inside @src/pages, analyze the structure and create components out of the different sections. Then implement these components into the pages.

Things that I like:
 - The floating animation in the /personal-vpn hero banner
 - The intersection between "Personal Vs Commercial VPNs" and "Setup in 5 easy steps", the angeld seperate looks good

things that I don't like:
 - background in the 'why run your own vpn' section on the /personal-vpn page 
 - "setup in 5 easy steps" section in the /personal-vpn page
 - "Zero Knowledge. Zero Logs. Zero Compromise." section in the /personal-vpn page
 - "Where to deploy" section in the /personal-vpn page

NOTES:
 - try to merge sections like "Common questions", "FAQ", any section like that.
 - Add the floating wave anymation in the /personal-vpn hero banner to all hero banners.
 - the website is running at localhots:5173
 - your have pupeteer available to take screenshots if needed

---

## DETAILED TODO LIST

### Phase 1: Component Analysis & Extraction Planning

**1.1 Audit all pages and identify reusable sections**
- Map out all sections across PersonalVPN.jsx (11 sections including hero, benefits, use cases, technical features, setup steps, comparison, privacy highlight, cloud providers, FAQ, final CTA)
- Map out all sections across Home.jsx (hero, topics, features, CTA)
- Map out all sections across Homelab.jsx (hero, benefits, setup steps, use cases, DNS features, technical highlights, hardware requirements, CTA)
- Map out all sections across Features.jsx (hero, basic features, advanced features, enterprise features, CTA)
- Map out all sections across DNS.jsx (hero, DNS features, server config, device config, CTA)
- Document similar sections across pages (e.g., hero banners, feature grids, CTA sections)

**1.2 Create component architecture document**
- Define component hierarchy (atoms → molecules → organisms → templates)
- Identify shared props patterns (animation configs, styling, data structures)
- Document animation patterns (scroll animations, hover effects, entrance animations)
- Plan component API design for maximum reusability

### Phase 2: Create Core Reusable Components

**2.1 Hero Components**
- `HeroSection.jsx` - Main hero container with animated background support
- `HeroWithWaves.jsx` - Specialized hero with floating wave animation (from /personal-vpn)
- `HeroWithGradients.jsx` - Hero with animated gradient orbs (from /homelab)
- `HeroSimple.jsx` - Clean hero for simple pages (from /home)
- Props: title, subtitle, description, CTAButtons array, backgroundStyle, badge, quickStats

**2.2 Feature Display Components**
- `FeatureGrid.jsx` - Grid layout for displaying features/benefits cards
  - Supports multiple column layouts (2, 3, 4 columns)
  - Props: features array (title, description, icon, color/gradient), columns, cardStyle
  - Includes hover animations and gradient border effects
- `FeatureCard.jsx` - Individual feature card component
  - Props: title, description, icon, gradient, hoverEffect
- `FeatureTimeline.jsx` - Timeline/step-by-step layout for setup guides
  - Props: steps array (step number, title, description, command, details, providers)
  - Animated connecting lines between steps
- `FeatureComparison.jsx` - Comparison table/cards for comparing options
  - Props: comparisonItems array (feature, option1, option2, winner)
  - Highlight winning features

**2.3 Content Section Components**
- `ContentSection.jsx` - Wrapper for all content sections with consistent spacing
  - Props: background (dark-bg, dark-surface, gradient), padding, children
- `SectionHeader.jsx` - Reusable section heading component
  - Props: title, subtitle, alignment, gradient
- `StaggeredGrid.jsx` - Masonry/staggered layout for use case cards (from PersonalVPN use cases section)
  - Props: items array, staggerPattern

**2.4 CTA Components**
- `CTASection.jsx` - Call-to-action section with flexible button layouts
  - Props: title, description, buttons array, layout (centered, split, grid)
- `CTACard.jsx` - Individual CTA card for split layouts
  - Props: icon, title, description, features list, button
- `ButtonPrimary.jsx` - Gradient button with animation
- `ButtonSecondary.jsx` - Glass-effect button

**2.5 Specialized Section Components**
- `TechnicalFeaturesSection.jsx` - Grid of technical features with category grouping
  - Props: categories array (category name, features list)
- `CloudProvidersGrid.jsx` - Provider comparison cards with recommended badges
  - Props: providers array (name, price, specs, locations, pros, recommended)
- `FAQSection.jsx` - FAQ/Common questions expandable cards
  - Props: faqs array (question, answer)
  - Merge this pattern across all FAQ-like sections
- `DNSFeaturesSection.jsx` - DNS-specific feature display
  - Props: dnsFeatures array (title, description, example)
- `PricingHighlight.jsx` - Bold full-width highlight section with gradient background
  - Props: title, description, highlights array, backgroundGradient

**2.6 Animation Components**
- `ScrollAnimationWrapper.jsx` - Wrapper component using useScrollAnimation hook
  - Props: children, animationType, delay
- `FloatingOrbs.jsx` - Animated background orbs (extracted from multiple hero sections)
  - Props: orbConfigs array (size, position, color, animationDuration)
- `WaveAnimation.jsx` - SVG wave animation component (from /personal-vpn hero)
  - Props: waveGradient, animationDuration, opacity

### Phase 3: Refactor Existing Pages

**3.1 Refactor PersonalVPN.jsx**
- Replace hero section with `HeroWithWaves` component
- Extract benefits section → `FeatureGrid` with benefits data
- Extract use cases section → `StaggeredGrid` with useCases data
- Extract technical features → `TechnicalFeaturesSection` with technicalFeatures data
- Extract setup steps → `FeatureTimeline` with setupSteps data
- Replace comparison section → `FeatureComparison` with comparison data
- Extract privacy highlight → `PricingHighlight` with custom content
- Extract cloud providers → `CloudProvidersGrid` with cloudProviders data
- Replace FAQ section → `FAQSection` with FAQ data
- Replace final CTA → `CTASection` with split layout using `CTACard` components
- Remove sections that user doesn't like:
  - Modify "Why run your own vpn" section background (ref to line 437-487)
  - Redesign "Setup in 5 easy steps" section (ref to line 597-695)
  - Redesign "Zero Knowledge. Zero Logs. Zero Compromise." section (ref to line 793-860)
  - Redesign "Where to deploy" section (ref to line 862-948)
- Keep the angled intersection design between sections (ref line 699-701)

**3.2 Refactor Home.jsx**
- Replace hero section with `HeroSimple` component + `FloatingOrbs` background
- Add wave animation to hero banner (user requirement)
- Extract topics section → custom `TopicsGrid` component or `FeatureGrid`
- Extract features section → `FeatureGrid` with features data
- Replace CTA section → `CTASection` component

**3.3 Refactor Homelab.jsx**
- Replace hero section with `HeroWithGradients` component
- Add wave animation to hero banner (user requirement)
- Extract benefits section → `FeatureGrid` with benefits data
- Extract setup steps → `FeatureTimeline` with setupSteps data
- Extract use cases → `FeatureGrid` with useCases data
- Extract DNS features → `DNSFeaturesSection` with dnsFeatures data
- Extract technical highlights → `FeatureGrid` with technicalHighlights data
- Extract hardware requirements → `FeatureGrid` with hardware data
- Replace CTA section → `CTASection` with split layout

**3.4 Refactor Features.jsx**
- Replace hero section with `HeroSimple` component
- Add wave animation to hero banner (user requirement)
- Replace basic features section → `FeatureGrid` with basicFeatures data
- Replace advanced features section → `FeatureGrid` with advancedFeatures data
- Replace enterprise features section → `FeatureGrid` with enterpriseFeatures data
- Replace CTA section → `CTASection` component

**3.5 Refactor DNS.jsx**
- Replace hero section with `HeroSimple` component
- Add wave animation to hero banner (user requirement)
- Extract DNS features grid → `FeatureGrid` with dnsFeatures data
- Extract server config section → `ContentSection` with custom layout
- Extract device config section → `ContentSection` with custom layout
- Replace CTA section → `CTASection` component

**3.6 Refactor remaining pages (Enterprise.jsx, Technical.jsx, Download.jsx, Pricing.jsx, FreeAndOpenSource.jsx, CloudBaremetal.jsx)**
- Apply same pattern as above pages
- Add wave animation to all hero banners
- Merge any FAQ-like sections into `FAQSection` component

### Phase 4: Styling & Design Improvements

**4.1 Address user feedback on sections they don't like**
- Update background styling in "Why run your own vpn" section (PersonalVPN.jsx:437-487)
  - Remove or redesign the hexagonal grid pattern background
  - Test alternative backgrounds (solid, subtle gradient, minimal pattern)
- Redesign "Setup in 5 easy steps" section (PersonalVPN.jsx:597-695)
  - Simplify the timeline design
  - Reduce pulse effects and animations
  - Make it more minimal and clean
- Redesign "Zero Knowledge" section (PersonalVPN.jsx:793-860)
  - Tone down the full-width gradient background
  - Make text more readable
  - Reduce visual intensity
- Redesign "Where to deploy" section (PersonalVPN.jsx:862-948)
  - Simplify provider cards
  - Make comparison clearer
  - Reduce clutter

**4.2 Preserve elements user likes**
- Keep floating wave animation from /personal-vpn hero
- Keep angled intersection between sections (line 699-701 style)
- Apply these design elements to other pages where appropriate

**4.3 Ensure consistent styling across all components**
- Verify all components use consistent color variables (dark-accent-primary, secondary, tertiary)
- Ensure consistent spacing, border radius, shadow styles
- Standardize animation timings and easing functions

### Phase 5: Testing & Refinement

**5.1 Visual testing**
- Take screenshots of all pages before refactor (using puppeteer at localhost:5173)
- Take screenshots of all pages after refactor
- Compare side-by-side to ensure visual consistency
- Test responsive layouts (mobile, tablet, desktop)

**5.2 Animation testing**
- Verify scroll animations work correctly on all sections
- Test hover effects on all interactive elements
- Ensure wave animations perform smoothly
- Check for animation performance issues

**5.3 Component API testing**
- Verify all component props work as expected
- Test edge cases (empty arrays, missing data, long text)
- Ensure graceful degradation

**5.4 Cross-browser testing**
- Test in Chrome, Firefox, Safari
- Verify animations work in all browsers
- Check for CSS compatibility issues

### Phase 6: Documentation & Cleanup

**6.1 Component documentation**
- Add JSDoc comments to all components
- Document all props with types and examples
- Create usage examples for each component

**6.2 Code cleanup**
- Remove duplicate code
- Clean up unused imports
- Optimize data structures
- Ensure consistent code formatting

**6.3 Create component library documentation**
- Create a components README
- Document design patterns and best practices
- Include visual examples of each component

---

## IMPLEMENTATION NOTES

**Animation Strategy:**
- All components should accept animation configuration via props
- Use `useScrollAnimation` hook consistently for scroll-triggered animations
- Extract animation variants into constants for reusability

**Data Structure Pattern:**
- Keep data arrays in page files (benefits, features, steps, etc.)
- Pass data to components via props
- This maintains flexibility while reducing code duplication

**Styling Approach:**
- Use Tailwind classes for all styling
- Keep component-specific styles co-located with components
- Use CSS variables for theme colors (already defined in theme)

**Component Organization:**
- Create `/src/components/sections/` for section-level components
- Create `/src/components/ui/` for smaller reusable UI components
- Create `/src/components/animations/` for animation-specific components

**Priority Order:**
1. Create most reused components first (HeroSection, FeatureGrid, CTASection)
2. Refactor PersonalVPN.jsx as reference implementation
3. Apply patterns to remaining pages
4. Polish and testing

**Testing Strategy:**
- Use puppeteer to capture before/after screenshots
- Take screenshots at multiple breakpoints (375px, 768px, 1024px, 1920px)
- Compare visual differences systematically
