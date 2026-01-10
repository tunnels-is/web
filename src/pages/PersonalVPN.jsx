import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import TechnicalFeaturesSection from '../components/sections/TechnicalFeaturesSection';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import FeatureComparison from '../components/sections/FeatureComparison';
import PricingHighlight from '../components/sections/PricingHighlight';
import CloudProvidersGrid from '../components/sections/CloudProvidersGrid';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import { KeyIcon, LightbulbIcon } from '../components/ui/Icons';
import { personalVPNContent } from '../content/siteContent';
import {
  PrivacyShieldIllustration,
  GlobalNetworkIllustration,
  CloudIllustration,
} from '../components/illustrations';

const PersonalVPN = () => {
  const {
    hero, benefitsSection, benefits, useCasesSection, useCases,
    technicalSection, technicalFeatures, setupSection, setupSteps,
    comparisonSection, comparison, privacyHighlight, cloudProvidersSection,
    cloudProviders, faqSection, faqs, finalCTA, ctaCards
  } = personalVPNContent;


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
          cardStyle="gradient-border"
        />
      </ContentSection>

      {/* Illustrated: Privacy Protection */}
      <IllustratedSection
        subtitle="Zero Trust Architecture"
        title="Your Privacy, Protected"
        description="Unlike commercial VPNs, your data never touches third-party servers. Every packet is encrypted end-to-end, and only you hold the keys."
        features={[
          "No logs policy - we can't see your traffic",
          "You control the encryption keys",
          "No third-party data access",
          "Open-source and auditable"
        ]}
        illustration={PrivacyShieldIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Use Cases Section */}
      <ContentSection>
        <SectionHeader
          title={useCasesSection.title}
          subtitle={useCasesSection.subtitle}
        />
        <StaggeredGrid
          items={useCases}
          columns={3}
        />
      </ContentSection>

      {/* Technical Features */}
      <ContentSection background="gradient">
        <SectionHeader
          title={technicalSection.title}
          subtitle={technicalSection.subtitle}
        />
        <TechnicalFeaturesSection
          categories={technicalFeatures}
        />
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection>
        <SectionHeader
          title={setupSection.title}
          subtitle={setupSection.subtitle}
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline
            steps={setupSteps}
          />
        </div>
      </ContentSection>

      {/* Illustrated: Global Access */}
      <IllustratedSection
        subtitle="Worldwide Connectivity"
        title="Access Your Network Anywhere"
        description="Travel the world while your devices stay connected to home. Access local resources, stream your media, and work securely from any location."
        features={[
          "Connect from any country",
          "Bypass geo-restrictions to your own content",
          "Secure access on public WiFi",
          "Low latency connections worldwide"
        ]}
        illustration={GlobalNetworkIllustration}
        illustrationPosition="left"
        illustrationSize="large"
        dark={false}
      />

      {/* Comparison Section */}
      <ContentSection background="dark-surface" id="comparison">
        <div className="relative">

          <div className="relative">
            <SectionHeader
              title={comparisonSection.title}
              subtitle={comparisonSection.subtitle}
            />
            <FeatureComparison
              comparisonItems={comparison}
            />

            {/* Summary Card */}
            <div className="mt-12 bg-dark-accent-primary/10 p-8 rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20">
                  <LightbulbIcon />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark-accent-primary mb-2 leading-tight">
                    {comparisonSection.bottomLine.title}
                  </h4>
                  <p className="text-base text-dark-text-secondary leading-snug">
                    {comparisonSection.bottomLine.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Privacy Highlight */}
      <PricingHighlight
        icon={<div className="w-20 h-20"><KeyIcon /></div>}
        title={<>{privacyHighlight.title}<br />{privacyHighlight.titleLine2}</>}
        description={<>{privacyHighlight.description}<br /><span className="font-bold">{privacyHighlight.descriptionBold}</span></>}
        highlights={privacyHighlight.highlights}
      />

      {/* Illustrated: Deploy Anywhere */}
      <IllustratedSection
        subtitle="Flexible Deployment"
        title="Host on Any Cloud or Hardware"
        description="Deploy your personal VPN server anywhere - from a $5/month VPS to your own Raspberry Pi at home. No vendor lock-in, complete portability."
        features={[
          "Works on all major cloud providers",
          "Run on your own hardware",
          "Docker and bare-metal support",
          "Migrate between providers easily"
        ]}
        illustration={CloudIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Cloud Providers */}
      <ContentSection background="dark-bg">
        <SectionHeader
          title={cloudProvidersSection.title}
          subtitle={cloudProvidersSection.subtitle}
        />
        <CloudProvidersGrid
          providers={cloudProviders}
        />
        <div className="mt-12 text-center bg-dark-surface p-8 rounded-2xl">
          <p className="text-lg text-dark-text-secondary">
            <span className="text-dark-accent-primary font-bold">Pro Tip:</span>
            {" "}{cloudProvidersSection.proTip}
          </p>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="dark-surface">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={faqSection.title}
            subtitle={faqSection.subtitle}
          />
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* Final CTA */}
      <CTASection
        title={finalCTA.title}
        description={finalCTA.description}
        layout={finalCTA.layout}
        cards={ctaCards}
      />
    </div>
  );
};

export default PersonalVPN;
