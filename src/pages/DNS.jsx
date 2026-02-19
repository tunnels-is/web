import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import TerminalPreview from '../components/sections/TerminalPreview';
import GradientCallout from '../components/sections/GradientCallout';
import SplitContent from '../components/sections/SplitContent';
import StatsBanner from '../components/sections/StatsBanner';
import { dnsContent } from '../content/siteContent';
import { DNSFlowIllustration } from '../components/illustrations';

const dnsStats = [
  { value: '1M+', label: 'Domains Blocked', description: 'Malicious domains in combined blocklists' },
  { value: '10ms', label: 'Avg Response', description: 'Typical DNS resolution time' },
  { value: 'Daily', label: 'List Updates', description: 'Blocklists refreshed every 24 hours' },
  { value: '100%', label: 'Private', description: 'Queries never leave your network' },
];

const serverTerminalLines = [
  { type: 'comment', text: 'Set upstream DNS resolver' },
  { type: 'command', text: 'tunnels dns add --server 1.1.1.1' },
  { type: 'success', text: 'Upstream server 1.1.1.1 added' },
  { type: 'empty' },
  { type: 'comment', text: 'Enable malware blocklist' },
  { type: 'command', text: 'tunnels dns block --list malware' },
  { type: 'success', text: 'Blocklist activated: 842,310 domains' },
  { type: 'empty' },
  { type: 'comment', text: 'Route corporate domain to internal resolver' },
  { type: 'command', text: 'tunnels dns route --domain *.corp.local --server 10.0.0.1' },
  { type: 'success', text: 'Route added: *.corp.local -> 10.0.0.1' },
  { type: 'empty' },
  { type: 'comment', text: 'Add a custom A record' },
  { type: 'command', text: 'tunnels dns record --name nas.home --type A --value 192.168.1.50' },
  { type: 'success', text: 'Record created: nas.home -> 192.168.1.50' },
  { type: 'empty' },
  { type: 'comment', text: 'Enable DNS over HTTPS translation' },
  { type: 'command', text: 'tunnels dns doh --enable' },
  { type: 'success', text: 'DoH translation enabled' },
];

const deviceDNSCards = [
  {
    title: 'Local Hostname Overrides',
    description: 'Point any domain to any IP directly from the device config, with no external DNS server required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    title: 'Per-Device Blocklists',
    description: 'Apply different blocklists per device. Block ads on personal machines, enable strict malware filtering on servers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-tertiary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: 'Automatic Server Sync',
    description: 'When a device connects, DNS configurations from the server are automatically pushed down, requiring zero manual setup.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-green">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: 'Development & Testing',
    description: 'Override production domains locally to point at staging or local servers. Ideal for development workflows without touching /etc/hosts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-dark-accent-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

const DNS = () => {
  return (
    <div className="min-h-screen">
      <HeroSimple
        title={dnsContent.hero.title}
        subtitle={dnsContent.hero.subtitle}
        description={dnsContent.hero.description}
        buttons={dnsContent.hero.buttons}
      />

      {/* Stats Banner */}
      <ContentSection padding="small">
        <StatsBanner stats={dnsStats} variant="card" />
      </ContentSection>

      {/* Feature Grid */}
      <ContentSection background="dark-surface">
        <div id="features">
          <SectionHeader
            title="Private DNS Features"
            subtitle="Everything you need for internal name resolution"
          />
          <FeatureGrid
            features={dnsContent.dnsFeatures}
            columns={3}
            cardStyle="elevated"
          />
        </div>
      </ContentSection>

      {/* Illustrated: Private DNS / Flow */}
      <IllustratedSection
        subtitle="Simple Resolution"
        title="Private DNS for Your Network"
        description="Access your services by memorable names instead of IP addresses. tunnels automatically resolves internal hostnames for all connected devices."
        features={[
          "home.lan -> your home server",
          "nas.lan -> your storage device",
          "pi.lan -> your Raspberry Pi",
          "Works across all your devices"
        ]}
        illustration={DNSFlowIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Server DNS - Terminal Preview */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={dnsContent.serverDNS.title}
          subtitle="Configure DNS on your tunnels server with a single CLI"
        />
        <TerminalPreview
          title="Powerful Server-Side Configuration"
          description={dnsContent.serverDNS.description1 + ' ' + dnsContent.serverDNS.description2}
          features={[
            "Forward wildcard domains to internal resolvers",
            "Activate curated threat and malware blocklists",
            "Define custom A and TXT records with wildcard support",
            "Push configurations automatically to connected devices"
          ]}
          lines={serverTerminalLines}
          position="right"
        />
      </ContentSection>

      {/* DNS Security - Gradient Callout */}
      <ContentSection>
        <GradientCallout
          title="DNS Threat Protection — Updated Every Day"
          description="Tunnels ships with combined blocklists sourced from the most trusted security feeds. Malicious domains, trackers, and ad networks are blocked at the DNS layer before any connection is made. Lists are refreshed automatically every 24 hours so your network stays protected without any manual intervention."
          features={[
            "Malware and phishing domain blocking",
            "Tracker and ad network filtering",
            "Daily automated list updates",
            "DNS-over-HTTPS for encrypted upstream queries",
            "Per-device and per-server blocklist control",
            "Zero performance impact on legitimate traffic"
          ]}
          accent="green"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          }
        />
      </ContentSection>

      {/* Device DNS - Split Content */}
      <ContentSection background="dark-surface">
        <SplitContent
          title={dnsContent.deviceDNS.title}
          description={dnsContent.deviceDNS.description1 + ' ' + dnsContent.deviceDNS.description2}
          features={[
            "No external DNS server required",
            "Override any domain on a per-device basis",
            "Configurations sync automatically on connect",
            "Perfect for development and testing environments"
          ]}
          cards={deviceDNSCards}
          position="right"
          accent="teal"
        />
      </ContentSection>

      <CTASection
        title={dnsContent.cta.title}
        description={dnsContent.cta.description}
        buttons={dnsContent.cta.buttons}
      />
    </div>
  );
};

export default DNS;
