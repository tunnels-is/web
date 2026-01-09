import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import { publicVPNContent } from '../content/siteContent';

const PublicVPN = () => {
  const content = publicVPNContent;

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

      {/* Cloud Providers */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.providersSection.title}
          subtitle={content.providersSection.subtitle}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {content.providers.map((provider, index) => (
            <div key={index} className="bg-dark-elevated p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">{provider.name}</h3>
              <p className="text-2xl font-bold text-dark-accent-primary mb-1">{provider.price}</p>
              <p className="text-dark-text-muted text-sm">{provider.region}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-dark-text-secondary mt-8">
          {content.providersFooter}
        </p>
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

export default PublicVPN;
