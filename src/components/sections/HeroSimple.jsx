import { motion } from 'framer-motion';
import HeroBannerArt from '../HeroBannerArt';

const HeroSimple = ({
  badge,
  title,
  subtitle,
  description,
  buttons = [],
  quickStats = [],
  highlights = [],
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Banner art background */}
      <HeroBannerArt />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 -mt-[10vh]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {badge && (
            <div className="inline-block mb-5">
              <span className="px-3.5 py-1 bg-dark-accent-primary/8 border border-dark-accent-primary/20 rounded-full text-dark-accent-primary font-medium text-xs tracking-wide">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-[1.1]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl font-medium text-dark-text-secondary mb-3 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-dark-text-muted mb-8 max-w-xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-2.5 justify-center items-center"
          >
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={button.primary ? 'btn-primary px-6 py-2.5 text-sm' : 'btn-secondary px-6 py-2.5 text-sm'}
              >
                {button.text}
              </a>
            ))}
          </motion.div>
        )}

        {/* Quick Stats */}
        {quickStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap justify-center gap-10"
          >
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-dark-text-primary mb-0.5">{stat.value}</div>
                <div className="text-dark-text-muted text-[11px] uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Highlights stripe */}
      {highlights.length > 0 && (
        <div className="absolute bottom-[10%] left-0 right-0 z-10 bg-white/[0.015] border-y border-white/[0.03]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                  className="text-center"
                >
                  <div className="text-[17px] font-semibold text-dark-text-primary mb-1">{item.title}</div>
                  <div className="text-[13px] text-dark-text-muted leading-snug">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Bottom fade */}
      {highlights.length === 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
      )}
    </section>
  );
};

export default HeroSimple;
