import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseOverlayDiagonal - Text overlays diagonally across the image
 * Creates dynamic composition with content flowing diagonally over the image
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseOverlayDiagonal = ({
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
          {/* Diagonal overlay */}
          <div className="absolute inset-0 bg-dark-bg/70"></div>
        </motion.div>

        {/* Diagonal Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, y: -30 }}
            animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl p-6 md:p-12 lg:p-16"
          >
            {/* Title - Large and prominent */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h2>

            {/* Descriptions in diagonal layout */}
            <div className="space-y-6 mb-10">
              {descriptions.map((description, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-white/10 max-w-2xl"
                  style={{ marginLeft: `${index * 2}rem` }}
                >
                  <p className="text-base text-white/90 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Features in staggered diagonal cards */}
            {features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40, y: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="backdrop-blur-md bg-dark-accent-primary/8 border border-dark-accent-primary/15 p-5 rounded-lg inline-block hover:bg-white/15 transition-colors"
                    style={{ marginLeft: `${index * 1.5}rem` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-dark-accent-primary"></div>
                      <span className="text-white font-medium">{feature.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default FeatureShowcaseOverlayDiagonal;
