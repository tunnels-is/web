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
    let baseClasses = 'relative group p-8 rounded-2xl transition-all duration-150';

    // Staggered offset
    if (staggered) {
      const offsetClass = index % 3 === 0 ? 'md:mt-0' : index % 3 === 1 ? 'md:mt-8' : 'md:mt-16';
      baseClasses += ` ${offsetClass}`;
    }

    // Card style
    switch (cardStyle) {
      case 'glass':
        return `${baseClasses} glass-effect`;
      case 'gradient-border':
        return `${baseClasses} bg-dark-bg/0 backdrop-blur-sm`;
      case 'elevated':
      default:
        return `${baseClasses}`;
    }
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${columnClass} gap-8`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={getCardClasses(feature, index)}
        >
          <div className="relative">
            {/* Icon */}
            {feature.icon && (
              <div className="w-20 h-20 mb-4">
                {feature.icon}
              </div>
            )}

            {/* Title */}
            <h3 className={`text-2xl font-bold mb-2 leading-tight relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-dark-accent-primary after:transition-all after:duration-150 group-hover:after:w-full ${feature.color
                ? `text-dark-accent-${feature.color}`
                : 'text-dark-text-primary'
              }`}>
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-dark-text-secondary text-base leading-snug">
              {feature.description}
            </p>

            {/* Scenario (if exists - for use case cards) */}
            {feature.scenario && (
              <div className="bg-dark-bg/50 backdrop-blur-sm p-4 rounded-lg border-l-4 border-dark-accent-secondary mt-6">
                <p className="text-sm text-dark-text-muted italic">
                  {feature.scenario}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
