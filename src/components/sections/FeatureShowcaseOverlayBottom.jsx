import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseOverlayBottom - Text overlays the bottom portion of the image
 * Hero-style layout with content floating over the bottom of the image
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseOverlayBottom = ({
  title,
  descriptions = [],
  image,
  features = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative h-[700px] md:h-[800px]"
      >
        {/* Full Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 rounded-3xl overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
        </motion.div>

        {/* Overlaying Content - Bottom Portion */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">{title}</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              {/* Descriptions */}
              <div className="space-y-4">
                {descriptions.map((description, index) => (
                  <p key={index} className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {description}
                  </p>
                ))}
              </div>

              {/* Features in Glass Card */}
              {features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10"
                >
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-white/70">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Decorative line accent at bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-8 w-32 h-1 bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary rounded-full origin-left"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseOverlayBottom;
