import HeroSimple from '../components/sections/HeroSimple';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { LockShieldIcon, ShieldCheckIcon, KeyIcon, CodeIcon, ServerIcon, EyeShieldIcon } from '../components/ui/Icons';

const Security = () => {
  const [cryptoRef, cryptoVisible] = useScrollAnimation();

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All traffic is encrypted from device to destination. Even we cannot see your data in transit.",
      icon: <LockShieldIcon />,
      color: "primary"
    },
    {
      title: "Modern Cryptography",
      description: "Uses ChaCha20-Poly1305 and AES-256-GCM encryption with Curve25519 key exchange.",
      icon: <KeyIcon />,
      color: "secondary"
    },
    {
      title: "Zero Trust Architecture",
      description: "Every connection is authenticated. No implicit trust between any components.",
      icon: <ShieldCheckIcon />,
      color: "tertiary"
    },
    {
      title: "Open Source",
      description: "All code is publicly auditable. Security through transparency, not obscurity.",
      icon: <CodeIcon />,
      color: "primary"
    },
    {
      title: "Self-Hosted",
      description: "Run your own servers. Your data never touches infrastructure you don't control.",
      icon: <ServerIcon />,
      color: "secondary"
    },
    {
      title: "No Logging",
      description: "Tunnels doesn't log connection data. Since you control the server, you control what's logged.",
      icon: <EyeShieldIcon />,
      color: "tertiary"
    }
  ];

  const encryptionTypes = [
    { name: "ChaCha20-Poly1305", description: "High-speed stream cipher with authentication" },
    { name: "AES-256-GCM", description: "Industry standard block cipher with authentication" },
    { name: "Curve25519", description: "Elliptic curve Diffie-Hellman key exchange" },
    { name: "BLAKE2b", description: "Fast cryptographic hash function" }
  ];

  const practices = [
    {
      title: "Perfect Forward Secrecy",
      description: "Session keys are ephemeral. Compromising one session doesn't compromise past or future sessions."
    },
    {
      title: "Authenticated Encryption",
      description: "All encrypted data includes authentication tags to prevent tampering and replay attacks."
    },
    {
      title: "Secure Key Exchange",
      description: "Keys are exchanged using modern elliptic curve cryptography resistant to known attacks."
    },
    {
      title: "Memory Safety",
      description: "Built with Go, a memory-safe language that prevents buffer overflow vulnerabilities."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSimple
        badge="Security First"
        title="Built for Security"
        subtitle="Modern Encryption, Zero Trust"
        description="Tunnels is designed from the ground up with security as the primary concern. Open source, auditable, and using only proven cryptographic primitives."
        buttons={[
          { text: "View Source", href: "https://github.com/tunnels-is", primary: true },
          { text: "Security Docs", href: "https://docs.tunnels.is/docs", teal: true }
        ]}
        showGeometricShapes={true}
      />

      {/* Security Features */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Security Features"
          subtitle="Defense in depth at every layer"
        />
        <FeatureGrid
          features={securityFeatures}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Cryptography Section */}
      <ContentSection>
        <div ref={cryptoRef}>
          <SectionHeader
            title="Cryptographic Primitives"
            subtitle="Industry-standard, battle-tested cryptography"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cryptoVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {encryptionTypes.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={cryptoVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-surface p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-dark-accent-primary mb-2">{crypto.name}</h3>
                <p className="text-dark-text-secondary">{crypto.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* Security Practices */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Security Practices"
          subtitle="How we keep your data safe"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {practices.map((practice, index) => (
            <div key={index} className="bg-dark-elevated p-6 rounded-xl border-l-4 border-dark-accent-primary">
              <h3 className="text-lg font-semibold text-white mb-2">{practice.title}</h3>
              <p className="text-dark-text-secondary">{practice.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Open Source Section */}
      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Source Security</h2>
          <p className="text-xl text-dark-text-secondary mb-8">
            We believe security should be verifiable. Our entire codebase is open source,
            allowing security researchers and the community to audit our implementation.
          </p>
          <p className="text-dark-text-muted mb-8">
            No hidden code, no secret backdoors, no trust required. Verify everything yourself.
          </p>
          <a
            href="https://github.com/tunnels-is"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Security Without Compromise"
        description="Experience enterprise-grade security that you can verify yourself."
        buttons={[
          { text: "Download Free", href: "/download", primary: true },
          { text: "Read Security Docs", href: "https://docs.tunnels.is/docs" }
        ]}
      />
    </div>
  );
};

export default Security;
