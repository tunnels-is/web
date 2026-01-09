import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * StaggeredGrid - Masonry/staggered layout for cards
 * Commonly used for use case cards or feature highlights
 *
 * @param {Array} items - Array of item objects
 * @param {string} items[].title - Item title
 * @param {string} items[].description - Item description
 * @param {string} items[].icon - Icon emoji or component
 * @param {string} items[].scenario - Additional scenario text (optional)
 * @param {Array} staggerPattern - Custom stagger pattern [0, 8, 16] in rem units (optional)
 * @param {number} columns - Number of columns (default: 3)
 */
const StaggeredGrid = ({
  items = [],
  staggerPattern = [0, 8, 16],
  columns = 3
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
  }[columns] || 'lg:grid-cols-3';

  const getStaggerClass = (index) => {
    const pattern = staggerPattern[index % staggerPattern.length];
    if (pattern === 0) return 'md:mt-0';
    return `md:mt-${pattern}`;
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${columnClass} gap-6`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotateZ: index % 2 === 0 ? 1 : -1 }}
          className={`bg-dark-surface p-8 rounded-2xl hover:bg-dark-elevated transition-all duration-300 ${
            getStaggerClass(index)
          }`}
        >
          {item.icon && (
            <div className="w-20 h-20 mb-4">{item.icon}</div>
          )}

          <h3 className="text-2xl font-bold text-dark-accent-primary mb-2 leading-tight">
            {item.title}
          </h3>

          <p className="text-base text-dark-text-secondary mb-6 leading-snug">
            {item.description}
          </p>

          {item.scenario && (
            <div className="bg-dark-bg p-4 rounded-lg border-l-4 border-dark-accent-secondary">
              <p className="text-sm text-dark-text-muted italic">
                {item.scenario}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredGrid;
