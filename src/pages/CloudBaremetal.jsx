import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import TerminalPreview from '../components/sections/TerminalPreview';
import FeatureTable from '../components/sections/FeatureTable';
import GradientCallout from '../components/sections/GradientCallout';
import { cloudBaremetalContent } from '../content/siteContent';
import { MultiServerIllustration } from '../components/illustrations';

const CloudBaremetal = () => {
  const { hero, benefitsSection, benefits, architecture, useCases, performance } = cloudBaremetalContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Performance Stats Banner */}
      <ContentSection background="dark-surface">
        <StatsBanner
          stats={performance.stats}
          variant="card"
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
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Illustrated: Multi-Server Architecture (kept) */}
      <IllustratedSection
        subtitle="Distributed Architecture"
        title="Scale Without Limits"
        description="Deploy VPN servers across multiple regions while managing everything from a single control plane. Each server operates independently, verifying auth tokens without database access."
        features={[
          "One control server for auth",
          "Unlimited VPN server nodes",
          "Geographic distribution",
          "Independent failure domains"
        ]}
        illustration={MultiServerIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Architecture BentoGrid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={architecture.title}
          subtitle={architecture.description}
          titleSize="medium"
        />
        <BentoGrid
          layout="featured"
          items={[
            {
              title: architecture.controlServer.title,
              description: architecture.controlServer.description,
              features: [
                "User authentication & authorization",
                "Device & policy management",
                "Signs tokens for VPN server verification",
                "Single source of truth for access control"
              ],
              highlight: "One control server per deployment",
              icon: (
                <svg className="w-full h-full text-dark-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )
            },
            {
              title: architecture.vpnServers.title,
              description: architecture.vpnServers.description,
              icon: (
                <svg className="w-full h-full text-dark-accent-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              )
            },
            {
              title: "Isolated Failure Domains",
              description: "Each VPN server operates independently. A failure in one region has no impact on any other server or the control plane.",
              icon: (
                <svg className="w-full h-full text-dark-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            }
          ]}
        />
      </ContentSection>

      {/* Global Reach: TerminalPreview */}
      <ContentSection>
        <SectionHeader
          title="Deploy Anywhere, Manage Centrally"
          subtitle="Run VPN servers in any region — cloud providers, colocations, or your own data centers"
          titleSize="medium"
        />
        <TerminalPreview
          title="Multi-Region in Minutes"
          description="Spin up VPN servers in new regions with a single command. Users automatically connect to the optimal endpoint while you maintain central control from one place."
          position="right"
          features={[
            "Multi-region deployment",
            "Automatic failover between servers",
            "Central policy management",
            "Real-time monitoring across all nodes"
          ]}
          lines={[
            { type: "comment", text: "Deploy control server (once)" },
            { type: "command", text: "tunnels-server --mode control --region us-east-1" },
            { type: "success", text: "Control server running on :443" },
            { type: "empty" },
            { type: "comment", text: "Add VPN server in EU" },
            { type: "command", text: "tunnels-server --mode vpn --control https://ctrl.example.com --region eu-west-1" },
            { type: "success", text: "VPN server registered  [eu-west-1]" },
            { type: "empty" },
            { type: "comment", text: "Add VPN server in Asia" },
            { type: "command", text: "tunnels-server --mode vpn --control https://ctrl.example.com --region ap-southeast-1" },
            { type: "success", text: "VPN server registered  [ap-southeast-1]" },
            { type: "empty" },
            { type: "info", text: "3 servers active  •  0 incidents  •  clients routing optimally" }
          ]}
        />
      </ContentSection>

      {/* Use Cases Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Real-World Deployments"
          subtitle="See how organizations are using multi-server Tunnels architecture"
        />
        <StaggeredGrid
          items={useCases}
          columns={2}
        />
      </ContentSection>

      {/* Deployment Options: FeatureTable */}
      <ContentSection>
        <SectionHeader
          title="Cloud, Baremetal, or Hybrid"
          subtitle="Deploy on the infrastructure that fits your needs — no vendor lock-in, complete flexibility"
          titleSize="medium"
        />
        <FeatureTable
          headers={["Deployment Option", "Performance", "Control", "Cost Profile", "Best For"]}
          rows={[
            ["AWS / GCP / Azure", "High", "Managed", "Pay-as-you-go", "Fast global rollouts"],
            ["Baremetal / Dedicated", "Maximum", "Full", "Predictable at scale", "High-throughput workloads"],
            ["Hybrid Cloud", "High", "Flexible", "Optimized", "Compliance & flexibility"],
            ["Private Cloud / OpenStack", "High", "Complete", "CapEx model", "Data sovereignty requirements"],
            ["Docker / Containers", "Good", "Full", "Efficient", "Dev & staging environments"]
          ]}
          caption="All deployment options support the full Tunnels feature set. Mix and match within a single deployment."
        />
      </ContentSection>

      {/* Zero Trust Security: GradientCallout */}
      <ContentSection background="dark-surface">
        <GradientCallout
          accent="teal"
          title="Zero Trust Architecture by Design"
          description="VPN servers verify authentication tokens using public key cryptography — no shared secrets, no direct database connections between servers. Each component operates with the minimum trust and access it needs to do its job."
          features={[
            "Signature-based auth — no shared secrets",
            "VPN servers never touch the user database",
            "Isolated failure domains prevent lateral movement",
            "Full audit logging on control and VPN servers"
          ]}
          button={{ text: "Read Security Docs", href: "https://docs.tunnels.is/docs", primary: false }}
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Deploy?"
        description="Get started with multi-server Tunnels architecture today. Full deployment guides and 24/7 support for enterprise customers."
        buttons={[
          { text: "Download & Get Started", href: "/download", primary: true },
          { text: "View Documentation", href: "https://docs.tunnels.is/docs", primary: false }
        ]}
      />
    </div>
  );
};

export default CloudBaremetal;
