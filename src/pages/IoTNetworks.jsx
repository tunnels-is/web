import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import GradientCallout from '../components/sections/GradientCallout';
import BentoGrid from '../components/sections/BentoGrid';
import FeatureTable from '../components/sections/FeatureTable';
import { iotNetworksContent } from '../content/siteContent';
import {
  IoTNetworkIllustration,
} from '../components/illustrations';

const IoTNetworks = () => {
  const {
    hero, benefitsSection, benefits, useCasesSection, useCases,
    securitySection, architectureSection,
    setupSection, setupSteps, faqSection, faqs, finalCTA, ctaCards,
    statsBanner, illustratedConnectivity, architectureBentoItems,
    securityTable, encryptionCallout,
  } = iotNetworksContent;

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
      />

      {/* Stats Banner */}
      <ContentSection background="dark-surface">
        <StatsBanner
          variant="default"
          stats={statsBanner}
        />
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection>
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

      {/* Illustrated: Secure IoT Mesh */}
      <IllustratedSection
        subtitle={illustratedConnectivity.subtitle}
        title={illustratedConnectivity.title}
        description={illustratedConnectivity.description}
        features={illustratedConnectivity.features}
        illustration={IoTNetworkIllustration}
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

      {/* Architecture Section — BentoGrid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={architectureSection.title}
          subtitle={architectureSection.description}
        />
        <BentoGrid
          layout="featured"
          items={architectureBentoItems}
        />
      </ContentSection>

      {/* Security Features — FeatureTable */}
      <ContentSection>
        <SectionHeader
          title={securitySection.title}
          subtitle={securitySection.subtitle}
        />
        <div className="max-w-4xl mx-auto">
          <FeatureTable
            headers={securityTable.headers}
            rows={securityTable.rows}
            caption={securityTable.caption}
          />
        </div>
      </ContentSection>

      {/* Encryption GradientCallout */}
      <ContentSection background="dark-surface">
        <GradientCallout
          accent="teal"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
          title={encryptionCallout.title}
          description={encryptionCallout.description}
          features={encryptionCallout.features}
        />
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection background="gradient">
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

export default IoTNetworks;
