import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Technical = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();

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
            <span className="text-gradient">Technical Overview</span>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            Deep dive into the architecture and technical capabilities of Tunnels VPN.
          </p>
        </motion.div>
      </section>

      {/* Public Routable VPN */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">Public Routable VPN Network</span>
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            The Tunnels VPN application can apply dynamic routes to the public network tunnels,
            allowing for split route tunneling across multiple VPN servers.
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-gradient-to-br from-dark-accent-primary/10 to-dark-accent-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-dark-accent-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-dark-text-muted">Diagram: Public Routable VPN Network</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Encryption and Security */}
      <section ref={ref2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">Encryption and Security</span>
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            Tunnels implements modern cryptographic protocols and handshaking procedures.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Encryption Types</h3>
              <ul className="space-y-3 text-dark-text-secondary">
                <li className="flex items-start">
                  <span className="text-dark-accent-primary mr-2">•</span>
                  AES-128 / AES-256
                </li>
                <li className="flex items-start">
                  <span className="text-dark-accent-primary mr-2">•</span>
                  ChaCha20-Poly1305
                </li>
              </ul>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Handshake Types</h3>
              <ul className="space-y-3 text-dark-text-secondary">
                <li className="flex items-start">
                  <span className="text-dark-accent-primary mr-2">•</span>
                  Elliptic Curve P521
                </li>
                <li className="flex items-start">
                  <span className="text-dark-accent-primary mr-2">•</span>
                  X25519
                </li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-dark-text-secondary text-center mb-8">
            Authentication and Authorization use a combination of user/password and certificates.
            Every step of the encryption and handshake process is handled by Golang standard library methods -
            we do not hand-roll our own encryption schemes or functions.
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-gradient-to-br from-dark-accent-secondary/10 to-dark-accent-tertiary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-dark-accent-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-dark-text-muted">Diagram: VPN Encryption Flow</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LAN Networks */}
      <section ref={ref3} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">LAN Networks</span>
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            Tunnels LAN networks connect individual devices through an abstract network layer that
            exists on a single server. The LAN network is perfect for IoT devices, file servers,
            databases, and other services that require stricter access controls.
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-gradient-to-br from-dark-accent-tertiary/10 to-dark-accent-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-dark-accent-tertiary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                <p className="text-dark-text-muted">Diagram: Isolated LAN Networks</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Advanced Routing */}
      <section ref={ref4} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">Advanced Routing</span>
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            Defining custom routes in Tunnels is simple - it can be done server-side or in the device config.
            Routing configurations are abstracted from the underlying networks, which enables routing of any
            IP address to any VPN or LAN network.
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-gradient-to-br from-dark-accent-primary/10 to-dark-accent-tertiary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-dark-accent-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-dark-text-muted">Diagram: Advanced Routing Configuration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Abstract NAT */}
      <section ref={ref5} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">Abstract NAT</span>
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            Tunnels NAT is completely abstracted from the underlying networks, much like the routing.
            Any IP Address can be translated to any other IP Address. This feature can resolve networking
            problems that happen in large environments.
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-gradient-to-br from-dark-accent-secondary/10 to-dark-accent-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-dark-accent-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <p className="text-dark-text-muted">Diagram: Abstract NAT Translation</p>
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
            Ready to explore more?
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            Check out our comprehensive documentation for detailed technical guides and examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Download Tunnels
            </motion.a>
            <motion.a
              href="/features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
            >
              View All Features
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Technical;
