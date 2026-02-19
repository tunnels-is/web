import { motion } from 'framer-motion';
import HeroBannerArt from '../HeroBannerArt';

const HeroSimple = ({
  badge,
  title,
  subtitle,
  description,
  buttons = [],
  quickStats = [],
}) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Banner art background */}
      <HeroBannerArt />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {badge && (
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-dark-accent-primary/10 rounded-full text-dark-accent-primary font-medium text-sm">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-dark-text-secondary mb-4 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="text-base sm:text-lg text-dark-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={button.primary ? 'btn-primary px-8 py-3.5 text-base' : 'btn-secondary px-8 py-3.5 text-base'}
              >
                {button.text}
              </a>
            ))}
          </motion.div>
        )}

        {/* Quick Stats */}
        {quickStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mt-16 flex flex-wrap justify-center gap-12"
          >
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-dark-text-primary mb-1">{stat.value}</div>
                <div className="text-dark-text-muted text-xs uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSimple;
