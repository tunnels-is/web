import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { cloudBaremetalContent } from '../content/siteContent';
import {
  MultiServerIllustration,
  CloudIllustration,
  GlobalNetworkIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const CloudBaremetal = () => {
  const { hero, benefitsSection, benefits, architecture, useCases, deploymentOptions, performance } = cloudBaremetalContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        showNetworkLines={true}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
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

      {/* Illustrated: Multi-Server Architecture */}
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

      {/* Architecture Section */}
      <ContentSection>
        <SectionHeader
          title={architecture.title}
          subtitle={architecture.description}
          titleSize="medium"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-xl border-l-4 border-dark-accent-primary bg-dark-surface">
            <h3 className="text-xl font-bold text-dark-accent-primary mb-3">{architecture.controlServer.title}</h3>
            <p className="text-dark-text-secondary">{architecture.controlServer.description}</p>
          </div>
          <div className="p-8 rounded-xl border-l-4 border-dark-accent-tertiary bg-dark-surface">
            <h3 className="text-xl font-bold text-dark-accent-tertiary mb-3">{architecture.vpnServers.title}</h3>
            <p className="text-dark-text-secondary">{architecture.vpnServers.description}</p>
          </div>
        </div>
      </ContentSection>

      {/* Illustrated: Global Reach */}
      <IllustratedSection
        subtitle="Worldwide Deployment"
        title="Deploy Anywhere, Manage Centrally"
        description="Run VPN servers in any region - cloud providers, colocations, or your own data centers. Users automatically connect to optimal endpoints while you maintain central control."
        features={[
          "Multi-region deployment",
          "Automatic failover",
          "Central policy management",
          "Real-time monitoring"
        ]}
        illustration={GlobalNetworkIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

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

      {/* Illustrated: Flexible Deployment */}
      <IllustratedSection
        subtitle="Your Infrastructure"
        title="Cloud, Baremetal, or Hybrid"
        description="Deploy on the infrastructure that fits your needs. Mix and match cloud providers with on-premise hardware. No vendor lock-in, complete flexibility."
        features={[
          "AWS, GCP, Azure support",
          "Bare metal performance",
          "Private cloud compatible",
          "Docker containers available"
        ]}
        illustration={CloudIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Deployment Options */}
      <ContentSection>
        <SectionHeader
          title="Deploy Anywhere"
          subtitle="Flexible deployment options to match your infrastructure strategy"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {deploymentOptions.map((option, index) => (
            <div key={index} className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-dark-border-light transition-colors">
              <h3 className="text-lg font-bold text-dark-accent-primary mb-2">{option.platform}</h3>
              <p className="text-dark-text-secondary text-sm mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-dark-text-secondary text-sm">
                    <svg className="w-4 h-4 text-dark-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Illustrated: Security */}
      <IllustratedSection
        subtitle="Enterprise Security"
        title="Zero Trust Architecture"
        description="VPN servers verify authentication tokens using public key cryptography. No shared secrets, no database connections between servers - minimal attack surface by design."
        features={[
          "Signature-based auth",
          "No shared secrets",
          "Isolated failure domains",
          "Full audit logging"
        ]}
        illustration={SecurityIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Performance Stats */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={performance.title}
          subtitle="Enterprise-grade performance metrics"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {performance.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dark-accent-primary mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-dark-text-primary mb-1">{stat.label}</div>
              <p className="text-dark-text-muted text-xs">{stat.description}</p>
            </div>
          ))}
        </div>
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
