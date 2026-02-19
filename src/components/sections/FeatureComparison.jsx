import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureComparison = ({
  comparisonItems = [],
  option1Label = "Commercial VPNs",
  option2Label = "Your Personal VPN"
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-3">
      {comparisonItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: index * 0.04 }}
          className={`rounded-xl bg-dark-card border overflow-hidden transition-all ${
            item.winner === 'personal'
              ? 'border-dark-accent-primary/40'
              : item.winner === 'commercial'
              ? 'border-dark-accent-secondary/40'
              : 'border-dark-border'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 items-center">
            <div className="md:col-span-1">
              <h3 className="text-base font-semibold text-dark-text-primary flex items-center gap-2">
                {(item.winner === 'personal' || item.winner === 'commercial') && (
                  <span className="text-lg">*</span>
                )}
                {item.feature}
              </h3>
            </div>

            <div className={`p-4 rounded-lg ${
              item.winner === 'commercial' ? 'bg-dark-accent-secondary/10' : 'bg-dark-bg/50'
            }`}>
              <p className="text-xs text-dark-text-muted mb-1 uppercase tracking-wider">{option1Label}</p>
              <p className={`text-sm ${
                item.winner === 'commercial' ? 'text-dark-text-primary font-medium' : 'text-dark-text-secondary'
              }`}>
                {item.commercial}
              </p>
            </div>

            <div className={`p-4 rounded-lg ${
              item.winner === 'personal' ? 'bg-dark-accent-primary/10' : 'bg-dark-bg/50'
            }`}>
              <p className="text-xs text-dark-text-muted mb-1 uppercase tracking-wider">{option2Label}</p>
              <p className={`text-sm ${
                item.winner === 'personal' ? 'text-dark-text-primary font-medium' : 'text-dark-text-secondary'
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
