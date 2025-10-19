import { motion } from 'framer-motion';

/**
 * FeatureCard - Individual feature card component
 *
 * @param {string} title - Feature title
 * @param {string} content - Feature content/description
 * @param {string} description - Alternative to content
 * @param {string} icon - Icon emoji or component
 * @param {string} gradient - Gradient classes (optional)
 * @param {boolean} hoverEffect - Enable hover effects (default: true)
 * @param {number} delay - Animation delay (default: 0)
 * @param {string} variant - Card variant: glass, elevated, simple (default: glass)
 */
const FeatureCard = ({
  title,
  content,
  description,
  icon,
  gradient,
  hoverEffect = true,
  delay = 0,
  variant = 'glass'
}) => {
  const text = content || description;

  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-dark-elevated hover:bg-dark-bg hover:shadow-xl hover:shadow-dark-accent-primary/20';
      case 'simple':
        return 'bg-dark-surface hover:bg-dark-elevated';
      case 'glass':
      default:
        return 'glass-effect hover:bg-dark-elevated';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`p-6 rounded-xl transition-colors duration-200 ${getVariantClasses()}`}
    >
      {icon && (
        <div className="w-10 h-10 mb-4 text-dark-accent-primary">{icon}</div>
      )}

      <h3 className={`text-xl font-semibold mb-2 leading-tight ${
        gradient ? 'text-gradient' : 'text-dark-accent-primary'
      }`}>
        {title}
      </h3>

      <p className="text-dark-text-secondary leading-snug">
        {text}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
