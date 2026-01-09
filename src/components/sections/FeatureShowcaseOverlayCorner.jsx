import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseOverlayCorner - Card floating over corner of the image
 * Creates an interesting overlap with a content card positioned over image corner
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of image: left or right (default: right)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseOverlayCorner = ({
  title,
  descriptions = [],
  image,
  imagePosition = 'right',
  features = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[600px]"
      >
        {imagePosition === 'right' ? (
          <>
            {/* Left Side - Partial Content */}
            <div className="lg:col-span-6 p-8 md:p-12 lg:pr-0 relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h2>

                {descriptions.length > 0 && (
                  <p className="text-xl text-dark-text-secondary leading-relaxed mb-8">
                    {descriptions[0]}
                  </p>
                )}
              </motion.div>

              {/* Floating Content Card - Overlaps with image */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="bg-dark-surface p-8 rounded-2xl lg:mr-[-25%] relative"
              >
                {descriptions.length > 1 && (
                  <p className="text-dark-text-secondary leading-relaxed mb-6">
                    {descriptions[1]}
                  </p>
                )}

                {features.length > 0 && (
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-lg bg-dark-accent-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-dark-accent-primary text-sm font-bold">✓</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 group-hover:text-dark-accent-primary transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-dark-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Decorative corner accent */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-dark-accent-primary/20 rounded-full blur-2xl"></div>
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:col-span-6 relative h-[500px] lg:h-[700px]">
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 1.02 }}
                animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
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
            {/* Left Side - Image */}
            <div className="lg:col-span-6 relative h-[500px] lg:h-[700px] order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -24, scale: 1.02 }}
                animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Side - Partial Content */}
            <div className="lg:col-span-6 p-8 md:p-12 lg:pl-0 relative z-20 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h2>

                {descriptions.length > 0 && (
                  <p className="text-xl text-dark-text-secondary leading-relaxed mb-8">
                    {descriptions[0]}
                  </p>
                )}
              </motion.div>

              {/* Floating Content Card - Overlaps with image */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="bg-dark-surface p-8 rounded-2xl lg:ml-[-25%] relative"
              >
                {descriptions.length > 1 && (
                  <p className="text-dark-text-secondary leading-relaxed mb-6">
                    {descriptions[1]}
                  </p>
                )}

                {features.length > 0 && (
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-lg bg-dark-accent-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-dark-accent-primary text-sm font-bold">✓</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 group-hover:text-dark-accent-primary transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-dark-text-secondary">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Decorative corner accent */}
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-dark-accent-primary/20 rounded-full blur-2xl"></div>
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseOverlayCorner;
