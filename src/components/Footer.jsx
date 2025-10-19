import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '→' },
    { name: 'LinkedIn', url: '#', icon: '→' },
    { name: 'Twitter', url: '#', icon: '→' },
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Portfolio</h3>
            <p className="text-dark-text-secondary text-sm">
              Creating modern, responsive, and beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-dark-text-primary uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="text-dark-text-secondary hover:text-dark-accent-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-dark-text-primary uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-dark-elevated hover:bg-dark-accent-primary transition-colors flex items-center justify-center text-dark-text-secondary hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-text-muted text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-dark-text-muted hover:text-dark-text-primary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-dark-text-muted hover:text-dark-text-primary text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
