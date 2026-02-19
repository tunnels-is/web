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
      <section ref={ref} className={`py-16 md:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="p-10 md:p-14 rounded-2xl bg-dark-card"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-dark-text-secondary text-base mb-8 max-w-xl mx-auto">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={button.primary ? 'btn-primary px-8 py-3' : 'btn-secondary px-8 py-3'}
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
      <section ref={ref} className={`py-16 md:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{title}</h2>
              {description && (
                <p className="text-lg text-dark-text-secondary max-w-3xl mx-auto">{description}</p>
              )}
            </motion.div>
          )}

          <div className={`grid ${gridClass} gap-5`}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                className="group p-8 rounded-xl bg-dark-card hover:bg-dark-elevated transition-all duration-200"
              >
                {card.icon && (
                  <div className="w-14 h-14 mb-5">{card.icon}</div>
                )}
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  card.highlighted ? 'text-dark-accent-primary' : 'text-dark-text-primary group-hover:text-dark-accent-primary'
                }`}>
                  {card.title}
                </h3>
                <p className="text-dark-text-secondary text-sm mb-5 leading-relaxed">
                  {card.description}
                </p>
                {card.features && (
                  <ul className="space-y-2.5 mb-6">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-dark-text-secondary text-sm">
                        <svg className="w-4 h-4 text-dark-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className={card.button.primary ? 'btn-primary w-full text-center py-3' : 'btn-secondary w-full text-center py-3'}
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
