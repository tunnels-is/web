import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import TerminalPreview from '../components/sections/TerminalPreview';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import HorizontalSteps from '../components/sections/HorizontalSteps';
import StatsBanner from '../components/sections/StatsBanner';
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import { homelabContent } from '../content/siteContent';
import {
  SelfHostedIllustration,
} from '../components/illustrations';
import { LightbulbIcon } from '../components/ui/Icons';

const Homelab = () => {
  const {
    hero,
    benefitsSection,
    benefits,
    setupSection,
    setupSteps,
    useCasesSection,
    useCases,
    dnsSection,
    ctaSection,
    ctaCards,
    statsBanner,
    bentoFeatures,
    bentoHighlight,
    illustratedSelfHosted,
    terminalPreview,
    relatedPages,
  } = homelabContent;

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <HeroSimple
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        quickStats={hero.quickStats}
      />

      {/* Stats banner */}
      <ContentSection background="dark-surface" padding="small">
        <StatsBanner
          variant="default"
          stats={statsBanner}
        />
      </ContentSection>

      {/* Benefits - BentoGrid */}
      <ContentSection>
        <SectionHeader
          title={benefitsSection.title}
          subtitle={benefitsSection.subtitle}
        />
        <BentoGrid
          layout="featured"
          items={[
            {
              ...benefits[0],
              features: bentoFeatures,
              highlight: bentoHighlight,
            },
            benefits[1],
            benefits[2],
            benefits[3],
            benefits[4],
            benefits[5],
          ]}
        />
      </ContentSection>

      {/* Illustrated: Self-Hosted Control */}
      <IllustratedSection
        subtitle={illustratedSelfHosted.subtitle}
        title={illustratedSelfHosted.title}
        description={illustratedSelfHosted.description}
        features={illustratedSelfHosted.features}
        illustration={SelfHostedIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      <MidPageCTA />

      {/* Setup Steps */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={setupSection.title}
          subtitle={setupSection.subtitle}
        />
        <HorizontalSteps
          variant="default"
          steps={setupSteps}
        />
      </ContentSection>

      {/* Terminal Preview */}
      <ContentSection>
        <TerminalPreview
          title={terminalPreview.title}
          description={terminalPreview.description}
          position="right"
          features={terminalPreview.features}
          lines={terminalPreview.lines}
        />
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={useCasesSection.title}
          subtitle={useCasesSection.subtitle}
        />
        <FeatureGrid
          features={useCases}
          columns={3}
        />
      </ContentSection>

      {/* DNS brief callout */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            variant="banner"
            accent="teal"
            icon={<LightbulbIcon />}
            title={dnsSection.infoBox.title}
            description={dnsSection.infoBox.description}
            button={{ text: "Learn about DNS", href: "/dns", primary: true }}
          />
        </div>
      </ContentSection>

      <RelatedPages pages={relatedPages} />

      {/* CTA */}
      <CTASection
        title={ctaSection.title}
        description={ctaSection.description}
        layout={ctaSection.layout}
        cards={ctaCards}
      />

    </div>
  );
};

export default Homelab;
