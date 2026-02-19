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
import { enterpriseContent } from '../content/siteContent';
import {
  EnterpriseIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const Enterprise = () => {
  const {
    hero, benefits, management, security, cta,
    heroButtons, enterpriseStats, benefitsHeader,
    managementItems, accessControlHeader, accessControlRows,
    accessControlTableConfig, illustratedScale, zeroTrustCallout,
    illustratedTransparency
  } = enterpriseContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={heroButtons}
      />

      {/* Enterprise Stats */}
      <ContentSection padding="small">
        <StatsBanner stats={enterpriseStats} variant="card" />
      </ContentSection>

      {/* Benefits */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={benefitsHeader.title}
          subtitle={benefitsHeader.subtitle}
        />
        <FeatureGrid features={benefits} columns={3} cardStyle="elevated" />
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
        <SectionHeader
          title={security.title}
          subtitle={security.description1}
        />
        <GradientCallout
          title={zeroTrustCallout.title}
          description={zeroTrustCallout.description}
          features={zeroTrustCallout.features}
          accent="teal"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          }
        />
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
