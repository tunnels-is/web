import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * PricingHighlight - Bold full-width highlight section with gradient background
 *
 * @param {string} title - Main title
 * @param {string} description - Description text
 * @param {string} icon - Icon emoji (optional)
 * @param {Array} highlights - Array of highlight objects with title and description
 * @param {string} backgroundGradient - Custom gradient classes (default: from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary)
 */
const PricingHighlight = ({
  title,
  description,
  icon,
  highlights = [],
  backgroundGradient = 'from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary'
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className={`py-32 bg-gradient-to-r ${backgroundGradient} relative overflow-hidden`}>
      {/* Animated Background Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0L100 50L50 100L0 50Z\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")',
          backgroundSize: '100px 100px'
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {icon && (
            <div className="flex justify-center mb-8">{icon}</div>
          )}

          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            {title}
          </h2>

          {description && (
            <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-snug opacity-90">
              {description}
            </p>
          )}

          {highlights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{item.title}</h3>
                  <p className="text-lg opacity-90 leading-snug">{item.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHighlight;
