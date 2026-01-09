import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import { GlobeIcon, LockShieldIcon, BoltIcon, ServerIcon, ShieldCheckIcon, NetworkGlobeIcon } from '../components/ui/Icons';

const PublicVPN = () => {
  const benefits = [
    {
      title: "Public IP Routing",
      description: "Get a routable public IP through your VPN server. Access your services from anywhere without complex NAT configurations.",
      icon: <GlobeIcon />,
      color: "primary"
    },
    {
      title: "Privacy Protection",
      description: "Route your internet traffic through your own server. No third-party VPN provider seeing your data.",
      icon: <LockShieldIcon />,
      color: "secondary"
    },
    {
      title: "Full Tunnel Mode",
      description: "Route all traffic through the VPN or choose split tunneling. Complete control over what goes through the tunnel.",
      icon: <NetworkGlobeIcon />,
      color: "tertiary"
    },
    {
      title: "High Performance",
      description: "Direct connection to your server means minimal latency. No overloaded shared servers.",
      icon: <BoltIcon />,
      color: "primary"
    },
    {
      title: "Your Infrastructure",
      description: "Deploy on any cloud provider or your own hardware. Choose locations that work best for you.",
      icon: <ServerIcon />,
      color: "secondary"
    },
    {
      title: "No Logs",
      description: "Since you control the server, you control the logging. True privacy that you can verify.",
      icon: <ShieldCheckIcon />,
      color: "tertiary"
    }
  ];

  const useCases = [
    {
      title: "Bypass Geo-Restrictions",
      description: "Access content from different regions by routing through servers in those locations.",
      scenario: "Stream content from home while traveling abroad"
    },
    {
      title: "Secure Public WiFi",
      description: "Protect your traffic when connected to untrusted networks at cafes, airports, or hotels.",
      scenario: "Work securely from any coffee shop"
    },
    {
      title: "Host Public Services",
      description: "Get a stable public IP for hosting services without exposing your home IP.",
      scenario: "Run a game server or website from home"
    },
    {
      title: "Development Testing",
      description: "Test geo-specific features or access region-locked APIs during development.",
      scenario: "Test payment integrations in different regions"
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Deploy a Cloud Server",
      description: "Spin up a VPS on any cloud provider in your preferred location. Even the smallest instance works."
    },
    {
      step: "2",
      title: "Install Tunnels Server",
      description: "Download and run the Tunnels server binary. Single command deployment."
    },
    {
      step: "3",
      title: "Configure Public Routing",
      description: "Enable NAT and configure your server to route traffic to the internet."
    },
    {
      step: "4",
      title: "Connect & Browse",
      description: "Connect your devices and enjoy a secure, private connection to the internet."
    }
  ];

  const providers = [
    { name: "DigitalOcean", price: "$4/mo", region: "Global" },
    { name: "Linode", price: "$5/mo", region: "Global" },
    { name: "Vultr", price: "$5/mo", region: "Global" },
    { name: "Hetzner", price: "3/mo", region: "EU/US" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSimple
        badge="Your Own VPN Service"
        title="Public VPN"
        subtitle="Route Your Traffic Through Your Own Server"
        description="Create your own public VPN service. Route internet traffic through servers you control with full privacy and no third-party access to your data."
        buttons={[
          { text: "Get Started", href: "/download", primary: true },
          { text: "Setup Guide", href: "https://docs.tunnels.is/docs", teal: true }
        ]}
        quickStats={[
          { value: "100%", label: "Self-Hosted" },
          { value: "Zero", label: "Third Parties" },
          { value: "Full", label: "Control" }
        ]}
        showGeometricShapes={true}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Self-Hosted Public VPN?"
          subtitle="Complete control over your internet privacy"
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Use Cases */}
      <ContentSection>
        <SectionHeader
          title="Common Use Cases"
          subtitle="How people use public VPN routing"
        />
        <StaggeredGrid
          items={useCases}
          columns={2}
        />
      </ContentSection>

      {/* Cloud Providers */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Affordable Cloud Options"
          subtitle="Deploy your VPN server starting at just a few dollars per month"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <div key={index} className="bg-dark-elevated p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">{provider.name}</h3>
              <p className="text-2xl font-bold text-dark-accent-primary mb-1">{provider.price}</p>
              <p className="text-dark-text-muted text-sm">{provider.region}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-dark-text-secondary mt-8">
          Any VPS provider works. These are just popular options with global presence.
        </p>
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection>
        <SectionHeader
          title="Quick Setup"
          subtitle="Get your public VPN running in minutes"
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline steps={setupSteps} />
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Ready for True Privacy?"
        description="Download Tunnels and create your own public VPN service today."
        buttons={[
          { text: "Download Free", href: "/download", primary: true },
          { text: "Read Documentation", href: "https://docs.tunnels.is/docs" }
        ]}
      />
    </div>
  );
};

export default PublicVPN;
