import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import FeatureTable from '../components/sections/FeatureTable';
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import { enterpriseContent } from '../content/siteContent';
import {
  EnterpriseIllustration,
  SecurityIllustration,
} from '../components/illustrations';
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const Enterprise = () => {
  const {
    hero, benefits, management, cta,
    heroButtons, enterpriseStats, benefitsHeader,
    managementItems, accessControlHeader, accessControlRows,
    accessControlTableConfig, illustratedScale, zeroTrustCallout,
    illustratedTransparency, relatedPages
  } = enterpriseContent;

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/enterprise']} />
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={heroButtons}
      />

      {/* Enterprise Stats */}
      <ContentSection padding="small">
        <StatsBanner stats={enterpriseStats} variant="default" />
      </ContentSection>

      {/* Benefits */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={benefitsHeader.title}
          subtitle={benefitsHeader.subtitle}
        />
        <FeatureGrid features={benefits} columns={3} />
      </ContentSection>

      {/* Illustrated: Enterprise Scale */}
      <IllustratedSection
        subtitle={illustratedScale.subtitle}
        title={illustratedScale.title}
        description={illustratedScale.description}
        features={illustratedScale.features}
        illustration={EnterpriseIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Team Management - Bento Grid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={management.title}
          subtitle={`${management.description1}`}
        />
        <BentoGrid items={managementItems} layout="featured" />
      </ContentSection>

      {/* Access Control - Feature Table */}
      <ContentSection>
        <SectionHeader
          title={accessControlHeader.title}
          subtitle={accessControlHeader.subtitle}
        />
        <FeatureTable
          headers={accessControlTableConfig.headers}
          rows={accessControlRows}
          caption={accessControlTableConfig.caption}
        />
      </ContentSection>

      {/* Security Callout */}
      <ContentSection background="dark-surface">
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            variant="banner"
            accent="teal"
            title={zeroTrustCallout.title}
            description={zeroTrustCallout.description}
            button={{ text: "Learn about Security", href: "/security", primary: true }}
          />
        </div>
      </ContentSection>

      {/* Illustrated: Security */}
      <IllustratedSection
        subtitle={illustratedTransparency.subtitle}
        title={illustratedTransparency.title}
        description={illustratedTransparency.description}
        features={illustratedTransparency.features}
        illustration={SecurityIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      <MidPageCTA />

      <RelatedPages pages={relatedPages} />

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
