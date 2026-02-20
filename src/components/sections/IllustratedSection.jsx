import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

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
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-bold mb-3 text-dark-text-primary tracking-tight"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-dark-accent-primary mb-4 font-medium"
        >
          {subtitle}
        </motion.p>
      )}

      {descriptions.map((desc, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm text-dark-text-primary/70 mb-3 leading-relaxed"
        >
          {desc}
        </motion.p>
      ))}

      {features.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mt-4"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-dark-accent-tertiary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
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
      initial={{ opacity: 0, scale: 0.97 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex-1 flex items-center justify-center ${sizeClasses[illustrationSize]}`}
    >
      <Illustration className="w-full h-auto" />
    </motion.div>
  );

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row gap-10 items-center ${className}`}>
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
