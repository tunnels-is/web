import { motion } from 'framer-motion';

/**
 * FeatureCard - Individual feature card component
 *
 * @param {string} title - Feature title
 * @param {string} content - Feature content/description
 * @param {string} description - Alternative to content
 * @param {string} icon - Icon emoji or component
 * @param {boolean} hoverEffect - Enable hover effects (default: true)
 * @param {number} delay - Animation delay (default: 0)
 * @param {string} variant - Card variant: glass, elevated, simple (default: glass)
 */
const FeatureCard = ({
  title,
  content,
  description,
  icon,
  hoverEffect = true,
  delay = 0,
  variant = 'simple'
}) => {
  const text = content || description;

  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-dark-elevated';
      case 'simple':
        return '';
      case 'glass':
      default:
        return 'glass-effect';
    }
  };

  return (
    <div
      className={`group p-6 rounded-xl ${getVariantClasses()}`}
    >
      {icon && (
        <div className="w-16 h-16 mb-4">{icon}</div>
      )}

      <h3 className="text-xl font-semibold mb-2 leading-tight relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-150 group-hover:after:w-full text-dark-accent-primary">
        {title}
      </h3>

      <p className="text-dark-text-secondary leading-snug">
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;
