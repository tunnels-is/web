import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureGrid = ({
  features = [],
  columns = 3,
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div ref={ref} className={`grid grid-cols-1 ${columnClass} gap-3`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
          className="group p-5 transition-all duration-200"
        >
          {/* Icon */}
          {feature.icon && (
            <div className="w-10 h-10 mb-3">
              {feature.icon}
            </div>
          )}

          {/* Title */}
          <h3 className="text-base font-semibold mb-1.5 text-dark-text-primary group-hover:text-dark-accent-primary transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-dark-text-secondary text-sm leading-relaxed">
            {feature.description}
          </p>

          {/* Scenario (if exists) */}
          {feature.scenario && (
            <p className="mt-3 text-xs text-dark-text-muted italic leading-relaxed">
              {feature.scenario}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
