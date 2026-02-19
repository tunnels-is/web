import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseMagazine - Editorial magazine-style layout
 * Features large typography with image integrated into the content flow
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of image: left or right (default: right)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseMagazine = ({
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
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Large Editorial Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3"
          >
            {title}
          </motion.h2>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: '120px' } : {}}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 bg-dark-accent-primary rounded-full"
          ></motion.div>
        </div>

        {/* Content Grid with Floating Image */}
        <div className="relative">
          {/* Image - Floats within content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${
              imagePosition === 'right'
                ? 'float-right ml-8 mb-8'
                : 'float-left mr-8 mb-8'
            } w-full md:w-[55%] lg:w-[50%]`}
          >
            <div className="relative group">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 group-hover:bg-dark-accent-primary/10 transition-all duration-150"></div>
              </div>

              {/* Decorative frame corner */}
              <div className={`absolute ${imagePosition === 'right' ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-32 h-32 border-2 border-dark-accent-primary/30 rounded-2xl -z-10`}></div>
            </div>
          </motion.div>

          {/* Text Content - Flows around image */}
          <div className="text-content">
            {descriptions.map((description, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.25, delay: 0.2 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-dark-text-secondary leading-relaxed mb-4 font-light"
              >
                {description}
              </motion.p>
            ))}

            {/* Clear float */}
            <div className="clear-both"></div>

            {/* Features Section */}
            {features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 pt-8 border-t border-dark-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-4">
                        {/* Number badge */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-bg/40 border border-dark-border/50 flex items-center justify-center">
                          <span className="text-dark-accent-primary font-bold text-base">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-dark-accent-primary transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-dark-text-secondary leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseMagazine;
