import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CloudBaremetal = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();
  const [ref6, isVisible6] = useScrollAnimation();
  const [ref7, isVisible7] = useScrollAnimation();

  const benefits = [
    {
      title: "Geographic Distribution",
      description: "Deploy VPN servers across multiple regions for optimal performance and low latency access worldwide.",
      icon: "🌍"
    },
    {
      title: "High Availability",
      description: "Redundant server architecture ensures continuous service even if individual nodes experience issues.",
      icon: "⚡"
    },
    {
      title: "Scalable Architecture",
      description: "Separate authentication from VPN traffic handling. Add capacity by deploying additional VPN servers.",
      icon: "📈"
    },
    {
      title: "Centralized Management",
      description: "Single control server manages users, permissions, and policies across all VPN endpoints.",
      icon: "🎯"
    },
    {
      title: "Multi-Network Access",
      description: "Connect users to multiple private networks simultaneously, each through its optimal VPN server.",
      icon: "🔗"
    },
    {
      title: "Full Control",
      description: "Deploy on your own infrastructure - cloud, baremetal, or hybrid. No vendor dependencies.",
      icon: "🔧"
    }
  ];

  const useCases = [
    {
      title: "Global Enterprise",
      description: "Deploy regional VPN servers for offices in US, EU, and Asia with centralized authentication",
      scenario: "Control Server in US-East, VPN servers in each region for local network access"
    },
    {
      title: "Cloud + On-Premise Hybrid",
      description: "Mix cloud-hosted control with baremetal VPN servers for sensitive workload isolation",
      scenario: "AWS control server, VPN servers on owned datacenter hardware"
    },
    {
      title: "High-Traffic Applications",
      description: "Distribute VPN load across multiple servers while maintaining single point of user management",
      scenario: "1 Control Server + 10 VPN servers handling 10,000+ concurrent connections"
    },
    {
      title: "Development Environments",
      description: "Separate VPN servers for dev, staging, and production with unified access control",
      scenario: "Per-environment VPN servers with role-based access from single auth server"
    }
  ];

  const deploymentOptions = [
    {
      platform: "AWS / GCP / Azure",
      description: "Deploy on major cloud providers with auto-scaling and managed infrastructure",
      features: ["Easy deployment", "Managed networking", "Auto-scaling ready", "Global regions"]
    },
    {
      platform: "Baremetal / Dedicated Servers",
      description: "Maximum performance and control on physical hardware you own or lease",
      features: ["Full hardware control", "No hypervisor overhead", "Predictable performance", "Cost-effective at scale"]
    },
    {
      platform: "Hybrid Cloud",
      description: "Best of both worlds - cloud for flexibility, baremetal for critical workloads",
      features: ["Flexible deployment", "Cost optimization", "Compliance-friendly", "Geographic flexibility"]
    },
    {
      platform: "Private Cloud / OpenStack",
      description: "Self-hosted cloud infrastructure with full control over every layer",
      features: ["Complete control", "Data sovereignty", "Custom networking", "No external dependencies"]
    }
  ];

  const technicalCapabilities = [
    {
      title: "Signature-Based Authentication",
      description: "Control server signs authentication tokens, VPN servers verify signatures",
      technical: "Public key cryptography ensures VPN servers never need database access"
    },
    {
      title: "Network Isolation",
      description: "Each VPN server manages its own network range, preventing IP conflicts",
      technical: "Configure different CIDR blocks per server (e.g., 10.0.0.0/16, 10.1.0.0/16)"
    },
    {
      title: "Flexible Routing",
      description: "Define custom routes for each VPN server to access specific network segments",
      technical: "Route tables configured per server for fine-grained network access control"
    },
    {
      title: "Zero-Touch Client Configuration",
      description: "Clients automatically discover and connect to optimal VPN servers",
      technical: "Control server provides available servers list, client handles failover"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/3 -left-32 w-96 h-96 bg-dark-accent-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              rotate: [180, 0, 180],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/3 -right-32 w-96 h-96 bg-dark-accent-tertiary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-dark-accent-secondary/10 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Cloud & Baremetal</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-dark-text-secondary mb-8">
              Multi-Server Architecture for Scale
            </h2>
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-4xl mx-auto leading-snug">
              Deploy a distributed VPN infrastructure with centralized authentication.
              Scale globally with multiple VPN servers while managing everything from a single control plane.
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
              Get Started
            </motion.a>
            <motion.a
              href="mailto:support@tunnels.is"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-all"
            >
              Talk to Sales
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section ref={ref1} className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Built for Scale & Reliability</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Architectural benefits that give you enterprise-grade capabilities without the enterprise complexity
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
                className="bg-dark-elevated p-8 rounded-xl hover:bg-dark-bg hover:shadow-xl hover:shadow-dark-accent-primary/20 transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-dark-text-secondary leading-snug">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section ref={ref2} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Distributed by Design</span>
              </h2>
              <p className="text-lg text-dark-text-secondary leading-snug mb-6">
                Tunnels multi-server architecture separates concerns for maximum flexibility and performance.
                Deploy one control server for authentication and management, then add as many VPN servers
                as you need to handle traffic and provide geographic coverage.
              </p>

              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-xl border-l-4 border-dark-accent-primary">
                  <h4 className="font-semibold text-xl text-dark-accent-primary mb-2">Control Server</h4>
                  <p className="text-dark-text-secondary">
                    Handles user authentication, authorization, device management, and policy enforcement.
                    Signs authentication tokens for VPN servers to verify.
                  </p>
                </div>

                <div className="glass-effect p-6 rounded-xl border-l-4 border-dark-accent-tertiary">
                  <h4 className="font-semibold text-xl text-dark-accent-tertiary mb-2">VPN Servers</h4>
                  <p className="text-dark-text-secondary">
                    Handle VPN connections, tunnel traffic, and provide network access. Verify authentication
                    signatures from control server without needing direct database access.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8"
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-dark-accent-primary/20 to-dark-accent-secondary/20 p-6 rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-dark-accent-primary/30 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-center font-semibold text-lg mb-2">1 Control Server</h4>
                  <p className="text-center text-dark-text-secondary text-sm">Auth, IAM, Management</p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gradient-to-br from-dark-accent-tertiary/20 to-dark-accent-primary/20 p-4 rounded-lg">
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-12 h-12 bg-dark-accent-tertiary/30 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-dark-text-secondary text-xs">VPN {i}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-dark-text-secondary text-sm italic">
                  + N more VPN servers as needed
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section ref={ref3} className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Real-World Deployments</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              See how organizations are using multi-server Tunnels architecture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isVisible3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-dark-elevated p-8 rounded-xl hover:bg-dark-bg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                  {useCase.title}
                </h3>
                <p className="text-lg text-dark-text-secondary mb-4 leading-snug">
                  {useCase.description}
                </p>
                <div className="bg-dark-bg p-4 rounded-lg">
                  <p className="text-sm text-dark-text-muted mb-1 font-semibold uppercase tracking-wide">Example Setup</p>
                  <p className="text-dark-text-secondary text-sm leading-snug">
                    {useCase.scenario}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section ref={ref4} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Technical Architecture</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Deep dive into the technical capabilities that power multi-server deployments
            </p>
          </motion.div>

          <div className="space-y-6">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:bg-dark-elevated transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-dark-accent-secondary mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-lg text-dark-text-secondary mb-4">
                      {capability.description}
                    </p>
                  </div>
                  <div className="flex-1 bg-dark-bg p-5 rounded-lg border border-dark-accent-secondary/30">
                    <p className="text-sm text-dark-text-muted mb-2 font-mono uppercase tracking-wider">Technical Detail</p>
                    <p className="text-dark-text-secondary font-mono text-sm leading-snug">
                      {capability.technical}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section ref={ref5} className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Deploy Anywhere</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Flexible deployment options to match your infrastructure strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible5 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-dark-elevated p-8 rounded-xl hover:bg-dark-bg transition-all"
              >
                <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                  {option.platform}
                </h3>
                <p className="text-lg text-dark-text-secondary mb-6 leading-snug">
                  {option.description}
                </p>
                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="text-dark-accent-tertiary text-xl">✓</span>
                      <span className="text-dark-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section ref={ref6} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-effect p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient">Built for Performance</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                  1M+
                </div>
                <p className="text-xl text-dark-text-secondary font-semibold mb-2">
                  Concurrent Users
                </p>
                <p className="text-dark-text-muted">
                  Scale to millions with horizontal VPN server deployment
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                  &lt;5ms
                </div>
                <p className="text-xl text-dark-text-secondary font-semibold mb-2">
                  Auth Latency
                </p>
                <p className="text-dark-text-muted">
                  Lightning-fast signature verification on VPN servers
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible6 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-4">
                  99.99%
                </div>
                <p className="text-xl text-dark-text-secondary font-semibold mb-2">
                  Uptime SLA
                </p>
                <p className="text-dark-text-muted">
                  Redundant architecture ensures high availability
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started */}
      <section ref={ref7} className="py-24 bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Ready to Deploy?</span>
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto mb-8">
              Get started with multi-server Tunnels architecture today. Full deployment guides and
              24/7 support for enterprise customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                Documentation
              </h3>
              <p className="text-dark-text-secondary mb-6">
                Comprehensive guides for setting up control servers, VPN servers, and client configuration.
              </p>
              <ul className="space-y-2 text-dark-text-secondary mb-6">
                <li>• Multi-server architecture guide</li>
                <li>• Deployment best practices</li>
                <li>• Security configuration</li>
                <li>• Troubleshooting & monitoring</li>
              </ul>
              <motion.a
                href="/technical"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                View Documentation
              </motion.a>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-dark-accent-secondary mb-4">
                Enterprise Support
              </h3>
              <p className="text-dark-text-secondary mb-6">
                Need help with deployment? Our team provides full support for enterprise multi-server setups.
              </p>
              <ul className="space-y-2 text-dark-text-secondary mb-6">
                <li>• Architecture consulting</li>
                <li>• Custom integrations</li>
                <li>• 24/7 technical support</li>
                <li>• Deployment assistance</li>
              </ul>
              <motion.a
                href="mailto:support@tunnels.is"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-dark-accent-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Contact Sales
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible7 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              Download & Get Started Free
            </motion.a>
            <p className="text-dark-text-muted mt-4">
              24-hour free trial • No credit card required
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudBaremetal;
