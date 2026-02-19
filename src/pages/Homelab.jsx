import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { LightbulbIcon } from '../components/ui/Icons';
import { homelabContent } from '../content/siteContent';
import {
  SelfHostedIllustration,
  TerminalIllustration,
  DNSFlowIllustration,
} from '../components/illustrations';

const Homelab = () => {
  const [ref4, isVisible4] = useScrollAnimation();

  // Destructure content from centralized content file
  const {
    hero,
    benefitsSection,
    benefits,
    setupSection,
    setupSteps,
    useCasesSection,
    useCases,
    dnsSection,
    dnsFeatures,
    technicalSection,
    technicalHighlights,
    hardwareSection,
    hardwareOptions,
    ctaSection,
    ctaCards
  } = homelabContent;

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
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Illustrated: Self-Hosted Control */}
      <IllustratedSection
        subtitle="Complete Ownership"
        title="Your Infrastructure, Your Rules"
        description="Run everything on your own hardware. No cloud dependencies, no subscription fees, no data leaving your network. True digital sovereignty for your homelab."
        features={[
          "Zero cloud dependencies",
          "No recurring subscription costs",
          "Complete data ownership",
          "Works offline when internet is down"
        ]}
        illustration={SelfHostedIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Setup Steps */}
      <ContentSection>
        <SectionHeader
          title={setupSection.title}
          subtitle={setupSection.subtitle}
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline steps={setupSteps} />
        </div>
      </ContentSection>

      {/* Illustrated: Easy Setup */}
      <IllustratedSection
        subtitle="Quick Start"
        title="Up and Running in Minutes"
        description="A single command installs everything. No complex configuration, no networking expertise required. Just run the installer and your homelab is connected."
        features={[
          "One-line installation script",
          "Auto-detects your environment",
          "Pre-configured for common setups",
          "Detailed logs for troubleshooting"
        ]}
        illustration={TerminalIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={useCasesSection.title}
          subtitle={useCasesSection.subtitle}
        />
        <FeatureGrid
          features={useCases}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* DNS Features */}
      <ContentSection>
        <SectionHeader
          title={dnsSection.title}
          subtitle={dnsSection.subtitle}
        />
        <FeatureGrid
          features={dnsFeatures}
          columns={2}
          cardStyle="glass"
        />

        {/* DNS Info Box */}
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-8 p-6 rounded-xl bg-dark-accent-primary/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0">
              <LightbulbIcon />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-dark-accent-primary mb-1">
                {dnsSection.infoBox.title}
              </h4>
              <p className="text-dark-text-secondary text-sm leading-relaxed">
                {dnsSection.infoBox.description}
              </p>
            </div>
          </div>
        </motion.div>
      </ContentSection>

      {/* Illustrated: Private DNS */}
      <IllustratedSection
        subtitle="Local Resolution"
        title="Private DNS for Your Network"
        description="Access your services by name instead of IP addresses. tunnels provides automatic DNS resolution for all your connected devices and services."
        features={[
          "home.lan resolves to your server",
          "Split-horizon DNS support",
          "Automatic service discovery",
          "Works with Pi-hole and AdGuard"
        ]}
        illustration={DNSFlowIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Technical Highlights */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={technicalSection.title}
          subtitle={technicalSection.subtitle}
        />
        <FeatureGrid
          features={technicalHighlights}
          columns={4}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Hardware Requirements */}
      <ContentSection>
        <SectionHeader
          title={hardwareSection.title}
          subtitle={hardwareSection.subtitle}
        />
        <FeatureGrid
          features={hardwareOptions}
          columns={3}
          cardStyle="glass"
        />
        <div className="mt-8 text-center p-5 rounded-xl bg-dark-card">
          <p className="text-sm text-dark-text-secondary">
            <span className="text-dark-accent-primary font-semibold">Pro Tip:</span>
            {" "}{hardwareSection.proTip}
          </p>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title={ctaSection.title}
        description={ctaSection.description}
        layout={ctaSection.layout}
        cards={ctaCards}
      />
    </div>
  );
};

export default Homelab;
