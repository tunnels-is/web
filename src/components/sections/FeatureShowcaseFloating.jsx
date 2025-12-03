import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseFloating - Dynamic layout with floating/overlapping image
 * Creates depth with image that overlaps the content section
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {string} imagePosition - Position of image: left or right (default: right)
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseFloating = ({
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
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Content Background Section */}
        <div className={`glass-effect rounded-2xl p-8 md:p-12 ${
          imagePosition === 'right' ? 'md:pr-[45%]' : 'md:pl-[45%]'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>

          <div className="space-y-4 mb-8">
            {descriptions.map((description, index) => (
              <p key={index} className="text-lg text-dark-text-secondary leading-relaxed">
                {description}
              </p>
            ))}
          </div>

          {/* Features List */}
          {features.length > 0 && (
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-dark-bg/30 backdrop-blur-sm border border-dark-border/50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-dark-accent-primary to-dark-accent-secondary flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-dark-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Image */}
        <motion.div
          initial={{ opacity: 0, x: imagePosition === 'right' ? 50 : -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative md:absolute ${
            imagePosition === 'right'
              ? 'md:right-8 lg:right-12'
              : 'md:left-8 lg:left-12'
          } md:top-12 md:w-[45%] mt-8 md:mt-0`}
        >
          {/* Shadow/Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-accent-primary/30 to-dark-accent-secondary/30 rounded-2xl blur-2xl transform scale-105"></div>

          {/* Image container */}
          <div className="relative glass-effect p-3 rounded-2xl">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
              {/* Border highlight */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"></div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className={`hidden lg:block absolute -z-10 ${
            imagePosition === 'right' ? '-right-4' : '-left-4'
          } top-8 w-72 h-72 bg-dark-accent-primary/10 rounded-full blur-3xl`}></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseFloating;
