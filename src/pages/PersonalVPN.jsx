import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import FeatureComparison from '../components/sections/FeatureComparison';
import PricingHighlight from '../components/sections/PricingHighlight';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import GradientCallout from '../components/sections/GradientCallout';
import { KeyIcon, LightbulbIcon } from '../components/ui/Icons';
import { personalVPNContent } from '../content/siteContent';
import { PrivacyShieldIllustration } from '../components/illustrations';

const PersonalVPN = () => {
  const {
    hero, benefitsSection, benefits, useCasesSection, useCases,
    setupSection, setupSteps,
    comparisonSection, comparison, privacyHighlight,
    faqSection, faqs, finalCTA, ctaCards,
    illustratedPrivacy, relatedPages,
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
        />
      </ContentSection>

      {/* Illustrated: Privacy Protection */}
      <IllustratedSection
        subtitle={illustratedPrivacy.subtitle}
        title={illustratedPrivacy.title}
        description={illustratedPrivacy.description}
        features={illustratedPrivacy.features}
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

      <MidPageCTA />

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

      {/* Technical brief callout */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            variant="banner"
            accent="blue"
            icon={<LightbulbIcon />}
            title="Built on Modern Technology"
            description="Tunnels uses a custom UDP protocol with post-quantum encryption, delivering both speed and security."
            button={{ text: "View Technical Details", href: "/technical", primary: true }}
          />
        </div>
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

export default PersonalVPN;
