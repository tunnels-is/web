import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureSpotlight - Large, visually prominent single-feature highlight component.
 * Designed to make one feature really stand out, like a "hero" for a specific feature.
 *
 * @param {string} label - Small uppercase label (e.g. "Core Technology")
 * @param {string} title - Large bold title
 * @param {string} description - Paragraph text
 * @param {string[]} features - Bullet point strings
 * @param {{ value: string, label: string }} [metric] - Optional large stat to display
 * @param {JSX.Element} [icon] - Optional icon element
 * @param {'blue'|'teal'|'green'} [accent='blue'] - Accent color
 * @param {'left'|'center'} [position='left'] - Layout position
 */
const FeatureSpotlight = ({
  label,
  title,
  description,
  features = [],
  metric,
  icon,
  accent = 'blue',
  position = 'left',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const accentColors = {
    blue: {
      label: 'text-dark-accent-primary',
      metric: 'text-dark-accent-primary',
      check: 'text-dark-accent-primary',
      topLine: 'from-dark-accent-primary to-blue-400',
      iconBg: 'bg-gradient-to-br from-dark-accent-primary/15 to-dark-accent-primary/5',
      iconBorder: 'border-dark-accent-primary/20',
      iconGlow: 'shadow-dark-accent-primary/10',
      cardBorder: 'border-dark-accent-primary/15',
    },
    teal: {
      label: 'text-dark-accent-tertiary',
      metric: 'text-dark-accent-tertiary',
      check: 'text-dark-accent-tertiary',
      topLine: 'from-dark-accent-tertiary to-cyan-400',
      iconBg: 'bg-gradient-to-br from-dark-accent-tertiary/15 to-dark-accent-tertiary/5',
      iconBorder: 'border-dark-accent-tertiary/20',
      iconGlow: 'shadow-dark-accent-tertiary/10',
      cardBorder: 'border-dark-accent-tertiary/15',
    },
    green: {
      label: 'text-dark-accent-green',
      metric: 'text-dark-accent-green',
      check: 'text-dark-accent-green',
      topLine: 'from-dark-accent-green to-emerald-400',
      iconBg: 'bg-gradient-to-br from-dark-accent-green/15 to-dark-accent-green/5',
      iconBorder: 'border-dark-accent-green/20',
      iconGlow: 'shadow-dark-accent-green/10',
      cardBorder: 'border-dark-accent-green/15',
    },
  };

  const colors = accentColors[accent] || accentColors.blue;

  const CheckIcon = () => (
    <svg
      className={`w-4 h-4 ${colors.check} mt-0.5 flex-shrink-0`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );

  if (position === 'center') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
      >
        <div className="py-8 md:py-10 text-center">
          {/* Large metric above title */}
          {metric && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <div className={`text-5xl md:text-6xl font-bold ${colors.metric} leading-none tracking-tight`}>
                {metric.value}
              </div>
              <div className="text-sm text-dark-text-secondary mt-1.5 font-medium">{metric.label}</div>
            </motion.div>
          )}

          {/* Label */}
          {label && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: metric ? 0.18 : 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`text-xs uppercase tracking-widest font-semibold ${colors.label} mb-3`}
            >
              {label}
            </motion.p>
          )}

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: metric ? 0.23 : 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-bold text-dark-text-primary tracking-tight mb-3"
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: metric ? 0.28 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-dark-text-secondary leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {description}
            </motion.p>
          )}

          {/* Features — 2-column grid */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: (metric ? 0.33 : 0.25) + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-2.5"
                >
                  <CheckIcon />
                  <span className="text-sm text-dark-text-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // position === 'left' (default)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden"
    >
      <div className="py-8 md:py-10 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left side — text content */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          {label && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`text-xs uppercase tracking-widest font-semibold ${colors.label} mb-3`}
            >
              {label}
            </motion.p>
          )}

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-bold text-dark-text-primary tracking-tight mb-3"
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-dark-text-secondary leading-relaxed mb-6 max-w-lg"
            >
              {description}
            </motion.p>
          )}

          {/* Feature bullets */}
          {features.length > 0 && (
            <ul className="space-y-2.5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.23 + index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-2.5"
                >
                  <CheckIcon />
                  <span className="text-sm text-dark-text-secondary">{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Right side — metric or icon */}
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
          {metric ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-right"
            >
              <div
                className={`text-4xl md:text-5xl font-bold ${colors.metric} leading-none tracking-tight`}
              >
                {metric.value}
              </div>
              <div className="text-sm text-dark-text-secondary mt-2 font-medium">{metric.label}</div>
            </motion.div>
          ) : icon ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`w-16 h-16 flex items-center justify-center rounded-2xl border shadow-lg ${colors.iconBg} ${colors.iconBorder} ${colors.iconGlow}`}
              aria-hidden="true"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {icon}
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSpotlight;
