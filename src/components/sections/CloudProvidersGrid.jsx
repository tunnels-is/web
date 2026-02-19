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
    <div ref={ref} className={`grid grid-cols-1 ${gridClass} gap-3`}>
      {providers.map((provider, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.04 }}
          className="group relative p-5 transition-all duration-200"
        >
          {provider.recommended && (
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span className="px-2.5 py-0.5 bg-gradient-to-r from-dark-accent-primary to-blue-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                Recommended
              </span>
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-lg font-bold text-dark-text-primary mb-0.5 group-hover:text-dark-accent-primary transition-colors">
              {provider.name}
            </h3>
            <div className="text-xl font-bold text-dark-accent-primary">
              {provider.price}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="p-2.5">
              <p className="text-[11px] text-dark-text-muted mb-0.5 uppercase tracking-wider font-medium">Specs</p>
              <p className="text-dark-text-secondary text-sm">{provider.specs}</p>
            </div>
            <div className="p-2.5">
              <p className="text-[11px] text-dark-text-muted mb-0.5 uppercase tracking-wider font-medium">Locations</p>
              <p className="text-dark-text-secondary text-sm">{provider.locations}</p>
            </div>
          </div>

          <div className="space-y-1.5">
            {provider.pros.map((pro, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-dark-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
