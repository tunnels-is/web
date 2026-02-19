import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import GradientCallout from '../components/sections/GradientCallout';
import BentoGrid from '../components/sections/BentoGrid';
import FeatureTable from '../components/sections/FeatureTable';
import { iotNetworksContent } from '../content/siteContent';
import {
  IoTNetworkIllustration,
} from '../components/illustrations';

const IoTNetworks = () => {
  const {
    hero, benefitsSection, benefits, useCasesSection, useCases,
    securitySection, architectureSection,
    setupSection, setupSteps, faqSection, faqs, finalCTA, ctaCards
  } = iotNetworksContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        quickStats={hero.quickStats}
      />

      {/* Stats Banner */}
      <ContentSection background="dark-surface">
        <StatsBanner
          variant="default"
          stats={[
            { value: "65K+", label: "Devices per Server" },
            { value: "Zero Trust", label: "Authentication" },
            { value: "<1ms", label: "Tunnel Overhead" },
            { value: "Any Protocol", label: "TCP, UDP & More" },
          ]}
        />
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection>
        <SectionHeader
          title={benefitsSection.title}
          subtitle={benefitsSection.subtitle}
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="gradient-border"
        />
      </ContentSection>

      {/* Illustrated: Secure IoT Mesh */}
      <IllustratedSection
        subtitle="Mesh Connectivity"
        title="Connect All Your IoT Devices"
        description="Create a secure mesh network for your IoT infrastructure. Every device communicates through encrypted tunnels, isolated from the public internet."
        features={[
          "Zero-trust device authentication",
          "Automatic mesh routing",
          "Works with any IoT protocol",
          "No open ports on devices"
        ]}
        illustration={IoTNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Use Cases Section */}
      <ContentSection>
        <SectionHeader
          title={useCasesSection.title}
          subtitle={useCasesSection.subtitle}
        />
        <StaggeredGrid
          items={useCases}
          columns={3}
        />
      </ContentSection>

      {/* Architecture Section — BentoGrid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={architectureSection.title}
          subtitle={architectureSection.description}
        />
        <BentoGrid
          layout="featured"
          items={[
            {
              title: "Tunnels Server",
              description: "A single server manages your entire IoT fleet — handling authentication, device registry, IP assignment, and encrypted routing between all connected devices.",
              features: [
                "Runs on any Linux system",
                "Built-in DHCP for automatic IP assignment",
                "Centralized admin dashboard",
                "Scales to 65,535 concurrent devices",
              ],
              highlight: "One server, unlimited deployments",
            },
            {
              title: "IoT Clients",
              description: "Lightweight CLI client installs on any device. Sensors, cameras, gateways, and edge nodes connect with a single token — no GUI required.",
            },
            {
              title: "Network Segmentation",
              description: "Group devices into isolated subnets. Each segment gets its own access rules, keeping IoT traffic separate from other network traffic.",
            },
            {
              title: "Encrypted Tunnels",
              description: "Every packet travels through an AES-256-GCM encrypted tunnel. Devices communicate securely regardless of the underlying network.",
            },
          ]}
        />
      </ContentSection>

      {/* Security Features — FeatureTable */}
      <ContentSection>
        <SectionHeader
          title={securitySection.title}
          subtitle={securitySection.subtitle}
        />
        <div className="max-w-4xl mx-auto">
          <FeatureTable
            headers={["Security Feature", "Description", "Enabled by Default"]}
            rows={[
              ["Strong Encryption", "AES-256-GCM with X25519 + ML-KEM hybrid key exchange", true],
              ["Device Authentication", "Token-based headless auth — no interactive login required", true],
              ["Access Control Groups", "Per-group policies controlling which devices can talk to each other", true],
              ["Per-Device Firewall", "Configurable firewall rules blocking unwanted traffic per device", true],
              ["Perfect Forward Secrecy", "Ephemeral session keys ensure past sessions can't be decrypted", true],
              ["Network Isolation", "IoT traffic isolated from main network via separate subnets", true],
            ]}
            caption="All security features are active out of the box — no additional configuration required."
          />
        </div>
      </ContentSection>

      {/* Encryption GradientCallout */}
      <ContentSection background="dark-surface">
        <GradientCallout
          accent="teal"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
          title="Encryption for Every Packet"
          description="All IoT data is encrypted at the device level before transmission. Even if network traffic is intercepted, your data remains completely unreadable. AES-256-GCM with post-quantum key exchange protects every byte from sensor to server."
          features={[
            "AES-256-GCM encryption standard",
            "Per-device unique session keys",
            "Perfect forward secrecy",
            "Post-quantum ML-KEM key exchange",
          ]}
        />
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection background="gradient">
        <SectionHeader
          title={setupSection.title}
          subtitle={setupSection.subtitle}
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline
            steps={setupSteps}
          />
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="dark-surface">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={faqSection.title}
            subtitle={faqSection.subtitle}
          />
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* Final CTA */}
      <CTASection
        title={finalCTA.title}
        description={finalCTA.description}
        layout={finalCTA.layout}
        cards={ctaCards}
      />
    </div>
  );
};

export default IoTNetworks;
