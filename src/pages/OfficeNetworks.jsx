import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import StatsBanner from '../components/sections/StatsBanner';
import TerminalPreview from '../components/sections/TerminalPreview';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import HorizontalSteps from '../components/sections/HorizontalSteps';
import IllustratedSection from '../components/IllustratedSection';
import { officeNetworksContent } from '../content/siteContent';
import {
  OfficeNetworkIllustration,
  SecurityIllustration,
} from '../components/illustrations';

const quickStats = [
  { value: 'Up to 65K', label: 'Clients per Server', description: 'Scale your team without infrastructure limits' },
  { value: 'Split', label: 'Tunnel Support', description: 'Office traffic on VPN, personal traffic stays local' },
  { value: 'TOTP 2FA', label: 'Built-In Auth', description: 'Two-factor authentication out of the box' },
  { value: 'Zero Trust', label: 'Security Model', description: 'Every connection verified and encrypted' },
];

const setupSteps = [
  {
    title: 'Deploy Your Server',
    description: 'Spin up a Tunnels control server on any Linux machine - cloud, VPS, or baremetal in your office.',
    command: 'tunnels-server install',
  },
  {
    title: 'Create User Groups',
    description: 'Define departments like Engineering, Finance, and HR. Each group gets access only to the resources it needs.',
    command: 'tunnels admin create-group engineering',
  },
  {
    title: 'Invite Your Team',
    description: 'Add employees via the admin dashboard. They receive credentials and can connect within minutes.',
    command: 'tunnels admin add-user alice@company.com',
  },
];

const terminalLines = [
  { type: 'comment', text: 'Connect to the office network' },
  { type: 'command', text: 'tunnels connect office-vpn' },
  { type: 'success', text: 'Connected to office-vpn (10.0.0.42)' },
  { type: 'empty' },
  { type: 'comment', text: 'Internal DNS resolves company hostnames' },
  { type: 'command', text: 'ping wiki.internal' },
  { type: 'output', text: 'PING wiki.internal (10.0.1.10): 56 bytes' },
  { type: 'output', text: '64 bytes from 10.0.1.10: icmp_seq=0 ttl=64 time=1.4 ms' },
  { type: 'empty' },
  { type: 'comment', text: 'Access the git server by name' },
  { type: 'command', text: 'git clone git@git.internal:org/repo.git' },
  { type: 'success', text: 'Cloning into repo... done.' },
];

const useCaseBentoItems = [
  {
    title: 'Remote Team Access',
    description: 'Give remote employees secure access to office resources as if they were on-site. File servers, printers, and internal tools work seamlessly from anywhere.',
  },
  {
    title: 'Multi-Office Connectivity',
    description: 'Connect branch offices to headquarters with dedicated VPN servers per location. HQ in New York, branches in LA and London - one unified network.',
  },
  {
    title: 'Contractor Access',
    description: 'Provide limited, time-bound access to external contractors without exposing your full network. Scoped to only the project servers they need, revoked when the contract ends.',
  },
  {
    title: 'BYOD Policy',
    description: 'Allow employees to use personal devices securely with per-device access controls. Personal laptops connect through isolated, monitored VPN tunnels.',
  },
];

const OfficeNetworks = () => {
  const { hero, benefitsSection, benefits, cta } = officeNetworksContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Quick Stats */}
      <ContentSection background="dark-surface" padding="small">
        <StatsBanner
          stats={quickStats}
          variant="card"
        />
      </ContentSection>

      {/* Benefits Grid */}
      <ContentSection background="transparent">
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
          'Access from any location',
          'Same experience as in-office',
          'No complex setup required',
          'Automatic reconnection',
        ]}
        illustration={OfficeNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Setup Steps */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Up and Running in Minutes"
          subtitle="Three steps to connect your entire team to the office network"
        />
        <HorizontalSteps steps={setupSteps} variant="default" />
      </ContentSection>

      {/* Terminal Preview: Internal DNS + Access */}
      <ContentSection background="transparent">
        <TerminalPreview
          title="Access Internal Services by Name"
          description="Once connected, employees use internal DNS to reach company tools by hostname - no IP addresses to memorize. Works out of the box with any custom domain you configure."
          features={[
            'Custom internal domains (wiki.internal, git.internal)',
            'Split tunneling keeps personal traffic off the VPN',
            'Available on macOS, Windows, Linux, iOS, and Android',
            'Reconnects automatically after network changes',
          ]}
          lines={terminalLines}
          position="right"
        />
      </ContentSection>

      {/* Use Cases Bento Grid */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Common Scenarios"
          subtitle="How organizations use Tunnels for office network access"
        />
        <BentoGrid items={useCaseBentoItems} layout="default" />
      </ContentSection>

      {/* Access Control Callout */}
      <ContentSection background="transparent">
        <GradientCallout
          title="Role-Based Access Control"
          description="Define exactly who can access what. Engineering gets development servers, Finance gets accounting systems, contractors get only the project resources they need. Each employee sees only what's relevant to their role."
          features={[
            'Per-department permission groups',
            'Resource-level access control',
            'Time-based and conditional restrictions',
            'Guest and contractor access tiers',
            'Instant revocation when employees leave',
            'Full audit log for compliance',
          ]}
          accent="teal"
          variant="default"
        />
      </ContentSection>

      {/* Illustrated: Zero Trust Security */}
      <IllustratedSection
        subtitle="Enterprise Security"
        title="Zero Trust by Default"
        description="Every connection is encrypted and authenticated. Two-factor authentication, device verification, and continuous monitoring keep your network protected without burdening employees."
        features={[
          'End-to-end encryption on all traffic',
          'TOTP two-factor authentication',
          'Per-device trust and revocation',
          'Real-time connection monitoring',
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
