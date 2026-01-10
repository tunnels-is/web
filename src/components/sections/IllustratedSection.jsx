import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * IllustratedSection - A section with content on one side and illustration on the other
 *
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle (optional)
 * @param {string|Array} description - Description text or array of paragraphs
 * @param {Array} features - Array of feature items with title and description (optional)
 * @param {React.Component} illustration - Illustration component
 * @param {string} illustrationPosition - 'left' or 'right' (default: 'right')
 * @param {string} illustrationSize - 'small', 'medium', 'large' (default: 'medium')
 * @param {React.Node} children - Additional content (optional)
 * @param {string} className - Additional CSS classes
 */
const IllustratedSection = ({
  title,
  subtitle,
  description,
  features = [],
  illustration: Illustration,
  illustrationPosition = 'right',
  illustrationSize = 'medium',
  children,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const sizeClasses = {
    small: 'max-w-xs',
    medium: 'max-w-md',
    large: 'max-w-lg'
  };

  const descriptions = Array.isArray(description) ? description : description ? [description] : [];

  const contentSection = (
    <div className="flex-1">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl font-bold mb-4 text-dark-text-primary"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl text-dark-accent-primary mb-6"
        >
          {subtitle}
        </motion.p>
      )}

      {descriptions.map((desc, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg text-dark-text-secondary mb-4 leading-relaxed"
        >
          {desc}
        </motion.p>
      ))}

      {features.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-4 mt-6"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-6 h-6 text-dark-accent-tertiary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="font-semibold text-dark-text-primary">{feature.title}</span>
                {feature.description && (
                  <span className="text-dark-text-secondary"> - {feature.description}</span>
                )}
              </div>
            </li>
          ))}
        </motion.ul>
      )}

      {children}
    </div>
  );

  const illustrationSection = Illustration && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={`flex-1 flex items-center justify-center ${sizeClasses[illustrationSize]}`}
    >
      <Illustration className="w-full h-auto" />
    </motion.div>
  );

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row gap-12 items-center ${className}`}>
      {illustrationPosition === 'left' ? (
        <>
          {illustrationSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {illustrationSection}
        </>
      )}
    </div>
  );
};

export default IllustratedSection;
