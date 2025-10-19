import { motion } from 'framer-motion';
import WaveAnimation from '../animations/WaveAnimation';
import NetworkLines from '../animations/NetworkLines';

/**
 * HeroSimple - Simple hero section with optional animations
 * Used for: Home, Features, DNS pages
 *
 * @param {string} title - Main heading
 * @param {string} subtitle - Subtitle below title
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button configurations
 * @param {boolean} showWaves - Show wave animation (default: false)
 * @param {boolean} showNetworkLines - Show network connection lines (default: false)
 * @param {boolean} showScrollIndicator - Show scroll indicator (default: false)
 */
const HeroSimple = ({
  title,
  subtitle,
  description,
  buttons = [],
  showWaves = false,
  showNetworkLines = false,
  showScrollIndicator = false,
}) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Network Lines Animation */}
      {showNetworkLines && (
        <div className="absolute inset-0">
          <NetworkLines opacity={0.08} />
        </div>
      )}

      {/* Wave Animation */}
      {showWaves && (
        <div className="absolute inset-0">
          <WaveAnimation opacity={0.15} />
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{title}</span>
          </h1>

          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold text-dark-text-secondary mb-8">
              {subtitle}
            </h2>
          )}
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className={
                  button.primary
                    ? "px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-dark-accent-primary/20"
                    : "px-8 py-4 glass-effect hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-colors"
                }
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-dark-text-muted rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-dark-text-muted rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSimple;
