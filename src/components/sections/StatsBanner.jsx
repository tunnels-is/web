import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const StatsBanner = ({
  stats = [],
  title,
  subtitle,
  variant = 'default'
}) => {
  const [ref, isVisible] = useScrollAnimation();

  if (variant === 'card') {
    return (
      <div ref={ref}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8"
          >
            {title && <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{title}</h2>}
            {subtitle && <p className="text-sm text-dark-text-secondary max-w-xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 text-center group transition-all duration-200"
            >
              <div className="text-2xl md:text-3xl font-bold text-dark-text-primary mb-1 group-hover:text-dark-accent-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-[11px] text-dark-text-muted uppercase tracking-widest font-medium">
                {stat.label}
              </div>
              {stat.description && (
                <p className="text-xs text-dark-text-secondary mt-1.5">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-dark-border/30">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 py-5 text-center"
          >
            {stat.icon && (
              <div className="w-8 h-8 mx-auto mb-2 text-dark-accent-primary">{stat.icon}</div>
            )}
            <div className="text-xl md:text-2xl font-bold text-dark-text-primary mb-0.5">
              {stat.value}
            </div>
            <div className="text-[11px] text-dark-text-muted uppercase tracking-widest font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
