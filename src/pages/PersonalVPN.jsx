import HeroWithWaves from '../components/sections/HeroWithWaves';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import TechnicalFeaturesSection from '../components/sections/TechnicalFeaturesSection';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import FeatureComparison from '../components/sections/FeatureComparison';
import PricingHighlight from '../components/sections/PricingHighlight';
import CloudProvidersGrid from '../components/sections/CloudProvidersGrid';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import { KeyIcon, LightbulbIcon } from '../components/ui/Icons';
import { personalVPNContent } from '../content/siteContent';

const PersonalVPN = () => {
  const { benefits, useCases, ctaCards } = personalVPNContent;

  // Keep these arrays as they are more complex with additional nested data
  const technicalFeatures = [
    {
      category: "Security",
      features: [
        { name: "WireGuard Protocol", detail: "Modern, audited VPN protocol with state-of-the-art cryptography" },
        { name: "ChaCha20 Encryption", detail: "Military-grade encryption for all your traffic" },
        { name: "Perfect Forward Secrecy", detail: "Each session has unique keys - past traffic stays secure" },
        { name: "No Logs, Guaranteed", detail: "Your server doesn't log because you configured it not to" }
      ]
    },
    {
      category: "DNS & Privacy",
      features: [
        { name: "Built-in DNS Security", detail: "Integrated DNS resolver with blocking capabilities" },
        { name: "Daily Threat Updates", detail: "Automatic malware and phishing domain blocking" },
        { name: "Custom DNS Records", detail: "Define your own DNS entries for private services" },
        { name: "DNS Over VPN", detail: "All DNS queries encrypted through the tunnel" }
      ]
    },
    {
      category: "Performance",
      features: [
        { name: "Low Latency", detail: "WireGuard overhead is minimal - typically <1ms" },
        { name: "Full Bandwidth", detail: "Modern servers handle gigabit speeds easily" },
        { name: "Automatic Reconnect", detail: "Seamless reconnection when switching networks" },
        { name: "Battery Efficient", detail: "WireGuard is optimized for mobile devices" }
      ]
    },
    {
      category: "Management",
      features: [
        { name: "Multi-Device Support", detail: "Unlimited devices per account" },
        { name: "User Management", detail: "Create accounts for family members with individual policies" },
        { name: "Traffic Monitoring", detail: "Optional bandwidth and connection monitoring" },
        { name: "Easy Client Setup", detail: "Simple QR code or config file deployment" }
      ]
    }
  ];

  const setupSteps = [
    {
      step: "01",
      title: "Choose Your Cloud Provider",
      description: "Deploy on any cloud platform - we recommend starting with a small VPS for $5-10/month.",
      providers: ["DigitalOcean", "Vultr", "Linode", "AWS Lightsail", "Hetzner"],
      specs: "1 CPU, 1GB RAM, 25GB SSD is plenty"
    },
    {
      step: "02",
      title: "Install Tunnels Server",
      description: "One command installs everything needed for your personal VPN server.",
      command: "curl -sSL https://tunnels.is/install.sh | sudo bash",
      specs: "Works on Ubuntu, Debian, CentOS, Fedora, and more"
    },
    {
      step: "03",
      title: "Configure Your Server",
      description: "Set up authentication, network settings, and DNS configuration.",
      command: "sudo nano /etc/tunnels/config.json",
      specs: "Configure API port, VPN network range, DNS settings"
    },
    {
      step: "04",
      title: "Install Client Apps",
      description: "Download the Tunnels client for your devices from the official website.",
      command: "Available for all platforms",
      specs: "Windows, macOS, Linux, iOS, Android"
    },
    {
      step: "05",
      title: "Connect & Enjoy",
      description: "Add your server to the client app and connect. Your personal VPN is ready!",
      command: "Enter your server IP and port, login with your credentials",
      specs: "Automatic DNS configuration and routing"
    }
  ];

  const comparison = [
    {
      feature: "Privacy",
      commercial: "Trust their no-log policy",
      personal: "Guaranteed - you control the server",
      winner: "personal"
    },
    {
      feature: "Cost (Annual)",
      commercial: "$60-120/year per user",
      personal: "$60-120/year unlimited users",
      winner: "personal"
    },
    {
      feature: "Speed",
      commercial: "Shared infrastructure, variable",
      personal: "Full server bandwidth, consistent",
      winner: "personal"
    },
    {
      feature: "Device Limit",
      commercial: "5-10 devices typical",
      personal: "Unlimited devices",
      winner: "personal"
    },
    {
      feature: "Server Locations",
      commercial: "100+ countries available",
      personal: "Deploy where you need",
      winner: "commercial"
    },
    {
      feature: "Setup",
      commercial: "Download and click",
      personal: "20 minutes initial setup",
      winner: "commercial"
    },
    {
      feature: "Transparency",
      commercial: "Closed source, audited",
      personal: "Open source, fully auditable",
      winner: "personal"
    },
    {
      feature: "DNS Blocking",
      commercial: "Not included",
      personal: "Built-in ad & malware blocking",
      winner: "personal"
    }
  ];

  const cloudProviders = [
    {
      name: "DigitalOcean",
      price: "$6/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "15+ regions worldwide",
      recommended: true,
      pros: ["Simple setup", "Great docs", "Predictable pricing", "Excellent network"]
    },
    {
      name: "Vultr",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "25+ regions worldwide",
      recommended: true,
      pros: ["Lowest cost", "Many locations", "Good performance", "Easy deployment"]
    },
    {
      name: "AWS Lightsail",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 40GB SSD, 2TB transfer",
      locations: "AWS regions globally",
      recommended: false,
      pros: ["AWS ecosystem", "Great reliability", "Generous bandwidth", "Easy scaling"]
    },
    {
      name: "Hetzner",
      price: "€4.15/month",
      specs: "1 vCPU, 2GB RAM, 20GB SSD, 20TB transfer",
      locations: "EU and US locations",
      recommended: true,
      pros: ["Best value", "Huge bandwidth", "Great EU coverage", "Excellent performance"]
    },
    {
      name: "Linode",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "11 regions globally",
      recommended: false,
      pros: ["Reliable", "Good support", "Simple pricing", "Quality network"]
    },
    {
      name: "Oracle Cloud",
      price: "Free tier available",
      specs: "1-4 vCPU, 1-24GB RAM (ARM), 200GB storage",
      locations: "Multiple regions",
      recommended: false,
      pros: ["Free forever tier", "Generous specs", "ARM instances", "Good for testing"]
    }
  ];

  const faqs = [
    {
      q: "Do I need technical knowledge to set this up?",
      a: "Basic Linux command-line knowledge helps, but our guided setup process makes it straightforward. If you can SSH into a server and copy-paste commands, you can set up your personal VPN."
    },
    {
      q: "How does this compare to commercial VPN providers in terms of speed?",
      a: "Your personal VPN is typically faster because you're not sharing bandwidth with thousands of other users. You get the full speed of your cloud server's network connection."
    },
    {
      q: "What if I need to access multiple countries?",
      a: "You can deploy multiple VPN servers in different regions and switch between them using the Tunnels client. Each server costs $5-10/month."
    },
    {
      q: "Is this legal?",
      a: "Yes, running your own VPN server is completely legal in most countries. You're simply encrypting your own internet traffic through your own server."
    },
    {
      q: "How many devices can connect simultaneously?",
      a: "Unlimited. A basic $5/month server can easily handle 10-20 simultaneous connections. For larger families, upgrade to a $10-20/month server."
    },
    {
      q: "What happens if my server goes down?",
      a: "Your internet connection will continue working normally - you just won't have the VPN protection until the server is back up. Cloud providers typically have 99.9%+ uptime."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithWaves
        badge="🔒 Your Server, Your Privacy"
        title="Personal VPN"
        subtitle={<>Run Your Own VPN Server<br /><span className="text-dark-accent-tertiary">Take Back Control of Your Privacy</span></>}
        description="Deploy a personal VPN server in minutes. No third parties, no trust required, no logs - just you and your encrypted connection to the internet."
        buttons={[
          { text: "Get Started Free", href: "/download", primary: true },
          { text: "Compare vs Commercial VPNs", href: "#comparison", primary: false }
        ]}
        quickStats={[
          { value: "$5", label: "Per Month" },
          { value: "15 min", label: "Setup Time" },
          { value: "∞", label: "Devices" },
          { value: "100%", label: "Privacy" }
        ]}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Run Your Own VPN?"
          subtitle="Commercial VPNs ask you to trust them. With your own server, trust isn't necessary."
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="gradient-border"
        />
      </ContentSection>

      {/* Use Cases Section */}
      <ContentSection>
        <SectionHeader
          title="Perfect For Every Scenario"
          subtitle="From coffee shops to corporate networks, your personal VPN has you covered"
        />
        <StaggeredGrid
          items={useCases}
          columns={3}
        />
      </ContentSection>

      {/* Technical Features */}
      <ContentSection background="gradient">
        <SectionHeader
          title="Enterprise-Grade Technology"
          subtitle="Built on battle-tested protocols with modern security practices"
        />
        <TechnicalFeaturesSection
          categories={technicalFeatures}
        />
      </ContentSection>

      {/* Setup Guide */}
      <ContentSection>
        <SectionHeader
          title="Setup in 5 Easy Steps"
          subtitle="From zero to encrypted in 15 minutes"
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline
            steps={setupSteps}
          />
        </div>
      </ContentSection>

      {/* Comparison Section */}
      <ContentSection background="dark-surface" id="comparison">
        <div className="relative">
          {/* Diagonal Background Split */}
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-accent-primary/5 to-transparent transform -skew-y-3"></div>
          </div>

          <div className="relative">
            <SectionHeader
              title="Personal vs Commercial VPNs"
              subtitle="See how your own server stacks up against commercial providers"
            />
            <FeatureComparison
              comparisonItems={comparison}
            />

            {/* Summary Card */}
            <div className="mt-12 bg-gradient-to-r from-dark-accent-primary/10 via-dark-accent-secondary/10 to-dark-accent-tertiary/10 p-8 rounded-2xl border border-dark-accent-primary">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 text-dark-accent-secondary">
                  <LightbulbIcon />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark-accent-primary mb-2 leading-tight">
                    The Bottom Line
                  </h4>
                  <p className="text-base text-dark-text-secondary leading-snug">
                    Commercial VPNs are convenient but require trust. Your personal VPN gives you complete control and transparency
                    at a lower cost. The choice depends on your priorities: convenience vs. control, trust vs. verification,
                    multiple locations vs. ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Privacy Highlight */}
      <PricingHighlight
        icon={<div className="w-12 h-12 text-dark-accent-primary"><KeyIcon /></div>}
        title={<>Zero Knowledge. Zero Logs.<br />Zero Compromise.</>}
        description={<>With your own server, you don't need to trust a privacy policy.<br /><span className="font-bold">You write the rules.</span></>}
        highlights={[
          {
            title: "No Logging",
            description: "Your server doesn't log because you configured it not to. Not a promise - a fact."
          },
          {
            title: "Open Source",
            description: "Audit every line of code. Know exactly what's running on your infrastructure."
          },
          {
            title: "Your Keys",
            description: "Encryption keys generated on your devices. Never transmitted, never stored."
          }
        ]}
      />

      {/* Cloud Providers */}
      <ContentSection background="dark-bg">
        <SectionHeader
          title="Where to Deploy"
          subtitle="Choose your cloud provider based on location, price, and features"
        />
        <CloudProvidersGrid
          providers={cloudProviders}
        />
        <div className="mt-12 text-center bg-dark-surface p-8 rounded-2xl">
          <p className="text-lg text-dark-text-secondary">
            <span className="text-dark-accent-primary font-bold">Pro Tip:</span>
            {" "}Start with any provider's smallest plan. You can always upgrade if needed, but a basic VPS
            handles personal VPN traffic easily for most users.
          </p>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="dark-surface">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Common Questions"
            subtitle="Everything you need to know before getting started"
          />
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* Final CTA */}
      <CTASection
        title="Ready to Take Control?"
        description="Join thousands who've ditched commercial VPNs for complete privacy and control"
        layout="split"
        cards={ctaCards}
      />
    </div>
  );
};

export default PersonalVPN;
