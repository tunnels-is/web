import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import { officeNetworksContent } from '../content/siteContent';
import {
  OfficeNetworkIllustration,
  TeamIllustration,
  SecurityIllustration,
  AccessControlIllustration,
} from '../components/illustrations';

const OfficeNetworks = () => {
  const { hero, benefitsSection, benefits, useCases, cta } = officeNetworksContent;

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

      {/* Illustrated: Remote Access */}
      <IllustratedSection
        subtitle="Work From Anywhere"
        title="Secure Remote Access"
        description="Give your team secure access to office resources from anywhere in the world. Employees connect seamlessly whether they're at home, a coffee shop, or traveling abroad."
        features={[
          "Access from any location",
          "Same experience as in-office",
          "No complex setup required",
          "Automatic reconnection"
        ]}
        illustration={OfficeNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Illustrated: Team Management */}
      <IllustratedSection
        subtitle="Easy Administration"
        title="Manage Your Entire Team"
        description="One dashboard to manage all employees and their access. Add new team members in seconds, organize by department, and maintain full visibility into who's accessing what."
        features={[
          "Single admin dashboard",
          "Department-based groups",
          "Instant access provisioning",
          "Complete audit logs"
        ]}
        illustration={TeamIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Use Cases Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Common Scenarios"
          subtitle="How organizations use Tunnels for office network access"
        />
        <StaggeredGrid
          items={useCases}
          columns={2}
        />
      </ContentSection>

      {/* Illustrated: Access Control */}
      <IllustratedSection
        subtitle="Fine-Grained Control"
        title="Role-Based Access"
        description="Define exactly who can access what. Engineering team gets development servers, Finance gets accounting systems. Each employee sees only what they need."
        features={[
          "Per-department permissions",
          "Resource-level access control",
          "Time-based restrictions",
          "Guest access support"
        ]}
        illustration={AccessControlIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Illustrated: Security */}
      <IllustratedSection
        subtitle="Enterprise Security"
        title="Zero Trust by Default"
        description="Every connection is encrypted and authenticated. Two-factor authentication, device verification, and continuous monitoring keep your network secure."
        features={[
          "End-to-end encryption",
          "TOTP two-factor auth",
          "Device trust verification",
          "Real-time threat detection"
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

export default OfficeNetworks;
