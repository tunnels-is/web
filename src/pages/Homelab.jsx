import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Homelab = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();
  const [ref6, isVisible6] = useScrollAnimation();
  const [ref7, isVisible7] = useScrollAnimation();

  const benefits = [
    {
      title: "Self-Hosted Privacy",
      description: "Your network, your data, your rules. No third-party services or privacy concerns.",
      icon: "🔒",
      color: "primary"
    },
    {
      title: "Remote Access",
      description: "Securely access your homelab from anywhere in the world with VPN connectivity.",
      icon: "🌐",
      color: "secondary"
    },
    {
      title: "DNS Security & Blocking",
      description: "Built-in DNS blocking for ads, trackers, and malware protection for your entire home.",
      icon: "🛡️",
      color: "tertiary"
    },
    {
      title: "Simple Installation",
      description: "Single server setup with no complex configuration. Get running in minutes.",
      icon: "⚡",
      color: "primary"
    },
    {
      title: "Multi-Device Support",
      description: "Connect phones, laptops, tablets - all your devices with a single server.",
      icon: "📱",
      color: "secondary"
    },
    {
      title: "Cost Effective",
      description: "Run on existing hardware - Raspberry Pi, old PC, or VM. No expensive infrastructure needed.",
      icon: "💰",
      color: "tertiary"
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Install the Server",
      description: "Deploy Tunnels server on your homelab machine - supports any Linux system.",
      command: "wget https://tunnels.is/install.sh && sudo bash install.sh",
      details: "Works on Raspberry Pi, Ubuntu, Debian, or any Linux distribution"
    },
    {
      step: "2",
      title: "Configure Server Settings",
      description: "Set up basic configuration for authentication and VPN access.",
      command: "Edit /etc/tunnels/config.yaml",
      details: "Configure APIIP, APIPort, and network settings"
    },
    {
      step: "3",
      title: "Install the Client",
      description: "Download and install the Tunnels client on your devices.",
      command: "Download from tunnels.is/download",
      details: "Available for Windows, macOS, Linux, iOS, and Android"
    },
    {
      step: "4",
      title: "Connect & Configure",
      description: "Add your server to the client and connect to your homelab network.",
      command: "Click + to add server, enter your APIIP and APIPort",
      details: "Default credentials: admin/admin (change immediately!)"
    }
  ];

  const useCases = [
    {
      title: "Media Server Access",
      description: "Stream your Plex, Jellyfin, or Emby content from anywhere without exposing ports to the internet.",
      icon: "🎬"
    },
    {
      title: "Home Automation",
      description: "Securely access Home Assistant, openHAB, or other smart home systems remotely.",
      icon: "🏠"
    },
    {
      title: "NAS & File Access",
      description: "Connect to your Synology, TrueNAS, or file server without complex VPN configurations.",
      icon: "💾"
    },
    {
      title: "Development Environment",
      description: "Access your local dev servers, databases, and tools from anywhere you work.",
      icon: "⚙️"
    },
    {
      title: "Network-Wide Ad Blocking",
      description: "Deploy DNS-level ad and tracker blocking for all devices on your network.",
      icon: "🚫"
    },
    {
      title: "Game Servers",
      description: "Host Minecraft, Valheim, or other game servers accessible to friends anywhere.",
      icon: "🎮"
    }
  ];

  const dnsFeatures = [
    {
      title: "Custom DNS Records",
      description: "Define internal DNS records for your homelab services with easy-to-remember names.",
      example: "plex.home → 192.168.1.100"
    },
    {
      title: "DNS Blocking Lists",
      description: "Automatic daily updates of malware, ad, and tracker domains to protect your network.",
      example: "Block 1M+ known malicious domains"
    },
    {
      title: "Split DNS",
      description: "Route specific domains through your homelab DNS while using public DNS for everything else.",
      example: "*.local domains to homelab, rest to 1.1.1.1"
    },
    {
      title: "DNS Over VPN",
      description: "All connected clients automatically use your homelab DNS with security and blocking.",
      example: "Mobile devices get ad-blocking anywhere"
    }
  ];

  const technicalHighlights = [
    {
      title: "Zero Configuration NAT Traversal",
      description: "No need to configure port forwarding on your router",
      icon: "🔄"
    },
    {
      title: "WireGuard Protocol",
      description: "Modern, fast, and secure VPN protocol under the hood",
      icon: "⚡"
    },
    {
      title: "IPv4 & IPv6 Support",
      description: "Full dual-stack support for modern networks",
      icon: "🌐"
    },
    {
      title: "Automatic Certificate Management",
      description: "Let's Encrypt integration for secure HTTPS connections",
      icon: "🔐"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Gradient Background Style */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-dark-accent-primary/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-dark-accent-tertiary/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-dark-accent-secondary/15 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-dark-accent-primary/20 rounded-full text-dark-accent-primary font-semibold text-sm">
                Perfect for Self-Hosters
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Homelab VPN</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-dark-text-secondary mb-8">
              Self-Hosted VPN for Your Home Network
            </h2>
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Deploy a single server and securely access your homelab from anywhere.
              Built-in DNS management, ad blocking, and zero-configuration setup.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Download Free
            </motion.a>
            <motion.a
              href="/technical"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-all"
            >
              View Documentation
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {[
              { label: "Setup Time", value: "5 min" },
              { label: "Cost", value: "$0" },
              { label: "Complexity", value: "Low" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-dark-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Card Grid Style */}
      <section ref={ref1} className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Why Choose Tunnels for Your Homelab</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Everything you need to securely access and manage your home network from anywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-dark-elevated p-8 rounded-xl hover:bg-dark-bg transition-all hover:shadow-xl hover:shadow-dark-accent-${benefit.color}/20`}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className={`text-2xl font-semibold mb-4 text-dark-accent-${benefit.color}`}>
                  {benefit.title}
                </h3>
                <p className="text-dark-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps Section - Timeline Style */}
      <section ref={ref2} className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Quick Setup Guide</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Get your homelab VPN running in four simple steps
            </p>
          </motion.div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 glass-effect p-6 rounded-xl hover:bg-dark-elevated transition-all">
                    <h3 className="text-2xl font-semibold text-dark-accent-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-dark-text-secondary mb-4">
                      {step.description}
                    </p>
                    <div className="bg-dark-bg p-4 rounded-lg">
                      <code className="text-dark-accent-tertiary font-mono text-sm block mb-2">
                        {step.command}
                      </code>
                      <p className="text-dark-text-muted text-sm">{step.details}</p>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < setupSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-dark-accent-primary to-dark-accent-secondary"
                       style={{ height: '2rem' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - Icon Grid Style */}
      <section ref={ref3} className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Perfect For Your Setup</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Whatever you're running in your homelab, Tunnels makes it accessible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible3 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-elevated p-6 rounded-xl hover:bg-dark-bg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-text-primary mb-3 group-hover:text-dark-accent-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-dark-text-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DNS Features Section - Split Layout Style */}
      <section ref={ref4} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Powerful DNS Management</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Built-in DNS server with custom records, blocking, and advanced routing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dnsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl hover:bg-dark-elevated transition-all"
              >
                <h3 className="text-2xl font-semibold text-dark-accent-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-dark-text-secondary mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-dark-bg p-4 rounded-lg">
                  <p className="text-dark-accent-tertiary font-mono text-sm">
                    {feature.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DNS Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-dark-accent-primary/10 via-dark-accent-secondary/10 to-dark-accent-tertiary/10 p-8 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h4 className="text-xl font-semibold text-dark-accent-primary mb-2">
                  Network-Wide Protection
                </h4>
                <p className="text-dark-text-secondary leading-relaxed">
                  All devices connected through your Tunnels homelab server automatically benefit from
                  DNS blocking and custom DNS records - no per-device configuration needed. Your phone,
                  laptop, and tablet all get ad-blocking anywhere in the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Highlights Section - Feature Pills Style */}
      <section ref={ref5} className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Technical Highlights</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Modern technology stack designed for simplicity and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-dark-elevated p-6 rounded-xl text-center hover:bg-dark-bg hover:shadow-xl hover:shadow-dark-accent-primary/20 transition-all"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-dark-accent-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-dark-text-secondary text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Requirements Section - Info Cards Style */}
      <section ref={ref6} className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Hardware Requirements</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Run on almost any hardware you have available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Raspberry Pi",
                description: "Perfect for basic homelab VPN",
                specs: ["Pi 3B+ or newer", "1GB RAM minimum", "MicroSD or SSD", "Ethernet recommended"],
                users: "1-10 users"
              },
              {
                title: "Old PC / Thin Client",
                description: "Great for growing homelabs",
                specs: ["Any CPU from 2010+", "2GB RAM minimum", "10GB disk space", "Network interface"],
                users: "10-50 users"
              },
              {
                title: "VM / Container",
                description: "Integrate with existing infrastructure",
                specs: ["1-2 vCPU", "2GB RAM", "10GB disk", "Supported on any hypervisor"],
                users: "50+ users"
              }
            ].map((hardware, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-8 rounded-xl hover:bg-dark-elevated transition-all"
              >
                <h3 className="text-2xl font-semibold text-dark-accent-primary mb-3">
                  {hardware.title}
                </h3>
                <p className="text-dark-text-secondary mb-4">
                  {hardware.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {hardware.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-dark-text-secondary text-sm">
                      <span className="text-dark-accent-tertiary mr-2">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <span className="text-dark-text-muted text-sm">Typical capacity:</span>
                  <p className="text-dark-accent-secondary font-semibold">{hardware.users}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center bg-dark-surface p-6 rounded-xl"
          >
            <p className="text-dark-text-secondary text-lg">
              <span className="text-dark-accent-primary font-semibold">Pro Tip:</span>
              {" "}Start with what you have - Tunnels is incredibly lightweight and runs efficiently on minimal hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Split Action Style */}
      <section ref={ref7} className="py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Get Started Today</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8">
              Join thousands of homelabbers using Tunnels for secure remote access
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="glass-effect p-8 rounded-xl hover:bg-dark-elevated transition-all">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                Download & Install
              </h3>
              <p className="text-dark-text-secondary mb-6 leading-relaxed">
                Get the Tunnels server and client applications. Free for 24 hours trial,
                then affordable pricing for continued use.
              </p>
              <ul className="space-y-2 text-dark-text-secondary mb-6 text-sm">
                <li>✓ Server for Linux (all distributions)</li>
                <li>✓ Clients for Windows, macOS, Linux, iOS, Android</li>
                <li>✓ Installation guides and documentation</li>
                <li>✓ Community support</li>
              </ul>
              <motion.a
                href="/download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full px-6 py-4 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white text-center font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Download Free
              </motion.a>
            </div>

            <div className="glass-effect p-8 rounded-xl hover:bg-dark-elevated transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-dark-accent-secondary mb-4">
                Read Documentation
              </h3>
              <p className="text-dark-text-secondary mb-6 leading-relaxed">
                Comprehensive guides covering every aspect of setting up and managing
                your homelab VPN server.
              </p>
              <ul className="space-y-2 text-dark-text-secondary mb-6 text-sm">
                <li>✓ Single server setup guide</li>
                <li>✓ DNS configuration and blocking</li>
                <li>✓ Linux system configuration</li>
                <li>✓ Client setup and troubleshooting</li>
              </ul>
              <motion.a
                href="/technical"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full px-6 py-4 glass-effect text-dark-text-primary text-center font-semibold rounded-lg hover:bg-dark-bg transition-all"
              >
                View Documentation
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-dark-surface p-8 rounded-xl"
          >
            <p className="text-dark-text-muted mb-2">
              Questions? Check out the documentation or join our community
            </p>
            <div className="flex justify-center gap-4 text-dark-accent-primary">
              <a href="/technical" className="hover:underline">Docs</a>
              <span className="text-dark-text-muted">•</span>
              <a href="mailto:support@tunnels.is" className="hover:underline">Support</a>
              <span className="text-dark-text-muted">•</span>
              <a href="/pricing" className="hover:underline">Pricing</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homelab;
