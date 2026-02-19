import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import FeatureTable from '../components/sections/FeatureTable';
import GradientCallout from '../components/sections/GradientCallout';
import BentoGrid from '../components/sections/BentoGrid';
import { securityContent } from '../content/siteContent';
import { SecurityIllustration } from '../components/illustrations';

const Security = () => {
  const content = securityContent;

  const cryptoTableHeaders = ['Algorithm', 'Type', 'Purpose', 'Post-Quantum'];
  const cryptoTableRows = [
    ['ChaCha20-Poly1305', 'Stream cipher + AEAD', 'Default tunnel encryption', false],
    ['AES-256-GCM', 'Block cipher + AEAD', 'Hardware-accelerated encryption', false],
    ['AES-128-GCM', 'Block cipher + AEAD', 'Resource-constrained environments', false],
    ['X25519 + ML-KEM-1024', 'Hybrid key exchange', 'Session key establishment', true],
    ['BLAKE2b', 'Cryptographic hash', 'Data integrity verification', false],
  ];

  const practicesBentoItems = [
    {
      title: 'Perfect Forward Secrecy',
      description:
        'Session keys are ephemeral and derived fresh for every connection. Compromising one session cannot expose past or future traffic — each handshake produces independent keying material.',
      features: [
        'Ephemeral session keys per connection',
        'No long-lived symmetric secrets',
        'Past sessions remain protected',
      ],
      highlight: 'Ephemeral key generation',
    },
    {
      title: 'Authenticated Encryption',
      description:
        'Every encrypted payload carries an authentication tag. Any modification — even a single flipped bit — is detected and the packet is rejected before it can cause harm.',
    },
    {
      title: 'Secure Key Exchange',
      description:
        'Keys are negotiated using modern elliptic curve and post-quantum primitives, making interception attacks computationally infeasible today and tomorrow.',
    },
    {
      title: 'Memory-Safe Implementation',
      description:
        'Written entirely in Go, a garbage-collected, memory-safe language. Buffer overflows and use-after-free vulnerabilities are eliminated by design.',
    },
  ];

  const securityStats = [
    { value: '256-bit', label: 'Key strength', description: 'Maximum symmetric key size' },
    { value: 'PQ-safe', label: 'Key exchange', description: 'ML-KEM-1024 hybrid handshake' },
    { value: '100%', label: 'Open source', description: 'Every line publicly auditable' },
    { value: 'Zero', label: 'Logging', description: 'No connection data retained' },
  ];

  return (
    <div className="min-h-screen">
      <HeroSimple
        badge={content.hero.badge}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        buttons={content.hero.buttons}
      />

      {/* Security feature overview cards */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.featuresSection.title}
          subtitle={content.featuresSection.subtitle}
        />
        <FeatureGrid
          features={content.securityFeatures}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Security stats strip */}
      <ContentSection>
        <StatsBanner stats={securityStats} variant="card" />
      </ContentSection>

      {/* Security at every layer — one illustrated section kept */}
      <IllustratedSection
        subtitle="Defense in Depth"
        title="Security at Every Layer"
        description="From the protocol level to application design, every component is built with security as the primary concern. No compromises, no shortcuts, and no implicit trust between any two parts of the system."
        features={[
          'Zero-trust network design',
          'Mutual authentication on every connection',
          'Minimal attack surface by default',
          'Regular third-party security audits',
        ]}
        illustration={SecurityIllustration}
        illustrationPosition="right"
        illustrationSize="large"
      />

      {/* Cryptography — FeatureTable */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title={content.cryptographySection.title}
          subtitle={content.cryptographySection.subtitle}
        />
        <div className="max-w-4xl mx-auto">
          <FeatureTable
            headers={cryptoTableHeaders}
            rows={cryptoTableRows}
            caption="All primitives are implemented through Go's standard crypto libraries and audited third-party packages. No custom cryptography."
          />
        </div>
      </ContentSection>

      {/* Security practices — BentoGrid featured layout */}
      <ContentSection>
        <SectionHeader
          title={content.practicesSection.title}
          subtitle={content.practicesSection.subtitle}
        />
        <BentoGrid items={practicesBentoItems} layout="featured" />
      </ContentSection>

      {/* Open source — GradientCallout */}
      <ContentSection background="dark-surface">
        <div className="max-w-4xl mx-auto">
          <GradientCallout
            accent="green"
            title={content.openSourceSection.title}
            description={content.openSourceSection.description}
            features={[
              'Full source code on GitHub under MIT license',
              'No hidden code, no backdoors, no black boxes',
              content.openSourceSection.subDescription,
              'Community security reviews welcome',
            ]}
            button={{
              text: content.openSourceSection.buttonText,
              href: content.openSourceSection.buttonUrl,
              primary: true,
            }}
          />
        </div>
      </ContentSection>

      <CTASection
        title={content.cta.title}
        description={content.cta.description}
        buttons={content.cta.buttons}
      />
    </div>
  );
};

export default Security;
