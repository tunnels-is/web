import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import GradientCallout from '../components/sections/GradientCallout';
import TerminalPreview from '../components/sections/TerminalPreview';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { featuresContent } from '../content/siteContent';
import {
  EncryptionIllustration,
} from '../components/illustrations';

const Features = () => {
  const [ref1, isVisible1] = useScrollAnimation();

  const { hero, basicFeatures, advancedFeatures, cta } = featuresContent;

  const basicFeaturesData = basicFeatures.features;
  const advancedFeaturesData = advancedFeatures.features;

  const performanceStats = [
    { value: '10+ Gbps', label: 'Throughput' },
    { value: '<1ms', label: 'Latency' },
    { value: 'Minimal', label: 'CPU Usage' },
    { value: 'All', label: 'Platforms' },
  ];

  const terminalLines = [
    { type: 'comment', text: 'Connect to your private network' },
    { type: 'command', text: 'tunnels connect --network mycompany' },
    { type: 'success', text: 'Connected to mycompany (3 peers)' },
    { type: 'empty' },
    { type: 'comment', text: 'Check connection status' },
    { type: 'command', text: 'tunnels status' },
    { type: 'info', text: 'Network: mycompany' },
    { type: 'info', text: 'Peers: 3 connected' },
    { type: 'info', text: 'Latency: 0.8ms avg' },
    { type: 'output', text: 'DNS: secure (1.2M domains blocked)' },
  ];

  // Create bento items from first few advanced features
  const bentoItems = advancedFeaturesData.slice(0, 5).map((f, i) => ({
    title: f.title,
    description: f.description || f.content,
    icon: f.icon,
    ...(i === 0 ? {
      features: ['Multi-network simultaneous connections', 'Automatic failover', 'Load balancing'],
      highlight: 'Core Feature'
    } : {})
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Performance Stats */}
      <ContentSection padding="small">
        <StatsBanner stats={performanceStats} />
      </ContentSection>

      {/* Basic Features */}
      <ContentSection background="dark-surface">
        <div ref={ref1}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              title={basicFeatures.title}
              subtitle={basicFeatures.subtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {basicFeaturesData.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.03} />
              ))}
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Illustrated: Encryption */}
      <IllustratedSection
        subtitle="Modern Encryption"
        title="Secure by Design"
        description="Tunnels uses modern cryptographic primitives and a minimal codebase to deliver strong security with exceptional performance."
        features={[
          "End-to-end encrypted tunnels",
          "Lightweight, auditable codebase",
          "Zero-knowledge architecture",
          "Cross-platform support"
        ]}
        illustration={EncryptionIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Terminal: How it works */}
      <ContentSection background="dark-surface">
        <TerminalPreview
          title="Simple, Powerful CLI"
          description="Get connected in seconds with an intuitive command-line interface. No complex configuration files, no manual key exchange — just connect and go."
          features={[
            "Single binary, zero dependencies",
            "Auto-discovery of network peers",
            "Built-in DNS security",
            "Real-time connection monitoring"
          ]}
          lines={terminalLines}
          position="right"
        />
      </ContentSection>

      {/* Advanced Features - Bento Grid */}
      <ContentSection>
        <SectionHeader
          title={advancedFeatures.title}
          subtitle={advancedFeatures.subtitle}
        />
        <BentoGrid items={bentoItems} layout="featured" />

        {/* Remaining features as regular cards */}
        {advancedFeaturesData.length > 5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {advancedFeaturesData.slice(5).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        )}
      </ContentSection>

      {/* Open Source Callout */}
      <ContentSection background="dark-surface">
        <GradientCallout
          title="100% Open Source"
          description="Every line of Tunnels is open for inspection, audit, and contribution. No black boxes, no hidden telemetry. Fork it, self-host it, trust it."
          features={[
            "MIT licensed — free forever",
            "Active community on GitHub",
            "Regular security audits",
            "Self-host or use managed service"
          ]}
          accent="green"
          button={{ text: 'View on GitHub', href: 'https://github.com/tunnels-is', primary: false }}
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          }
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

export default Features;
