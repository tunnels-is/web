import { motion } from 'framer-motion';
import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { dnsContent } from '../content/siteContent';

const DNS = () => {
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title={dnsContent.hero.title}
        subtitle={dnsContent.hero.subtitle}
        description={dnsContent.hero.description}
        showNetworkLines={dnsContent.hero.showNetworkLines}
        showScrollIndicator={dnsContent.hero.showScrollIndicator}
        buttons={dnsContent.hero.buttons}
      />

      {/* DNS Features Grid */}
      <ContentSection >
        <div id="features">
          <FeatureGrid
            features={dnsContent.dnsFeatures}
            columns={3}
            cardStyle="simple"
          />
        </div>
      </ContentSection>

      {/* DNS Server Side Configuration */}
      <ContentSection >
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">{dnsContent.serverDNS.title}</span>
              </h2>
              <p className="text-base text-dark-text-secondary leading-snug mb-4">
                {dnsContent.serverDNS.description1}
              </p>
              <p className="text-base text-dark-text-secondary leading-snug">
                {dnsContent.serverDNS.description2}
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl">
              <div className="aspect-video bg-gradient-to-br from-dark-accent-primary/20 to-dark-accent-secondary/20 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* DNS Device Side Configuration */}
      <ContentSection>
        <div ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 glass-effect p-8 rounded-xl">
              <div className="aspect-video bg-gradient-to-br from-dark-accent-tertiary/20 to-dark-accent-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">{dnsContent.deviceDNS.title}</span>
              </h2>
              <p className="text-base text-dark-text-secondary leading-snug mb-4">
                {dnsContent.deviceDNS.description1}
              </p>
              <p className="text-base text-dark-text-secondary leading-snug">
                {dnsContent.deviceDNS.description2}
              </p>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title={dnsContent.cta.title}
        description={dnsContent.cta.description}
        buttons={dnsContent.cta.buttons}
      />
    </div>
  );
};

export default DNS;
