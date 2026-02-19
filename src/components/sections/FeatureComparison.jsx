import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeatureComparison = ({
  comparisonItems = [],
  option1Label = "Commercial VPNs",
  option2Label = "Your Personal VPN"
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-2">
      {comparisonItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: index * 0.03 }}
          className="overflow-hidden transition-all duration-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 items-center">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-dark-text-primary flex items-center gap-2">
                {item.feature}
              </h3>
            </div>

            <div className={`p-3 rounded-lg ${
              item.winner === 'commercial' ? 'bg-dark-accent-secondary/8 border border-dark-accent-secondary/15' : 'bg-dark-bg/40'
            }`}>
              <p className="text-[11px] text-dark-text-muted mb-0.5 uppercase tracking-wider font-medium">{option1Label}</p>
              <p className={`text-sm ${
                item.winner === 'commercial' ? 'text-dark-text-primary font-medium' : 'text-dark-text-secondary'
              }`}>
                {item.commercial}
              </p>
            </div>

            <div className={`p-3 rounded-lg ${
              item.winner === 'personal' ? 'bg-dark-accent-primary/8 border border-dark-accent-primary/15' : 'bg-dark-bg/40'
            }`}>
              <p className="text-[11px] text-dark-text-muted mb-0.5 uppercase tracking-wider font-medium">{option2Label}</p>
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
