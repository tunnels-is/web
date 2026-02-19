import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { enterpriseContent } from '../content/siteContent';
import {
  EnterpriseIllustration,
  TeamIllustration,
  AccessControlIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const Enterprise = () => {
  const { hero, benefits, management, security, cta } = enterpriseContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
      />

      {/* Benefits Section */}
      <ContentSection>
        <SectionHeader
          title="Why Choose Tunnels for Enterprise"
          subtitle="Scalable, secure, and designed for enterprise-grade networking"
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Illustrated: Enterprise Scale */}
      <IllustratedSection
        subtitle="Built for Scale"
        title="Enterprise-Grade Infrastructure"
        description="Deploy across thousands of nodes with centralized management. tunnels scales from small teams to global enterprises without compromising performance."
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

      {/* Illustrated: Team Management */}
      <IllustratedSection
        subtitle="Effortless Management"
        title={management.title}
        description={`${management.description1} ${management.description2}`}
        features={management.features.map(f => f.title)}
        illustration={TeamIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Illustrated: Access Control */}
      <IllustratedSection
        subtitle="Fine-Grained Permissions"
        title="Role-Based Access Control"
        description="Define who can access what with granular permissions. Create policies based on users, groups, devices, or network segments."
        features={[
          "User and group-based policies",
          "Device trust levels",
          "Time-based access rules",
          "Audit logging for compliance"
        ]}
        illustration={AccessControlIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Illustrated: Security */}
      <IllustratedSection
        subtitle="Enterprise Security"
        title={security.title}
        description={security.description1}
        features={security.features.map(f => f.title)}
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
