import { motion } from 'framer-motion';
import WaveAnimation from '../animations/WaveAnimation';

/**
 * HeroWithWaves - Hero section with animated wave background
 * Used for: PersonalVPN page
 *
 * @param {string} badge - Badge text and icon (e.g., "🔒 Your Server, Your Privacy")
 * @param {string} title - Main heading
 * @param {string} subtitle - Subtitle below title
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button configurations
 * @param {Array} quickStats - Array of stat objects { value, label }
 * @param {boolean} showScrollIndicator - Show scroll indicator (default: true)
 */
const HeroWithWaves = ({
  badge,
  title,
  subtitle,
  description,
  buttons = [],
  quickStats = [],
  showScrollIndicator = true,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>
        <WaveAnimation />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8">
              <span className="text-dark-accent-primary font-semibold">{badge}</span>
            </div>
          )}

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <h2 className="text-2xl md:text-4xl font-semibold text-dark-text-secondary mb-8 leading-snug">
              {subtitle}
            </h2>
          )}

          {description && (
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-4xl mx-auto leading-snug">
              {description}
            </p>
          )}
        </motion.div>

        {/* Buttons */}
        {buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className={
                  button.primary
                    ? "group px-10 py-5 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                    : "px-10 py-5 glass-effect hover:bg-dark-elevated text-dark-text-primary text-lg font-semibold rounded-xl transition-colors"
                }
              >
                <span className="relative z-10">{button.text}</span>
                {button.primary && (
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                )}
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Quick Stats */}
        {quickStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05, ease: "easeOut" }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-dark-text-muted text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
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
      )}
    </section>
  );
};

export default HeroWithWaves;
