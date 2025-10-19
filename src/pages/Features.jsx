import HeroSimple from '../components/sections/HeroSimple';
import ContentSection from '../components/sections/ContentSection';
import SectionHeader from '../components/ui/SectionHeader';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/sections/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Features = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  const basicFeatures = [
    {
      title: "No Logging",
      content: "User actions are not logged in our public VPN network",
    },
    {
      title: "No Tracking",
      content: "User actions are not tracked in any way in our public network",
    },
    {
      title: "No Persistence",
      content: "Everything is kept exactly where you placed tunnels, no hidden files or background services",
    },
    {
      title: "Portable",
      content: "Just download Tunnels and place it wherever you like, even on a USB. No installation required",
    },
    {
      title: "Anonymity",
      content: "Accounts can be created using usernames or UUIDs",
    },
    {
      title: "Account Top-Ups",
      content: "Tunnels offers anonymous license keys which can be used to top-up your account",
    },
    {
      title: "Custom DNS",
      content: "Register custom A, TXT and CNAME records for any domain",
    },
    {
      title: "DNS to DoH",
      content: "Our in-built DNS server can translate your normal DNS to DNS over HTTPS",
    },
    {
      title: "WHOIS With A Click",
      content: "Get WHOIS information for any resolved domain with the click of a button",
    },
    {
      title: "Custom Block Lists",
      content: "Use your own block lists to block domains",
    },
    {
      title: "DNS Leak Prevention",
      content: "Use our built-in DNS proxy to completely prevent DNS leaks, even without a Tunnels account",
    },
    {
      title: "IPv6 Blocking",
      content: "Tunnels can be configured to deny connections if IPv6 is enabled",
    },
    {
      title: "DNS Analytics",
      content: "Get real time DNS analytics",
    },
    {
      title: "DNS Protection",
      content: "Tunnels has a built in DNS blocking mechanisms, available for free",
    },
    {
      title: "Daily Updates",
      content: "Tunnels creates combined DNS blocklists from popular sources, everyday",
    },
  ];

  const advancedFeatures = [
    {
      title: "Source Available",
      content: "Our server and client implementations are source available on GitHub",
    },
    {
      title: "Tunnels on OpenWRT",
      content: "Our NAT protocol was designed to work on unix based router software",
    },
    {
      title: "Modern Language",
      content: "Tunnels is built from the ground up using Golang, a multi-threaded modern programming language",
    },
    {
      title: "Kill Switch",
      content: "Prevent IP leaks during accidental disconnects",
    },
    {
      title: "User Management",
      content: "Manage users, groups and devices in the application UI",
    },
    {
      title: "Invite Friends",
      content: "Invite friends to join your tunnels server with simple user/password registration",
    },
  ];

  const enterpriseFeatures = [
    {
      title: "Custom Integrations",
      content: "We are always open to creating custom integration when the need arises",
    },
    {
      title: "User Management",
      content: "Group based user management is built into the platform",
    },
    {
      title: "24/7 Support",
      content: "Enterprise clients receive 24/7 support via all of our support platforms",
    },
    {
      title: "On Premise",
      content: "Tunnels supports full on-premise deployments which are essential for passing security audits",
    },
    {
      title: "Scales With Growth",
      content: "100 users or 1,000,000 users, it makes no difference, our platform was designed to fit even the largest companies",
    },
    {
      title: "No Hardware",
      content: "No need to buy expensive hardware, our platform runs on whatever you have available, as long as it runs Linux",
    },
    {
      title: "No Vendor Lock",
      content: "Our platform can be deployed on any network without extensive configurations. This means you will not be vendor locked",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <HeroSimple
        title="Features"
        description="Tunnels provides a comprehensive suite of networking and security features designed for individuals and enterprises alike."
        showWaves={true}
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
              title="Basic Features"
              subtitle="Core features available to all users, focusing on privacy, security, and ease of use."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {basicFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Advanced Features */}
      <ContentSection background="dark-surface">
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Advanced Features"
              subtitle="Advanced capabilities for power users and technical professionals."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Enterprise Features */}
      <ContentSection>
        <div ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Enterprise Features"
              subtitle="Enterprise-grade features for organizations requiring scale, support, and security compliance."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to get started?"
        description="Download Tunnels today and experience secure, private networking."
        buttons={[
          { text: "Download Now", href: "/download", primary: true },
          { text: "View Pricing", href: "/pricing", primary: false }
        ]}
      />
    </div>
  );
};

export default Features;
