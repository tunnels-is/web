import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseSpotlight - Minimalist design with generous whitespace
 * Image as the central focal point with clean, sparse content layout
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of image: top or bottom (default: top)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseSpotlight = ({
  title,
  descriptions = [],
  image,
  imagePosition = 'top',
  features = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {imagePosition === 'top' ? (
          <>
            {/* Image Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-16 md:mb-24 relative"
            >
              {/* Spotlight glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-radial from-dark-accent-primary/20 via-dark-accent-secondary/10 to-transparent blur-3xl"></div>

              {/* Image container */}
              <div className="relative max-w-3xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]"></div>
                </div>

                {/* Minimal border accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-dark-accent-primary/20 rounded-3xl -z-10"></div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="text-center max-w-3xl mx-auto space-y-12">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {title}
                </h2>
              </motion.div>

              {/* Descriptions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="space-y-6"
              >
                {descriptions.map((description, index) => (
                  <p key={index} className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed font-light">
                    {description}
                  </p>
                ))}
              </motion.div>

              {/* Minimal Features */}
              {features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-6 pt-8"
                >
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 px-6 py-3 rounded-full bg-dark-bg/30 border border-dark-border hover:border-dark-accent-primary transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary"></div>
                      <span className="text-white font-medium text-sm">{feature.title}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Content Section */}
            <div className="text-center max-w-3xl mx-auto space-y-12 mb-16 md:mb-24">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {title}
                </h2>
              </motion.div>

              {/* Descriptions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-6"
              >
                {descriptions.map((description, index) => (
                  <p key={index} className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed font-light">
                    {description}
                  </p>
                ))}
              </motion.div>

              {/* Minimal Features */}
              {features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-6 pt-8"
                >
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 px-6 py-3 rounded-full bg-dark-bg/30 border border-dark-border hover:border-dark-accent-primary transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary"></div>
                      <span className="text-white font-medium text-sm">{feature.title}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Image Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="relative"
            >
              {/* Spotlight glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-radial from-dark-accent-primary/20 via-dark-accent-secondary/10 to-transparent blur-3xl"></div>

              {/* Image container */}
              <div className="relative max-w-3xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]"></div>
                </div>

                {/* Minimal border accent */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-dark-accent-primary/20 rounded-3xl -z-10"></div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseSpotlight;
