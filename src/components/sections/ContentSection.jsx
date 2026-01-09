import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

/**
 * ContentSection - Wrapper for all content sections with consistent spacing
 *
 * @param {string} background - Background style: dark-bg, dark-surface, dark-elevated, gradient, transparent (default: transparent)
 * @param {string} padding - Padding style: normal, large, small (default: normal)
 * @param {React.ReactNode} children - Content to render
 * @param {string} className - Additional CSS classes
 * @param {boolean} animated - Enable scroll animation (default: true)
 */
const ContentSection = ({
  background = 'transparent',
  padding = 'normal',
  children,
  className = '',
  animated = true
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const backgroundClasses = {
    'dark-bg': 'bg-dark-bg',
    'dark-surface': 'bg-dark-surface',
    'dark-elevated': 'bg-dark-elevated',
    'gradient': 'bg-dark-surface',
    'transparent': ''
  }[background] || '';

  const paddingClasses = {
    'small': 'py-16',
    'normal': 'py-24 md:py-32',
    'large': 'py-32 md:py-40'
  }[padding] || 'py-24 md:py-32';

  const content = (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );

  if (!animated) {
    return (
      <section className={`${backgroundClasses} ${paddingClasses} ${className}`}>
        {content}
      </section>
    );
  }

  return (
    <section ref={ref} className={`${backgroundClasses} ${paddingClasses} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.div>
    </section>
  );
};

export default ContentSection;
