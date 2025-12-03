import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseOverlaySidePanel - Vertical panel overlaying edge of image
 * Sleek side panel design that overlays one edge of the full-width image
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of panel: left or right (default: right)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseOverlaySidePanel = ({
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
        transition={{ duration: 0.8 }}
        className="relative min-h-[650px] md:min-h-[750px]"
      >
        {/* Full-width Image */}
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
          {/* Gradient overlay from side */}
          <div className={`absolute inset-0 ${
            imagePosition === 'right'
              ? 'bg-gradient-to-l from-dark-bg/50 to-transparent'
              : 'bg-gradient-to-r from-dark-bg/50 to-transparent'
          }`}></div>
        </motion.div>

        {/* Side Panel Overlay */}
        <div className={`absolute inset-y-0 ${
          imagePosition === 'right' ? 'right-0' : 'left-0'
        } w-full md:w-[450px] lg:w-[500px] z-10 flex items-center ${
          imagePosition === 'right' ? 'justify-end' : 'justify-start'
        }`}>
          <motion.div
            initial={{
              opacity: 0,
              x: imagePosition === 'right' ? 100 : -100
            }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", damping: 20 }}
            className={`h-full w-full backdrop-blur-xl bg-dark-bg/80 border-white/10 ${
              imagePosition === 'right'
                ? 'border-l rounded-l-3xl'
                : 'border-r rounded-r-3xl'
            } shadow-2xl p-8 md:p-10 lg:p-12 flex flex-col justify-center`}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              {title}
            </motion.h2>

            {/* Descriptions */}
            <div className="space-y-4 mb-8">
              {descriptions.map((description, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-base md:text-lg text-white/80 leading-relaxed"
                >
                  {description}
                </motion.p>
              ))}
            </div>

            {/* Features in vertical list */}
            {features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="space-y-3 pt-6 border-t border-white/20"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: imagePosition === 'right' ? 20 : -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-dark-accent-primary/30 to-dark-accent-secondary/30 border border-dark-accent-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-dark-accent-primary text-xs font-bold">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1 text-sm group-hover:text-dark-accent-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-white/60">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Decorative vertical accent line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isVisible ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className={`absolute top-1/4 ${
                imagePosition === 'right' ? 'left-0' : 'right-0'
              } w-1 h-1/2 bg-gradient-to-b from-dark-accent-primary via-dark-accent-secondary to-transparent rounded-full origin-top`}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseOverlaySidePanel;
