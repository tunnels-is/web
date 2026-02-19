import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TechnicalFeaturesSection = ({
  categories = [],
  columns = 2
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const gridClass = columns === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2';

  return (
    <div ref={ref} className={`grid ${gridClass} gap-3`}>
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: categoryIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="p-5 transition-colors"
        >
          <h3 className="text-base font-bold mb-4">{category.category}</h3>

          <div className="space-y-4">
            {category.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-dark-accent-primary/15 rounded-md flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-dark-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-dark-text-primary mb-0.5">
                    {feature.name}
                  </h4>
                  <p className="text-dark-text-secondary text-xs leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechnicalFeaturesSection;
