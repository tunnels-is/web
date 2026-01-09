import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const OfficeNetworks = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();

  const benefits = [
    {
      title: "Centralized User Management",
      description: "Manage all employees from a single dashboard. Create user groups, assign access levels, and control who can access which resources.",
      icon: (
        <svg className="w-12 h-12 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Group-Based Access Control",
      description: "Create departments or teams with specific network access. Engineering gets dev servers, Finance gets accounting systems - all from simple group rules.",
      icon: (
        <svg className="w-12 h-12 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Split Tunneling",
      description: "Route only office traffic through the VPN. Personal browsing stays on local internet, keeping bandwidth efficient and users happy.",
      icon: (
        <svg className="w-12 h-12 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Internal DNS",
      description: "Access internal services by name. Set up wiki.company, git.internal, or any custom domain that resolves only when connected to the office VPN.",
      icon: (
        <svg className="w-12 h-12 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Two-Factor Authentication",
      description: "Secure employee access with TOTP-based 2FA. Protect your network even if passwords are compromised.",
      icon: (
        <svg className="w-12 h-12 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Device Management",
      description: "Track and manage every device connecting to your network. Revoke access instantly when employees leave or devices are lost.",
      icon: (
        <svg className="w-12 h-12 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: "Remote Team Access",
      description: "Give remote employees secure access to office resources as if they were on-site",
      scenario: "Employees work from home but access file servers, printers, and internal tools seamlessly"
    },
    {
      title: "Multi-Office Connectivity",
      description: "Connect branch offices to headquarters with dedicated VPN servers per location",
      scenario: "HQ in New York, branches in LA and London - all on one unified network"
    },
    {
      title: "Contractor Access",
      description: "Provide limited, time-bound access to external contractors without exposing your full network",
      scenario: "Contractors get access only to their project servers, automatically revoked when contract ends"
    },
    {
      title: "BYOD Policy",
      description: "Allow employees to use personal devices securely with per-device access controls",
      scenario: "Personal laptops connect to work resources through isolated, monitored VPN tunnels"
    }
  ];

  const deploymentSteps = [
    {
      step: "1",
      title: "Deploy Server",
      description: "Set up a Tunnels server on your office network or cloud infrastructure"
    },
    {
      step: "2",
      title: "Configure Networks",
      description: "Define which subnets and resources should be accessible through the VPN"
    },
    {
      step: "3",
      title: "Create Users & Groups",
      description: "Add employees and organize them into departments with appropriate access levels"
    },
    {
      step: "4",
      title: "Distribute Client",
      description: "Employees download the Tunnels client and connect using their credentials"
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
              Office Networks
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-dark-text-secondary mb-8">
              Secure Access for Your Entire Team
            </h2>
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-4xl mx-auto leading-snug">
              Connect remote employees to office resources with enterprise-grade security.
              Manage users, control access, and keep your network protected - all without the complexity.
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
              className="px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started Free
            </motion.a>
            <motion.a
              href="https://docs.tunnels.is/docs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-surface hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-colors"
            >
              View Documentation
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
              Everything You Need for Office VPN
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Built-in features that make managing office network access simple and secure
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
                <div className="mb-4">{benefit.icon}</div>
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

      {/* How It Works */}
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
                Simple Architecture
              </h2>
              <p className="text-lg text-dark-text-secondary leading-snug mb-6">
                Deploy a single server that handles authentication and VPN connections.
                Users connect from anywhere and get secure access to office resources
                based on their group membership.
              </p>

              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-xl border-l-4 border-dark-accent-primary">
                  <h4 className="font-semibold text-xl text-dark-accent-primary mb-2">For IT Admins</h4>
                  <p className="text-dark-text-secondary">
                    One dashboard to manage all users, devices, and access policies.
                    See who's connected and what they're accessing in real-time.
                  </p>
                </div>

                <div className="glass-effect p-6 rounded-xl border-l-4 border-dark-accent-tertiary">
                  <h4 className="font-semibold text-xl text-dark-accent-tertiary mb-2">For Employees</h4>
                  <p className="text-dark-text-secondary">
                    Download the client, log in once, and access office resources
                    from anywhere. No complicated setup or constant re-authentication.
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
                {/* Office Server */}
                <div className="bg-dark-accent-primary/10 p-6 rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-dark-accent-primary/30 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-center font-semibold text-lg mb-2">Office Network</h4>
                  <p className="text-center text-dark-text-secondary text-sm">Tunnels Server + Internal Resources</p>
                </div>

                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-dark-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>

                {/* Remote Employees */}
                <div className="grid grid-cols-3 gap-4">
                  {['Home Office', 'Coffee Shop', 'On the Road'].map((location, i) => (
                    <div key={i} className="bg-dark-accent-tertiary/10 p-4 rounded-lg">
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-12 h-12 bg-dark-accent-tertiary/30 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-dark-text-secondary text-xs">{location}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-dark-text-secondary text-sm italic">
                  Secure encrypted tunnel from anywhere
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
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common Scenarios
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              How organizations use Tunnels for office network access
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {useCases.map((useCase, index) => {
              const icons = [
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>,
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>,
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>,
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="absolute -left-2 top-0 w-14 h-14 text-dark-accent-primary flex items-center justify-center">
                    {icons[index]}
                  </div>

                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-dark-accent-primary transition-colors leading-tight pt-3">
                      {useCase.title}
                    </h3>
                    <p className="text-base text-dark-text-secondary mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="bg-dark-bg/50 backdrop-blur-sm p-5 rounded-lg border-t border-dark-accent-primary/20">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-dark-accent-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm text-dark-text-secondary leading-relaxed">
                          {useCase.scenario}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section ref={ref4} className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
              Setting up office VPN access is straightforward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-dark-accent-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-dark-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ref5} className="py-24 bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Office?
            </h2>
            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto mb-8">
              Get started with Tunnels for your office network. Free to use,
              open source, and ready for teams of any size.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                Documentation
              </h3>
              <p className="text-dark-text-secondary mb-6">
                Step-by-step guides for setting up your office VPN infrastructure.
              </p>
              <ul className="space-y-2 text-dark-text-secondary mb-6">
                <li>• Server setup guide</li>
                <li>• User management</li>
                <li>• Access control configuration</li>
                <li>• Client deployment</li>
              </ul>
              <motion.a
                href="https://docs.tunnels.is/docs"
                target="_blank"
                rel="noopener noreferrer"
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
                Need help deploying for a larger organization? We're here to help.
              </p>
              <ul className="space-y-2 text-dark-text-secondary mb-6">
                <li>• Deployment assistance</li>
                <li>• Custom configuration</li>
                <li>• Priority support</li>
                <li>• Training sessions</li>
              </ul>
              <motion.a
                href="mailto:support@tunnels.is"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-dark-accent-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white text-lg font-semibold rounded-xl transition-colors"
            >
              Download Tunnels Free
            </motion.a>
            <p className="text-dark-text-muted mt-4">
              Free and open source • No usage limits
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfficeNetworks;
