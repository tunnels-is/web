import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import TerminalPreview from '../components/sections/TerminalPreview';
import GradientCallout from '../components/sections/GradientCallout';
import SplitContent from '../components/sections/SplitContent';
import StatsBanner from '../components/sections/StatsBanner';
import { dnsContent } from '../content/siteContent';
import { DNSFlowIllustration } from '../components/illustrations';
import RelatedPages from '../components/sections/RelatedPages';

const deviceCardIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-primary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-tertiary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-green">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-primary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
];

const DNS = () => {
  const deviceDNSCards = dnsContent.deviceDNSCards.map((card, i) => ({
    ...card,
    icon: deviceCardIcons[i],
  }));

  return (
    <div className="min-h-screen">
      <HeroSimple
        title={dnsContent.hero.title}
        subtitle={dnsContent.hero.subtitle}
        description={dnsContent.hero.description}
        buttons={dnsContent.hero.buttons}
      />

      {/* Stats Banner */}
      <ContentSection padding="small">
        <StatsBanner stats={dnsContent.dnsStats} variant="default" />
      </ContentSection>

      {/* Feature Grid */}
      <ContentSection background="dark-surface">
        <div id="features">
          <SectionHeader
            title={dnsContent.privateDNSHeader.title}
            subtitle={dnsContent.privateDNSHeader.subtitle}
          />
          <FeatureGrid
            features={dnsContent.dnsFeatures}
            columns={3}
          />
        </div>
      </ContentSection>

      {/* Illustrated: Private DNS / Flow */}
      <IllustratedSection
        subtitle={dnsContent.illustratedDNS.subtitle}
        title={dnsContent.illustratedDNS.title}
        description={dnsContent.illustratedDNS.description}
        features={dnsContent.illustratedDNS.features}
        illustration={DNSFlowIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Server DNS - Terminal Preview */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={dnsContent.serverDNS.title}
          subtitle={dnsContent.serverConfigHeader.subtitle}
        />
        <TerminalPreview
          title={dnsContent.serverTerminalPreview.title}
          description={dnsContent.serverDNS.description1 + ' ' + dnsContent.serverDNS.description2}
          features={dnsContent.serverTerminalPreview.features}
          lines={dnsContent.serverTerminalLines}
          position="right"
        />
      </ContentSection>

      {/* DNS Security - Gradient Callout */}
      <ContentSection>
        <GradientCallout
          title={dnsContent.threatCallout.title}
          description={dnsContent.threatCallout.description}
          features={dnsContent.threatCallout.features}
          accent="green"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          }
        />
      </ContentSection>

      {/* Device DNS - Split Content */}
      <ContentSection background="dark-surface">
        <SplitContent
          title={dnsContent.deviceDNS.title}
          description={dnsContent.deviceDNS.description1 + ' ' + dnsContent.deviceDNS.description2}
          features={dnsContent.deviceDNSFeatures}
          cards={deviceDNSCards}
          position="right"
          accent="teal"
        />
      </ContentSection>

      <RelatedPages pages={dnsContent.relatedPages} />

      <CTASection
        title={dnsContent.cta.title}
        description={dnsContent.cta.description}
        buttons={dnsContent.cta.buttons}
      />
    </div>
  );
};

export default DNS;
