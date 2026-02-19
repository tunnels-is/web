import { Link } from 'react-router-dom';
import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import StatsBanner from '../components/sections/StatsBanner';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { homeContent } from '../content/siteContent';
import {
  SecureConnectionIllustration,
} from '../components/illustrations';

const { openSourceBadge: _osBadge } = homeContent;
const OpenSourceBadge = () => (
  <div className="text-center">
    <div className="text-5xl md:text-7xl font-bold text-dark-accent-green leading-none tracking-tight">{_osBadge.title}</div>
    <div className="text-sm text-dark-text-secondary mt-3 font-medium">{_osBadge.subtitle}</div>
  </div>
);

const Home = () => {
  const [topicsRef, topicsVisible] = useScrollAnimation();
  const [useCasesRef, useCasesVisible] = useScrollAnimation();
  const {
    hero, topicsSection, featuresSection, features, cta, statsBanner,
    useCaseCards, highlights, environmentHeader,
    illustratedSecurity, illustratedOpenSource,
  } = homeContent;

  const useCaseIcons = [
    (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="#3b82f6" strokeWidth="2" fill="#3b82f6" fillOpacity="0.1" />
        <circle cx="24" cy="22" r="6" stroke="#3b82f6" strokeWidth="2" />
        <path d="M16 36c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="10" rx="2" stroke="#06b6d4" strokeWidth="2" fill="#06b6d4" fillOpacity="0.1" />
        <rect x="6" y="24" width="36" height="10" rx="2" stroke="#06b6d4" strokeWidth="2" fill="#06b6d4" fillOpacity="0.1" />
        <circle cx="12" cy="15" r="2" fill="#06b6d4" />
        <circle cx="12" cy="29" r="2" fill="#06b6d4" />
        <path d="M18 15h18M18 29h18" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M24 38v4M20 42h8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        <rect x="14" y="6" width="20" height="36" rx="2" stroke="#8b5cf6" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.1" />
        <path d="M18 14h12M18 20h12M18 26h12M18 32h12" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <rect x="6" y="18" width="8" height="24" rx="1" stroke="#8b5cf6" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.05" />
        <rect x="34" y="18" width="8" height="24" rx="1" stroke="#8b5cf6" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.05" />
      </svg>
    ),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        highlights={highlights}
      />


      {/* Features Section */}
      <ContentSection>
        <SectionHeader
          title={featuresSection.title}
          subtitle={featuresSection.subtitle}
        />
        <FeatureGrid
          features={features}
          columns={4}
        />
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <div ref={useCasesRef}>
          <SectionHeader
            title={environmentHeader.title}
            subtitle={environmentHeader.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {useCaseCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                animate={useCasesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Link
                  to={card.path}
                  className="block p-5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 mb-3">
                    {useCaseIcons[index]}
                  </div>
                  <h3 className="text-base font-semibold text-dark-text-primary mb-1.5 group-hover:text-dark-accent-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-dark-text-secondary text-sm leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <span className="text-dark-accent-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Illustrated: Secure Connections */}
      <IllustratedSection
        subtitle={illustratedSecurity.subtitle}
        title={illustratedSecurity.title}
        description={illustratedSecurity.description}
        features={illustratedSecurity.features}
        illustration={SecureConnectionIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      {/* Open Source */}
      <IllustratedSection
        subtitle={illustratedOpenSource.subtitle}
        title={illustratedOpenSource.title}
        description={illustratedOpenSource.description}
        features={illustratedOpenSource.features}
        illustration={OpenSourceBadge}
        illustrationPosition="left"
        illustrationSize="small"
        dark={true}
      />

      {/* Explore Topics */}
      <ContentSection>
        <div ref={topicsRef}>
          <SectionHeader
            title={topicsSection.title}
            subtitle={topicsSection.subtitle}
          />
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {topicsSection.topics.map((topic, index) => (
              <motion.a
                key={topic.path}
                href={topic.path}
                target={topic.external ? "_blank" : undefined}
                rel={topic.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                animate={topicsVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="px-4 py-2 text-xs font-medium text-dark-text-secondary hover:text-dark-accent-primary transition-all duration-150"
              >
                {topic.label}
              </motion.a>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        description={cta.description}
        buttons={cta.buttons}
      />
    </div>
  );
};

export default Home;
