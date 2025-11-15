import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { homeContent } from '../content/siteContent';

const Home = () => {
  const [topicsRef, topicsVisible] = useScrollAnimation();
  const { hero, topicsSection, featuresSection, features, cta } = homeContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        buttons={hero.buttons}
        showNetworkLines={true}
        showScrollIndicator={true}
      />

      {/* Topics Section */}
      <ContentSection>
        <div ref={topicsRef}>
          <SectionHeader
            title={topicsSection.title}
            subtitle={topicsSection.subtitle}
          />

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {topicsSection.topics.map((topic, index) => (
              <motion.a
                key={topic.path}
                href={topic.path}
                target={topic.external ? "_blank" : undefined}
                rel={topic.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={topicsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 glass-effect rounded-lg font-semibold text-dark-text-primary hover:text-dark-accent-primary transition-colors duration-200 border border-dark-accent-primary/30 hover:border-dark-accent-primary/60 hover:shadow-lg hover:shadow-dark-accent-primary/20"
              >
                {topic.label}
              </motion.a>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Features Section */}
      <ContentSection >
        <SectionHeader
          title={featuresSection.title}
          subtitle={featuresSection.subtitle}
        />
        <FeatureGrid
          features={features}
          columns={4}
          cardStyle="elevated"
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

export default Home;
