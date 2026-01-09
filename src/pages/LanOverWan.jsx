import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { NetworkGlobeIcon, ServerIcon, LockShieldIcon, BoltIcon, GlobeIcon, LinkIcon } from '../components/ui/Icons';

const LanOverWan = () => {
  const [archRef, archVisible] = useScrollAnimation();

  const benefits = [
    {
      title: "Connect Remote Networks",
      description: "Bridge isolated LANs across the internet as if they were directly connected. Access devices and services on remote networks seamlessly.",
      icon: <NetworkGlobeIcon />,
      color: "primary"
    },
    {
      title: "Site-to-Site Connectivity",
      description: "Connect branch offices, data centers, or home networks together. Create a unified network spanning multiple physical locations.",
      icon: <GlobeIcon />,
      color: "secondary"
    },
    {
      title: "Secure Tunnel",
      description: "All traffic between sites is encrypted end-to-end. Your private network traffic stays private, even over public internet.",
      icon: <LockShieldIcon />,
      color: "tertiary"
    },
    {
      title: "Low Latency",
      description: "Optimized for performance with minimal overhead. Direct tunnels between sites without routing through central servers.",
      icon: <BoltIcon />,
      color: "primary"
    },
    {
      title: "Automatic Discovery",
      description: "Devices on connected networks can discover and communicate with each other automatically through DNS and routing.",
      icon: <LinkIcon />,
      color: "secondary"
    },
    {
      title: "Self-Hosted",
      description: "Run your own VPN server for complete control. No third-party services, no data leaving your infrastructure.",
      icon: <ServerIcon />,
      color: "tertiary"
    }
  ];

  const useCases = [
    {
      title: "Multi-Office Networking",
      description: "Connect headquarters with branch offices. Employees access internal resources regardless of location.",
      scenario: "HQ in New York connects to offices in London and Tokyo - all on one unified network"
    },
    {
      title: "Home to Cloud",
      description: "Bridge your home network to cloud infrastructure. Access cloud resources as if they were local.",
      scenario: "Homelab connects directly to AWS VPC for hybrid deployments"
    },
    {
      title: "Disaster Recovery",
      description: "Maintain hot standby sites with real-time data replication over secure tunnels.",
      scenario: "Primary datacenter syncs to backup site across the country"
    },
    {
      title: "IoT Device Management",
      description: "Manage IoT devices deployed across multiple sites from a central location.",
      scenario: "Industrial sensors at 50 locations all accessible from central monitoring"
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Deploy Tunnels Server",
      description: "Set up a Tunnels server on your primary network. This will act as the connection hub."
    },
    {
      step: "2",
      title: "Configure Network Routes",
      description: "Define which subnets should be accessible across the WAN. Specify CIDR blocks for each site."
    },
    {
      step: "3",
      title: "Connect Remote Sites",
      description: "Deploy Tunnels clients or servers at remote locations. They will establish secure tunnels automatically."
    },
    {
      step: "4",
      title: "Access Resources",
      description: "Devices on connected networks can now communicate directly. DNS resolution works across all sites."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSimple
        badge="Bridge Networks Securely"
        title="LAN Over WAN"
        subtitle="Connect Remote Networks Seamlessly"
        description="Bridge isolated local networks across the internet. Create a unified network spanning multiple physical locations with end-to-end encryption."
        buttons={[
          { text: "Get Started", href: "/download", primary: true },
          { text: "View Docs", href: "https://docs.tunnels.is/docs", teal: true }
        ]}
        quickStats={[
          { value: "<10ms", label: "Added Latency" },
          { value: "AES-256", label: "Encryption" },
          { value: "Unlimited", label: "Sites" }
        ]}
        showGeometricShapes={true}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why LAN Over WAN?"
          subtitle="Connect your networks with enterprise-grade security and simplicity"
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Architecture Section */}
      <ContentSection>
        <div ref={archRef}>
          <SectionHeader
            title="How It Works"
            subtitle="Secure tunnels connecting your networks"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={archVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {/* Central Server */}
              <div className="bg-dark-accent-primary/10 p-8 rounded-xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-dark-accent-primary/30 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Tunnels Server</h4>
                <p className="text-dark-text-secondary">Central hub managing all site connections</p>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>

              {/* Remote Sites */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Office A', 'Office B', 'Datacenter', 'Home'].map((site, i) => (
                  <div key={i} className="bg-dark-accent-tertiary/10 p-4 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-dark-accent-tertiary/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-dark-text-secondary text-sm">{site}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-dark-text-secondary text-sm italic">
                All sites connected via encrypted tunnels
              </p>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Common Use Cases"
          subtitle="How organizations use LAN over WAN"
        />
        <StaggeredGrid
          items={useCases}
          columns={2}
        />
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection>
        <SectionHeader
          title="Quick Setup"
          subtitle="Get connected in minutes"
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline steps={setupSteps} />
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Ready to Connect Your Networks?"
        description="Download Tunnels and start bridging your LANs over the internet securely."
        buttons={[
          { text: "Download Free", href: "/download", primary: true },
          { text: "Read Documentation", href: "https://docs.tunnels.is/docs" }
        ]}
      />
    </div>
  );
};

export default LanOverWan;
