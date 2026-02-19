import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import FeatureTable from '../components/sections/FeatureTable';
import { enterpriseContent } from '../content/siteContent';
import {
  EnterpriseIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const Enterprise = () => {
  const { hero, benefits, management, security, cta } = enterpriseContent;

  const enterpriseStats = [
    { value: '10K+', label: 'Connections', description: 'Concurrent nodes supported' },
    { value: '<1ms', label: 'Latency', description: 'Routing decision time' },
    { value: '99.99%', label: 'Uptime', description: 'SLA available' },
    { value: '0', label: 'Logs', description: 'Zero-knowledge architecture' },
  ];

  const managementItems = [
    {
      title: management.features?.[0]?.title || 'Centralized Dashboard',
      description: management.features?.[0]?.description || 'Manage all nodes, users, and networks from a single control plane.',
      features: ['Real-time node monitoring', 'Bulk configuration deployment', 'Network topology visualization'],
      highlight: 'Core Feature',
    },
    {
      title: management.features?.[1]?.title || 'User Groups',
      description: management.features?.[1]?.description || 'Organize users into groups with shared access policies and permissions.',
    },
    {
      title: management.features?.[2]?.title || 'API Access',
      description: management.features?.[2]?.description || 'Full REST API for automation, integration with your existing infrastructure.',
    },
    {
      title: management.features?.[3]?.title || 'Audit Trail',
      description: management.features?.[3]?.description || 'Complete audit logging for compliance requirements and security reviews.',
    },
  ];

  const accessControlRows = [
    ['User-based policies', 'Per-user access rules', true],
    ['Group permissions', 'Shared team policies', true],
    ['Device trust levels', 'Hardware-bound authentication', true],
    ['Time-based access', 'Schedule-based rules', true],
    ['Network segmentation', 'Isolated network zones', true],
    ['Audit logging', 'Full compliance trail', true],
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={[
          { text: 'Contact Sales', href: 'mailto:support@tunnels.is', primary: true },
          { text: 'View Pricing', href: '/pricing' }
        ]}
      />

      {/* Enterprise Stats */}
      <ContentSection padding="small">
        <StatsBanner stats={enterpriseStats} variant="card" />
      </ContentSection>

      {/* Benefits */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Choose Tunnels for Enterprise"
          subtitle="Scalable, secure, and designed for enterprise-grade networking"
        />
        <FeatureGrid features={benefits} columns={3} cardStyle="elevated" />
      </ContentSection>

      {/* Illustrated: Enterprise Scale */}
      <IllustratedSection
        subtitle="Built for Scale"
        title="Enterprise-Grade Infrastructure"
        description="Deploy across thousands of nodes with centralized management. Tunnels scales from small teams to global enterprises without compromising performance."
        features={[
          "Supports 10,000+ concurrent connections",
          "Sub-millisecond routing decisions",
          "Horizontal scaling architecture",
          "99.99% uptime SLA available"
        ]}
        illustration={EnterpriseIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Team Management - Bento Grid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={management.title}
          subtitle={`${management.description1}`}
        />
        <BentoGrid items={managementItems} layout="featured" />
      </ContentSection>

      {/* Access Control - Feature Table */}
      <ContentSection>
        <SectionHeader
          title="Role-Based Access Control"
          subtitle="Define who can access what with granular permissions"
        />
        <FeatureTable
          headers={['Capability', 'Description', 'Available']}
          rows={accessControlRows}
          caption="All access control features are included in the enterprise plan"
        />
      </ContentSection>

      {/* Security Callout */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={security.title}
          subtitle={security.description1}
        />
        <GradientCallout
          title="Zero Trust Architecture"
          description="Every connection is verified, every packet is encrypted. Tunnels implements a zero-trust model where no device or user is trusted by default, regardless of network location."
          features={security.features?.map(f => f.title) || [
            "End-to-end encryption",
            "Certificate-based authentication",
            "Network micro-segmentation",
            "Continuous verification"
          ]}
          accent="teal"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          }
        />
      </ContentSection>

      {/* Illustrated: Security */}
      <IllustratedSection
        subtitle="Enterprise Security"
        title="Open Source Transparency"
        description="Every line of code is open for inspection and audit. No black boxes, no hidden backdoors — just transparent, verifiable security you can trust."
        features={[
          "MIT licensed - fully auditable",
          "Regular third-party security reviews",
          "Active community vulnerability reporting",
          "Self-host for maximum control"
        ]}
        illustration={SecurityIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        description={cta.description}
        buttons={cta.buttons}
      />
    </div>
  );
};

export default Enterprise;
