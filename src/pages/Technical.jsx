import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import TerminalPreview from '../components/sections/TerminalPreview';
import FeatureTable from '../components/sections/FeatureTable';
import GradientCallout from '../components/sections/GradientCallout';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import { technicalContent } from '../content/siteContent';
import {
  EncryptionIllustration,
  GlobalNetworkIllustration,
} from '../components/illustrations';
import RelatedPages from '../components/sections/RelatedPages';
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const Technical = () => {
  const {
    hero,
    sections,
    cta,
    performanceStats,
    encryptionTable,
    terminalPreview,
    lanBentoItems,
    illustratedVPN,
    illustratedEncryption,
    natCalloutFeatures,
    sectionLabels,
    relatedPages,
  } = technicalContent;

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/technical']} />

      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        description={hero.description}
      />

      {/* Performance Stats */}
      <ContentSection background="dark-surface" padding="normal">
        <StatsBanner
          stats={performanceStats}
          variant="default"
        />
      </ContentSection>

      {/* Public Routable VPN — IllustratedSection 1 of 2 */}
      <IllustratedSection
        subtitle={illustratedVPN.subtitle}
        title={sections[0].title}
        description={sections[0].description}
        features={illustratedVPN.features}
        illustration={GlobalNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Encryption & Security — FeatureTable */}
      <ContentSection background="dark-surface" padding="normal">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label={sectionLabels.encryption}
            title={sections[1].title}
            subtitle={sections[1].description}
            alignment="left"
          />
          <FeatureTable
            headers={encryptionTable.headers}
            rows={encryptionTable.rows}
            caption={sections[1].details}
          />
        </div>
      </ContentSection>

      {/* Terminal Preview — Routing and Tunnel Commands */}
      <ContentSection padding="normal">
        <TerminalPreview
          title={terminalPreview.title}
          description={terminalPreview.description}
          features={terminalPreview.features}
          lines={terminalPreview.lines}
          position="right"
        />
      </ContentSection>

      {/* LAN Networks — BentoGrid */}
      <ContentSection background="dark-surface" padding="normal">
        <SectionHeader
          label={sectionLabels.lan}
          title={sections[2].title}
          subtitle={sections[2].description}
          alignment="left"
        />
        <BentoGrid
          items={lanBentoItems}
          layout="featured"
        />
      </ContentSection>

      {/* Encryption — IllustratedSection 2 of 2 */}
      <IllustratedSection
        subtitle={illustratedEncryption.subtitle}
        title={illustratedEncryption.title}
        description={illustratedEncryption.description}
        features={illustratedEncryption.features}
        illustration={EncryptionIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Abstract NAT — GradientCallout */}
      <ContentSection background="dark-surface" padding="normal">
        <SectionHeader
          label={sectionLabels.routing}
          title={sections[3].title}
          subtitle={sections[3].description}
          alignment="left"
        />
        <GradientCallout
          title={sections[4].title}
          description={sections[4].description}
          accent="teal"
          variant="default"
          features={natCalloutFeatures}
        />
      </ContentSection>

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

export default Technical;
