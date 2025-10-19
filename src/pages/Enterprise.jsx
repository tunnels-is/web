import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { enterpriseContent } from '../content/siteContent';

const Enterprise = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  const { benefits } = enterpriseContent;

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
            <span className="text-gradient">Tunnels For Large Networks</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-dark-text-secondary mb-8">
            Lightweight design for big scale
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto leading-snug">
            Built from the ground up to handle enterprise-scale networking with minimal overhead
            and maximum security.
          </p>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mb-4 text-dark-accent-primary">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-dark-accent-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-dark-text-secondary leading-snug">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Flexibility Section */}
      <section ref={ref2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Effortless Management</span>
            </h2>
            <p className="text-lg text-dark-text-secondary leading-snug mb-6">
              Automatically connect your employees to all of their networks, all at once. Tunnels
              is designed to be install-free - simply copy, paste, and run.
            </p>
            <p className="text-lg text-dark-text-secondary leading-snug mb-6">
              This makes managing a large number of users simple and pain-free. Company-wide
              configurations can be distributed as simple files to users in multiple ways or
              automatically updated by system administrators.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-dark-accent-primary text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">No Installation Required</h4>
                  <p className="text-dark-text-secondary">Deploy across your organization instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-dark-accent-primary text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Centralized Configuration</h4>
                  <p className="text-dark-text-secondary">Push updates to all devices simultaneously</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-dark-accent-primary text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">IAM Integration</h4>
                  <p className="text-dark-text-secondary">Built-in identity management with extension options</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-effect p-8 rounded-xl">
            <div className="aspect-square bg-gradient-to-br from-dark-accent-primary/20 to-dark-accent-secondary/20 rounded-lg flex items-center justify-center">
              <svg className="w-32 h-32 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Security Section */}
      <section ref={ref3} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1 glass-effect p-8 rounded-xl">
            <div className="aspect-square bg-gradient-to-br from-dark-accent-tertiary/20 to-dark-accent-primary/20 rounded-lg flex items-center justify-center">
              <svg className="w-32 h-32 text-dark-accent-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Reduced Attack Surface</span>
            </h2>
            <p className="text-lg text-dark-text-secondary leading-snug mb-6">
              Tunnels is written in Golang with minimal module use and no third-party services.
              This method of simplicity reduces the overall attack surface, simplifies security
              reviews, and minimizes the risk of vulnerabilities.
            </p>
            <p className="text-lg text-dark-text-secondary leading-snug mb-6">
              <a href="https://go.dev" target="_blank" rel="noopener noreferrer" className="text-dark-accent-primary hover:text-dark-accent-secondary transition-colors">
                Golang
              </a>{' '}
              is an open source programming language made by Google and is under strict review
              by security experts.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-dark-accent-tertiary text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Minimal Dependencies</h4>
                  <p className="text-dark-text-secondary">Fewer attack vectors, easier audits</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-dark-accent-tertiary text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">No Third-Party Services</h4>
                  <p className="text-dark-text-secondary">Complete control over your data and infrastructure</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-dark-accent-tertiary text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Security Audits Welcome</h4>
                  <p className="text-dark-text-secondary">Simple codebase makes reviews straightforward</p>
                </div>
              </div>
            </div>
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
            Ready to scale your network?
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Contact our sales team to discuss how Tunnels can fit your enterprise needs.
          </p>
          <motion.a
            href="mailto:support@tunnels.is"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Contact Sales
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Enterprise;
