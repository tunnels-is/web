import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import FeatureTable from '../components/sections/FeatureTable';
import GradientCallout from '../components/sections/GradientCallout';
import BentoGrid from '../components/sections/BentoGrid';
import { securityContent } from '../content/siteContent';
import { SecurityIllustration } from '../components/illustrations';

const Security = () => {
  const content = securityContent;

  return (
    <div className="min-h-screen">
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
      />

      {/* Security feature overview cards */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.featuresSection.title}
          subtitle={content.featuresSection.subtitle}
        />
        <FeatureGrid
          features={content.securityFeatures}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Security stats strip */}
      <ContentSection>
        <StatsBanner stats={content.securityStats} variant="card" />
      </ContentSection>

      {/* Security at every layer — one illustrated section kept */}
      <IllustratedSection
        subtitle={content.illustratedDefense.subtitle}
        title={content.illustratedDefense.title}
        description={content.illustratedDefense.description}
        features={content.illustratedDefense.features}
        illustration={SecurityIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Cryptography — FeatureTable */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.cryptographySection.title}
          subtitle={content.cryptographySection.subtitle}
        />
        <div className="max-w-4xl mx-auto">
          <FeatureTable
            headers={content.cryptoTable.headers}
            rows={content.cryptoTable.rows}
            caption={content.cryptoTable.caption}
          />
        </div>
      </ContentSection>

      {/* Security practices — BentoGrid featured layout */}
      <ContentSection>
        <SectionHeader
          title={content.practicesSection.title}
          subtitle={content.practicesSection.subtitle}
        />
        <BentoGrid items={content.practicesBentoItems} layout="featured" />
      </ContentSection>

      {/* Open source — GradientCallout */}
      <ContentSection background="dark-surface">
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            accent="green"
            title={content.openSourceSection.title}
            description={content.openSourceSection.description}
            features={content.openSourceCalloutFeatures}
            button={{
              text: content.openSourceSection.buttonText,
              href: content.openSourceSection.buttonUrl,
              primary: true,
            }}
          />
        </div>
      </ContentSection>

      <CTASection
        title={content.cta.title}
        description={content.cta.description}
        buttons={content.cta.buttons}
      />
    </div>
  );
};

export default Security;
