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
import { PrivacyShieldIllustration } from '../components/illustrations';
import ComparisonCards from '../components/sections/ComparisonCards';
import QuoteHighlight from '../components/sections/QuoteHighlight';

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

      {/* Global Access: ComparisonCards */}
      <ContentSection>
        <SectionHeader
          title="Access Your Network Anywhere"
          subtitle="Worldwide Connectivity"
        />
        <ComparisonCards
          dividerLabel="vs"
          leftCard={{
            title: "Without Tunnels",
            items: [
              "Exposed on public WiFi",
              "Geo-blocked from your own content",
              "ISP monitors your traffic",
              "Complex port forwarding"
            ]
          }}
          rightCard={{
            title: "With Tunnels",
            accent: "teal",
            items: [
              "Encrypted on any network",
              "Access your content anywhere",
              "Zero visibility to ISP",
              "Zero-config remote access"
            ]
          }}
        />
      </ContentSection>

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
            <div className="mt-8 p-5 rounded-xl bg-dark-accent-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0">
                  <LightbulbIcon />
                </div>
                <div>
                  <h4 className="text-base font-bold text-dark-accent-primary mb-1">
                    {comparisonSection.bottomLine.title}
                  </h4>
                  <p className="text-sm text-dark-text-secondary leading-relaxed">
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

      {/* Deploy Anywhere: QuoteHighlight */}
      <ContentSection>
        <QuoteHighlight
          quote="I moved away from commercial VPNs two years ago. Running my own Tunnels server on a $5 VPS gives me better performance, real privacy, and I know exactly what's happening with my traffic."
          author="Self-Hosted Community"
          role="Tunnels User"
          accent="blue"
          variant="large"
        />
      </ContentSection>

      {/* Cloud Providers */}
      <ContentSection background="dark-bg">
        <SectionHeader
          title={cloudProvidersSection.title}
          subtitle={cloudProvidersSection.subtitle}
        />
        <CloudProvidersGrid
          providers={cloudProviders}
        />
        <div className="mt-8 text-center p-5 transition-colors">
          <p className="text-sm text-dark-text-secondary">
            <span className="text-dark-accent-primary font-semibold">Pro Tip:</span>
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
