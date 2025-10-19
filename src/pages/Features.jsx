import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

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

  const FeatureCard = ({ feature, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-xl font-semibold text-dark-accent-primary mb-3">
        {feature.title}
      </h3>
      <p className="text-dark-text-secondary leading-relaxed">
        {feature.content}
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Features</span>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Tunnels provides a comprehensive suite of networking and security features designed for individuals and enterprises alike.
          </p>
        </motion.div>
      </section>

      {/* Basic Features */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Basic Features</span>
          </h2>
          <p className="text-center text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            Core features available to all users, focusing on privacy, security, and ease of use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} delay={index * 0.05} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Advanced Features */}
      <section ref={ref2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Advanced Features</span>
          </h2>
          <p className="text-center text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            Advanced capabilities for power users and technical professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} delay={index * 0.05} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enterprise Features */}
      <section ref={ref3} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Enterprise Features</span>
          </h2>
          <p className="text-center text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            Enterprise-grade features for organizations requiring scale, support, and security compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} delay={index * 0.05} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Download Tunnels today and experience secure, private networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Download Now
            </motion.a>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Features;
