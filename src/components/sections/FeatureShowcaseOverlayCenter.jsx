import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseOverlayCenter - Text overlays the center of the image
 * Dramatic centered composition with prominent glass card over image center
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseOverlayCenter = ({
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
        className="relative h-[700px] md:h-[850px]"
      >
        {/* Full Image Background */}
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
          {/* Radial gradient overlay from center */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-bg/40 to-dark-bg/80"></div>
        </motion.div>

        {/* Centered Content Card */}
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative max-w-3xl w-full"
          >
            {/* Main Glass Card */}
            <div className="backdrop-blur-xl bg-dark-bg/60 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight">
                {title}
              </h2>

              {/* Descriptions */}
              <div className="space-y-4 mb-8 text-center">
                {descriptions.map((description, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-lg md:text-xl text-white/90 leading-relaxed"
                  >
                    {description}
                  </motion.p>
                ))}
              </div>

              {/* Features in centered grid */}
              {features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="pt-8 border-t border-white/20"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-medium text-sm">{feature.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Decorative glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-dark-accent-primary/20 via-dark-accent-secondary/20 to-dark-accent-primary/20 rounded-3xl blur-3xl -z-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-dark-accent-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-dark-accent-secondary/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseOverlayCenter;
