import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import TerminalPreview from '../components/sections/TerminalPreview';
import HorizontalSteps from '../components/sections/HorizontalSteps';
import { publicVPNContent } from '../content/siteContent';
import { PrivacyShieldIllustration } from '../components/illustrations';

const PublicVPN = () => {
  const content = publicVPNContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
        quickStats={content.hero.quickStats}
      />

      {/* Stats Banner */}
      <ContentSection background="dark-surface">
        <StatsBanner
          variant="default"
          stats={[
            { value: "0 Logs", label: "No Third-Party Logging" },
            { value: "100%", label: "Encrypted Traffic" },
            { value: "Your Server", label: "Full Infrastructure Control" },
            { value: "< 5 min", label: "Setup Time" },
          ]}
        />
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection>
        <SectionHeader
          title={content.benefitsSection.title}
          subtitle={content.benefitsSection.subtitle}
        />
        <FeatureGrid
          features={content.benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Illustrated: Privacy */}
      <IllustratedSection
        subtitle="True Privacy"
        title="Browse Without Being Watched"
        description="When you need to access the public internet privately, route your traffic through your own server. No third-party VPN provider sees your data."
        features={[
          "Your own server, your own IP",
          "No logs by third parties",
          "Full control over exit location",
          "No bandwidth throttling"
        ]}
        illustration={PrivacyShieldIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Terminal Preview: Global Reach */}
      <ContentSection background="dark-surface">
        <TerminalPreview
          title="Exit Points Anywhere"
          description="Deploy your VPN server in any region for optimal performance. Choose locations based on your needs — close to you for speed, or in specific countries for access."
          features={[
            "50+ global cloud regions",
            "Choose your IP location",
            "Sub-100ms latency options",
            "Multiple redundant servers"
          ]}
          position="right"
          lines={[
            { type: "comment", text: "Deploy a VPN server in Frankfurt" },
            { type: "command", text: "doctl compute droplet create vpn-eu-fra \\" },
            { type: "output", text: "  --region fra1 --size s-1vcpu-1gb \\" },
            { type: "output", text: "  --image ubuntu-22-04-x64" },
            { type: "empty" },
            { type: "success", text: "Droplet created: 49.12.xx.xx (Frankfurt)" },
            { type: "empty" },
            { type: "comment", text: "Install Tunnels server" },
            { type: "command", text: "curl -fsSL https://get.tunnels.is | sh" },
            { type: "empty" },
            { type: "success", text: "Tunnels server installed and running" },
            { type: "info", text: "Listening on :443 — ready for connections" },
          ]}
        />
      </ContentSection>

      {/* Cloud Providers */}
      <ContentSection>
        <SectionHeader
          title={content.providersSection.title}
          subtitle={content.providersSection.subtitle}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {content.providers.map((provider, index) => (
            <div key={index} className="p-5 text-center transition-colors">
              <h3 className="text-base font-bold text-dark-text-primary mb-1">{provider.name}</h3>
              <p className="text-lg font-bold text-dark-accent-primary mb-1">{provider.price}</p>
              <p className="text-dark-text-muted text-xs">{provider.region}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-dark-text-secondary mt-8">
          {content.providersFooter}
        </p>
      </ContentSection>

      {/* Horizontal Steps: Easy Deployment */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Deploy in Minutes"
          subtitle="Get your public VPN server running in under 5 minutes with one-command deployment scripts that work with all major cloud providers."
        />
        <HorizontalSteps
          steps={[
            {
              title: "Deploy a Cloud Server",
              description: "Spin up a VPS on any cloud provider in your preferred location. Even the smallest instance works.",
              command: "doctl compute droplet create vpn-server"
            },
            {
              title: "Install Tunnels Server",
              description: "Download and run the Tunnels server binary. Single command deployment with auto-configured firewall rules.",
              command: "curl -fsSL https://get.tunnels.is | sh"
            },
            {
              title: "Configure Public Routing",
              description: "Enable NAT and configure your server to route traffic to the internet. Free SSL certificates included.",
              command: "tunnels enable-nat --auto"
            },
            {
              title: "Connect & Browse",
              description: "Connect your devices and enjoy a secure, private connection to the internet with automatic updates available."
            }
          ]}
          variant="default"
        />
      </ContentSection>

      {/* Use Cases */}
      <ContentSection>
        <SectionHeader
          title={content.useCasesSection.title}
          subtitle={content.useCasesSection.subtitle}
        />
        <StaggeredGrid
          items={content.useCases}
          columns={2}
        />
      </ContentSection>

      {/* CTA */}
      <CTASection
        title={content.cta.title}
        description={content.cta.description}
        buttons={content.cta.buttons}
      />
    </div>
  );
};

export default PublicVPN;
