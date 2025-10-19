import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * TechnicalFeaturesSection - Grid of technical features with category grouping
 *
 * @param {Array} categories - Array of category objects
 * @param {string} categories[].category - Category name
 * @param {Array} categories[].features - Array of feature objects
 * @param {string} categories[].features[].name - Feature name
 * @param {string} categories[].features[].detail - Feature detail
 * @param {number} columns - Number of columns (1 or 2) (default: 2)
 */
const TechnicalFeaturesSection = ({
  categories = [],
  columns = 2
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const gridClass = columns === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2';

  return (
    <div ref={ref} className={`grid ${gridClass} gap-8`}>
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          className="bg-dark-elevated p-8 rounded-2xl border border-dark-border hover:border-dark-accent-primary transition-all duration-300"
        >
          <h3 className="text-3xl font-bold mb-8 text-gradient">
            {category.category}
          </h3>

          <div className="space-y-6">
            {category.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + featureIndex * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-dark-text-primary mb-2">
                    {feature.name}
                  </h4>
                  <p className="text-dark-text-secondary leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechnicalFeaturesSection;
