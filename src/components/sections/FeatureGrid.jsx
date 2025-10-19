import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureGrid - Grid layout for displaying features/benefits cards
 *
 * @param {Array} features - Array of feature objects
 * @param {string} features[].title - Feature title
 * @param {string} features[].description - Feature description
 * @param {string} features[].icon - Icon emoji or component
 * @param {string} features[].gradient - Gradient classes (optional)
 * @param {string} features[].color - Color variant (primary, secondary, tertiary) (optional)
 * @param {number} columns - Number of columns (2, 3, or 4) (default: 3)
 * @param {string} cardStyle - Card style variant: elevated, glass, gradient-border (default: elevated)
 * @param {boolean} staggered - Enable staggered/masonry layout (default: false)
 */
const FeatureGrid = ({
  features = [],
  columns = 3,
  cardStyle = 'elevated',
  staggered = false
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
  }[columns] || 'lg:grid-cols-3';

  const getCardClasses = (feature, index) => {
    let baseClasses = 'relative group p-8 rounded-2xl transition-all duration-300';

    // Staggered offset
    if (staggered) {
      const offsetClass = index % 3 === 0 ? 'md:mt-0' : index % 3 === 1 ? 'md:mt-8' : 'md:mt-16';
      baseClasses += ` ${offsetClass}`;
    }

    // Card style
    switch (cardStyle) {
      case 'glass':
        return `${baseClasses} glass-effect hover:bg-dark-elevated`;
      case 'gradient-border':
        return `${baseClasses} bg-dark-elevated hover:bg-dark-bg border border-dark-border hover:border-dark-accent-primary`;
      case 'elevated':
      default:
        return `${baseClasses} bg-dark-elevated hover:bg-dark-bg hover:shadow-xl hover:shadow-dark-accent-primary/20`;
    }
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${columnClass} gap-8`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -15, scale: 1.03 }}
          className={getCardClasses(feature, index)}
        >
          {/* Gradient Border Effect (if applicable) */}
          {cardStyle === 'gradient-border' && feature.gradient && (
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
          )}

          <div className="relative">
            {/* Icon */}
            {feature.icon && (
              <div className="text-6xl mb-6">{feature.icon}</div>
            )}

            {/* Title */}
            <h3 className={`text-2xl font-bold mb-4 ${
              feature.color
                ? `text-dark-accent-${feature.color}`
                : 'text-dark-text-primary group-hover:text-gradient'
            } transition-all duration-300`}>
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-dark-text-secondary text-lg leading-relaxed">
              {feature.description}
            </p>

            {/* Scenario (if exists - for use case cards) */}
            {feature.scenario && (
              <div className="bg-dark-bg p-4 rounded-lg border-l-4 border-dark-accent-secondary mt-6">
                <p className="text-sm text-dark-text-muted italic">
                  {feature.scenario}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
