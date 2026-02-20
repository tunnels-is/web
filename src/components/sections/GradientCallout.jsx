import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const GradientCallout = ({
  title,
  description,
  features = [],
  button,
  icon,
  accent = 'blue',
  variant = 'default',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const accentColors = {
    blue: {
      border: 'border-dark-accent-primary/20',
      bg: 'bg-gradient-to-br from-dark-accent-primary/5 via-dark-card to-dark-card',
      glow: 'shadow-dark-accent-primary/5',
      text: 'text-dark-accent-primary',
      line: 'from-dark-accent-primary to-blue-400',
    },
    teal: {
      border: 'border-dark-accent-tertiary/20',
      bg: 'bg-gradient-to-br from-dark-accent-tertiary/5 via-dark-card to-dark-card',
      glow: 'shadow-dark-accent-tertiary/5',
      text: 'text-dark-accent-tertiary',
      line: 'from-dark-accent-tertiary to-cyan-400',
    },
    green: {
      border: 'border-dark-accent-green/20',
      bg: 'bg-gradient-to-br from-dark-accent-green/5 via-dark-card to-dark-card',
      glow: 'shadow-dark-accent-green/5',
      text: 'text-dark-accent-green',
      line: 'from-dark-accent-green to-emerald-400',
    },
  };

  const colors = accentColors[accent] || accentColors.blue;

  if (variant === 'banner') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
      >
        <div className="py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          {icon && (
            <div className={`w-12 h-12 flex-shrink-0 ${colors.text}`}>{icon}</div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-dark-text-primary mb-1.5">{title}</h3>
            <p className="text-sm text-dark-text-primary/70 leading-relaxed">{description}</p>
          </div>
          {button && (
            <a
              href={button.href}
              className={button.primary ? 'btn-primary text-sm px-5 py-2 flex-shrink-0' : 'btn-secondary text-sm px-5 py-2 flex-shrink-0'}
            >
              {button.text}
            </a>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden"
    >
      <div className="py-6 md:py-8">
        {icon && (
          <div className={`w-10 h-10 mb-4 ${colors.text}`}>{icon}</div>
        )}
        <h3 className="text-xl font-bold text-dark-text-primary mb-2">{title}</h3>
        <p className="text-sm text-dark-text-primary/70 leading-relaxed mb-5 max-w-2xl">{description}</p>

        {features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-dark-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {button && (
          <a
            href={button.href}
            className={button.primary ? 'btn-primary text-sm px-5 py-2' : 'btn-secondary text-sm px-5 py-2'}
          >
            {button.text}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default GradientCallout;
