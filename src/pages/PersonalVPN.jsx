import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PersonalVPN = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();
  const [ref6, isVisible6] = useScrollAnimation();
  const [ref7, isVisible7] = useScrollAnimation();
  const [ref8, isVisible8] = useScrollAnimation();
  const [ref9, isVisible9] = useScrollAnimation();

  const benefits = [
    {
      title: "Complete Privacy",
      description: "Your VPN server, your rules. No third parties, no logging policies to trust - just code you control.",
      icon: "🔐",
      gradient: "from-dark-accent-primary to-dark-accent-secondary"
    },
    {
      title: "Own Your Data",
      description: "All traffic flows through infrastructure you own. No metadata collection, no analytics, no tracking.",
      icon: "🛡️",
      gradient: "from-dark-accent-secondary to-dark-accent-tertiary"
    },
    {
      title: "Cost Effective",
      description: "Deploy on a $5/month VPS and get unlimited bandwidth. One server handles your whole family.",
      icon: "💰",
      gradient: "from-dark-accent-tertiary to-dark-accent-primary"
    },
    {
      title: "No Speed Limits",
      description: "Full bandwidth from your cloud provider. No throttling, no artificial limits, no peak hour slowdowns.",
      icon: "⚡",
      gradient: "from-dark-accent-primary to-dark-accent-tertiary"
    },
    {
      title: "Full Transparency",
      description: "Open source code means you can audit every line. Know exactly what's running on your server.",
      icon: "👁️",
      gradient: "from-dark-accent-secondary to-dark-accent-primary"
    },
    {
      title: "Multi-Device",
      description: "Connect all your devices - phones, laptops, tablets. Unlimited simultaneous connections.",
      icon: "📱",
      gradient: "from-dark-accent-tertiary to-dark-accent-secondary"
    }
  ];

  const useCases = [
    {
      title: "Secure Public WiFi",
      description: "Coffee shop, airport, hotel - encrypt all your traffic when using untrusted networks.",
      icon: "☕",
      scenario: "Your banking app traffic is encrypted end-to-end through your personal server"
    },
    {
      title: "ISP Privacy",
      description: "Prevent your internet provider from tracking and analyzing your browsing habits.",
      icon: "🔍",
      scenario: "Your ISP only sees encrypted traffic to your VPN server, not your actual destinations"
    },
    {
      title: "Travel Abroad",
      description: "Access your home services and content when traveling internationally.",
      icon: "✈️",
      scenario: "Connect through your home country to access regional content and services"
    },
    {
      title: "Remote Work",
      description: "Secure connection to your home network from anywhere in the world.",
      icon: "💼",
      scenario: "Access your home lab, NAS, and local services as if you were at home"
    },
    {
      title: "Mobile Privacy",
      description: "Protect your phone's internet connection on cellular networks everywhere you go.",
      icon: "📶",
      scenario: "All mobile app traffic encrypted through your server, not your carrier's network"
    },
    {
      title: "Family Protection",
      description: "Single VPN server with DNS blocking protects all family devices automatically.",
      icon: "👨‍👩‍👧‍👦",
      scenario: "Kids' devices get automatic ad-blocking and content filtering through your VPN"
    }
  ];

  const technicalFeatures = [
    {
      category: "Security",
      features: [
        { name: "WireGuard Protocol", detail: "Modern, audited VPN protocol with state-of-the-art cryptography" },
        { name: "ChaCha20 Encryption", detail: "Military-grade encryption for all your traffic" },
        { name: "Perfect Forward Secrecy", detail: "Each session has unique keys - past traffic stays secure" },
        { name: "No Logs, Guaranteed", detail: "Your server doesn't log because you configured it not to" }
      ]
    },
    {
      category: "DNS & Privacy",
      features: [
        { name: "Built-in DNS Security", detail: "Integrated DNS resolver with blocking capabilities" },
        { name: "Daily Threat Updates", detail: "Automatic malware and phishing domain blocking" },
        { name: "Custom DNS Records", detail: "Define your own DNS entries for private services" },
        { name: "DNS Over VPN", detail: "All DNS queries encrypted through the tunnel" }
      ]
    },
    {
      category: "Performance",
      features: [
        { name: "Low Latency", detail: "WireGuard overhead is minimal - typically <1ms" },
        { name: "Full Bandwidth", detail: "Modern servers handle gigabit speeds easily" },
        { name: "Automatic Reconnect", detail: "Seamless reconnection when switching networks" },
        { name: "Battery Efficient", detail: "WireGuard is optimized for mobile devices" }
      ]
    },
    {
      category: "Management",
      features: [
        { name: "Multi-Device Support", detail: "Unlimited devices per account" },
        { name: "User Management", detail: "Create accounts for family members with individual policies" },
        { name: "Traffic Monitoring", detail: "Optional bandwidth and connection monitoring" },
        { name: "Easy Client Setup", detail: "Simple QR code or config file deployment" }
      ]
    }
  ];

  const setupSteps = [
    {
      step: "01",
      title: "Choose Your Cloud Provider",
      description: "Deploy on any cloud platform - we recommend starting with a small VPS for $5-10/month.",
      providers: ["DigitalOcean", "Vultr", "Linode", "AWS Lightsail", "Hetzner"],
      specs: "1 CPU, 1GB RAM, 25GB SSD is plenty"
    },
    {
      step: "02",
      title: "Install Tunnels Server",
      description: "One command installs everything needed for your personal VPN server.",
      command: "curl -sSL https://tunnels.is/install.sh | sudo bash",
      specs: "Works on Ubuntu, Debian, CentOS, Fedora, and more"
    },
    {
      step: "03",
      title: "Configure Your Server",
      description: "Set up authentication, network settings, and DNS configuration.",
      command: "sudo nano /etc/tunnels/config.json",
      specs: "Configure API port, VPN network range, DNS settings"
    },
    {
      step: "04",
      title: "Install Client Apps",
      description: "Download the Tunnels client for your devices from the official website.",
      command: "Available for all platforms",
      specs: "Windows, macOS, Linux, iOS, Android"
    },
    {
      step: "05",
      title: "Connect & Enjoy",
      description: "Add your server to the client app and connect. Your personal VPN is ready!",
      command: "Enter your server IP and port, login with your credentials",
      specs: "Automatic DNS configuration and routing"
    }
  ];

  const comparison = [
    {
      feature: "Privacy",
      commercial: "Trust their no-log policy",
      personal: "Guaranteed - you control the server",
      winner: "personal"
    },
    {
      feature: "Cost (Annual)",
      commercial: "$60-120/year per user",
      personal: "$60-120/year unlimited users",
      winner: "personal"
    },
    {
      feature: "Speed",
      commercial: "Shared infrastructure, variable",
      personal: "Full server bandwidth, consistent",
      winner: "personal"
    },
    {
      feature: "Device Limit",
      commercial: "5-10 devices typical",
      personal: "Unlimited devices",
      winner: "personal"
    },
    {
      feature: "Server Locations",
      commercial: "100+ countries available",
      personal: "Deploy where you need",
      winner: "commercial"
    },
    {
      feature: "Setup",
      commercial: "Download and click",
      personal: "20 minutes initial setup",
      winner: "commercial"
    },
    {
      feature: "Transparency",
      commercial: "Closed source, audited",
      personal: "Open source, fully auditable",
      winner: "personal"
    },
    {
      feature: "DNS Blocking",
      commercial: "Not included",
      personal: "Built-in ad & malware blocking",
      winner: "personal"
    }
  ];

  const cloudProviders = [
    {
      name: "DigitalOcean",
      price: "$6/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "15+ regions worldwide",
      recommended: true,
      pros: ["Simple setup", "Great docs", "Predictable pricing", "Excellent network"]
    },
    {
      name: "Vultr",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "25+ regions worldwide",
      recommended: true,
      pros: ["Lowest cost", "Many locations", "Good performance", "Easy deployment"]
    },
    {
      name: "AWS Lightsail",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 40GB SSD, 2TB transfer",
      locations: "AWS regions globally",
      recommended: false,
      pros: ["AWS ecosystem", "Great reliability", "Generous bandwidth", "Easy scaling"]
    },
    {
      name: "Hetzner",
      price: "€4.15/month",
      specs: "1 vCPU, 2GB RAM, 20GB SSD, 20TB transfer",
      locations: "EU and US locations",
      recommended: true,
      pros: ["Best value", "Huge bandwidth", "Great EU coverage", "Excellent performance"]
    },
    {
      name: "Linode",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "11 regions globally",
      recommended: false,
      pros: ["Reliable", "Good support", "Simple pricing", "Quality network"]
    },
    {
      name: "Oracle Cloud",
      price: "Free tier available",
      specs: "1-4 vCPU, 1-24GB RAM (ARM), 200GB storage",
      locations: "Multiple regions",
      recommended: false,
      pros: ["Free forever tier", "Generous specs", "ARM instances", "Good for testing"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Unique Wave Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>
          <svg className="absolute bottom-0 w-full h-96 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              fill="url(#wave-gradient)"
              animate={{
                d: [
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-dark-accent-primary)" />
                <stop offset="50%" stopColor="var(--color-dark-accent-secondary)" />
                <stop offset="100%" stopColor="var(--color-dark-accent-tertiary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-dark-accent-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-20 w-80 h-80 bg-dark-accent-tertiary rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8">
              <span className="text-2xl">🔒</span>
              <span className="text-dark-accent-primary font-semibold">Your Server, Your Privacy</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Personal VPN</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-dark-text-secondary mb-8 leading-relaxed">
              Run Your Own VPN Server
              <br />
              <span className="text-dark-accent-tertiary">Take Back Control of Your Privacy</span>
            </h2>

            <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Deploy a personal VPN server in minutes. No third parties, no trust required,
              no logs - just you and your encrypted connection to the internet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white text-lg font-semibold rounded-xl shadow-lg transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Free</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
            </motion.a>

            <motion.a
              href="#comparison"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-effect hover:bg-dark-elevated text-dark-text-primary text-lg font-semibold rounded-xl transition-all"
            >
              Compare vs Commercial VPNs
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "$5", label: "Per Month" },
              { value: "15 min", label: "Setup Time" },
              { value: "∞", label: "Devices" },
              { value: "100%", label: "Privacy" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-dark-text-muted text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-dark-text-muted"
          >
            <svg className="w-6 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section - Hexagonal Grid Pattern */}
      <section ref={ref1} className="py-32 bg-dark-surface relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%233b82f6\' stroke-width=\'1\'/%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Why Run Your Own VPN?</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto leading-relaxed">
              Commercial VPNs ask you to trust them. With your own server, trust isn't necessary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="relative group"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>

                <div className="relative bg-dark-elevated p-8 rounded-2xl hover:bg-dark-bg transition-all duration-300 border border-dark-border group-hover:border-dark-accent-primary h-full">
                  <div className="text-6xl mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-dark-text-primary group-hover:text-gradient transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-dark-text-secondary text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Masonry/Staggered Layout */}
      <section ref={ref2} className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Perfect For Every Scenario</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
              From coffee shops to corporate networks, your personal VPN has you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateZ: index % 2 === 0 ? 1 : -1 }}
                className={`glass-effect p-8 rounded-2xl hover:bg-dark-elevated transition-all duration-300 ${
                  index % 3 === 0 ? 'md:mt-0' : index % 3 === 1 ? 'md:mt-8' : 'md:mt-16'
                }`}
              >
                <div className="text-5xl mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-dark-accent-primary mb-4">
                  {useCase.title}
                </h3>
                <p className="text-lg text-dark-text-secondary mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-dark-bg p-4 rounded-lg border-l-4 border-dark-accent-secondary">
                  <p className="text-sm text-dark-text-muted italic">
                    {useCase.scenario}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features - Accordion/Tab Style */}
      <section ref={ref3} className="py-32 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Enterprise-Grade Technology</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
              Built on battle-tested protocols with modern security practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalFeatures.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={isVisible3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-dark-elevated p-8 rounded-2xl border border-dark-border hover:border-dark-accent-primary transition-all duration-300"
              >
                <h3 className="text-3xl font-bold mb-8 text-gradient">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible3 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + featureIndex * 0.1 }}
                      className="flex gap-4 items-start group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-dark-text-primary mb-2">
                          {feature.name}
                        </h4>
                        <p className="text-dark-text-secondary leading-relaxed">
                          {feature.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guide - Modern Timeline */}
      <section ref={ref4} className="py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Setup in 5 Easy Steps</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
              From zero to encrypted in 15 minutes
            </p>
          </motion.div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isVisible4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Step Number - Large Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary rounded-full flex items-center justify-center shadow-2xl relative"
                  >
                    <span className="text-5xl font-bold text-white">{step.step}</span>

                    {/* Pulse effect */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-dark-accent-primary"
                    ></motion.div>
                  </motion.div>

                  {/* Content Card */}
                  <div className="flex-1 glass-effect p-8 rounded-2xl hover:bg-dark-elevated transition-all duration-300 border border-dark-border hover:border-dark-accent-primary">
                    <h3 className="text-3xl font-bold text-dark-accent-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xl text-dark-text-secondary mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Command/Detail Box */}
                    <div className="bg-dark-bg p-6 rounded-xl border border-dark-accent-primary/30">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-6 h-6 text-dark-accent-tertiary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <code className="text-dark-accent-secondary font-mono text-sm flex-1 break-all">
                          {step.command}
                        </code>
                      </div>
                      <p className="text-dark-text-muted text-sm pl-9">
                        {step.specs}
                      </p>
                      {step.providers && (
                        <div className="mt-4 pl-9">
                          <div className="flex flex-wrap gap-2">
                            {step.providers.map((provider, idx) => (
                              <span key={idx} className="px-3 py-1 bg-dark-accent-primary/20 text-dark-accent-primary text-xs rounded-full">
                                {provider}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < setupSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isVisible4 ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    className="hidden md:block absolute left-16 top-32 w-1 h-8 bg-gradient-to-b from-dark-accent-secondary to-dark-accent-tertiary origin-top"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Break the Mold Design */}
      <section ref={ref5} id="comparison" className="py-32 bg-dark-surface relative overflow-hidden">
        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-accent-primary/5 to-transparent transform -skew-y-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Personal vs Commercial VPNs</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
              See how your own server stacks up against commercial providers
            </p>
          </motion.div>

          {/* Comparison Cards - Breaking Box Design */}
          <div className="space-y-4">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`glass-effect rounded-2xl overflow-hidden border-2 ${
                  item.winner === 'personal'
                    ? 'border-dark-accent-primary hover:border-dark-accent-tertiary'
                    : 'border-dark-border hover:border-dark-accent-secondary'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 items-center">
                  {/* Feature Name */}
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-dark-text-primary flex items-center gap-3">
                      {item.winner === 'personal' && (
                        <span className="text-3xl">🏆</span>
                      )}
                      {item.feature}
                    </h3>
                  </div>

                  {/* Commercial VPN */}
                  <div className={`p-6 rounded-xl ${
                    item.winner === 'commercial'
                      ? 'bg-dark-accent-secondary/20 border-2 border-dark-accent-secondary'
                      : 'bg-dark-bg'
                  }`}>
                    <p className="text-sm text-dark-text-muted mb-2 uppercase tracking-wider">Commercial VPNs</p>
                    <p className="text-lg text-dark-text-secondary">{item.commercial}</p>
                  </div>

                  {/* Personal VPN */}
                  <div className={`p-6 rounded-xl ${
                    item.winner === 'personal'
                      ? 'bg-dark-accent-primary/20 border-2 border-dark-accent-primary'
                      : 'bg-dark-bg'
                  }`}>
                    <p className="text-sm text-dark-text-muted mb-2 uppercase tracking-wider">Your Personal VPN</p>
                    <p className="text-lg text-dark-text-secondary font-semibold">{item.personal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-dark-accent-primary/10 via-dark-accent-secondary/10 to-dark-accent-tertiary/10 p-8 rounded-2xl border border-dark-accent-primary"
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl">💡</div>
              <div>
                <h4 className="text-2xl font-bold text-dark-accent-primary mb-3">
                  The Bottom Line
                </h4>
                <p className="text-lg text-dark-text-secondary leading-relaxed">
                  Commercial VPNs are convenient but require trust. Your personal VPN gives you complete control and transparency
                  at a lower cost. The choice depends on your priorities: convenience vs. control, trust vs. verification,
                  multiple locations vs. ownership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Highlight - Full Width Bold Section */}
      <section ref={ref6} className="py-32 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0L100 50L50 100L0 50Z\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")',
            backgroundSize: '100px 100px'
          }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible6 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="text-8xl mb-8">🔐</div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Zero Knowledge. Zero Logs.
              <br />
              Zero Compromise.
            </h2>
            <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed opacity-90">
              With your own server, you don't need to trust a privacy policy.
              <br />
              <span className="font-bold">You write the rules.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
              {[
                {
                  title: "No Logging",
                  description: "Your server doesn't log because you configured it not to. Not a promise - a fact."
                },
                {
                  title: "Open Source",
                  description: "Audit every line of code. Know exactly what's running on your infrastructure."
                },
                {
                  title: "Your Keys",
                  description: "Encryption keys generated on your devices. Never transmitted, never stored."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg opacity-90 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Providers - Card Grid */}
      <section ref={ref7} className="py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Where to Deploy</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
              Choose your cloud provider based on location, price, and features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`relative bg-dark-elevated p-8 rounded-2xl border-2 transition-all duration-300 ${
                  provider.recommended
                    ? 'border-dark-accent-primary hover:shadow-2xl hover:shadow-dark-accent-primary/20'
                    : 'border-dark-border hover:border-dark-accent-secondary'
                }`}
              >
                {provider.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary text-white text-sm font-bold rounded-full shadow-lg">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-dark-text-primary mb-2">
                    {provider.name}
                  </h3>
                  <div className="text-4xl font-bold text-gradient mb-4">
                    {provider.price}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-dark-bg p-4 rounded-lg">
                    <p className="text-sm text-dark-text-muted mb-2">Specs</p>
                    <p className="text-dark-text-secondary">{provider.specs}</p>
                  </div>
                  <div className="bg-dark-bg p-4 rounded-lg">
                    <p className="text-sm text-dark-text-muted mb-2">Locations</p>
                    <p className="text-dark-text-secondary">{provider.locations}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {provider.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-dark-accent-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-text-secondary">{pro}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center bg-dark-surface p-8 rounded-2xl"
          >
            <p className="text-lg text-dark-text-secondary">
              <span className="text-dark-accent-primary font-bold">Pro Tip:</span>
              {" "}Start with any provider's smallest plan. You can always upgrade if needed, but a basic VPS
              handles personal VPN traffic easily for most users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Unique Expanding Cards */}
      <section ref={ref8} className="py-32 bg-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible8 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Common Questions</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary">
              Everything you need to know before getting started
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Do I need technical knowledge to set this up?",
                a: "Basic Linux command-line knowledge helps, but our guided setup process makes it straightforward. If you can SSH into a server and copy-paste commands, you can set up your personal VPN."
              },
              {
                q: "How does this compare to commercial VPN providers in terms of speed?",
                a: "Your personal VPN is typically faster because you're not sharing bandwidth with thousands of other users. You get the full speed of your cloud server's network connection."
              },
              {
                q: "What if I need to access multiple countries?",
                a: "You can deploy multiple VPN servers in different regions and switch between them using the Tunnels client. Each server costs $5-10/month."
              },
              {
                q: "Is this legal?",
                a: "Yes, running your own VPN server is completely legal in most countries. You're simply encrypting your own internet traffic through your own server."
              },
              {
                q: "How many devices can connect simultaneously?",
                a: "Unlimited. A basic $5/month server can easily handle 10-20 simultaneous connections. For larger families, upgrade to a $10-20/month server."
              },
              {
                q: "What happens if my server goes down?",
                a: "Your internet connection will continue working normally - you just won't have the VPN protection until the server is back up. Cloud providers typically have 99.9%+ uptime."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible8 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-8 rounded-2xl hover:bg-dark-elevated transition-all duration-300 border border-dark-border hover:border-dark-accent-primary"
              >
                <h3 className="text-xl font-bold text-dark-accent-primary mb-4 flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">❓</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-lg text-dark-text-secondary leading-relaxed pl-11">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Split Design with Images/Icons */}
      <section ref={ref9} className="py-32 bg-dark-bg relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-dark-accent-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-dark-accent-tertiary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ready to Take Control?</span>
            </h2>
            <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
              Join thousands who've ditched commercial VPNs for complete privacy and control
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Download Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible9 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="glass-effect p-10 rounded-3xl hover:bg-dark-elevated transition-all duration-300 border-2 border-dark-accent-primary"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold text-dark-accent-primary mb-6">
                Get Started Now
              </h3>
              <p className="text-lg text-dark-text-secondary mb-8 leading-relaxed">
                Download the Tunnels server and client. Free 24-hour trial to test everything.
                After that, just $5-10/month for your cloud server.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Server installer for Linux",
                  "Clients for all platforms",
                  "Complete setup documentation",
                  "24/7 community support",
                  "Free forever updates"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-dark-text-secondary">
                    <svg className="w-6 h-6 text-dark-accent-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-5 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white text-center text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Download Free
              </motion.a>
            </motion.div>

            {/* Documentation Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible9 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="glass-effect p-10 rounded-3xl hover:bg-dark-elevated transition-all duration-300 border-2 border-dark-accent-secondary"
            >
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-3xl font-bold text-dark-accent-secondary mb-6">
                Read the Docs
              </h3>
              <p className="text-lg text-dark-text-secondary mb-8 leading-relaxed">
                Comprehensive guides covering every aspect of deploying and managing your personal VPN server.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Single server setup guide",
                  "Cloud provider tutorials",
                  "Client configuration",
                  "DNS blocking setup",
                  "Troubleshooting guide"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-dark-text-secondary">
                    <svg className="w-6 h-6 text-dark-accent-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/technical"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full py-5 glass-effect text-dark-text-primary text-center text-xl font-bold rounded-xl hover:bg-dark-bg transition-all border-2 border-dark-accent-secondary"
              >
                View Documentation
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible9 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-dark-surface p-8 rounded-2xl"
          >
            <p className="text-dark-text-muted mb-4 text-lg">
              Need help choosing? Have questions?
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-dark-accent-primary text-lg">
              <a href="/pricing" className="hover:underline hover:text-dark-accent-secondary transition-colors">
                View Pricing
              </a>
              <span className="text-dark-text-muted">•</span>
              <a href="mailto:support@tunnels.is" className="hover:underline hover:text-dark-accent-secondary transition-colors">
                Contact Support
              </a>
              <span className="text-dark-text-muted">•</span>
              <a href="/technical" className="hover:underline hover:text-dark-accent-secondary transition-colors">
                Technical Docs
              </a>
              <span className="text-dark-text-muted">•</span>
              <a href="/free-and-opensource" className="hover:underline hover:text-dark-accent-secondary transition-colors">
                Open Source
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PersonalVPN;
