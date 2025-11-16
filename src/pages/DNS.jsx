import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureShowcase from '../components/sections/FeatureShowcase';
import FeatureShowcaseCard from '../components/sections/FeatureShowcaseCard';
import FeatureShowcaseBento from '../components/sections/FeatureShowcaseBento';
import FeatureShowcaseFloating from '../components/sections/FeatureShowcaseFloating';
import FeatureShowcaseSplit from '../components/sections/FeatureShowcaseSplit';
import FeatureShowcaseMagazine from '../components/sections/FeatureShowcaseMagazine';
import FeatureShowcaseSpotlight from '../components/sections/FeatureShowcaseSpotlight';
import FeatureShowcaseOverlayLeft from '../components/sections/FeatureShowcaseOverlayLeft';
import FeatureShowcaseOverlayBottom from '../components/sections/FeatureShowcaseOverlayBottom';
import FeatureShowcaseOverlayCorner from '../components/sections/FeatureShowcaseOverlayCorner';
import FeatureShowcaseOverlayDiagonal from '../components/sections/FeatureShowcaseOverlayDiagonal';
import FeatureShowcaseOverlayCenter from '../components/sections/FeatureShowcaseOverlayCenter';
import FeatureShowcaseOverlaySidePanel from '../components/sections/FeatureShowcaseOverlaySidePanel';
import CTASection from '../components/sections/CTASection';
import { dnsContent } from '../content/siteContent';

const DNS = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={dnsContent.hero.title}
        subtitle={dnsContent.hero.subtitle}
        description={dnsContent.hero.description}
        showNetworkLines={dnsContent.hero.showNetworkLines}
        showScrollIndicator={dnsContent.hero.showScrollIndicator}
        buttons={dnsContent.hero.buttons}
      />

      {/* DNS Features Grid */}
      <ContentSection >
        <div id="features">
          <FeatureGrid
            features={dnsContent.dnsFeatures}
            columns={3}
            cardStyle="simple"
          />
        </div>
      </ContentSection>

      {/* DNS Server Side Configuration */}
      <ContentSection>
        <FeatureShowcase
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          imagePosition="right"
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* DNS Device Side Configuration */}
      <ContentSection>
        <FeatureShowcase
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          imagePosition="left"
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* Card Style Variation */}
      <ContentSection>
        <FeatureShowcaseCard
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* Bento Style Variation */}
      <ContentSection>
        <FeatureShowcaseBento
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          imagePosition="right"
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* Floating Style Variation */}
      <ContentSection>
        <FeatureShowcaseFloating
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          imagePosition="left"
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* Split Panel Style Variation */}
      <ContentSection>
        <FeatureShowcaseSplit
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          imagePosition="right"
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* Magazine Style Variation */}
      <ContentSection>
        <FeatureShowcaseMagazine
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          imagePosition="left"
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* Spotlight Style Variation */}
      <ContentSection>
        <FeatureShowcaseSpotlight
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          imagePosition="top"
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* Overlay Left Style Variation */}
      <ContentSection>
        <FeatureShowcaseOverlayLeft
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* Overlay Bottom Style Variation */}
      <ContentSection>
        <FeatureShowcaseOverlayBottom
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* Overlay Corner Style Variation */}
      <ContentSection>
        <FeatureShowcaseOverlayCorner
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          imagePosition="right"
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* Overlay Diagonal Style Variation */}
      <ContentSection>
        <FeatureShowcaseOverlayDiagonal
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* Overlay Center Style Variation */}
      <ContentSection>
        <FeatureShowcaseOverlayCenter
          title={dnsContent.serverDNS.title}
          descriptions={[dnsContent.serverDNS.description1, dnsContent.serverDNS.description2]}
          image={dnsContent.images.serverDNS}
        />
      </ContentSection>

      {/* Overlay Side Panel Style Variation */}
      <ContentSection>
        <FeatureShowcaseOverlaySidePanel
          title={dnsContent.deviceDNS.title}
          descriptions={[dnsContent.deviceDNS.description1, dnsContent.deviceDNS.description2]}
          imagePosition="left"
          image={dnsContent.images.deviceDNS}
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title={dnsContent.cta.title}
        description={dnsContent.cta.description}
        buttons={dnsContent.cta.buttons}
      />
    </div>
  );
};

export default DNS;
