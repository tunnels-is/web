import { motion } from 'framer-motion';

/**
 * HeroWithGradients - Hero section with animated gradient orbs
 * Used for: Homelab page
 *
 * @param {string} badge - Badge text (e.g., "Perfect for Self-Hosters")
 * @param {string} title - Main heading
 * @param {string} subtitle - Subtitle below title
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button configurations
 * @param {Array} quickStats - Array of stat objects { value, label }
 * @param {Array} gradientOrbs - Custom gradient orb configurations (optional)
 */
const HeroWithGradients = ({
  badge,
  title,
  subtitle,
  description,
  buttons = [],
  quickStats = [],
  gradientOrbs
}) => {
  const defaultGradientOrbs = [
    {
      position: "top-1/4 -left-40",
      size: "w-[500px] h-[500px]",
      color: "bg-dark-accent-primary/15",
      duration: 25,
      scaleRange: [1, 1.4, 1],
      rotateRange: [0, 90, 0]
    },
    {
      position: "bottom-1/4 -right-40",
      size: "w-[500px] h-[500px]",
      color: "bg-dark-accent-tertiary/15",
      duration: 30,
      scaleRange: [1.2, 1, 1.2],
      rotateRange: [90, 0, 90]
    },
    {
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-[400px] h-[400px]",
      color: "bg-dark-accent-secondary/15",
      duration: 20,
      scaleRange: [1, 1.3, 1],
      yRange: [0, 50, 0]
    }
  ];

  const orbsToRender = gradientOrbs || defaultGradientOrbs;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {orbsToRender.map((orb, index) => (
          <motion.div
            key={index}
            animate={{
              scale: orb.scaleRange,
              rotate: orb.rotateRange,
              y: orb.yRange
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'linear'
            }}
            className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full blur-3xl`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {badge && (
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-dark-accent-primary/20 rounded-full text-dark-accent-primary font-semibold text-sm">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{title}</span>
          </h1>

          {subtitle && (
            <h2 className="text-2xl md:text-4xl font-semibold text-dark-text-secondary mb-8">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
                    ? "px-8 py-4 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    : "px-8 py-4 glass-effect hover:bg-dark-elevated text-dark-text-primary font-semibold rounded-lg transition-all"
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
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-dark-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroWithGradients;
