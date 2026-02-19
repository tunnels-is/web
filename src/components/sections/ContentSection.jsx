import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

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
    'transparent': ''
  }[background] || '';

  const paddingClasses = {
    'small': 'py-12 md:py-16',
    'normal': 'py-16 md:py-24',
    'large': 'py-24 md:py-32'
  }[padding] || 'py-16 md:py-24';

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {content}
      </motion.div>
    </section>
  );
};

export default ContentSection;
