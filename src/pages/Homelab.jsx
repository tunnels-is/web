import HeroWithGradients from '../components/sections/HeroWithGradients';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Homelab = () => {
  const [ref4, isVisible4] = useScrollAnimation();

  const benefits = [
    {
      title: "Self-Hosted Privacy",
      description: "Your network, your data, your rules. No third-party services or privacy concerns.",
      icon: "🔒"
    },
    {
      title: "Remote Access",
      description: "Securely access your homelab from anywhere in the world with VPN connectivity.",
      icon: "🌐"
    },
    {
      title: "DNS Security & Blocking",
      description: "Built-in DNS blocking for ads, trackers, and malware protection for your entire home.",
      icon: "🛡️"
    },
    {
      title: "Simple Installation",
      description: "Single server setup with no complex configuration. Get running in minutes.",
      icon: "⚡"
    },
    {
      title: "Multi-Device Support",
      description: "Connect phones, laptops, tablets - all your devices with a single server.",
      icon: "📱"
    },
    {
      title: "Cost Effective",
      description: "Run on existing hardware - Raspberry Pi, old PC, or VM. No expensive infrastructure needed.",
      icon: "💰"
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Install the Server",
      description: "Deploy Tunnels server on your homelab machine - supports any Linux system.",
      command: "wget https://tunnels.is/install.sh && sudo bash install.sh",
      details: "Works on Raspberry Pi, Ubuntu, Debian, or any Linux distribution"
    },
    {
      step: "2",
      title: "Configure Server Settings",
      description: "Set up basic configuration for authentication and VPN access.",
      command: "Edit /etc/tunnels/config.yaml",
      details: "Configure APIIP, APIPort, and network settings"
    },
    {
      step: "3",
      title: "Install the Client",
      description: "Download and install the Tunnels client on your devices.",
      command: "Download from tunnels.is/download",
      details: "Available for Windows, macOS, Linux, iOS, and Android"
    },
    {
      step: "4",
      title: "Connect & Configure",
      description: "Add your server to the client and connect to your homelab network.",
      command: "Click + to add server, enter your APIIP and APIPort",
      details: "Default credentials: admin/admin (change immediately!)"
    }
  ];

  const useCases = [
    {
      title: "Media Server Access",
      description: "Stream your Plex, Jellyfin, or Emby content from anywhere without exposing ports to the internet.",
      icon: "🎬"
    },
    {
      title: "Home Automation",
      description: "Securely access Home Assistant, openHAB, or other smart home systems remotely.",
      icon: "🏠"
    },
    {
      title: "NAS & File Access",
      description: "Connect to your Synology, TrueNAS, or file server without complex VPN configurations.",
      icon: "💾"
    },
    {
      title: "Development Environment",
      description: "Access your local dev servers, databases, and tools from anywhere you work.",
      icon: "⚙️"
    },
    {
      title: "Network-Wide Ad Blocking",
      description: "Deploy DNS-level ad and tracker blocking for all devices on your network.",
      icon: "🚫"
    },
    {
      title: "Game Servers",
      description: "Host Minecraft, Valheim, or other game servers accessible to friends anywhere.",
      icon: "🎮"
    }
  ];

  const dnsFeatures = [
    {
      title: "Custom DNS Records",
      description: "Define internal DNS records for your homelab services with easy-to-remember names.",
      icon: "📝"
    },
    {
      title: "DNS Blocking Lists",
      description: "Automatic daily updates of malware, ad, and tracker domains to protect your network.",
      icon: "🛡️"
    },
    {
      title: "Split DNS",
      description: "Route specific domains through your homelab DNS while using public DNS for everything else.",
      icon: "🔄"
    },
    {
      title: "DNS Over VPN",
      description: "All connected clients automatically use your homelab DNS with security and blocking.",
      icon: "🔒"
    }
  ];

  const technicalHighlights = [
    {
      title: "Zero Configuration NAT Traversal",
      description: "No need to configure port forwarding on your router",
      icon: "🔄"
    },
    {
      title: "WireGuard Protocol",
      description: "Modern, fast, and secure VPN protocol under the hood",
      icon: "⚡"
    },
    {
      title: "IPv4 & IPv6 Support",
      description: "Full dual-stack support for modern networks",
      icon: "🌐"
    },
    {
      title: "Automatic Certificate Management",
      description: "Let's Encrypt integration for secure HTTPS connections",
      icon: "🔐"
    }
  ];

  const hardwareOptions = [
    {
      title: "Raspberry Pi",
      description: "Perfect for basic homelab VPN",
      icon: "🥧"
    },
    {
      title: "Old PC / Thin Client",
      description: "Great for growing homelabs",
      icon: "💻"
    },
    {
      title: "VM / Container",
      description: "Integrate with existing infrastructure",
      icon: "📦"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroWithGradients
        badge="Perfect for Self-Hosters"
        title="Homelab VPN"
        subtitle="Self-Hosted VPN for Your Home Network"
        description="Deploy a single server and securely access your homelab from anywhere. Built-in DNS management, ad blocking, and zero-configuration setup."
        buttons={[
          { text: "Download Free", href: "/download", primary: true },
          { text: "View Documentation", href: "/technical", primary: false }
        ]}
        quickStats={[
          { label: "Setup Time", value: "5 min" },
          { label: "Cost", value: "$0" },
          { label: "Complexity", value: "Low" }
        ]}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Choose Tunnels for Your Homelab"
          subtitle="Everything you need to securely access and manage your home network from anywhere"
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Setup Steps */}
      <ContentSection>
        <SectionHeader
          title="Quick Setup Guide"
          subtitle="Get your homelab VPN running in four simple steps"
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline steps={setupSteps} />
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Perfect For Your Setup"
          subtitle="Whatever you're running in your homelab, Tunnels makes it accessible"
        />
        <FeatureGrid
          features={useCases}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* DNS Features */}
      <ContentSection>
        <SectionHeader
          title="Powerful DNS Management"
          subtitle="Built-in DNS server with custom records, blocking, and advanced routing"
        />
        <FeatureGrid
          features={dnsFeatures}
          columns={2}
          cardStyle="glass"
        />

        {/* DNS Info Box */}
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-dark-accent-primary/10 via-dark-accent-secondary/10 to-dark-accent-tertiary/10 p-8 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-xl font-semibold text-dark-accent-primary mb-2 leading-tight">
                Network-Wide Protection
              </h4>
              <p className="text-dark-text-secondary leading-snug">
                All devices connected through your Tunnels homelab server automatically benefit from
                DNS blocking and custom DNS records - no per-device configuration needed. Your phone,
                laptop, and tablet all get ad-blocking anywhere in the world.
              </p>
            </div>
          </div>
        </motion.div>
      </ContentSection>

      {/* Technical Highlights */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Technical Highlights"
          subtitle="Modern technology stack designed for simplicity and security"
        />
        <FeatureGrid
          features={technicalHighlights}
          columns={4}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Hardware Requirements */}
      <ContentSection>
        <SectionHeader
          title="Hardware Requirements"
          subtitle="Run on almost any hardware you have available"
        />
        <FeatureGrid
          features={hardwareOptions}
          columns={3}
          cardStyle="glass"
        />
        <div className="mt-12 text-center bg-dark-surface p-6 rounded-xl">
          <p className="text-dark-text-secondary text-lg">
            <span className="text-dark-accent-primary font-semibold">Pro Tip:</span>
            {" "}Start with what you have - Tunnels is incredibly lightweight and runs efficiently on minimal hardware.
          </p>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Get Started Today"
        description="Join thousands of homelabbers using Tunnels for secure remote access"
        layout="split"
        cards={[
          {
            icon: "📥",
            title: "Download & Install",
            description: "Get the Tunnels server and client applications. Free for 24 hours trial, then affordable pricing for continued use.",
            features: [
              "Server for Linux (all distributions)",
              "Clients for Windows, macOS, Linux, iOS, Android",
              "Installation guides and documentation",
              "Community support"
            ],
            button: { text: "Download Free", href: "/download", primary: true },
            highlighted: true
          },
          {
            icon: "📚",
            title: "Read Documentation",
            description: "Comprehensive guides covering every aspect of setting up and managing your homelab VPN server.",
            features: [
              "Single server setup guide",
              "DNS configuration and blocking",
              "Linux system configuration",
              "Client setup and troubleshooting"
            ],
            button: { text: "View Documentation", href: "/technical", primary: false },
            highlighted: false
          }
        ]}
      />
    </div>
  );
};

export default Homelab;
