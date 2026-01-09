import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { lanOverWanContent } from '../content/siteContent';

const LanOverWan = () => {
  const [archRef, archVisible] = useScrollAnimation();
  const content = lanOverWanContent;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
        quickStats={content.hero.quickStats}
        showGeometricShapes={true}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.benefitsSection.title}
          subtitle={content.benefitsSection.subtitle}
        />
        <FeatureGrid
          features={content.benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Architecture Section */}
      <ContentSection>
        <div ref={archRef}>
          <SectionHeader
            title={content.architectureSection.title}
            subtitle={content.architectureSection.subtitle}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={archVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
                <h4 className="text-xl font-semibold text-white mb-2">{content.architectureSection.centralServer.title}</h4>
                <p className="text-dark-text-secondary">{content.architectureSection.centralServer.description}</p>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>

              {/* Remote Sites */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.architectureSection.sites.map((site, i) => (
                  <div key={i} className="bg-dark-accent-tertiary/10 p-4 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-dark-accent-tertiary/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-dark-text-secondary text-sm">{site}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-dark-text-secondary text-sm italic">
                {content.architectureSection.footer}
              </p>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.useCasesSection.title}
          subtitle={content.useCasesSection.subtitle}
        />
        <StaggeredGrid
          items={content.useCases}
          columns={2}
        />
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection>
        <SectionHeader
          title={content.setupSection.title}
          subtitle={content.setupSection.subtitle}
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline steps={content.setupSteps} />
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

export default LanOverWan;
