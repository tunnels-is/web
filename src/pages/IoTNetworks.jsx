import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { iotNetworksContent } from '../content/siteContent';
import {
  IoTNetworkIllustration,
  EncryptionIllustration,
} from '../components/illustrations';

const IoTNetworks = () => {
  const {
    hero, benefitsSection, benefits, useCasesSection, useCases,
    securitySection, securityFeatures, architectureSection,
    setupSection, setupSteps, faqSection, faqs, finalCTA, ctaCards
  } = iotNetworksContent;

  const [archRef, archVisible] = useScrollAnimation();
  const [securityRef, securityVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        quickStats={hero.quickStats}
        showGeometricShapes={true}
        showRadialGlow={false}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={benefitsSection.title}
          subtitle={benefitsSection.subtitle}
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="gradient-border"
        />
      </ContentSection>

      {/* Illustrated: Secure IoT Mesh */}
      <IllustratedSection
        subtitle="Mesh Connectivity"
        title="Connect All Your IoT Devices"
        description="Create a secure mesh network for your IoT infrastructure. Every device communicates through encrypted tunnels, isolated from the public internet."
        features={[
          "Zero-trust device authentication",
          "Automatic mesh routing",
          "Works with any IoT protocol",
          "No open ports on devices"
        ]}
        illustration={IoTNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Use Cases Section */}
      <ContentSection>
        <SectionHeader
          title={useCasesSection.title}
          subtitle={useCasesSection.subtitle}
        />
        <StaggeredGrid
          items={useCases}
          columns={3}
        />
      </ContentSection>

      {/* Architecture Section */}
      <ContentSection background="dark-surface">
        <div ref={archRef}>
          <SectionHeader
            title={architectureSection.title}
            subtitle={architectureSection.description}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={archVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {/* Central Server */}
              <div className="bg-dark-accent-primary/10 p-8 rounded-xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-dark-accent-primary/30 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{architectureSection.centralServer.title}</h4>
                <p className="text-dark-text-secondary">{architectureSection.centralServer.description}</p>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>

              {/* IoT Devices Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Sensors', 'Cameras', 'Gateways', 'Edge Nodes'].map((device, i) => (
                  <div key={i} className="bg-dark-accent-tertiary/10 p-4 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-dark-accent-tertiary/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-dark-text-secondary text-sm">{device}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-dark-text-secondary text-sm italic">
                Secure encrypted connections from any location
              </p>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Security Features */}
      <ContentSection>
        <div ref={securityRef}>
          <SectionHeader
            title={securitySection.title}
            subtitle={securitySection.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={securityVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-dark-surface p-6 rounded-xl border-l-4 border-dark-accent-primary"
              >
                <h4 className="font-semibold text-xl text-dark-accent-primary mb-2">{feature.title}</h4>
                <p className="text-dark-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Illustrated: End-to-End Encryption */}
      <IllustratedSection
        subtitle="Military-Grade Security"
        title="Encryption for Every Packet"
        description="All IoT data is encrypted at the device level before transmission. Even if network traffic is intercepted, your data remains completely unreadable."
        features={[
          "AES-256 encryption standard",
          "Per-device unique keys",
          "Perfect forward secrecy",
          "Regular key rotation"
        ]}
        illustration={EncryptionIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      {/* Setup Guide */}
      <ContentSection background="gradient">
        <SectionHeader
          title={setupSection.title}
          subtitle={setupSection.subtitle}
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline
            steps={setupSteps}
          />
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="dark-surface">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={faqSection.title}
            subtitle={faqSection.subtitle}
          />
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* Final CTA */}
      <CTASection
        title={finalCTA.title}
        description={finalCTA.description}
        layout={finalCTA.layout}
        cards={ctaCards}
      />
    </div>
  );
};

export default IoTNetworks;
