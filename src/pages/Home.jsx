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
  HomeNetworkIllustration,
  SecureConnectionIllustration,
  OpenSourceIllustration,
  DevicesIllustration,
} from '../components/illustrations';

const Home = () => {
  const [topicsRef, topicsVisible] = useScrollAnimation();
  const { hero, topicsSection, featuresSection, features, cta } = homeContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        showNetworkLines={true}
      />

      {/* Topics Section */}
      <ContentSection>
        <div ref={topicsRef}>
          <SectionHeader
            title={topicsSection.title}
            subtitle={topicsSection.subtitle}
          />

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {topicsSection.topics.map((topic, index) => (
              <motion.a
                key={topic.path}
                href={topic.path}
                target={topic.external ? "_blank" : undefined}
                rel={topic.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                animate={topicsVisible ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.03,
                  ease: "easeOut"
                }}
                className="px-6 py-3 bg-dark-surface rounded-lg font-semibold text-dark-text-primary hover:text-dark-accent-primary hover:bg-dark-elevated transition-colors duration-150"
              >
                {topic.label}
              </motion.a>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Features Section */}
      <ContentSection >
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

      {/* Illustrated: Secure Connections */}
      <IllustratedSection
        subtitle="End-to-End Security"
        title="Military-Grade Encryption"
        description="Every connection is protected with WireGuard's modern cryptography. Your data travels through encrypted tunnels that even we can't decrypt - true zero-knowledge architecture."
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

      {/* Illustrated: Multi-Device */}
      <IllustratedSection
        subtitle="Universal Compatibility"
        title="Connect All Your Devices"
        description="From phones to servers, from containers to IoT devices - tunnels works everywhere. One network, unlimited possibilities."
        features={[
          "Native apps for all major platforms",
          "Works behind NAT and firewalls",
          "Seamless roaming between networks",
          "No port forwarding required"
        ]}
        illustration={DevicesIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Illustrated: Open Source */}
      <IllustratedSection
        subtitle="Transparent & Auditable"
        title="100% Open Source"
        description="Every line of code is open for inspection. No hidden backdoors, no proprietary black boxes. You can audit, fork, and self-host with complete confidence."
        features={[
          "MIT licensed - free forever",
          "Active community development",
          "Regular security audits",
          "Self-host or use managed service"
        ]}
        illustration={OpenSourceIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

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
