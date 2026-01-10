import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const IllustratedSection = ({
  title,
  subtitle,
  description,
  features = [],
  illustration: Illustration,
  illustrationPosition = 'right',
  illustrationSize = 'medium',
  children,
  className = '',
  dark = true,
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  // Bigger illustration sizes
  const sizeClasses = {
    small: 'w-64 h-64',
    medium: 'w-80 h-80',
    large: 'w-96 h-96',
  };

  const illustrationSizes = {
    small: { width: 256, height: 256 },
    medium: { width: 320, height: 320 },
    large: { width: 384, height: 384 },
  };

  const contentOrder = illustrationPosition === 'left' ? 'order-2' : 'order-1';
  const illustrationOrder = illustrationPosition === 'left' ? 'order-1' : 'order-2';

  return (
    <section
      ref={ref}
      className={`py-16 md:py-20 ${dark ? 'bg-dark-surface' : 'bg-dark-elevated'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Side */}
          <motion.div
            className={`flex-1 ${contentOrder}`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {subtitle && (
              <span className="text-dark-accent-tertiary text-sm font-medium uppercase tracking-wider mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text-primary mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-dark-text-secondary text-lg mb-6 leading-relaxed">
                {description}
              </p>
            )}
            {features.length > 0 && (
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <svg
                      className="w-5 h-5 text-dark-accent-tertiary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dark-text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            )}
            {children}
          </motion.div>

          {/* Illustration Side */}
          {Illustration && (
            <motion.div
              className={`flex-1 flex justify-center ${illustrationOrder}`}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
              <div className={sizeClasses[illustrationSize]}>
                <Illustration
                  width={illustrationSizes[illustrationSize].width}
                  height={illustrationSizes[illustrationSize].height}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IllustratedSection;
