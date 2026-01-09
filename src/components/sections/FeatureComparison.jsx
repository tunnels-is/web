import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureComparison - Comparison table/cards for comparing options
 *
 * @param {Array} comparisonItems - Array of comparison objects
 * @param {string} comparisonItems[].feature - Feature name
 * @param {string} comparisonItems[].commercial - Commercial option value
 * @param {string} comparisonItems[].personal - Personal option value
 * @param {string} comparisonItems[].winner - Which option wins: 'personal', 'commercial', or null
 * @param {string} option1Label - Label for first option (default: "Commercial VPNs")
 * @param {string} option2Label - Label for second option (default: "Your Personal VPN")
 */
const FeatureComparison = ({
  comparisonItems = [],
  option1Label = "Commercial VPNs",
  option2Label = "Your Personal VPN"
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-4">
      {comparisonItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.04, ease: [0.4, 0, 0.2, 1] }}
          className={`group bg-dark-surface rounded-2xl overflow-hidden hover:bg-dark-elevated border border-transparent hover:border-dark-accent-primary/30 transition-all duration-150 ${
            item.winner === 'personal'
              ? 'ring-2 ring-dark-accent-primary/50'
              : item.winner === 'commercial'
              ? 'ring-2 ring-dark-accent-secondary/50'
              : ''
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 items-center">
            {/* Feature Name */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-dark-text-primary flex items-center gap-3 group-hover:text-dark-accent-primary transition-colors duration-150">
                {item.winner === 'personal' && (
                  <span className="text-3xl">🏆</span>
                )}
                {item.winner === 'commercial' && (
                  <span className="text-3xl">🏆</span>
                )}
                {item.feature}
              </h3>
            </div>

            {/* Commercial VPN */}
            <div className={`p-6 rounded-xl ${
              item.winner === 'commercial'
                ? 'bg-dark-accent-secondary/20'
                : 'bg-dark-bg'
            }`}>
              <p className="text-sm text-dark-text-muted mb-2 uppercase tracking-wider">{option1Label}</p>
              <p className={`text-lg ${
                item.winner === 'commercial' ? 'text-dark-text-primary font-semibold' : 'text-dark-text-secondary'
              }`}>
                {item.commercial}
              </p>
            </div>

            {/* Personal VPN */}
            <div className={`p-6 rounded-xl ${
              item.winner === 'personal'
                ? 'bg-dark-accent-primary/20'
                : 'bg-dark-bg'
            }`}>
              <p className="text-sm text-dark-text-muted mb-2 uppercase tracking-wider">{option2Label}</p>
              <p className={`text-lg ${
                item.winner === 'personal' ? 'text-dark-text-primary font-semibold' : 'text-dark-text-secondary'
              }`}>
                {item.personal}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureComparison;
