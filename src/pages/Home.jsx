import { Link } from 'react-router-dom';
import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { homeContent } from '../content/siteContent';
import {
  SecureConnectionIllustration,
  OpenSourceIllustration,
} from '../components/illustrations';

const Home = () => {
  const [topicsRef, topicsVisible] = useScrollAnimation();
  const [highlightsRef, highlightsVisible] = useScrollAnimation();
  const [useCasesRef, useCasesVisible] = useScrollAnimation();
  const { hero, topicsSection, featuresSection, features, cta } = homeContent;

  const useCaseCards = [
    {
      title: 'Personal VPN',
      description: 'Secure your internet connection and access your home network from anywhere.',
      path: '/personal-vpn',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="6" width="32" height="36" rx="4" stroke="#3b82f6" strokeWidth="2" fill="#3b82f6" fillOpacity="0.1"/>
          <circle cx="24" cy="22" r="6" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M16 36c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Homelab',
      description: 'Self-host your VPN and securely access your homelab from anywhere in the world.',
      path: '/homelab',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="10" rx="2" stroke="#06b6d4" strokeWidth="2" fill="#06b6d4" fillOpacity="0.1"/>
          <rect x="6" y="24" width="36" height="10" rx="2" stroke="#06b6d4" strokeWidth="2" fill="#06b6d4" fillOpacity="0.1"/>
          <circle cx="12" cy="15" r="2" fill="#06b6d4"/>
          <circle cx="12" cy="29" r="2" fill="#06b6d4"/>
          <path d="M18 15h18M18 29h18" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M24 38v4M20 42h8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Enterprise',
      description: 'Scale across teams and offices with centralized management and access control.',
      path: '/enterprise',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <rect x="14" y="6" width="20" height="36" rx="2" stroke="#8b5cf6" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.1"/>
          <path d="M18 14h12M18 20h12M18 26h12M18 32h12" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
          <rect x="6" y="18" width="8" height="24" rx="1" stroke="#8b5cf6" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.05"/>
          <rect x="34" y="18" width="8" height="24" rx="1" stroke="#8b5cf6" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.05"/>
        </svg>
      ),
    },
  ];

  // Key highlights - suzko-style feature highlights
  const highlights = [
    { title: 'Multi-Network', desc: 'Connect to multiple networks simultaneously' },
    { title: 'DNS Security', desc: 'Built-in threat blocking with daily updates' },
    { title: 'Open Source', desc: 'Fully transparent, auditable code' },
    { title: 'Self-Hosted', desc: 'Run on your own infrastructure' },
    { title: 'Cross-Platform', desc: 'Windows, macOS, Linux, and more' },
    { title: 'WireGuard', desc: 'Built on modern, efficient cryptography' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Key Highlights - suzko-style compact feature bar */}
      <section className="bg-dark-surface/50">
        <div ref={highlightsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={highlightsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="text-center"
              >
                <h3 className="text-sm font-semibold text-dark-text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-dark-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ContentSection>
        <SectionHeader
          title={featuresSection.title}
          subtitle={featuresSection.subtitle}
        />
        <FeatureGrid
          features={features}
          columns={4}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Use Cases - suzko-style service cards */}
      <ContentSection background="dark-surface">
        <div ref={useCasesRef}>
          <SectionHeader
            title="Built for Every Environment"
            subtitle="From personal devices to enterprise infrastructure"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {useCaseCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={useCasesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={card.path}
                  className="block p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-all duration-200 group"
                >
                  <div className="w-12 h-12 mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-text-primary mb-2 group-hover:text-dark-accent-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-dark-text-secondary text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="text-dark-accent-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
        subtitle="End-to-End Security"
        title="Encrypted by Default"
        description="Every connection is protected with WireGuard's modern cryptography. Your data travels through encrypted tunnels with zero-knowledge architecture."
        features={[
          "AES-256 encryption for all traffic",
          "Perfect forward secrecy",
          "No logs, no tracking, no metadata",
          "Audited open-source code"
        ]}
        illustration={SecureConnectionIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Illustrated: Open Source */}
      <IllustratedSection
        subtitle="Transparent & Auditable"
        title="100% Open Source"
        description="Every line of code is open for inspection. No hidden backdoors, no proprietary black boxes. You can audit, fork, and self-host with full confidence."
        features={[
          "MIT licensed - free forever",
          "Active community development",
          "Self-host or use managed service",
          "Regular security reviews"
        ]}
        illustration={OpenSourceIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Explore Topics */}
      <ContentSection background="dark-surface">
        <div ref={topicsRef}>
          <SectionHeader
            title={topicsSection.title}
            subtitle={topicsSection.subtitle}
          />
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {topicsSection.topics.map((topic, index) => (
              <motion.a
                key={topic.path}
                href={topic.path}
                target={topic.external ? "_blank" : undefined}
                rel={topic.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                animate={topicsVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="px-5 py-2.5 bg-dark-card rounded-lg text-sm font-medium text-dark-text-secondary hover:text-dark-accent-primary hover:bg-dark-elevated transition-all duration-150"
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
