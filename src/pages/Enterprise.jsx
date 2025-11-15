import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureShowcase from '../components/sections/FeatureShowcase';
import CTASection from '../components/sections/CTASection';
import { enterpriseContent } from '../content/siteContent';

const Enterprise = () => {
  const { hero, benefits, management, security, cta, images } = enterpriseContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        showNetworkLines={true}
      />

      {/* Benefits Section */}
      <ContentSection>
        <SectionHeader
          title="Why Choose Tunnels for Enterprise"
          subtitle="Scalable, secure, and designed for enterprise-grade networking"
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Effortless Management Section */}
      <ContentSection >
        <FeatureShowcase
          title={management.title}
          descriptions={[management.description1, management.description2]}
          features={management.features}
          imagePosition="right"
          image={images.management}
        />
      </ContentSection>

      {/* Security Section */}
      <ContentSection>
        <FeatureShowcase
          title={security.title}
          features={security.features}
          imagePosition="left"
          featureCheckColor="dark-accent-tertiary"
          image={images.security}
          customContent={
            <>
              <p className="text-lg text-dark-text-secondary leading-snug mb-6">
                {security.description1}
              </p>
              <p className="text-lg text-dark-text-secondary leading-snug mb-6">
                <a href={security.golangUrl} target="_blank" rel="noopener noreferrer" className="text-dark-accent-primary hover:text-dark-accent-secondary transition-colors">
                  Golang
                </a>{' '}
                {security.description2}
              </p>
            </>
          }
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        description={cta.description}
        buttons={cta.buttons}
      />
    </div>
  );
};

export default Enterprise;
