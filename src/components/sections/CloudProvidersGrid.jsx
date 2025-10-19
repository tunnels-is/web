import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * CloudProvidersGrid - Provider comparison cards with recommended badges
 *
 * @param {Array} providers - Array of provider objects
 * @param {string} providers[].name - Provider name
 * @param {string} providers[].price - Pricing info
 * @param {string} providers[].specs - Server specifications
 * @param {string} providers[].locations - Available locations
 * @param {Array} providers[].pros - Array of pros/benefits
 * @param {boolean} providers[].recommended - Is recommended
 * @param {number} columns - Number of columns (default: 3)
 */
const CloudProvidersGrid = ({
  providers = [],
  columns = 3
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
  }[columns] || 'lg:grid-cols-3';

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 ${gridClass} gap-8`}>
      {providers.map((provider, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.03 }}
          className={`relative bg-dark-elevated p-8 rounded-2xl border-2 transition-all duration-300 ${
            provider.recommended
              ? 'border-dark-accent-primary hover:shadow-2xl hover:shadow-dark-accent-primary/20'
              : 'border-dark-border hover:border-dark-accent-secondary'
          }`}
        >
          {provider.recommended && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary text-white text-sm font-bold rounded-full shadow-lg">
                RECOMMENDED
              </span>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-3xl font-bold text-dark-text-primary mb-2">
              {provider.name}
            </h3>
            <div className="text-4xl font-bold text-gradient mb-4">
              {provider.price}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-dark-bg p-4 rounded-lg">
              <p className="text-sm text-dark-text-muted mb-2">Specs</p>
              <p className="text-dark-text-secondary">{provider.specs}</p>
            </div>
            <div className="bg-dark-bg p-4 rounded-lg">
              <p className="text-sm text-dark-text-muted mb-2">Locations</p>
              <p className="text-dark-text-secondary">{provider.locations}</p>
            </div>
          </div>

          <div className="space-y-2">
            {provider.pros.map((pro, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-dark-accent-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark-text-secondary">{pro}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CloudProvidersGrid;
