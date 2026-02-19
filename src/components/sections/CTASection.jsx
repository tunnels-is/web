import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CTASection = ({
  title,
  description,
  buttons = [],
  layout = 'centered',
  cards = [],
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation();

  if (layout === 'centered') {
    return (
      <section ref={ref} className={`py-14 md:py-20 ${className}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12"
          >
            <div className="flex justify-center mb-4">
              <div className="accent-line" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-dark-text-secondary text-sm mb-7 max-w-lg mx-auto leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={button.primary ? 'btn-primary px-6 py-2.5 text-sm' : 'btn-secondary px-6 py-2.5 text-sm'}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (layout === 'split' || layout === 'grid') {
    const gridClass = layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2';

    return (
      <section ref={ref} className={`py-14 md:py-20 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10"
            >
              <div className="flex justify-center mb-4">
                <div className="accent-line" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{title}</h2>
              {description && (
                <p className="text-sm text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">{description}</p>
              )}
            </motion.div>
          )}

          <div className={`grid ${gridClass} gap-3`}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 transition-all duration-200"
              >
                {card.icon && (
                  <div className="w-12 h-12 mb-4">{card.icon}</div>
                )}
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  card.highlighted ? 'text-dark-accent-primary' : 'text-dark-text-primary group-hover:text-dark-accent-primary'
                }`}>
                  {card.title}
                </h3>
                <p className="text-dark-text-secondary text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                {card.features && (
                  <ul className="space-y-2 mb-5">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-dark-text-secondary text-sm">
                        <svg className="w-3.5 h-3.5 text-dark-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.button && (
                  <a
                    href={card.button.href}
                    className={card.button.primary ? 'btn-primary w-full text-center py-2.5 text-sm' : 'btn-secondary w-full text-center py-2.5 text-sm'}
                  >
                    {card.button.text}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default CTASection;
