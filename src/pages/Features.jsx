import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/sections/CTASection';
import IllustratedSection from '../components/IllustratedSection';
import StatsBanner from '../components/sections/StatsBanner';
import BentoGrid from '../components/sections/BentoGrid';
import TerminalPreview from '../components/sections/TerminalPreview';
import RelatedPages from '../components/sections/RelatedPages';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { featuresContent } from '../content/siteContent';
import {
  EncryptionIllustration,
} from '../components/illustrations';
import SEO from '../components/SEO';
import { seoData } from '../content/seoData';

const Features = () => {
  const [ref1, isVisible1] = useScrollAnimation();

  const {
    hero, basicFeatures, advancedFeatures, cta,
    performanceStats, terminalPreview, bentoExtraFeatures,
    illustratedSecurity, relatedPages,
  } = featuresContent;

  const basicFeaturesData = basicFeatures.features;
  const advancedFeaturesData = advancedFeatures.features;

  // Create bento items from first few advanced features
  const bentoItems = advancedFeaturesData.slice(0, 5).map((f, i) => ({
    title: f.title,
    description: f.description || f.content,
    icon: f.icon,
    ...(i === 0 ? {
      features: bentoExtraFeatures.features,
      highlight: bentoExtraFeatures.highlight,
    } : {})
  }));

  return (
    <div className="min-h-screen">
      <SEO {...seoData['/features']} />
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
        subtitle={illustratedSecurity.subtitle}
        title={illustratedSecurity.title}
        description={illustratedSecurity.description}
        features={illustratedSecurity.features}
        illustration={EncryptionIllustration}
        illustrationPosition="right"
        illustrationSize="large"
        dark={false}
      />

      {/* Terminal: How it works */}
      <ContentSection background="dark-surface">
        <TerminalPreview
          title={terminalPreview.title}
          description={terminalPreview.description}
          features={terminalPreview.features}
          lines={terminalPreview.lines}
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

      <RelatedPages pages={relatedPages} />

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
