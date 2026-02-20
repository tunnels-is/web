import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const BentoGrid = ({
  items = [],
  layout = 'default',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  if (layout === 'featured') {
    const [featured, ...rest] = items;
    return (
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Featured large card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="row-span-2 p-6 transition-all duration-200 flex flex-col justify-between"
        >
          {featured.icon && <div className="w-10 h-10 mb-4">{featured.icon}</div>}
          <div>
            <h3 className="text-lg font-bold text-dark-text-primary mb-2">{featured.title}</h3>
            <p className="text-sm text-dark-text-primary/70 leading-relaxed mb-4">{featured.description}</p>
            {featured.features && (
              <ul className="space-y-2">
                {featured.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-text-secondary">
                    <svg className="w-3.5 h-3.5 text-dark-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {featured.highlight && (
            <div className="mt-4 inline-flex">
              <span className="text-xs text-dark-accent-primary font-medium">{featured.highlight}</span>
            </div>
          )}
        </motion.div>

        {/* Smaller cards */}
        {rest.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: (index + 1) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 transition-all duration-200 group"
          >
            {item.icon && <div className="w-8 h-8 mb-2.5">{item.icon}</div>}
            <h3 className="text-base font-semibold text-dark-text-primary mb-1 group-hover:text-dark-accent-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-dark-text-secondary leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  // Default asymmetric 2-1-1 layout
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {items.map((item, index) => {
        const isWide = index === 0 || index === 3;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className={`p-5 transition-all duration-200 group ${
              isWide ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              {item.icon && (
                <div className="w-10 h-10 flex-shrink-0">{item.icon}</div>
              )}
              <div>
                <h3 className="text-base font-semibold text-dark-text-primary mb-1 group-hover:text-dark-accent-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
