import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const COLUMN_CLASS = {
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  6: 'md:grid-cols-3 lg:grid-cols-6',
};

const IconGrid = ({
  items = [],
  columns = 4,
  variant = 'default',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const columnClass = COLUMN_CLASS[columns] || COLUMN_CLASS[4];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 ${columnClass} ${
        variant === 'bordered' ? 'gap-3' : 'gap-x-2 gap-y-4'
      }`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.35,
            delay: index * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={
            variant === 'bordered'
              ? 'group flex flex-col items-center text-center p-4 transition-all duration-200'
              : 'group flex flex-col items-center text-center px-2 py-2.5 transition-all duration-200'
          }
        >
          {/* Icon container */}
          <div className="w-10 h-10 mb-2.5 flex items-center justify-center rounded-lg flex-shrink-0 transition-colors duration-200">
            <div className="w-5 h-5 flex items-center justify-center text-dark-text-secondary group-hover:text-dark-accent-primary transition-colors duration-200">
              {item.icon}
            </div>
          </div>

          {/* Label */}
          <span className="text-xs font-medium text-dark-text-secondary group-hover:text-dark-text-primary leading-tight transition-colors duration-200">
            {item.label}
          </span>

          {/* Optional description */}
          {item.description && (
            <p className="mt-1 text-xs leading-snug text-dark-text-secondary">
              {item.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default IconGrid;
