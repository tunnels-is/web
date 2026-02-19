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
  EncryptionIllustration,
  OpenSourceIllustration,
} from '../components/illustrations';

const Security = () => {
  const [cryptoRef, cryptoVisible] = useScrollAnimation();
  const content = securityContent;

  return (
    <div className="min-h-screen">
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
      />

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

      <ContentSection>
        <div ref={cryptoRef}>
          <SectionHeader
            title={content.cryptographySection.title}
            subtitle={content.cryptographySection.subtitle}
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={cryptoVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {content.encryptionTypes.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={cryptoVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-colors"
              >
                <h3 className="text-lg font-bold text-dark-accent-primary mb-2">{crypto.name}</h3>
                <p className="text-dark-text-secondary text-sm leading-relaxed">{crypto.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      <IllustratedSection
        subtitle="Modern Cryptography"
        title="Encrypted by Default"
        description="All traffic is encrypted end-to-end using modern cryptographic primitives. A minimal codebase means a smaller attack surface and easier auditing than legacy VPN protocols."
        features={[
          "End-to-end encrypted tunnels",
          "Zero-knowledge architecture",
          "Minimal attack surface",
          "Open source and auditable"
        ]}
        illustration={EncryptionIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.practicesSection.title}
          subtitle={content.practicesSection.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {content.practices.map((practice, index) => (
            <div key={index} className="p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-colors">
              <h3 className="text-base font-semibold text-dark-text-primary mb-2">{practice.title}</h3>
              <p className="text-dark-text-secondary text-sm leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

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

      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{content.openSourceSection.title}</h2>
          <p className="text-base text-dark-text-secondary mb-4">{content.openSourceSection.description}</p>
          <p className="text-dark-text-muted text-sm mb-6">{content.openSourceSection.subDescription}</p>
          <a
            href={content.openSourceSection.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3"
          >
            {content.openSourceSection.buttonText}
          </a>
        </div>
      </ContentSection>

      <CTASection
        title={content.cta.title}
        description={content.cta.description}
        buttons={content.cta.buttons}
      />
    </div>
  );
};

export default Security;
