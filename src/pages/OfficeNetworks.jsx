import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import StatsBanner from '../components/sections/StatsBanner';
import TerminalPreview from '../components/sections/TerminalPreview';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import HorizontalSteps from '../components/sections/HorizontalSteps';
import IllustratedSection from '../components/IllustratedSection';
import MidPageCTA from '../components/sections/MidPageCTA';
import RelatedPages from '../components/sections/RelatedPages';
import { officeNetworksContent } from '../content/siteContent';
import {
  OfficeNetworkIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const OfficeNetworks = () => {
  const {
    hero,
    benefitsSection,
    benefits,
    cta,
    quickStats,
    setupSteps,
    terminalLines,
    useCaseBentoItems,
    illustratedRemoteAccess,
    setupHeader,
    terminalPreview,
    scenariosHeader,
    accessControlCallout,
    illustratedSecurity,
    relatedPages,
  } = officeNetworksContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Quick Stats */}
      <ContentSection background="dark-surface" padding="small">
        <StatsBanner
          stats={quickStats}
          variant="default"
        />
      </ContentSection>

      {/* Benefits Grid */}
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

      {/* Illustrated: Remote Access */}
      <IllustratedSection
        subtitle={illustratedRemoteAccess.subtitle}
        title={illustratedRemoteAccess.title}
        description={illustratedRemoteAccess.description}
        features={illustratedRemoteAccess.features}
        illustration={OfficeNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Setup Steps */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={setupHeader.title}
          subtitle={setupHeader.subtitle}
        />
        <HorizontalSteps steps={setupSteps} variant="default" />
      </ContentSection>

      {/* Terminal Preview: Internal DNS + Access */}
      <ContentSection>
        <TerminalPreview
          title={terminalPreview.title}
          description={terminalPreview.description}
          features={terminalPreview.features}
          lines={terminalLines}
          position="right"
        />
      </ContentSection>

      {/* Use Cases Bento Grid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={scenariosHeader.title}
          subtitle={scenariosHeader.subtitle}
        />
        <BentoGrid items={useCaseBentoItems} layout="default" />
      </ContentSection>

      {/* Access Control Callout */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            variant="banner"
            accent="teal"
            title={accessControlCallout.title}
            description={accessControlCallout.description}
            button={{ text: "Learn about Security", href: "/security", primary: true }}
          />
        </div>
      </ContentSection>

      {/* Illustrated: Zero Trust Security */}
      <IllustratedSection
        subtitle={illustratedSecurity.subtitle}
        title={illustratedSecurity.title}
        description={illustratedSecurity.description}
        features={illustratedSecurity.features}
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

export default OfficeNetworks;
