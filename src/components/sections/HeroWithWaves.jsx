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
 * @param {boolean} showScrollIndicator - Show scroll indicator (default: false)
 */
const HeroWithWaves = ({
  badge,
  title,
  subtitle,
  description,
  buttons = [],
  quickStats = [],
  showScrollIndicator = false,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark-bg"></div>
        <WaveAnimation />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={
                  button.primary
                    ? "group px-10 py-5 bg-dark-accent-primary hover:bg-dark-accent-secondary text-white text-lg font-semibold rounded-xl transition-all duration-150 relative overflow-hidden shadow-lg shadow-dark-accent-primary/20 hover:shadow-dark-accent-primary/40 active:opacity-90"
                    : "px-10 py-5 bg-dark-surface hover:bg-dark-elevated hover:border-dark-accent-primary/50 text-dark-text-primary text-lg font-semibold rounded-xl transition-all duration-150 border border-transparent active:opacity-90"
                }
              >
                <span className="relative z-10">{button.text}</span>
                {button.primary && (
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-150" />
                )}
              </a>
            ))}
          </motion.div>
        )}

        {/* Quick Stats */}
        {quickStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 + index * 0.03, ease: [0.4, 0, 0.2, 1] }}
                className="glass-effect p-6 rounded-xl group hover:border-dark-accent-primary/30 border border-transparent transition-colors duration-150"
              >
                <div className="text-4xl font-bold mb-2 transition-colors duration-150 group-hover:text-dark-accent-primary">{stat.value}</div>
                <div className="text-dark-text-muted text-sm uppercase tracking-wider transition-colors duration-150 group-hover:text-dark-text-secondary">{stat.label}</div>
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
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
