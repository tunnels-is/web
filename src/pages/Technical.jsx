import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
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
  } = technicalContent;

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        description={hero.description}
      />

      {/* Performance Stats */}
      <ContentSection background="dark-surface" padding="normal">
        <StatsBanner
          stats={performanceStats}
          variant="card"
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
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-dark-accent-primary" />
              {sectionLabels.encryption}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {sections[1].title}
            </h2>
            <p className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl">
              {sections[1].description}
            </p>
          </div>
          <FeatureTable
            headers={encryptionTable.headers}
            rows={encryptionTable.rows}
            caption={sections[1].details}
          />
        </div>
      </ContentSection>

      {/* Terminal Preview — Routing and Tunnel Commands */}
      <ContentSection background="transparent" padding="normal">
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
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-dark-accent-primary" />
            {sectionLabels.lan}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            {sections[2].title}
          </h2>
          <p className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl">
            {sections[2].description}
          </p>
        </div>
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
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-dark-accent-primary" />
            {sectionLabels.routing}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            {sections[3].title}
          </h2>
          <p className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl mb-8">
            {sections[3].description}
          </p>
        </div>
        <GradientCallout
          title={sections[4].title}
          description={sections[4].description}
          accent="teal"
          variant="default"
          features={natCalloutFeatures}
        />
      </ContentSection>

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
