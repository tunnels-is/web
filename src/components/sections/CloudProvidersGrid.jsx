import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CloudProvidersGrid = ({
  providers = [],
  columns = 3
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div ref={ref} className={`grid grid-cols-1 ${gridClass} gap-5`}>
      {providers.map((provider, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`group relative p-6 rounded-xl transition-all duration-200 ${
            provider.recommended
              ? 'bg-dark-card shadow-md shadow-dark-accent-primary/10 ring-1 ring-dark-accent-primary/30'
              : 'bg-dark-card hover:bg-dark-elevated'
          }`}
        >
          {provider.recommended && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-dark-accent-primary text-white text-xs font-semibold rounded-full">
                RECOMMENDED
              </span>
            </div>
          )}

          <div className="mb-5">
            <h3 className="text-xl font-bold text-dark-text-primary mb-1 group-hover:text-dark-accent-primary transition-colors">
              {provider.name}
            </h3>
            <div className="text-2xl font-bold text-dark-accent-primary">
              {provider.price}
            </div>
          </div>

          <div className="space-y-3 mb-5">
            <div className="p-3 rounded-lg bg-dark-bg/50">
              <p className="text-xs text-dark-text-muted mb-0.5">Specs</p>
              <p className="text-dark-text-secondary text-sm">{provider.specs}</p>
            </div>
            <div className="p-3 rounded-lg bg-dark-bg/50">
              <p className="text-xs text-dark-text-muted mb-0.5">Locations</p>
              <p className="text-dark-text-secondary text-sm">{provider.locations}</p>
            </div>
          </div>

          <div className="space-y-2">
            {provider.pros.map((pro, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-dark-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark-text-secondary text-sm">{pro}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CloudProvidersGrid;
