import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseOverlayLeft - Text overlays the left portion of the image
 * Creates a dramatic effect with content floating over the image edge
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseOverlayLeft = ({
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
        className="relative min-h-[600px] md:min-h-[700px]"
      >
        {/* Full-width Image Background */}
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
          {/* Dark gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/95 to-transparent"></div>
        </motion.div>

        {/* Overlaying Content - Left Side */}
        <div className="relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-7/12 lg:w-6/12 p-8 md:p-12 lg:pl-16"
          >
            {/* Content Card with Glass Effect */}
            <div className="backdrop-blur-sm bg-dark-bg/40 p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gradient">{title}</span>
              </h2>

              <div className="space-y-4 mb-8">
                {descriptions.map((description, index) => (
                  <p key={index} className="text-lg text-white/90 leading-relaxed">
                    {description}
                  </p>
                ))}
              </div>

              {/* Features with compact design */}
              {features.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-white/20">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-dark-accent-primary to-dark-accent-secondary group-hover:scale-150 transition-transform"></div>
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {feature.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseOverlayLeft;
