import { motion } from 'framer-motion';
import FloatingOrbs from '../animations/FloatingOrbs';
import WaveAnimation from '../animations/WaveAnimation';

/**
 * HeroSimple - Simple hero section with optional orbs and waves
 * Used for: Home, Features, DNS pages
 *
 * @param {string} title - Main heading
 * @param {string} subtitle - Subtitle below title
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button configurations
 * @param {boolean} showOrbs - Show floating orbs (default: true)
 * @param {boolean} showWaves - Show wave animation (default: false)
 * @param {boolean} showScrollIndicator - Show scroll indicator (default: false)
 * @param {Array} orbs - Custom orb configurations (optional)
 */
const HeroSimple = ({
  title,
  subtitle,
  description,
  buttons = [],
  showOrbs = true,
  showWaves = false,
  showScrollIndicator = false,
  orbs
}) => {
  const defaultOrbs = [
    {
      position: "top-1/4 -left-20",
      size: "w-96 h-96",
      color: "bg-dark-accent-primary/10",
      duration: 20,
      delay: 0,
      yRange: [0, 0, 0],
      scaleRange: [1, 1.2, 1],
      opacityRange: [0.1, 0.1, 0.1]
    },
    {
      position: "bottom-1/4 -right-20",
      size: "w-96 h-96",
      color: "bg-dark-accent-secondary/10",
      duration: 25,
      delay: 0,
      yRange: [0, 0, 0],
      scaleRange: [1.2, 1, 1.2],
      opacityRange: [0.1, 0.1, 0.1]
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      {showOrbs && (
        <div className="absolute inset-0 overflow-hidden">
          <FloatingOrbs orbs={orbs || defaultOrbs} />
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={
                  button.primary
                    ? "px-8 py-4 bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-dark-accent-primary/20"
                    : "px-8 py-4 glass-effect hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-all"
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
