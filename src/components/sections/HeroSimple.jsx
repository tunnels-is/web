import { motion } from 'framer-motion';
import WaveAnimation from '../animations/WaveAnimation';
import NetworkLines from '../animations/NetworkLines';

/**
 * HeroSimple - Simple hero section with optional animations
 * Used for: Home, Features, DNS pages
 *
 * @param {string} badge - Optional badge text
 * @param {string} title - Main heading
 * @param {string} subtitle - Subtitle below title
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button configurations
 * @param {Array} quickStats - Array of stat objects { value, label }
 * @param {boolean} showWaves - Show wave animation (default: false)
 * @param {boolean} showNetworkLines - Show network connection lines (default: false)
 * @param {boolean} showScrollIndicator - Show scroll indicator (default: false)
 * @param {boolean} showGeometricShapes - Show floating geometric shapes (default: false)
 * @param {boolean} showRadialGlow - Show radial glow effect (default: false)
 */
const HeroSimple = ({
  badge,
  title,
  subtitle,
  description,
  buttons = [],
  quickStats = [],
  showWaves = false,
  showNetworkLines = false,
  showScrollIndicator = false,
  showGeometricShapes = false,
  showRadialGlow = false,
}) => {

  // Geometric shapes configuration
  const geometricShapes = [
    { size: 120, left: '10%', top: '20%', duration: 15, shape: 'circle' },
    { size: 90, left: '85%', top: '15%', duration: 18, shape: 'square' },
    { size: 140, left: '15%', top: '70%', duration: 20, shape: 'triangle' },
    { size: 100, left: '80%', top: '75%', duration: 22, shape: 'diamond' },
    { size: 80, left: '50%', top: '10%', duration: 17, shape: 'hexagon' },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Radial Glow Effect */}
      {showRadialGlow && (
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dark-accent-primary/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Geometric Shapes Animation */}
      {showGeometricShapes && (
        <div className="absolute inset-0">
          {geometricShapes.map((shape, index) => (
            <motion.div
              key={index}
              style={{ left: shape.left, top: shape.top }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute"
            >
              {shape.shape === 'circle' && (
                <div
                  style={{ width: shape.size, height: shape.size }}
                  className="rounded-full border-2 border-dark-accent-primary/30"
                />
              )}
              {shape.shape === 'square' && (
                <div
                  style={{ width: shape.size, height: shape.size }}
                  className="border-2 border-dark-accent-tertiary/30 rotate-45"
                />
              )}
              {shape.shape === 'triangle' && (
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: `${shape.size/2}px solid transparent`,
                    borderRight: `${shape.size/2}px solid transparent`,
                    borderBottom: `${shape.size}px solid rgba(var(--color-accent-secondary-rgb, 147, 51, 234), 0.3)`
                  }}
                />
              )}
              {shape.shape === 'diamond' && (
                <div
                  style={{ width: shape.size, height: shape.size }}
                  className="border-2 border-dark-accent-secondary/30 rotate-45"
                />
              )}
              {shape.shape === 'hexagon' && (
                <svg
                  width={shape.size}
                  height={shape.size}
                  viewBox="0 0 100 100"
                  className="border-dark-accent-primary/30"
                >
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </div>
      )}

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
          {badge && (
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-dark-accent-primary/20 rounded-full text-dark-accent-primary font-semibold text-sm backdrop-blur-sm border border-dark-accent-primary/30">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title}
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
                    : button.teal
                    ? "px-8 py-4 bg-dark-accent-tertiary hover:bg-dark-accent-tertiary/90 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-dark-accent-tertiary/20"
                    : "px-8 py-4 glass-effect hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-colors"
                }
              >
                {button.text}
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
            className="mt-16 flex flex-wrap justify-center gap-12"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
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
