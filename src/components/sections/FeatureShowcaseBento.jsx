import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseBento - Asymmetric bento-box layout inspired by Apple's design
 * Features an interesting grid layout with image taking prominent space
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of image: left or right (default: right)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseBento = ({
  title,
  descriptions = [],
  image,
  imagePosition = 'right',
  features = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto"
      >
        {imagePosition === 'right' ? (
          <>
            {/* Content Section - Takes up left side */}
            <div className="lg:col-span-5 space-y-6">
              {/* Title Card */}
              <div className="glass-effect p-8 rounded-2xl h-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
                {descriptions.map((description, index) => (
                  <p key={index} className="text-dark-text-secondary leading-relaxed mb-4 last:mb-0">
                    {description}
                  </p>
                ))}
              </div>

              {/* Features Cards */}
              {features.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="glass-effect p-6 rounded-xl border border-dark-border hover:border-dark-accent-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary flex items-center justify-center">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                          <p className="text-sm text-dark-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Image Section - Takes up right side, spans more rows */}
            <div className="lg:col-span-7 lg:row-span-2">
              <div className="glass-effect p-4 rounded-2xl h-full">
                <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Image Section - Takes up left side, spans more rows */}
            <div className="lg:col-span-7 lg:row-span-2">
              <div className="glass-effect p-4 rounded-2xl h-full">
                <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section - Takes up right side */}
            <div className="lg:col-span-5 space-y-6">
              {/* Title Card */}
              <div className="glass-effect p-8 rounded-2xl h-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
                {descriptions.map((description, index) => (
                  <p key={index} className="text-dark-text-secondary leading-relaxed mb-4 last:mb-0">
                    {description}
                  </p>
                ))}
              </div>

              {/* Features Cards */}
              {features.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="glass-effect p-6 rounded-xl border border-dark-border hover:border-dark-accent-primary transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary flex items-center justify-center">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                          <p className="text-sm text-dark-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseBento;
