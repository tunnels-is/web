import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import TerminalPreview from '../components/sections/TerminalPreview';
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import { lanOverWanContent } from '../content/siteContent';
import { LANOverWANIllustration } from '../components/illustrations';

const LanOverWan = () => {
  const content = lanOverWanContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
        quickStats={content.hero.quickStats}
      />

      {/* Stats Banner */}
      <ContentSection background="dark-surface" padding="small">
        <StatsBanner
          variant="default"
          stats={content.statsBanner}
        />
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection>
        <SectionHeader
          title={content.benefitsSection.title}
          subtitle={content.benefitsSection.subtitle}
        />
        <FeatureGrid
          features={content.benefits}
          columns={3}
        />
      </ContentSection>

      {/* Illustrated: Virtual LAN */}
      <IllustratedSection
        subtitle={content.illustratedIntegration.subtitle}
        title={content.illustratedIntegration.title}
        description={content.illustratedIntegration.description}
        features={content.illustratedIntegration.features}
        illustration={LANOverWANIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      <MidPageCTA />

      {/* Architecture Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.architectureSection.title}
          subtitle={content.architectureSection.subtitle}
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Central Server */}
          <div className="bg-dark-accent-primary/10 border border-dark-accent-primary/20 p-6 rounded-xl text-center">
            <div className="w-14 h-14 bg-dark-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h4 className="text-base font-semibold text-white mb-1">{content.architectureSection.centralServer.title}</h4>
            <p className="text-dark-text-secondary text-sm">{content.architectureSection.centralServer.description}</p>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-dark-border-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>

          {/* Remote Sites */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {content.architectureSection.sites.map((site, i) => (
              <div key={i} className="p-4 text-center">
                <div className="w-9 h-9 bg-dark-accent-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-dark-text-secondary text-sm">{site}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-dark-text-secondary text-xs">
            {content.architectureSection.footer}
          </p>
        </div>
      </ContentSection>

      {/* Terminal: High Performance Setup */}
      <ContentSection>
        <TerminalPreview
          position="left"
          title={content.terminalPreview.title}
          description={content.terminalPreview.description}
          features={content.terminalPreview.features}
          lines={content.terminalPreview.lines}
        />
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

      <RelatedPages pages={content.relatedPages} />

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
