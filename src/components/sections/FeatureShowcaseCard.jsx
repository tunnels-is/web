import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * FeatureShowcaseCard - Vertical card-style layout inspired by Medium/Notion
 * Features image on top with content below in a contained card design
 *
 * @param {string} title - Section title
 * @param {Array<string>} descriptions - Array of description paragraphs
 * @param {string} image - Image URL
 * @param {Array} features - Array of feature objects with title and description
 */
const FeatureShowcaseCard = ({
  title,
  descriptions = [],
  image,
  features = []
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-dark-surface rounded-2xl overflow-hidden"
      >
        {/* Image Section */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-dark-bg/60"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
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

          {/* Features Grid */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-dark-border">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-dark-accent-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-dark-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureShowcaseCard;
