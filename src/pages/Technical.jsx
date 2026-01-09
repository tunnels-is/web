import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { technicalContent } from '../content/siteContent';

const Technical = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();
  const [ref5, isVisible5] = useScrollAnimation();

  const { hero, sections, cta } = technicalContent;

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
            {hero.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto leading-snug">
            {hero.description}
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
            {sections[0].title}
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            {sections[0].description}
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-dark-accent-primary/10 rounded-lg flex items-center justify-center">
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
            {sections[1].title}
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            {sections[1].description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Encryption Types</h3>
              <ul className="space-y-3 text-dark-text-secondary">
                {sections[1].encryptionTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-dark-accent-primary mr-2">•</span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Handshake Types</h3>
              <ul className="space-y-3 text-dark-text-secondary">
                {sections[1].handshakeTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-dark-accent-primary mr-2">•</span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-lg text-dark-text-secondary text-center mb-8">
            {sections[1].details}
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-dark-accent-secondary/10 rounded-lg flex items-center justify-center">
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
            {sections[2].title}
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            {sections[2].description}
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-dark-accent-tertiary/10 rounded-lg flex items-center justify-center">
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
            {sections[3].title}
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            {sections[3].description}
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-dark-accent-primary/10 rounded-lg flex items-center justify-center">
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
            {sections[4].title}
          </h2>
          <p className="text-lg text-dark-text-secondary text-center mb-8 max-w-3xl mx-auto">
            {sections[4].description}
          </p>
          <div className="bg-dark-elevated rounded-lg p-6">
            <div className="aspect-video bg-dark-accent-secondary/10 rounded-lg flex items-center justify-center">
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
            {cta.title}
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                  button.primary
                    ? 'bg-dark-accent-primary text-white hover:bg-opacity-90'
                    : 'glass-effect hover:bg-dark-elevated'
                }`}
              >
                {button.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Technical;
