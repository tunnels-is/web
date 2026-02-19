import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import TerminalPreview from '../components/sections/TerminalPreview';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { featuresContent } from '../content/siteContent';
import {
  EncryptionIllustration,
} from '../components/illustrations';

const MITBadge = () => (
  <div className="text-center">
    <div className="text-5xl md:text-7xl font-bold text-dark-accent-green leading-none tracking-tight">MIT</div>
    <div className="text-sm text-dark-text-secondary mt-3 font-medium">Licensed</div>
  </div>
);

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

      {/* Open Source */}
      <IllustratedSection
        subtitle="Open Source"
        title="100% Open Source"
        description="Every line of Tunnels is open for inspection, audit, and contribution. No black boxes, no hidden telemetry. Fork it, self-host it, trust it."
        features={[
          "MIT licensed — free forever",
          "Active community on GitHub",
          "Regular security audits",
          "Self-host or use managed service"
        ]}
        illustration={MITBadge}
        illustrationPosition="left"
        illustrationSize="small"
        dark={true}
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

export default Features;
