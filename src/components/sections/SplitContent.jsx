import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const SplitContent = ({
  title,
  description,
  features = [],
  cards = [],
  image,
  position = 'right',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const textContent = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{title}</h2>
      {description && (
        <p className="text-sm text-dark-text-secondary leading-relaxed mb-5 max-w-lg">{description}</p>
      )}
      {features.length > 0 && (
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-dark-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-dark-text-secondary text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  const visualContent = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1"
    >
      {cards.length > 0 ? (
        <div className="space-y-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: position === 'right' ? 8 : -8 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.15 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="py-3"
              >
                <div className="flex items-start gap-3">
                  {card.icon && <div className="w-8 h-8 flex-shrink-0">{card.icon}</div>}
                  <div>
                    <h4 className="text-sm font-semibold text-dark-text-primary mb-0.5">{card.title}</h4>
                    <p className="text-xs text-dark-text-secondary leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      ) : image ? (
        <div className="overflow-hidden">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>
      ) : null}
    </motion.div>
  );

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-start gap-10">
      {position === 'left' ? (
        <>{visualContent}{textContent}</>
      ) : (
        <>{textContent}{visualContent}</>
      )}
    </div>
  );
};

export default SplitContent;
