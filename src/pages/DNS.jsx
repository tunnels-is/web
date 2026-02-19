import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { dnsContent } from '../content/siteContent';
import {
  DNSIllustration,
  DNSFlowIllustration,
  SelfHostedIllustration,
} from '../components/illustrations';

const DNS = () => {
  return (
    <div className="min-h-screen">
      <HeroSimple
        title={dnsContent.hero.title}
        subtitle={dnsContent.hero.subtitle}
        description={dnsContent.hero.description}
        showNetworkLines={dnsContent.hero.showNetworkLines}
        buttons={dnsContent.hero.buttons}
      />

      <ContentSection>
        <div id="features">
          <SectionHeader
            title="Private DNS Features"
            subtitle="Everything you need for internal name resolution"
          />
          <FeatureGrid
            features={dnsContent.dnsFeatures}
            columns={3}
            cardStyle="elevated"
          />
        </div>
      </ContentSection>

      <IllustratedSection
        subtitle="Simple Resolution"
        title="Private DNS for Your Network"
        description="Access your services by memorable names instead of IP addresses. tunnels automatically resolves internal hostnames for all connected devices."
        features={[
          "home.lan -> your home server",
          "nas.lan -> your storage device",
          "pi.lan -> your Raspberry Pi",
          "Works across all your devices"
        ]}
        illustration={DNSFlowIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      <ContentSection background="dark-surface">
        <SectionHeader
          title={dnsContent.serverDNS.title}
          subtitle="Configure DNS on your tunnels server"
        />
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-dark-card border border-dark-border">
            <p className="text-dark-text-secondary text-sm leading-relaxed mb-3">{dnsContent.serverDNS.description1}</p>
            <p className="text-dark-text-secondary text-sm leading-relaxed">{dnsContent.serverDNS.description2}</p>
          </div>
        </div>
      </ContentSection>

      <IllustratedSection
        subtitle="No External Dependencies"
        title="Your DNS, Your Control"
        description="Unlike cloud DNS services, your DNS queries never leave your network. Complete privacy and control over name resolution."
        features={[
          "No DNS query logging by third parties",
          "Works when internet is down",
          "Integrate with Pi-hole or AdGuard",
          "Custom DNS records for any service"
        ]}
        illustration={SelfHostedIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      <ContentSection background="dark-surface">
        <SectionHeader
          title={dnsContent.deviceDNS.title}
          subtitle="Automatic configuration for connected devices"
        />
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-dark-card border border-dark-border">
            <p className="text-dark-text-secondary text-sm leading-relaxed mb-3">{dnsContent.deviceDNS.description1}</p>
            <p className="text-dark-text-secondary text-sm leading-relaxed">{dnsContent.deviceDNS.description2}</p>
          </div>
        </div>
      </ContentSection>

      <IllustratedSection
        subtitle="Smart Routing"
        title="Split-Horizon DNS"
        description="Access internal services by name when on your network, and automatically route through the tunnel when remote. Seamless experience everywhere."
        features={[
          "Same hostname works everywhere",
          "Automatic route selection",
          "No manual configuration needed",
          "Instant failover between paths"
        ]}
        illustration={DNSIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      <CTASection
        title={dnsContent.cta.title}
        description={dnsContent.cta.description}
        buttons={dnsContent.cta.buttons}
      />
    </div>
  );
};

export default DNS;
