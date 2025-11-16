import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureShowcase from '../components/sections/FeatureShowcase';
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
