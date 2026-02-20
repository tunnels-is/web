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

  const sizeClasses = {
    small: 'w-56 h-56',
    medium: 'w-72 h-72',
    large: 'w-80 h-80',
  };

  const illustrationSizes = {
    small: { width: 224, height: 224 },
    medium: { width: 288, height: 288 },
    large: { width: 320, height: 320 },
  };

  const illustrationFirst = illustrationPosition !== 'right';

  const illustrationEl = Illustration && (
    <motion.div
      className="flex-shrink-0 flex items-center justify-center w-full lg:w-80"
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
    >
      <div className={sizeClasses[illustrationSize]}>
        <Illustration
          width={illustrationSizes[illustrationSize].width}
          height={illustrationSizes[illustrationSize].height}
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );

  const contentEl = (
    <motion.div
      className="flex-1 min-w-0"
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {subtitle && (
        <span className="inline-flex items-center gap-2 text-dark-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">
          <span className="w-5 h-px bg-dark-accent-primary" />
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-dark-text-primary mb-3 tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-dark-text-primary/70 text-sm mb-5 leading-relaxed max-w-lg">
          {description}
        </p>
      )}
      {features.length > 0 && (
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2.5"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <svg
                className="w-4 h-4 text-dark-accent-green mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-dark-text-secondary text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}
      {children}
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className={`py-14 md:py-20 ${dark ? 'bg-dark-surface' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-4xl mx-auto">
          {illustrationFirst ? (
            <>{illustrationEl}{contentEl}</>
          ) : (
            <>{contentEl}{illustrationEl}</>
          )}
        </div>
      </div>
    </section>
  );
};

export default IllustratedSection;
