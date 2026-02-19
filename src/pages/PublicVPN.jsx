import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import TerminalPreview from '../components/sections/TerminalPreview';
import HorizontalSteps from '../components/sections/HorizontalSteps';
import { publicVPNContent } from '../content/siteContent';
import { PrivacyShieldIllustration } from '../components/illustrations';
import RelatedPages from '../components/sections/RelatedPages';

const PublicVPN = () => {
  const content = publicVPNContent;

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
      <ContentSection background="dark-surface">
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

      {/* Illustrated: Privacy */}
      <IllustratedSection
        subtitle={content.illustratedPrivacy.subtitle}
        title={content.illustratedPrivacy.title}
        description={content.illustratedPrivacy.description}
        features={content.illustratedPrivacy.features}
        illustration={PrivacyShieldIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Terminal Preview: Global Reach */}
      <ContentSection background="dark-surface">
        <TerminalPreview
          title={content.terminalPreview.title}
          description={content.terminalPreview.description}
          features={content.terminalPreview.features}
          position="right"
          lines={content.terminalPreview.lines}
        />
      </ContentSection>

      {/* Cloud Providers */}
      <ContentSection>
        <SectionHeader
          title={content.providersSection.title}
          subtitle={content.providersSection.subtitle}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {content.providers.map((provider, index) => (
            <div key={index} className="p-5 text-center transition-colors">
              <h3 className="text-base font-bold text-dark-text-primary mb-1">{provider.name}</h3>
              <p className="text-lg font-bold text-dark-accent-primary mb-1">{provider.price}</p>
              <p className="text-dark-text-muted text-xs">{provider.region}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-dark-text-secondary mt-8">
          {content.providersFooter}
        </p>
      </ContentSection>

      {/* Horizontal Steps: Easy Deployment */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.deployHeader.title}
          subtitle={content.deployHeader.subtitle}
        />
        <HorizontalSteps
          steps={content.deploySteps}
          variant="default"
        />
      </ContentSection>

      {/* Use Cases */}
      <ContentSection>
        <SectionHeader
          title={content.useCasesSection.title}
          subtitle={content.useCasesSection.subtitle}
        />
        <StaggeredGrid
          items={content.useCases}
          columns={2}
        />
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

export default PublicVPN;
