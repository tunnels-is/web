import HeroWithGradients from '../components/sections/HeroWithGradients';
import FeatureGrid from '../components/sections/FeatureGrid';
import FeatureTimeline from '../components/sections/FeatureTimeline';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/sections/CTASection';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { LightbulbIcon } from '../components/ui/Icons';
import { homelabContent } from '../content/siteContent';

const Homelab = () => {
  const [ref4, isVisible4] = useScrollAnimation();

  // Destructure content from centralized content file
  const {
    benefits,
    setupSteps,
    useCases,
    dnsFeatures,
    technicalHighlights,
    hardwareOptions,
    ctaCards
  } = homelabContent;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroWithGradients
        badge="Perfect for Self-Hosters"
        title="Homelab VPN"
        subtitle="Self-Hosted VPN for Your Home Network"
        description="Deploy a single server and securely access your homelab from anywhere. Built-in DNS management, ad blocking, and zero-configuration setup."
        buttons={[
          { text: "Download Free", href: "/download", primary: true },
          { text: "View Documentation", href: "/technical", primary: false }
        ]}
        quickStats={[
          { label: "Setup Time", value: "5 min" },
          { label: "Cost", value: "$0" },
          { label: "Complexity", value: "Low" }
        ]}
      />

      {/* Benefits Section */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Choose Tunnels for Your Homelab"
          subtitle="Everything you need to securely access and manage your home network from anywhere"
        />
        <FeatureGrid
          features={benefits}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Setup Steps */}
      <ContentSection>
        <SectionHeader
          title="Quick Setup Guide"
          subtitle="Get your homelab VPN running in four simple steps"
        />
        <div className="max-w-6xl mx-auto">
          <FeatureTimeline steps={setupSteps} />
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Perfect For Your Setup"
          subtitle="Whatever you're running in your homelab, Tunnels makes it accessible"
        />
        <FeatureGrid
          features={useCases}
          columns={3}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* DNS Features */}
      <ContentSection>
        <SectionHeader
          title="Powerful DNS Management"
          subtitle="Built-in DNS server with custom records, blocking, and advanced routing"
        />
        <FeatureGrid
          features={dnsFeatures}
          columns={2}
          cardStyle="glass"
        />

        {/* DNS Info Box */}
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-dark-accent-primary/10 via-dark-accent-secondary/10 to-dark-accent-tertiary/10 p-8 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-20 h-20">
              <LightbulbIcon />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-dark-accent-primary mb-2 leading-tight">
                Network-Wide Protection
              </h4>
              <p className="text-dark-text-secondary leading-snug">
                All devices connected through your Tunnels homelab server automatically benefit from
                DNS blocking and custom DNS records - no per-device configuration needed. Your phone,
                laptop, and tablet all get ad-blocking anywhere in the world.
              </p>
            </div>
          </div>
        </motion.div>
      </ContentSection>

      {/* Technical Highlights */}
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Technical Highlights"
          subtitle="Modern technology stack designed for simplicity and security"
        />
        <FeatureGrid
          features={technicalHighlights}
          columns={4}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* Hardware Requirements */}
      <ContentSection>
        <SectionHeader
          title="Hardware Requirements"
          subtitle="Run on almost any hardware you have available"
        />
        <FeatureGrid
          features={hardwareOptions}
          columns={3}
          cardStyle="glass"
        />
        <div className="mt-12 text-center bg-dark-surface p-6 rounded-xl">
          <p className="text-dark-text-secondary text-lg">
            <span className="text-dark-accent-primary font-semibold">Pro Tip:</span>
            {" "}Start with what you have - Tunnels is incredibly lightweight and runs efficiently on minimal hardware.
          </p>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        title="Get Started Today"
        description="Join thousands of homelabbers using Tunnels for secure remote access"
        layout="split"
        cards={ctaCards}
      />
    </div>
  );
};

export default Homelab;
