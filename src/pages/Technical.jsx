import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import TerminalPreview from '../components/sections/TerminalPreview';
import FeatureTable from '../components/sections/FeatureTable';
import GradientCallout from '../components/sections/GradientCallout';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import { technicalContent } from '../content/siteContent';
import {
  EncryptionIllustration,
  GlobalNetworkIllustration,
} from '../components/illustrations';

const Technical = () => {
  const { hero, sections, cta } = technicalContent;

  const performanceStats = [
    { value: 'WireGuard', label: 'Protocol Base', description: 'Modern, minimal kernel-level VPN protocol' },
    { value: '3', label: 'Cipher Suites', description: 'AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305' },
    { value: 'Post-Quantum', label: 'Key Exchange', description: 'X25519 + ML-KEM-1024 hybrid support' },
    { value: 'Any→Any', label: 'IP Routing', description: 'Fully abstracted from underlying networks' },
  ];

  const encryptionTableHeaders = ['Algorithm', 'Type', 'Key Size', 'Use Case'];
  const encryptionTableRows = [
    ['AES-128-GCM', 'AEAD Cipher', '128-bit', 'High-throughput environments'],
    ['AES-256-GCM', 'AEAD Cipher', '256-bit', 'Maximum security workloads'],
    ['ChaCha20-Poly1305', 'AEAD Cipher', '256-bit', 'Mobile and low-power devices'],
    ['X25519 + ML-KEM-1024', 'Hybrid Handshake', '255-bit + post-quantum', 'Future-proof key exchange'],
    ['Elliptic Curve P521', 'ECDH Handshake', '521-bit', 'FIPS-compatible deployments'],
  ];

  const terminalLines = [
    { type: 'comment', text: 'Connect to a VPN server and apply split routes' },
    { type: 'command', text: 'tunnels connect --server us-east-1.example.com' },
    { type: 'success', text: 'Connected. Handshake complete (X25519 + ML-KEM-1024)' },
    { type: 'empty' },
    { type: 'comment', text: 'Add a custom route for a specific subnet' },
    { type: 'command', text: 'tunnels route add 192.168.10.0/24 --via vpn0' },
    { type: 'success', text: 'Route 192.168.10.0/24 → vpn0 added' },
    { type: 'empty' },
    { type: 'comment', text: 'List active tunnels and their status' },
    { type: 'command', text: 'tunnels list' },
    { type: 'output', text: 'vpn0   us-east-1   ↑ 12.4 MB  ↓ 38.1 MB   active' },
    { type: 'output', text: 'lan0   office-net  ↑  2.1 MB  ↓  9.8 MB   active' },
    { type: 'empty' },
    { type: 'comment', text: 'Apply a NAT translation rule' },
    { type: 'command', text: 'tunnels nat add --src 10.0.0.5 --dst 172.16.0.5' },
    { type: 'success', text: 'NAT rule created: 10.0.0.5 → 172.16.0.5' },
  ];

  const lanBentoItems = [
    {
      title: 'Isolated LAN Networks',
      description: 'Create virtual LAN segments that span the internet. Each LAN lives on a single server and is fully isolated from other networks — perfect for IoT devices, file servers, databases, and services requiring strict access controls.',
      features: [
        'Full Layer 2 emulation',
        'Broadcast domain support',
        'VLAN-like traffic isolation',
        'No cross-network IP conflicts',
      ],
      highlight: 'Ideal for IoT and internal services',
    },
    {
      title: 'Advanced Routing',
      description: 'Define custom routes server-side or directly in the device config. Routes are abstracted from the underlying network — any IP can be forwarded to any VPN or LAN.',
    },
    {
      title: 'Split Tunneling',
      description: 'Route only specific subnets through Tunnels while leaving other traffic on the default path. Apply different rules per interface or per connection.',
    },
    {
      title: 'Dynamic Route Application',
      description: 'Routes can be pushed from the server automatically when a device connects, removing the need for per-device manual configuration.',
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        description={hero.description}
      />

      {/* Performance Stats */}
      <ContentSection background="dark-surface" padding="normal">
        <StatsBanner
          stats={performanceStats}
          variant="card"
        />
      </ContentSection>

      {/* Public Routable VPN — IllustratedSection 1 of 2 */}
      <IllustratedSection
        subtitle="Public Routable VPN"
        title={sections[0].title}
        description={sections[0].description}
        features={[
          'Direct public IP routing',
          'No NAT traversal needed',
          'Global server deployment',
          'Automatic failover support',
          'Split route tunneling across multiple servers',
        ]}
        illustration={GlobalNetworkIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Encryption & Security — FeatureTable */}
      <ContentSection background="dark-surface" padding="normal">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-dark-accent-primary" />
              Encryption and Security
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {sections[1].title}
            </h2>
            <p className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl">
              {sections[1].description}
            </p>
          </div>
          <FeatureTable
            headers={encryptionTableHeaders}
            rows={encryptionTableRows}
            caption={sections[1].details}
          />
        </div>
      </ContentSection>

      {/* Terminal Preview — Routing and Tunnel Commands */}
      <ContentSection background="transparent" padding="normal">
        <TerminalPreview
          title="Simple, Powerful CLI"
          description="Connect to servers, define routes, manage LAN networks, and apply NAT rules — all from a single unified interface. Server-side configurations are pushed to devices automatically on connect."
          features={[
            'Connect to multiple VPN servers simultaneously',
            'Add and remove routes at runtime',
            'Apply NAT translations between any IPs',
            'Inspect live tunnel throughput per interface',
          ]}
          lines={terminalLines}
          position="right"
        />
      </ContentSection>

      {/* LAN Networks — BentoGrid */}
      <ContentSection background="dark-surface" padding="normal">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-dark-accent-primary" />
            LAN Networks
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            {sections[2].title}
          </h2>
          <p className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl">
            {sections[2].description}
          </p>
        </div>
        <BentoGrid
          items={lanBentoItems}
          layout="featured"
        />
      </ContentSection>

      {/* Encryption — IllustratedSection 2 of 2 */}
      <IllustratedSection
        subtitle="Military-Grade Security"
        title="End-to-End Encryption"
        description="All traffic is encrypted using modern cryptographic primitives. ChaCha20-Poly1305 provides authenticated encryption with excellent performance on all platforms, including mobile and embedded devices."
        features={[
          'ChaCha20-Poly1305 AEAD',
          'Curve25519 key exchange',
          'BLAKE2s for hashing',
          'Perfect forward secrecy',
          'Post-quantum hybrid option',
        ]}
        illustration={EncryptionIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Abstract NAT — GradientCallout */}
      <ContentSection background="dark-surface" padding="normal">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-dark-accent-primary" />
            Advanced Routing
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            {sections[3].title}
          </h2>
          <p className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl mb-8">
            {sections[3].description}
          </p>
        </div>
        <GradientCallout
          title={sections[4].title}
          description={sections[4].description}
          accent="teal"
          variant="default"
          features={[
            'Translate any IP to any other IP',
            'Fully abstracted from underlying networks',
            'Works across VPN and LAN simultaneously',
            'Resolves IP conflicts in large environments',
            'Server-side or device-side configuration',
            'No kernel-level changes required',
          ]}
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        description={cta.description}
        buttons={cta.buttons}
      />
    </div>
  );
};

export default Technical;
