import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * CTASection - Call-to-action section with flexible layouts
 *
 * @param {string} title - CTA title
 * @param {string} description - CTA description
 * @param {Array} buttons - Array of button configurations
 * @param {string} buttons[].text - Button text
 * @param {string} buttons[].href - Button link
 * @param {boolean} buttons[].primary - Primary button style
 * @param {string} layout - Layout type: centered, split, grid (default: centered)
 * @param {Array} cards - Array of CTA cards for split/grid layouts (optional)
 * @param {string} background - Background style (default: glass)
 * @param {string} className - Additional CSS classes
 */
const CTASection = ({
  title,
  description,
  buttons = [],
  layout = 'centered',
  cards = [],
  background = 'glass',
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const backgroundClass = background === 'glass' ? 'glass-effect' : 'bg-dark-surface';

  // Centered layout - simple CTA with buttons
  if (layout === 'centered') {
    return (
      <section ref={ref} className={`py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`${backgroundClass} p-12 rounded-2xl`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {title}
            </h2>
            {description && (
              <p className="text-dark-text-secondary text-lg mb-8">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.href}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className={
                    button.primary
                      ? "inline-block px-8 py-4 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      : "inline-block px-8 py-4 glass-effect text-dark-text-primary font-semibold rounded-lg hover:bg-dark-elevated transition-colors"
                  }
                >
                  {button.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Split/Grid layout - with cards
  if (layout === 'split' || layout === 'grid') {
    const gridClass = layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2';

    return (
      <section ref={ref} className={`py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">{title}</span>
              </h2>
              {description && (
                <p className="text-2xl text-dark-text-secondary max-w-4xl mx-auto">
                  {description}
                </p>
              )}
            </motion.div>
          )}

          <div className={`grid ${gridClass} gap-8`}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${backgroundClass} p-10 rounded-3xl hover:bg-dark-elevated transition-colors duration-200 border-2 ${
                  card.highlighted
                    ? 'border-dark-accent-primary'
                    : 'border-dark-accent-secondary'
                }`}
              >
                {card.icon && (
                  <div className="text-6xl mb-6">{card.icon}</div>
                )}
                <h3 className={`text-3xl font-bold mb-6 ${
                  card.highlighted ? 'text-dark-accent-primary' : 'text-dark-accent-secondary'
                }`}>
                  {card.title}
                </h3>
                <p className="text-lg text-dark-text-secondary mb-8 leading-relaxed">
                  {card.description}
                </p>
                {card.features && (
                  <ul className="space-y-4 mb-8">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-dark-text-secondary">
                        <svg className="w-6 h-6 text-dark-accent-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.button && (
                  <motion.a
                    href={card.button.href}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    className={
                      card.button.primary
                        ? "block w-full py-5 bg-gradient-to-r from-dark-accent-primary via-dark-accent-secondary to-dark-accent-tertiary text-white text-center text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                        : "block w-full py-5 glass-effect text-dark-text-primary text-center text-xl font-bold rounded-xl hover:bg-dark-bg transition-colors border-2 border-dark-accent-secondary"
                    }
                  >
                    {card.button.text}
                  </motion.a>
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
