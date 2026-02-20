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
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import { iotNetworksContent } from '../content/siteContent';
import {
  IoTNetworkIllustration,
} from '../components/illustrations';
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const IoTNetworks = () => {
  const {
    hero, benefitsSection, benefits, useCasesSection, useCases,
    securitySection, architectureSection,
    setupSection, setupSteps, faqSection, faqs, finalCTA, ctaCards,
    statsBanner, illustratedConnectivity, architectureBentoItems,
    securityTable, encryptionCallout, relatedPages,
  } = iotNetworksContent;

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/iot']} />
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

      <MidPageCTA />

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

      {/* Security Callout */}
      <ContentSection background="dark-surface">
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            variant="banner"
            accent="teal"
            title={encryptionCallout.title}
            description={encryptionCallout.description}
            button={{ text: "Learn about Security", href: "/security", primary: true }}
          />
        </div>
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection background="dark-surface">
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

      <RelatedPages pages={relatedPages} />

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
