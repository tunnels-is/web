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
    <div ref={ref} className={`grid grid-cols-1 ${columnClass} gap-5`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.04 }}
          className="group p-6 rounded-xl bg-dark-card hover:bg-dark-elevated transition-all duration-200"
        >
          {item.icon && (
            <div className="w-12 h-12 mb-4">{item.icon}</div>
          )}

          <h3 className="text-lg font-semibold text-dark-text-primary mb-2 group-hover:text-dark-accent-primary transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-dark-text-secondary leading-relaxed mb-4">
            {item.description}
          </p>

          {item.scenario && (
            <div className="p-3 rounded-lg bg-dark-bg/50">
              <p className="text-xs text-dark-text-muted italic">
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
