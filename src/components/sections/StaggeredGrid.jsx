import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const StaggeredGrid = ({
  items = [],
  columns = 3
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div ref={ref} className={`grid grid-cols-1 ${columnClass} gap-3`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          className="group p-5 transition-all duration-200"
        >
          {item.icon && (
            <div className="w-10 h-10 mb-3">{item.icon}</div>
          )}

          <h3 className="text-base font-semibold text-dark-text-primary mb-1.5 group-hover:text-dark-accent-primary transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-dark-text-secondary leading-relaxed mb-3">
            {item.description}
          </p>

          {item.scenario && (
            <p className="text-xs text-dark-text-muted italic leading-relaxed">
              {item.scenario}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredGrid;
