import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseSplit - Angular split panel design inspired by Stripe/Linear
 * Features diagonal/angled split between image and content
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of image: left or right (default: right)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseSplit = ({
  title,
  descriptions = [],
  image,
  imagePosition = 'right',
  features = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative glass-effect rounded-3xl overflow-hidden min-h-[600px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {imagePosition === 'right' ? (
            <>
              {/* Content Section */}
              <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {title}
                  </h2>

                  <div className="space-y-4 mb-8">
                    {descriptions.map((description, index) => (
                      <p key={index} className="text-lg text-dark-text-secondary leading-relaxed">
                        {description}
                      </p>
                    ))}
                  </div>

                  {features.length > 0 && (
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-bg/20 transition-colors"
                        >
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary"></div>
                          <span className="text-white font-medium">{feature.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Image Section with Angular Clip */}
              <div className="relative h-[400px] lg:h-auto">
                {/* Angular overlay mask */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-accent-primary/5 to-dark-accent-secondary/5"></div>

                {/* Angled divider line */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dark-accent-primary to-transparent transform -translate-x-8 skew-y-3"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8% 100%)'
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </>
          ) : (
            <>
              {/* Image Section with Angular Clip */}
              <div className="relative h-[400px] lg:h-auto">
                {/* Angular overlay mask */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-accent-primary/5 to-dark-accent-secondary/5"></div>

                {/* Angled divider line */}
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dark-accent-primary to-transparent transform translate-x-8 -skew-y-3"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0 100%)'
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {title}
                  </h2>

                  <div className="space-y-4 mb-8">
                    {descriptions.map((description, index) => (
                      <p key={index} className="text-lg text-dark-text-secondary leading-relaxed">
                        {description}
                      </p>
                    ))}
                  </div>

                  {features.length > 0 && (
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-bg/20 transition-colors"
                        >
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary"></div>
                          <span className="text-white font-medium">{feature.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </>
          )}
        </div>

        {/* Decorative gradient accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute ${imagePosition === 'right' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-radial from-dark-accent-primary/10 to-transparent blur-3xl`}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseSplit;
