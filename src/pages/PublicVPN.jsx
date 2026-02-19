import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import { publicVPNContent } from '../content/siteContent';
import {
  GlobalNetworkIllustration,
  PrivacyShieldIllustration,
  CloudIllustration,
} from '../components/illustrations';

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

      {/* Illustrated: Privacy */}
      <IllustratedSection
        subtitle="True Privacy"
        title="Browse Without Being Watched"
        description="When you need to access the public internet privately, route your traffic through your own server. No third-party VPN provider sees your data."
        features={[
          "Your own server, your own IP",
          "No logs by third parties",
          "Full control over exit location",
          "No bandwidth throttling"
        ]}
        illustration={PrivacyShieldIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

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

      {/* Illustrated: Global Reach */}
      <IllustratedSection
        subtitle="Deploy Globally"
        title="Exit Points Anywhere"
        description="Deploy your VPN server in any region for optimal performance. Choose locations based on your needs - close to you for speed, or in specific countries for access."
        features={[
          "50+ global cloud regions",
          "Choose your IP location",
          "Sub-100ms latency options",
          "Multiple redundant servers"
        ]}
        illustration={GlobalNetworkIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      {/* Cloud Providers */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.providersSection.title}
          subtitle={content.providersSection.subtitle}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {content.providers.map((provider, index) => (
            <div key={index} className="p-5 rounded-xl bg-dark-card border border-dark-border text-center">
              <h3 className="text-base font-bold text-dark-text-primary mb-1">{provider.name}</h3>
              <p className="text-xl font-bold text-dark-accent-primary mb-1">{provider.price}</p>
              <p className="text-dark-text-muted text-xs">{provider.region}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-dark-text-secondary mt-8">
          {content.providersFooter}
        </p>
      </ContentSection>

      {/* Illustrated: Easy Deployment */}
      <IllustratedSection
        subtitle="Simple Setup"
        title="Deploy in Minutes"
        description="Get your public VPN server running in under 5 minutes. Our one-click deployment scripts work with all major cloud providers."
        features={[
          "One-command installation",
          "Auto-configure firewall rules",
          "Free SSL certificates",
          "Automatic updates available"
        ]}
        illustration={CloudIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

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
