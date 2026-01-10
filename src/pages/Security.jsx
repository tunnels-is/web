import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { securityContent } from '../content/siteContent';
import {
  SecurityIllustration,
  WireGuardIllustration,
  OpenSourceIllustration,
} from '../components/illustrations';

const Security = () => {
  const [cryptoRef, cryptoVisible] = useScrollAnimation();
  const content = securityContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
        showGeometricShapes={true}
      />

      {/* Security Features */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.featuresSection.title}
          subtitle={content.featuresSection.subtitle}
        />
        <FeatureGrid
          features={content.securityFeatures}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Illustrated: Zero Trust Architecture */}
      <IllustratedSection
        subtitle="Defense in Depth"
        title="Security at Every Layer"
        description="From the protocol level to application design, every component is built with security as the primary concern. No compromises, no shortcuts."
        features={[
          "Zero-trust network design",
          "Mutual authentication required",
          "Minimal attack surface",
          "Regular security audits"
        ]}
        illustration={SecurityIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Cryptography Section */}
      <ContentSection>
        <div ref={cryptoRef}>
          <SectionHeader
            title={content.cryptographySection.title}
            subtitle={content.cryptographySection.subtitle}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cryptoVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {content.encryptionTypes.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={cryptoVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-surface p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-dark-accent-primary mb-2">{crypto.name}</h3>
                <p className="text-dark-text-secondary">{crypto.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* Illustrated: WireGuard Protocol */}
      <IllustratedSection
        subtitle="Modern Cryptography"
        title="Built on WireGuard"
        description="We chose WireGuard for its simplicity, speed, and security. Just ~4,000 lines of code means a smaller attack surface and easier auditing than legacy VPN protocols."
        features={[
          "ChaCha20 symmetric encryption",
          "Curve25519 key exchange",
          "BLAKE2s hashing",
          "Poly1305 authentication"
        ]}
        illustration={WireGuardIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      {/* Security Practices */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.practicesSection.title}
          subtitle={content.practicesSection.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {content.practices.map((practice, index) => (
            <div key={index} className="bg-dark-elevated p-6 rounded-xl border-l-4 border-dark-accent-primary">
              <h3 className="text-lg font-semibold text-white mb-2">{practice.title}</h3>
              <p className="text-dark-text-secondary">{practice.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Illustrated: Open Source */}
      <IllustratedSection
        subtitle="Transparent & Verifiable"
        title="100% Open Source Code"
        description="Every line of our code is available for inspection. Security researchers, enterprises, and individuals can verify our claims and audit our implementation."
        features={[
          "Full source code on GitHub",
          "MIT license - free forever",
          "Community security reviews",
          "Bug bounty program"
        ]}
        illustration={OpenSourceIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Open Source Section */}
      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.openSourceSection.title}</h2>
          <p className="text-xl text-dark-text-secondary mb-8">
            {content.openSourceSection.description}
          </p>
          <p className="text-dark-text-muted mb-8">
            {content.openSourceSection.subDescription}
          </p>
          <a
            href={content.openSourceSection.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors"
          >
            {content.openSourceSection.buttonText}
          </a>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title={content.cta.title}
        description={content.cta.description}
        buttons={content.cta.buttons}
      />
    </div>
  );
};

export default Security;
