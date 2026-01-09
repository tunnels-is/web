import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { LightbulbIcon } from '../components/ui/Icons';
import { homelabContent } from '../content/siteContent';

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
    <div className="min-h-screen pt-20">
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
          cardStyle="elevated"
        />
      </ContentSection>

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
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-dark-accent-primary/10 p-8 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-20 h-20">
              <LightbulbIcon />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-dark-accent-primary mb-2 leading-tight">
                {dnsSection.infoBox.title}
              </h4>
              <p className="text-dark-text-secondary leading-snug">
                {dnsSection.infoBox.description}
              </p>
            </div>
          </div>
        </motion.div>
      </ContentSection>

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
        <div className="mt-12 text-center bg-dark-surface p-6 rounded-xl">
          <p className="text-dark-text-secondary text-lg">
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
