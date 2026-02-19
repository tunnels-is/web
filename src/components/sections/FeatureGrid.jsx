import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureGrid = ({
  features = [],
  columns = 3,
  cardStyle = 'elevated',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div ref={ref} className={`grid grid-cols-1 ${columnClass} gap-5`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.04, ease: [0.4, 0, 0.2, 1] }}
          className={`group p-6 rounded-xl border transition-all duration-200 ${
            cardStyle === 'glass'
              ? 'bg-dark-card/50 border-dark-border hover:border-dark-border-light hover:bg-dark-card'
              : 'bg-dark-card border-dark-border hover:border-dark-border-light hover:bg-dark-elevated'
          }`}
        >
          {/* Icon */}
          {feature.icon && (
            <div className="w-12 h-12 mb-4">
              {feature.icon}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 text-dark-text-primary group-hover:text-dark-accent-primary transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-dark-text-secondary text-sm leading-relaxed">
            {feature.description}
          </p>

          {/* Scenario (if exists) */}
          {feature.scenario && (
            <div className="mt-4 p-3 rounded-lg bg-dark-bg/50 border-l-2 border-dark-accent-primary/40">
              <p className="text-xs text-dark-text-muted italic">
                {feature.scenario}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
