import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { featuresContent } from '../content/siteContent';
import {
  WireGuardIllustration,
  SpeedIllustration,
} from '../components/illustrations';

const Features = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  const { hero, basicFeatures, advancedFeatures, cta } = featuresContent;

  const basicFeaturesData = basicFeatures.features;
  const advancedFeaturesData = advancedFeatures.features;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
      />

      {/* Basic Features */}
      <ContentSection>
        <div ref={ref1}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title={basicFeatures.title}
              subtitle={basicFeatures.subtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {basicFeaturesData.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Illustrated: WireGuard Foundation */}
      <IllustratedSection
        subtitle="Modern Protocol"
        title="Built on WireGuard"
        description="tunnels leverages WireGuard's modern cryptography and minimal codebase. This gives you state-of-the-art security with exceptional performance."
        features={[
          "ChaCha20 encryption",
          "Only ~4,000 lines of code",
          "Formally verified cryptography",
          "Built into Linux kernel"
        ]}
        illustration={WireGuardIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Illustrated: Performance */}
      <IllustratedSection
        subtitle="Blazing Fast"
        title="Performance First"
        description="Experience near-native network performance. WireGuard's efficient design means minimal CPU overhead and maximum throughput on any hardware."
        features={[
          "10+ Gbps throughput",
          "Sub-millisecond latency",
          "Low CPU utilization",
          "Mobile battery friendly"
        ]}
        illustration={SpeedIllustration}
        illustrationPosition="left"
        illustrationSize="large"
      />

      {/* Advanced & Enterprise Features */}
      <ContentSection >
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title={advancedFeatures.title}
              subtitle={advancedFeatures.subtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeaturesData.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
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
