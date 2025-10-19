import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FreeAndOpenSource = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Tunnels is Free and Open Source</span>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8">
            All of our features are free and available in the open source version. No paywalls, no hidden fees.
          </p>
          <motion.a
            href="https://github.com/tunnels-is"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-dark-accent-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            View on GitHub
          </motion.a>
        </motion.div>
      </section>

      {/* Why Open Source */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-gradient">Why Open Source?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-dark-text-secondary leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Transparency</h3>
              <p className="mb-4">
                Open source means complete transparency. Anyone can review our code, audit our security practices,
                and verify that we're doing exactly what we say we're doing.
              </p>
              <p>
                There are no hidden backdoors, no secret data collection, and no mysterious code that you can't inspect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Community</h3>
              <p className="mb-4">
                Being open source allows developers and security experts from around the world to contribute,
                improve, and help shape the future of Tunnels.
              </p>
              <p>
                This collaborative approach leads to better security, more features, and faster bug fixes than
                any closed-source project could achieve alone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Freedom</h3>
              <p className="mb-4">
                You're free to use Tunnels however you want - personally, commercially, or modify it to fit
                your specific needs. No licensing restrictions.
              </p>
              <p>
                Deploy it on your own infrastructure, integrate it with your systems, and maintain complete
                control over your networking solution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-accent-primary mb-4">Trust</h3>
              <p className="mb-4">
                In the world of VPNs and networking, trust is everything. Open source allows you to verify
                our claims and build that trust through transparency.
              </p>
              <p>
                Security experts can audit the code, and the community can vouch for the integrity of the project.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Join Community */}
      <section ref={ref2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Join Our Community</span>
          </h2>
          <p className="text-xl text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            Join our community to contribute, follow our development, or just stay connected with other Tunnels users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'GitHub', url: 'https://github.com/tunnels-is', icon: '💻', desc: 'View code & contribute' },
              { name: 'Discord', url: 'https://discord.com/invite/7Ts3PCnCd9', icon: '💬', desc: 'Chat with the community' },
              { name: 'Twitter', url: 'https://x.com/tunnels_is', icon: '🐦', desc: 'Follow for updates' },
              { name: 'Reddit', url: 'https://www.reddit.com/r/tunnels_is/', icon: '📱', desc: 'Join discussions' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-6 rounded-xl hover:bg-dark-elevated transition-all"
              >
                <div className="text-5xl mb-4">{social.icon}</div>
                <h3 className="text-xl font-semibold text-dark-accent-primary mb-2">{social.name}</h3>
                <p className="text-dark-text-secondary text-sm">{social.desc}</p>
              </motion.a>
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
            Download Tunnels today and experience open source networking at its finest.
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
              href="https://github.com/tunnels-is"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-dark-elevated transition-all"
            >
              View Source Code
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FreeAndOpenSource;
