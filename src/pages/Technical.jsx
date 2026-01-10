import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { technicalContent } from '../content/siteContent';
import {
  EncryptionIllustration,
  LANOverWANIllustration,
  GlobalNetworkIllustration,
  WireGuardIllustration,
} from '../components/illustrations';

const Technical = () => {
  const { hero, sections, cta } = technicalContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        description={hero.description}
        showNetworkLines={true}
      />

      {/* Public Routable VPN Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={sections[0].title}
          subtitle={sections[0].description}
          titleSize="medium"
        />
      </ContentSection>

      {/* Illustrated: Global VPN */}
      <IllustratedSection
        subtitle="Worldwide Access"
        title="Public Routable VPN"
        description="Deploy VPN servers anywhere in the world. Each server gets a public IP, allowing direct access from any location without complex NAT traversal."
        features={[
          "Direct public IP routing",
          "No NAT traversal needed",
          "Global server deployment",
          "Automatic failover support"
        ]}
        illustration={GlobalNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Encryption Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={sections[1].title}
          subtitle={sections[1].description}
          titleSize="medium"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-dark-elevated p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Encryption Types</h3>
            <ul className="space-y-3 text-dark-text-secondary">
              {sections[1].encryptionTypes.map((type, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-dark-accent-tertiary mr-2">•</span>
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-dark-elevated p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Handshake Types</h3>
            <ul className="space-y-3 text-dark-text-secondary">
              {sections[1].handshakeTypes.map((type, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-dark-accent-tertiary mr-2">•</span>
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {sections[1].details && (
          <p className="text-lg text-dark-text-secondary text-center mt-8 max-w-3xl mx-auto">
            {sections[1].details}
          </p>
        )}
      </ContentSection>

      {/* Illustrated: Encryption */}
      <IllustratedSection
        subtitle="Military-Grade Security"
        title="End-to-End Encryption"
        description="All traffic is encrypted using modern cryptographic primitives. ChaCha20-Poly1305 provides authenticated encryption with excellent performance on all platforms."
        features={[
          "ChaCha20-Poly1305 AEAD",
          "Curve25519 key exchange",
          "BLAKE2s for hashing",
          "Perfect forward secrecy"
        ]}
        illustration={EncryptionIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* LAN Networks Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={sections[2].title}
          subtitle={sections[2].description}
          titleSize="medium"
        />
      </ContentSection>

      {/* Illustrated: LAN over WAN */}
      <IllustratedSection
        subtitle="Layer 2 Connectivity"
        title="Isolated LAN Networks"
        description="Create isolated virtual LANs that span across the internet. Perfect for connecting branch offices or segmenting network traffic by department or function."
        features={[
          "Full Layer 2 emulation",
          "Broadcast domain support",
          "VLAN-like isolation",
          "No IP conflicts possible"
        ]}
        illustration={LANOverWANIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Advanced Routing Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={sections[3].title}
          subtitle={sections[3].description}
          titleSize="medium"
        />
      </ContentSection>

      {/* Illustrated: WireGuard Foundation */}
      <IllustratedSection
        subtitle="Modern Protocol"
        title="Built on WireGuard"
        description="Tunnels leverages WireGuard's modern cryptography and minimal codebase. State-of-the-art security with exceptional performance on all platforms."
        features={[
          "~4,000 lines of code",
          "Formally verified crypto",
          "Built into Linux kernel",
          "Cross-platform support"
        ]}
        illustration={WireGuardIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Abstract NAT Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={sections[4].title}
          subtitle={sections[4].description}
          titleSize="medium"
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
