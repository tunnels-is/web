import { motion } from 'framer-motion';
import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import CTASection from '../components/sections/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';

const DNS = () => {
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  const dnsFeatures = [
    {
      title: "DNS Threat Protection",
      description: "Block malicious domains before they can harm your network with daily updated threat lists from trusted sources.",
      icon: "🛡️"
    },
    {
      title: "Custom DNS Records",
      description: "Register custom A, TXT, and CNAME records for any domain directly in your configuration.",
      icon: "📝"
    },
    {
      title: "DNS Routing",
      description: "Forward specific domains to designated networks, enabling proper resolution across multiple VPN connections.",
      icon: "🔄"
    },
    {
      title: "DNS Analytics",
      description: "Real-time insights into DNS queries with detailed logging and WHOIS information at your fingertips.",
      icon: "📊"
    },
    {
      title: "DNS to DoH",
      description: "Automatically translate standard DNS queries to DNS over HTTPS for enhanced privacy.",
      icon: "🔒"
    },
    {
      title: "Daily Updates",
      description: "Combined blocklists from popular sources, automatically updated every day to stay ahead of threats.",
      icon: "🔄"
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <HeroSimple
        title="Routable DNS"
        subtitle="With Security and Daily Threat List Updates"
        description="Tunnels offers a built-in DNS Server/Proxy which comes with extensive blacklisting features, daily block list updates and the ability to define custom DNS records. Tunnels DNS server also facilitates DNS Routing to ensure proper DNS resolution when connected to multiple networks."
        showWaves={true}
      />

      {/* DNS Features Grid */}
      <ContentSection>
        <FeatureGrid
          features={dnsFeatures}
          columns={3}
          cardStyle="glass"
        />
      </ContentSection>

      {/* DNS Server Side Configuration */}
      <ContentSection background="dark-surface">
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Server DNS Configurations</span>
              </h2>
              <p className="text-base text-dark-text-secondary leading-snug mb-4">
                Tunnels servers can be configured to forward domains, including wildcards, to an
                internal network. This removes the need for specific client side DNS records or
                switching DNS servers when users change networks.
              </p>
              <p className="text-base text-dark-text-secondary leading-snug">
                When a device connects to a Tunnels server, its DNS configurations are automatically
                sent to the device, ensuring seamless connectivity across all your networks.
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
                <span className="text-gradient">Device DNS Configurations</span>
              </h2>
              <p className="text-base text-dark-text-secondary leading-snug mb-4">
                DNS records can be registered directly in the Tunnels application config, completely
                removing the need for external DNS servers.
              </p>
              <p className="text-base text-dark-text-secondary leading-snug">
                This gives you complete control over DNS resolution on your device, with the ability
                to override any domain and point it wherever you need - perfect for development,
                testing, or accessing internal services.
              </p>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="DNS Protection Available For Free"
        description="Get started with Tunnels DNS protection today. No account or payment needed for basic DNS features."
        buttons={[
          { text: "Download Tunnels", href: "/download", primary: true }
        ]}
      />
    </div>
  );
};

export default DNS;
