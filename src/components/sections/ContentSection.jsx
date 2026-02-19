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
    'small': 'py-10 md:py-14',
    'normal': 'py-14 md:py-20',
    'large': 'py-20 md:py-28'
  }[padding] || 'py-14 md:py-20';

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
        initial={{ opacity: 0, y: 16 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {content}
      </motion.div>
    </section>
  );
};

export default ContentSection;
