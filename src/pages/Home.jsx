import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const [topicsRef, topicsVisible] = useScrollAnimation();

  const features = [
    {
      title: 'VPN & LAN',
      description: 'Connect to multiple networks simultaneously with advanced routing',
      icon: '🌐',
    },
    {
      title: 'DNS Security',
      description: 'Built-in DNS protection with daily threat list updates',
      icon: '🛡️',
    },
    {
      title: 'No Installation',
      description: 'Portable executable with no system changes required',
      icon: '📦',
    },
    {
      title: 'Enterprise Ready',
      description: 'Scales from individuals to millions of users',
      icon: '🏢',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSimple
        title="Tunnels"
        subtitle="VPN, LAN, NAT, Routing, DNS blocking, DNS routing and more!"
        description="A modern networking solution that connects you to multiple networks at once, with built-in security and privacy features"
        buttons={[
          { text: "Download Now", href: "/download", primary: true },
          { text: "Explore Features", href: "/features", primary: false }
        ]}
        showNetworkLines={true}
        showScrollIndicator={true}
      />

      {/* Topics Section */}
      <ContentSection>
        <div ref={topicsRef}>
          <SectionHeader
            title="Explore Use Cases"
            subtitle="Discover how Tunnels can solve your networking challenges across different environments"
          />

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {[
              { label: 'Free & Open Source', path: '/free-and-opensource' },
              { label: 'Security', path: '/security' },
              { label: 'Public VPN', path: '/public' },
              { label: 'Homelab', path: '/homelab' },
              { label: 'Cloud & Baremetal', path: '/cloud' },
              { label: 'IoT Networks', path: '/iot' },
              { label: 'Office Networks', path: '/office' },
              { label: 'LAN over WAN', path: '/lan-over-wan' },
              { label: 'Personal VPN', path: '/personal-vpn' },
              { label: 'DNS Security', path: '/dns' },
            ].map((topic, index) => (
              <motion.a
                key={topic.path}
                href={topic.path}
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
      <ContentSection background="dark-surface">
        <SectionHeader
          title="Why Choose Tunnels"
          subtitle="Advanced networking made simple, secure, and scalable"
        />
        <FeatureGrid
          features={features}
          columns={4}
          cardStyle="elevated"
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Try Tunnels free for 24 hours. No credit card required."
        buttons={[
          { text: "Download Free", href: "/download", primary: true },
          { text: "View Pricing", href: "/pricing", primary: false }
        ]}
      />
    </div>
  );
};

export default Home;
